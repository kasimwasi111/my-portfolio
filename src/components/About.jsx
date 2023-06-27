import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Fresher with vast collection of tech stacks with good communication
          skill. Searching for Front-end role in a decent company.I want to use
          my knowledge and skills to gain practical exposure and understand the
          inner-workings of the company. I’d like to learn on the job and grow
          individually.
        </p>
        <br />
        <p className="text-xl">
          Secured 8.85 CGPA in Master of Computer Application (MCA) from MANUU
          Hyderabad. Worked on several projects, solved 200+ DSA problems also
          participated in various coding competition
        </p>
      </div>
    </div>
  );
};

export default About;
