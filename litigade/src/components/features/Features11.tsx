import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Features11: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#FAFAFA]">
      <div className="text-center py-6 md:px-36">
        <h2 className="text-3xl font-extrabold text-text-color sm:text-4xl">Who We Are</h2>
        <p className="mt-4 text-md text-second-text-color px-12 md:px-72">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="relative mt-6 flex justify-center">
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-[#295C7A] to-[#0072B5] z-0"></div>
        <div className="relative z-10 w-full max-w-4xl pb-24 px-9 md:px-0">
          <div className="relative w-full h-[30rem]">
            <img
              className="w-full h-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/9d46/3b63/658795529bd868ba150c5a5eb80327fb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ul-Bdfgn7kvJGKlKmx5qxkloXeiNnPaSwUb-N1i8gVn-cUWGnr2-Scd~DtyenmVaLOcK6POqfW75Fdeo31-nuelWI5ovHDi7azHkHexrCCFtNH6cvLi85qlMW89Quv4FG3qxxdDVkHMVGCthwz6rrQj0dOCKLlLyitESN1vl71ZQgh2rj63ZIt8YokMsZKOBlEMOw1tPQ1mgUsJPK2kIDYf9aWSrcXalBBWn~yps7Okb6Guz3A~x4QEC9RNnYwmG8H3ytzApP~M94yFLZMrj-siOTd8FcZb3MZfRBmeJe2QoxetbfcGhkV2nyhjvQs4~~LmfEKrqY1j0MSNV3ak~lw__" // Replace with your video thumbnail
              alt="Who We Are Video"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button className="bg-[#295C7A] rounded-full p-6">
                <FaPlay className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features11;
