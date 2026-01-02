import React, { useState } from "react";

function ProductSlider() {
    const products = [
        {
            id: 1,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "Abdun Nur",
            title: "Web Developer",
            image: "/images/teamMembers/nur.png"
        },
        {
            id: 2,
            desc: "Absolutely wonderful! Thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "Samiul Alom",
            title: "Developer",
            image: "/images/teamMembers/samiul.jpeg"
        },
        {
            id: 3,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐",
            name: "Fahim Ahmed.",
            title: "Desingner",
            image: "/images/teamMembers/fahim.jpg"
        },
        {
            id: 4,
            desc: " I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐",
            name: "Tamjid",
            title: "Business Man",
            image: "/images/teamMembers/tamjid.jpg"
        },
        {
            id: 5,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "Shahin Alom Mim",
            title: "Traveler",
            image: "/images/teamMembers/shahin.jpg"
        },
        {
            id: 6,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "Saju Ahmed",
            title: "Syber Force",
            image: "/images/teamMembers/saju.jpg"
        },
        {
            id: 7,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "Kamrul Hasan Sakib",
            title: "Traveler",
            image: "/images/teamMembers/sakib.jpg"
        },
        {
            id: 8,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "Fahim Faisal",
            title: "Traveler",
            image: "/images/teamMembers/foysal.jpg"
        },

    ];

    const [current, setCurrent] = useState(0);

    const nextCard = () => {
        setCurrent((prev) => (prev + 1) % products.length);
    };
    const previewCard = () => {
        setCurrent((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="">

            <div className='py-10 mt-10'>
                <div className='space-y-3'>
                    <h2 className='text-2xl md:text-4xl font-bold w-70 md:w-96'>Customer experience is important to us</h2>
                    <p className='text-sm md:text-lg max-w-2xl text-[#EA5326] leading-6'>Sed dictum ipsum elementum diam dapibus, ut sodales orci monte consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-evenly mt-8'>
                        <div className='rounded-lg hover:bg-gray-100 hover:scale-105 duration-300 p-3 m-auto cursor-pointer'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg m-auto'>
                                <img className='w-6 h-6' src="/icons/icon1.png" alt="icon1" />
                            </div>
                            <h5 className='font-semibold mt-2'>Original Products</h5>
                        </div>
                        <div className='rounded-lg hover:bg-gray-100 hover:scale-105 duration-300 p-3 m-auto cursor-pointer'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg m-auto'>
                                <img className='w-6 h-6' src="/icons/icon2.png" alt="icon2" />
                            </div>
                            <h5 className='font-semibold mt-2'>Satisfaction Guarantee</h5>
                        </div>
                        <div className='rounded-lg hover:bg-gray-100 hover:scale-105 duration-300 p-3 m-auto cursor-pointer'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg m-auto'>
                                <img className='w-6 h-6' src="/icons/icon3.png" alt="icon3" />
                            </div>
                            <h5 className='font-semibold mt-2'>New Arrival Everyday</h5>
                        </div>
                        <div className='rounded-lg hover:bg-gray-100 hover:scale-105 duration-300 p-3 m-auto cursor-pointer'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg m-auto'>
                                <img className='w-8 h-6' src="/icons/icon4.png" alt="icon4" />
                            </div>
                            <h5 className='font-semibold mt-2'>Fast Shipping</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-10 space-y-2">
                <h2 className="text-2xl md:text-4xl font-bold">What People Are Saying</h2>
                <p className="text-sm">We provide support for more than 15K+ Businesses.</p>
            </div>
            <div className="flex gap-5 bg-gray-50 shadow-sm py-5 max-w-[700px] m-auto px-5 rounded-md">
                <img src={products[current].image} loading="lazy" alt={products[current].title}
                    className="w-20 md:w-40 h-30 md:h-40 rounded-sm mx-auto shadow-md object-cover bg-blue-800" />
                <div className="">
                    <h2 className="text-xl font-bold ">{products[current].name}</h2>
                    <p className="text-gray-700 font-medium italic text-sm">{products[current].title}</p>
                    <p className="text-gray-500">{products[current].star}</p>
                    <hr className="my-2 text-gray-300" />
                    <p className="text-gray-900 text-sm">{products[current].desc}</p>
                    
                </div>
            </div>


            <div className="flex gap-3 items-center  justify-center my-5">
                <button onClick={previewCard} className="bg-gray-200 shadow-blue-200 shadow-sm hover:bg-gray-300 hover:scale-95 transition-all duration-300 w-7 h-7 rounded-full cursor-pointer">‹</button>
                <button onClick={nextCard} className=" bg-gray-200 shadow-blue-200 shadow-sm hover:bg-gray-300 hover:scale-95 transition-all duration-300 w-7 h-7 rounded-full cursor-pointer">›</button>
            </div>
        </section>
    );
}

export default ProductSlider;
