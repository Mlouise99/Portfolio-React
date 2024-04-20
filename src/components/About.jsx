import React from "react";
import bb from "../assets/images/Screenshot.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="font-bold  text-blue-200"> I'm Front-End and Video Editor</h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
             
I love the freedom that working myself gives me, I am currently in my final year pursuing a bachelor's degree in computer science at the College of Science and Technology.I have a strong interest in software development. And even I was born and raised in the Gahini Sector of the Eastern province. I now reside in kigali , Nyarugenge , due to my studies. My hobby is spending more time with friends and family, as wellas reading books. I'm really interested in technology, so I like to keep up with the latest developments. Whether it's trying out new computer languages or testing out new software, I enjoy learning and keeping my skills sharp in the fast-changing world of technology.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/CV.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={bb}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
