import React, { FC } from "react";
import weather from "../assets/weather.png";
import todo from "../assets/todo.png";
import rso from "../assets/rso.png";

const Project: FC = () => {
    return (
        <div
            id="project"
            className="w-full md:h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Project
                    </h1>
                    <p className="py-6">// Check out some of my projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div
                        style={{ backgroundImage: `url(${weather})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider inline-block w-full text-center">
                                Yim Weather
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://yimweather.netlify.app/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Fallbackodin/yim_weather">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${todo})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider inline-block w-full text-center">
                                Yim Todo
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://yimtodo.netlify.app/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Fallbackodin/yim_todo">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${rso})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider inline-block w-full text-center">
                                Student Events
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://student-org-events.netlify.app/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Fallbackodin/ProjectDB">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                            <div className="pt-1 text-center">
                                <a href="https://docs.google.com/document/d/1ibHUR6A_beshFMCd3u0jstUul8P_feef1wViM4QY1Fk/edit">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Documentation
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
