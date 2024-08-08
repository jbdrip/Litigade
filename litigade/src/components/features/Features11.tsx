import React from 'react';

const Features11: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Engaging Title</h2>
          <p className="mt-4 text-lg text-gray-500">
            A compelling subtitle that provides additional context and encourages users to watch the video.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features11;
