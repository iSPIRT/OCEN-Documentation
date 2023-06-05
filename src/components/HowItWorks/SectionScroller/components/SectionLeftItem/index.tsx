import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';

export type Props = {
  forwardRef?: React.LegacyRef<HTMLDivElement>;
  active: boolean;
  style?: any;
  source: string;
  title: string;
};

const SectionLeftItem: React.FC<Props> = (props) => {
  const { title, source, active, forwardRef, style } = props;

  return (
    <div
      style={style}
      ref={forwardRef}
      className={clsx(styles.Container, {
        [styles.Container_Active]: active,
      })}>
      <div className="video-responsive">
        <iframe
          width="640"
          height="360"
          src={source}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
};

export default SectionLeftItem;
