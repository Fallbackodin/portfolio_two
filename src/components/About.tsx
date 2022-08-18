import React, { FC } from "react";

const About: FC = () => {
    return (
        <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <h1 className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </h1>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Joseph! Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I'm a student at the University of Central Florida
                            majoring in Computer Science. I have a passion for
                            front-end development and enjoy developing web
                            applications using React.
                            <br></br>
                            <br></br>I have real-world internship experience,
                            and I have developed a variety of full-stack
                            applications.
                            <br></br>
                            <br></br>
                            Outside of school, I like to spend my time with
                            friends and go to sporting events.
                            <br></br>
                            <br></br>
                            Let's make something together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
