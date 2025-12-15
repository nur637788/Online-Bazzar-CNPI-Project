import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
    const members = [
        {
            name: "Abdun Nur",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " https://www.facebook.com/nur637788",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Samiul Alom",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " ",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Abdun Nur",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " ",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Abdun Nur",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " https://www.facebook.com/nur637788",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Samiul Alom",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " ",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Abdun Nur",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " ",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Abdun Nur",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " https://www.facebook.com/nur637788",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
        {
            name: "Samiul Alom",
            role: "Team Leader",
            img: "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3",
            facebook: " ",
            instagram: " ",
            linkedin: " ",
            email: ""
        },
    ];

    return (
        <div>
            <section className="bg-gray-900 py-10 px-6 md:px-20 text-gray-800 dark:text-gray-100 min-h-screen rounded">
                <div className=" mx-auto text-center">
                    <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4" >
                        Our Honorable Team
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-12">
                        Meet the dedicated team member of our 'Online-Bazzar' Website who guide with knowledge and values.
                    </p>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 ">
                        {members.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-green-400/40 py-5 px-10  transition-transform ">
                                <div className="overflow-hidden border-4 border-green-500 rounded-full w-fit m-auto" >
                                    <img src={person.img} alt={person.name} loading="lazy"
                                        className="w-30 h-30  mx-auto  object-cover  hover:scale-105 duration-300" />
                                </div>

                                <h3 className="text-xl mt-2 font-semibold text-green-700 dark:text-green-300">{person.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{person.role}</p>
                                <div className="flex justify-between items-center mt-5">
                                    <span className="text-blue-400 hover:text-blue-500 text-xl hover:scale-110 duration-300"><a href={person.facebook} target="_blank"><FaFacebook /></a></span>
                                    <span className="text-pink-400 hover:text-pink-500 text-xl hover:scale-110 duration-300"><a href={person.facebook} target="_blank"><FaInstagram /></a></span>
                                    <span className="text-blue-600 hover:text-blue-700 text-xl hover:scale-110 duration-300"><a href={person.facebook} target="_blank"><FaLinkedin /></a></span>
                                    <span className="text-gray-400 hover:text-gray-300 text-xl hover:scale-110 duration-300"><a href={person.facebook} target="_blank"><FaEnvelope /></a></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Team;
