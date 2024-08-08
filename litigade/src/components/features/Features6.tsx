import React from 'react';

const Features6: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Practice Advice</h2>
          <p className="mt-4 text-lg text-gray-500">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:max-w-none">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12" src={card.icon} alt={card.title} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium text-gray-900">{card.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-base text-gray-500">{card.description}</p>
                </div>
                <div className="mt-6">
                  <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
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
    icon: 'path/to/fraud-icon.png',
  },
  {
    title: 'Bailes & Warrants',
    description: `- The best products start with Figma
    - Design with real data
    - Lightning fast prototyping
    - Fastest way to organize
    - Work at the speed of thought.`,
    icon: 'path/to/bailes-icon.png',
  },
  {
    title: 'Federal Drug Crimes',
    description: `- The best products start with Figma
    - Design with real data
    - Lightning fast prototyping
    - Fastest way to organize
    - Work at the speed of thought.`,
    icon: 'path/to/drug-icon.png',
  },
];

export default Features6;