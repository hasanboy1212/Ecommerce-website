import React from "react";
import aboutImg from "../assets/about.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from "../components/Footer";

const About = () => {
  const statistics = [
    { label: "Satisfied Customers", value: 99 },
    { label: "Exclusive Products", value: 12 },
    { label: "New Products", value: 5 },
  ];
  return (
    <section>
      <div className="max-padd-container">
        <div className="max-padd-container py-10 bg-white rounded-2xl my-6">
          {/* container */}
          <div className="flex flex-col xl:flex-row gap-10">
            {/* Left side */}
            <div className="flex-1 relative ">
              <div className="bg-secondary rounded-3xl rounded-tr-[155px] w-[488px]  ">
                <img  src={aboutImg} alt="" />
              </div>
            
                <div className="bg-white absolute bottom-0 left-16 max-w-xs p-4 rounded-2xl flexCenter flex-col shadow-sm ">
                  <span className="relative bottom-8 p-3 text-white h-12 w-12 flex items-center rounded-full bg-secondary">
                    <RiDoubleQuotesL className="text-2xl" />
                  </span>
                  <p className="text-center relative bottom-3">
                    Discover fashion that speaks to your style. Elevate your
                    wardrobe with exclusive collections!
                  </p>
                </div>
            </div>
            {/* right side */}
            <div className="flex-1 flex justify-center flex-col">
                <span className="medium-18 text-secondary">
                  Unveiling Our Journey
                </span>
                <h2 className="h2 max-w-[472]">Our Commitment to Crafing Individualized Fashion Experiences</h2>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem temporibus quae incidunt asperiores possimus, ut
                  voluptas, natus porro cupiditate suscipit, sequi placeat!
                  Nihil ut facere error omnis ipsum quasi cumque, reprehenderit
                  quisquam et sed aspernatur eum consequatur quidem, fuga quod
                  velit obcaecati! Repudiandae vitae nesciunt voluptatum ipsa
                  necessitatibus dolor ducimus doloremque consequatur expedita
                  unde!
                </p>
                {/* statistics container */}
                <div className="flex flex-wrap gap-4">
                  {statistics.map((statistics, index) => (
                    <div
                      key={index}
                      className="bg-primary text-secondary p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-1">
                        <h3 className="h3">{statistics.value}k</h3>
                        <h4 className="bold-22">+</h4>
                      </div>
                      <p>{statistics.label}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
