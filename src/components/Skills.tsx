import React, { FC } from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import github from "../assets/github.svg";
import tailwind from "../assets/tailwindcss.svg";

const Skills: FC = () => {
    return (
        <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <h1 className="text-4xl font-bold inline border-b-4 border-pink-600">
                    Skills
                </h1>
                <p className="py-4">// These are the technologies I used</p>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            src={html}
                            alt="HTML icon"
                            className="w-20 mx-auto"
                        />
                        <p>HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            src={css}
                            alt="HTML icon"
                            className="w-20 mx-auto"
                        />
                        <p>CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            src={javascript}
                            alt="HTML icon"
                            className="w-20 h-[90px] mx-auto"
                        />
                        <p>JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            src={react}
                            alt="HTML icon"
                            className="w-20 mx-auto"
                        />
                        <p>React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            src={github}
                            alt="HTML icon"
                            className="w-20 mx-auto h-[90px]"
                        />
                        <p>Git/GitHub</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            src={tailwind}
                            alt="HTML icon"
                            className="w-20 mx-auto pt-6 mb-4"
                        />
                        <p>TailWindCSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
