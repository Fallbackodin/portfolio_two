import React, { FC } from "react";

const Contact: FC = () => {
    return (
        <div
            id="contact"
            className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
        >
            <form
                action="https://getform.io/f/c205428d-5644-4355-8606-e2cdbc0d15b5"
                method="POST"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <h1 className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                        Contact
                    </h1>
                    <p className="text-gray-300 py-4">
                        // Submit the form below or shoot me an email -
                        yimsjoseph@knights.ucf.edu
                    </p>
                </div>
                <input
                    className="bg-[#ccd6f6] p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 p-2 bg-[#ccd6f6]"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="p-2 bg-[#ccd6f6]"
                    name="message"
                    placeholder="Message"
                    rows={10}
                ></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;
