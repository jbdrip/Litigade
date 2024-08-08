import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Ashley Fletcher",
    role: "LAYER & CEO",
    image: "https://s3-alpha-sig.figma.com/img/7601/70d6/61e60230b3c61b45db6cd82b20dfa31a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGqgHAWcNQ5u4PCqfgEns6EwIZHKaiVQPW0DzD-OS-LYDfe4sSRrDsVaPeskM7NkK8eBSUbzi9XWvapvBw8znPQu59GHPWbhjyjczkNNiCP9hOlNAJ3T1vLpqBviuO5-hcrbSv1g84f~PO9MqGB78Ma3bbZF7KCcJaz75K-fFnefSwBngWbC~72Iv4PoU5Jg9lqYn7QacAss6l-vET~D92n0Scm8jx5YxWFu27d-iZUZUXsJL757athCI5jwxgDKzNqLuIanK72GKFY2ukoKkWlLovr9C~KbcX6caSYPS3SU4bE4NWpTTd36o3CTFwJ93BimlU4VLa8kvWoAfh7dkg__",
  },
  {
    name: "Rodney Stratton",
    role: "CEO",
    image: "https://s3-alpha-sig.figma.com/img/7cfd/7953/888383a125192e128b065d2a80372b4d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdB43ViGzrFkHwS7o0GvFDn~fNYZlitf0NKpybSyNXQahDJRzEJZmOEgcObWBHY4jLc6laFVT9vlw2M4HRWpCwpFBQCjqx5rovTG0PjJg5k2-GEzrO1FO1QE~V9SWHhIS1m4utAPUsk5eTm1pSRghJfBTI0Mp7tljGIjlsEupqcNjButr3fBojf570raIK07Xif3pkWvujf1FDxKay09hRxkT4SqQs5udfUI4uVrXlL8P08g6jYDvr1TCL46X0luxRlp4gtQyrprFWAEZzdtVmhvrXYO1UhWBHuwyyBd66iSHl9-a3slo~SyfSYixpo13yVPubu3TtEMZNCK0gRi~Q__",
  },
  {
    name: "Avie Beaton",
    role: "LAYER CIVIL LAW",
    image: "https://s3-alpha-sig.figma.com/img/e686/f640/aa685b9f3c9fc47f51a1014cc028a958?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTOd4YpERGWTVrzY8GeNJ2~IJynoqJvp1--aI0k7hPTF3Zvea74odhr21J6eN3tkImFjzbHcTayfARkPRJAp6~P2Cm8h5QC4Fjuh3wxKuitnU3lbQ~ZgRMAJfBjNpZAQGPiuNissWrAknV5Tc8Z7fMUIQQ-Z1aPaUAGma~cp5vGXT-Gko6gfGFn6T8e1d-RD60gvRpT2Au6w4fo0vHsitLFHQ7ziFGTsPdc7c~v1T4o-kpG3TqkIwg5ddUsAm4YP8wna4pzDGF3Bu6sFZKILpnFQS05gOjUBG6gG1iimT8uKqorkq1M1nKc9mYh85-i9JRcrIGGSITnUyKVLxT5YQw__",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-text-color sm:text-4xl">Meet Our Attorneys</h2>
          <p className="mt-4 text-md text-second-text-color px-12 md:px-36">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col rounded bg-white overflow-hidden border">
              <img
                className="w-full h-50 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-6 text-center">
                <h3 className="font-bold text-text-color">{member.name}</h3>
                <p className="text-xs font-bold text-second-text-color mb-4 mt-2">{member.role}</p>
                <div className="flex justify-center space-x-2">
                  <FaFacebook className="text-[#295C7A] cursor-pointer" />
                  <FaInstagram className="text-[#295C7A] cursor-pointer" />
                  <FaTwitter className="text-[#295C7A] cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;