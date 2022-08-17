import React, { FC, useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFilePersonFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar: FC = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div className="h-full">
                <a href="/">
                    <h1 className="text-5xl font-bold text-pink-600 h-full flex items-center z-10">
                        {/* <span className="z-20 logo">J</span>
                        <span className="mt-[40px] ml-[0px] z-10 logo">Y</span>

                        <span className="z-20 logo">J</span>
                        <span className="mt-[40px] ml-[-9px] z-10 logo">Y</span> */}

                        <span className="z-20 logo cursive">J</span>
                        <span className="mt-[40px] ml-[0px] z-10 logo cursive">
                            Y
                        </span>

                        {/* <span className="z-20 logo rays">J</span>
                        <span className="mt-[40px] ml-[0px] z-10 logo rays">
                            Y
                        </span> */}
                    </h1>
                </a>
            </div>
            <div className="hidden md:block">
                <ul className="flex">
                    <li className="px-4 cursor-pointer">
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="project" smooth={true} duration={500}>
                            Project
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            <div
                onClick={handleClick}
                className={`${
                    !nav
                        ? "md:hidden z-10"
                        : "z-10 absolute top-0 right-0 mr-5 mt-5 h-10"
                }`}
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <div className={`${!nav ? "hidden" : ""}`}>
                <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
                    <li className="py-6 text-4xl">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="project"
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            Project
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={handleClick}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-3px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center mx-2 w-full">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center mx-2 w-full">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center mx-2 w-full">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center mx-2 w-full">
                            Resume <BsFillFilePersonFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
