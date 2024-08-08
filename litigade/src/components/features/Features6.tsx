import React from 'react';
import { GiScales } from 'react-icons/gi';
import { FaGavel } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const Features6: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center py-6 md:px-36">
          <h2 className="text-3xl font-extrabold text-text-color sm:text-4xl">Practice Advice</h2>
          <p className="mt-4 text-md text-second-text-color px-12 md:px-36">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:max-w-none px-3 md:px-0">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col rounded-lg overflow-hidden bg-white">
              <div className="flex items-center justify-center bg-[#F6E4D7] px-4 py-8">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="ml-4 font-bold text-text-color">{card.title}</h3>
              </div>
              <div className="flex-1 -mt-1 bg-white p-6 border border-[#A9D6FF] rounded-lg">
                <p className="text-sm text-second-text-color leading-loose font-bold whitespace-pre-line px-6">{card.description}</p>
                <div className="mt-6">
                  <a href="#" className="text-base font-semibold text-[#D0A144] hover:text-yellow-600 px-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    title: 'Frauds or Mislead',
    description: `- The best products start with Figma
    - Design with real data
    - Lightning fast prototyping
    - Fastest way to organize
    - Work at the speed of thought.`,
    icon: <GiScales className="text-yellow-500" size={20} />,
  },
  {
    title: 'Bailes & Warrants',
    description: `- The best products start with Figma
    - Design with real data
    - Lightning fast prototyping
    - Fastest way to organize
    - Work at the speed of thought.`,
    icon: <FaGavel className="text-yellow-500" size={20} />,
  },
  {
    title: 'Federal Drug Crimes',
    description: `- The best products start with Figma
    - Design with real data
    - Lightning fast prototyping
    - Fastest way to organize
    - Work at the speed of thought.`,
    icon: <HiOutlineDocumentText className="text-yellow-500" size={20} />,
  },
];

export default Features6;
