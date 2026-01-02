import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
    const members = [
        {
            name: "Abdun Nur",
            role: "Team Leader",
            img: "/images/teamMembers/nur.png",
            facebook: "https://www.facebook.com/nur637788",
            instagram: "https://www.instagram.com/nur637788",
            linkedin: "https://www.linkedin.com/in/nur637788",
            email: "mailto:mdnoyon631234@gmail.com"
        },
        {
            name: "Samiul Alom",
            role: "CO-Team Leader",
            img: "/images/teamMembers/samiul.jpeg",
            facebook: "https://www.facebook.com/share/1GAsWMygM4/",
            instagram: "https://www.instagram.com/samiul__alom__?igsh=MWp5ZTllY2p4aHpvYg==",
            linkedin: "",
            email: "mailto:samiuljr60@gmail.com"
        },
        {
            name: "Fahim Ahmed",
            role: "Team Member",
            img: "/images/teamMembers/fahim.jpg",
            facebook: "https://www.facebook.com/share/1ALmv7dvkF/",
            instagram: "https://www.instagram.com/fahim.md143?igsh=OGw5bmVub2dtcDk3",
            linkedin: "",
            email: "mailto:fahimahmed80051@gmail.com"
        },
        {
            name: "Tamjid",
            role: "Team Member",
            img: "/images/teamMembers/tamjid.jpg",
            facebook: "https://www.facebook.com/share/17zZ7C5oAy/",
            instagram: "https://www.instagram.com/_tamzid_____?igsh=MW1haThyODNkeHUyOA==",
            linkedin: "",
            email: "mailto:toimurrahmantamzid@gmail.com"
        },
        {
            name: "Shahin Alom",
            role: "Team Member",
            img: "/images/teamMembers/shahin.jpg",
            facebook: "https://www.facebook.com/mdshahinalommim#",
            instagram: "",
            linkedin: "",
            email: "alom46909@gmail.com"
        },
        {
            name: "Kamrul Hasan",
            role: "Team Member",
            img: "/images/teamMembers/sakib.jpg",
            facebook: "https://www.facebook.com/kamrul.hasan.shakib.647250",
            instagram: "",
            linkedin: "",
            email: "mailto:kamrulhasan7063@gmail.com"
        },
        {
            name: "Saju Ahmed",
            role: "Team Member",
            img: "/images/teamMembers/saju.jpg",
            facebook: "https://www.facebook.com/S4J8.S1",
            instagram: "https://www.instagram.com/s4j8.s1",
            linkedin: "",
            email: "mailto:its.me.saju.ahmed@gmail.com"
        },
        {
            name: "Fahim Faisal",
            role: "Team Member",
            img: "/images/teamMembers/foysal.jpg",
            facebook: "https://www.facebook.com/share/1FdJC2uH1m/",
            instagram: "",
            linkedin: "",
            email: "mailto:sfs161377@gmail.com"
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
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-green-400/40 py-5 px-8  transition-transform ">
                                <div className="overflow-hidden border-4 border-green-500 rounded-full w-fit m-auto" >
                                    <img src={person.img} alt={person.name} loading="lazy"
                                        className="w-32 h-32 bg-blue-900 mx-auto  object-cover  hover:scale-105 duration-300" />
                                </div>

                                <h3 className="text-xl mt-2 font-semibold text-green-700 dark:text-green-300">{person.name}</h3>
                                <p className="text-sm font-semibold text-red-100 ">{person.role}</p>
                                <div className="flex justify-between items-center mt-5">
                                    <span className="text-blue-400 hover:text-blue-500 text-xl hover:scale-110 duration-300"><a href={person.facebook} target="_blank"><FaFacebook /></a></span>

                                    <span className="text-pink-400 hover:text-pink-500 text-xl hover:scale-110 duration-300"><a href={person.instagram} target="_blank"><FaInstagram /></a></span>

                                    <span className="text-blue-600 hover:text-blue-700 text-xl hover:scale-110 duration-300"><a href={person.linkedin} target="_blank"><FaLinkedin /></a></span>

                                    <span className="text-gray-400 hover:text-gray-300 text-xl hover:scale-110 duration-300"><a href={person.email} target="_blank"><FaEnvelope /></a></span>
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
