import React from 'react';
import SectionScroller, {
  SectionInterface,
} from './SectionScroller';

const sections: SectionInterface[] = [
  {
    title: 'Introducing OCEN 4.0: Transforming MSME Lending',
    icon: 'zap',
    source: 'https://www.youtube.com/embed/VH2XLXBB2Sc',
  },
  {
    title: 'Deep Dive Into OCEN 4.0 Tech',
    icon: 'server',
    source: 'https://www.youtube.com/embed/RKEFeACArIc',
  },
  {
    title: 'OCEN 4.0: Intro to Borrower Agent Openhouse',
    icon: 'users',
    source: 'https://www.youtube.com/embed/6X5yAYipGzA',
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works">
      <div className="diagonal-box py-16 bg-gray-200 overflow-hidden">
        <div className="diagonal-content max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="max-w-screen-xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl leading-9 font-extrabold text-gray-900 md:text-4xl md:leading-10">
                How it works
              </h2>
            </div>
          </div>
          <SectionScroller sections={sections} startIndex={0} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
