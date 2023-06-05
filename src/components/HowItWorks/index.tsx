import React from 'react';
import styles from './styles.module.css';
import SectionScroller, {
  SectionInterface,
} from './SectionScroller';

const sections: SectionInterface[] = [
  {
    title: 'New Credit Enablement Network (OCEN)',
    description: 'The introductory, first open house discussion on OCEN',
    icon: 'zap',
    source: 'https://www.youtube.com/embed/rcMx9UVRYWg',
  },
  {
    title: 'Varied LSP & Cashflow Lending Models',
    description: 'Dynamically bind State to UI-Components for reactivity.',
    icon: 'repeat',
    source: 'https://www.youtube.com/embed/rNcEAYzke2w',
  },
  {
    title: 'API Specifications',
    description: 'Permanently store State in the appropriate local Storage.',
    icon: 'server',
    source: 'https://www.youtube.com/embed/Mee9eq-t-nA',
  },
  {
    title: 'Market Opportunities',
    description: 'Permanently store State in the appropriate local Storage.',
    icon: 'users',
    source: 'https://www.youtube.com/embed/mWHh5fZeEgc',
  },
  {
    title: 'Credit Bureau Inquiry for Cash Flow based Sachet Loans',
    description: 'Easily create a dynamic and reactive set of States.',
    icon: 'edit',
    source: 'https://www.youtube.com/embed/EKpi3e6Uoms',
  },
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
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>
            </div>
          </div>
          <SectionScroller sections={sections} startIndex={0} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
