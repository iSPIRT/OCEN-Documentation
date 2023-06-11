import { Hero, Button } from '@algolia/ui-library';
import { useColorMode } from '@docusaurus/theme-common';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';
import showcaseProjects from './showcase-projects.json';
import HowItWorks from './HowItWorks';
import Spacer from '../components/Spacer';
import Link from '@docusaurus/Link';


const RESOURCES = [
  {
    url: 'https://theprint.in/india/all-about-helping-rajni-tech-gurus-at-ispirt-quietly-power-indias-digital-revolution/1007652/',
    type: 'Article',
    title: '\'All about helping Rajni\' — tech gurus at iSPIRT quietly power India\'s digital revolution - The Print',
    description:
      'With the fictitious Rajni from rural India as its guiding light, iSPIRT has been using internet & software to change structure of country’s economy, with aim to improve quality of life.',
    image: 'https://static.theprint.in/wp-content/uploads/2022/06/ispirt-1.jpg?compress=true&quality=80&w=800&dpr=2.0',
    duration: '8 min',
  },
  {
    url: 'https://economictimes.indiatimes.com/small-biz/money/an-ocen-of-opportunities-expectations-from-the-next-digital-public-good/articleshow/83253466.cms',
    type: 'Article',
    title: 'An OCEN of opportunities: Expectations from the next digital public good - The Economic Times',
    description:
      'With OCEN, lenders can create customized loan products to address the financial needs of small businesses and will be able to underwrite norms based on a new set of information be getting access to data that helps them monitor credit.',
    image: 'https://img.etimg.com/thumb/msid-83253585,width-300,height-225,imgsize-120351,,resizemode-75/istock-1195693419.jpg',
    duration: '3 min',
  },
  {
    url: 'https://www.financialexpress.com/industry/open-credit-enablement-network-will-democratise-credit-help-small-businesses-nandan-nilekani/2032123/',
    type: 'Article',
    title: 'Open Credit Enablement Network will democratise credit, help small businesses : Nandan Nilekani  - The Financial Express',
    description:
      'Nilekani said India has become a “hotbed” of fintech innovation with inception of the UIDAI and NPCI over a decade ago and products like IMPS, FastTag and UPI have made transactions easier.',
    image:
      'https://www.financialexpress.com/wp-content/uploads/2020/07/1-788.jpg',
    duration: '2 min',
  },
];

function ResourcesSection() {
  return (
    <div className="z-0 bg-secondary-800">
      <section className="my-20 px-6">
        <div className="mx-auto max-w-5xl">
          <span>IN THE NEWS</span>
          <h2 className="lg:text-3xl">Read how OCEN is making waves</h2>

          <div className="no-underline-links mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <Link
                className="group flex flex-col justify-between"
                key={resource.title}
                href={resource.url}
              >
                <div>
                  <div className="mb-3 overflow-hidden rounded-lg">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      loading="lazy"
                      className="aspect-video lg:aspect-square h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary dark:group-hover:text-primary-100 lg:text-xl">
                    {resource.title}
                  </h3>
                  <p className="leading-snug text-text-400">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="rounded-sm bg-primary-100/10 px-3 py-1 text-sm text-primary-100">
                    {resource.type}
                  </div>
                  <div className="text-text-400 text-sm">
                    {`${resource.duration} ${resource.type === 'Video' ? 'watch' : 'read'
                      }`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Partners() {
  const { withBaseUrl } = useBaseUrlUtils();

  return < div className="py-16 overflow-hidden" >
    <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold md:text-4xl md:leading-10">
            Trusted by leading financial institutes
          </h2>
        </div>
      </div>
      <Spacer height={60} />
      <div className="mt-10 grid grid-cols-4 gap-0.5 md:grid-cols-6 lg:mt-0 lg:grid-cols-10">
        {showcaseProjects.map(({ name, href, image }) => (
          <div
            key={href}
            className="col-span-2 flex justify-center py-2 px-2 text-center"
          >
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              alt={`Discover DocSearch on the ${name} documentation`}
            >
              <img
                className="inline-block w-20"
                src={withBaseUrl(image)}
                alt={`Discover DocSearch on the ${name} documentation`}
              />
              <div className="text-description uppercase text-xs py-2 font-semibold">
                {name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div >;

}

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    if (colorMode === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [colorMode]);

  function Header() {
    return (
      <Hero
        id="hero"
        title={
          <>
            <span className="hero-title text-3xl leading-9 font-extrabold md:text-3xl lg:text-3xl md:leading-10 max-w-xxs inline-block">
              Open Credit Enablement Network
            </span>
            <span className="leading-9 md:text-3xl lg:text-3xl md:leading-10 max-w-xxs inline-block dark:text-gray-400 text-gray-500">
              Democratising Credit
            </span>
          </>
        }
        background="curves"
        cta={[
          <Button
            key="how-it-works"
            href={withBaseUrl('#how-it-works')}
            background="blue"
            color="white"
            className="apply-button"
          >
            How It Works
          </Button>,
          <Button
            key="Documentation"
            href={withBaseUrl('docs/intro')}
            background="blue"
            color="white"
            className="apply-button"
          >
            Documentation
          </Button>,
        ]}
      />
    );
  }

  function Description() {
    return (
      <div className="py-16 overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative">
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
              Credit gap for MSMEs is ₹20 - 25 trillion
            </h3>
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
              Less than 11% of MSMEs have access to formal credit
            </h3>
          </div>

          <div className="pt-16">
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
              OCEN is an attempt to solve these problems by creating a framework for
            </p>
            <ul className="lg:grid lg:grid-cols-3 lg:col-gap-8 lg:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="search w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium">
                      Short tenures & small ticket loans
                    </h4>
                    {/* <p className="mt-2 text-base leading-6 text-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p> */}
                  </div>
                </div>
              </li>
              <li className="mt-10 lg:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="user-group w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium">
                      Allow remote lenders to operate in distant geographies
                    </h4>
                    {/* <p className="mt-2 text-base leading-6 text-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p> */}
                  </div>
                </div>
              </li>
              <li className="mt-10 lg:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="device-mobile w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium">
                      Allow consented access of alternate sources of data
                    </h4>
                    {/* <p className="mt-2 text-base leading-6 text-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (<div id="tailwind">
    <Header />
    <Description />
    <HowItWorks />
    <Partners />
    <ResourcesSection />
  </div>);
}

export default Home;
