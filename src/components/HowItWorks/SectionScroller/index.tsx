import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import SectionRightItem from './components/SectionRightItem';
import SectionLeftItem from './components/SectionLeftItem';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { onServer } from '../../utils';


export interface WindowSizeInterface {
  windowWidth: any;
  windowHeight: any;
  scrollHeight: any;
}

export function useWindowSize(): WindowSizeInterface {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSizeInterface>({
    windowWidth: undefined,
    windowHeight: undefined,
    scrollHeight: undefined,
  });

  // Return if running on server
  if (onServer()) {
    return { windowWidth: 0, windowHeight: 0, scrollHeight: 0 };
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        scrollHeight: document.documentElement.scrollHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export interface SectionInterface {
  title: string;
  description: string;
  icon?: any;
  source: string;
}

export type Props = { sections: SectionInterface[]; startIndex?: number };

const SectionScroller: React.FC<Props> = (props) => {
  const { sections } = props;
  const startIndex =
    props.startIndex != null && props.startIndex < sections.length
      ? props.startIndex
      : Math.floor(sections.length / 2);
  const { windowWidth } = useWindowSize();
  const sectionContainerRef = useRef(null);
  const [showTopChevron, setShowTopChevron] = useState(false);
  const [showBottomChevron, setShowBottomChevron] = useState(false);

  const [index, setIndex] = useState(startIndex);
  const [codeBlockRefs] = useState<{
    [key: string]: HTMLDivElement | null;
  }>({});

  useEffect(() => {
    setShowBottomChevron(windowWidth <= 768 && index !== sections.length - 1);
    setShowTopChevron(windowWidth <= 768 && index !== 0);
  }, [windowWidth]);

  const calculateTop = (index: number): number => {
    const topPadding =
      ((sectionContainerRef.current as any)?.clientHeight || 0) / 3 -
      (codeBlockRefs[index]?.clientHeight || 0) / 2;
    const spaceBetweenItems = 12;
    let totalHeight = 0;
    for (let i = 0; i < index; i++) {
      totalHeight += codeBlockRefs[i]?.clientHeight || 0;
    }
    return -totalHeight - spaceBetweenItems * index + topPadding;
  };

  const handleChevronClick = useCallback(
    (up: boolean) => {
      let newIndex = 0;
      if (up) {
        newIndex = Math.max(index - 1, 0);
      } else {
        newIndex = Math.min(index + 1, sections.length - 1);
      }

      setShowTopChevron(newIndex !== 0);
      setShowBottomChevron(newIndex !== sections.length - 1);
      setIndex(newIndex);
    },
    [index, sections]
  );

  return (
    <div className={styles.SectionContainer} ref={sectionContainerRef}>
      <div
        className={styles.ChevronContainer}
        style={{
          visibility: showTopChevron ? 'visible' : 'hidden',
        }}
        onClick={() => {
          handleChevronClick(true);
        }}>
        <FiChevronUp />
      </div>
      <div className={styles.SectionInnerContainer}>
        <div className={styles.SectionLeftContainer}>
          {sections.map((section, i) => {
            return (
              <SectionLeftItem
                style={{ top: calculateTop(index) }}
                key={i}
                forwardRef={(element) => {
                  codeBlockRefs[i] = element;
                }}
                active={index === i}
                title={section.title}
                source={section.source}
              />
            );
          })}
        </div>
        <div className={styles.SectionRightContainer}>
          {sections.map((section, i) => {
            return (
              <SectionRightItem
                key={i}
                title={section.title}
                description={section.description}
                onClick={() => {
                  setIndex(i);
                }}
                icon={section.icon}
                active={index === i}
              />
            );
          })}
        </div>
      </div>
      <div
        className={styles.ChevronContainer}
        style={{
          visibility: showBottomChevron ? 'visible' : 'hidden',
        }}
        onClick={() => {
          handleChevronClick(false);
        }}>
        <FiChevronDown />
      </div>
    </div>
  );
};

export default SectionScroller;
