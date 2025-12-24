import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const categories = [
        {
            id: 1,
            title: "beauty",
            img: "/images/category/1.jpg",
            link: "/products/beauty",
        },
        {
            id: 2,
            title: "fragrances",
            img: "/images/category/2.jpg",
            link: "/products/fragrances",
        },
        {
            id: 3,
            title: "furniture",
            img: "/images/category/3.webp",
            link: "/products/furniture",
        },
        {
            id: 4,
            title: "groceries",
            img: "/images/category/4.jpg",
            link: "/products/groceries",
        },
        {
            id: 5,
            title: "home-decoration",
            img: "/images/category/5.jpg",
            link: "/products/home-decoration",
        },
        {
            id: 6,
            title: "kitchen-accessories",
            img: "/images/category/6.jpg",
            link: "/products/kitchen-accessories",
        },
        {
            id: 7,
            title: "laptops",
            img: "/images/category/7.webp",
            link: "/products/laptops",
        },
        {
            id: 8,
            title: "mens-shirts",
            img: "/images/category/8.webp",
            link: "/products/mens-shirts",
        },
        {
            id: 9,
            title: "mens-shoes",
            img: "/images/category/9.avif",
            link: "/products/mens-shoes",
        },
        {
            id: 10,
            title: "mens-watches",
            img: "/images/category/10.webp",
            link: "/products/mens-watches",
        },
        {
            id: 11,
            title: "mobile-accessories",
            img: "/images/category/11.png",
            link: "/products/mobile-accessories",
        },
        {
            id: 12,
            title: "motorcycle",
            img: "/images/category/12.jpg",
            link: "/products/motorcycle",
        },
        {
            id: 13,
            title: "skin-care",
            img: "/images/category/13.webp",
            link: "/products/skin-care",
        },
        {
            id: 14,
            title: "smartphones",
            img: "/images/category/14.jpg",
            link: "/products/smartphones",
        },
        {
            id: 15,
            title: "sports-accessories",
            img: "/images/category/15.jpg",
            link: "/products/sports-accessories",
        },
        {
            id: 16,
            title: "sunglasses",
            img: "/images/category/16.webp",
            link: "/products/sunglasses",
        },
        {
            id: 17,
            title: "tablets",
            img: "/images/category/17.jpg",
            link: "/products/tablets",
        },
        {
            id: 18,
            title: "tops",
            img: "/images/category/18.jpg",
            link: "/products/tops",
        },
        {
            id: 19,
            title: "vehicle",
            img: "/images/category/19.png",
            link: "/products/vehicle",
        },
        {
            id: 20,
            title: "womens-bags",
            img: "/images/category/20.avif",
            link: "/products/womens-bags",
        },
        {
            id: 21,
            title: "womens-dresses",
            img: "/images/category/21.avif",
            link: "/products/womens-dresses",
        },
        {
            id: 22,
            title: "womens-jewellery",
            img: "/images/category/22.webp",
            link: "/products/womens-jewellery",
        },
        {
            id: 23,
            title: "womens-shoes",
            img: "/images/category/23.jpg",
            link: "/products/womens-shoes",
        },
        {
            id: 24,
            title: "womens-watches",
            img: "/images/category/24.jpg",
            link: "/products/womens-watches",
        },
    ];


    return (
        <div className="my-5 pb-10">
            <div className="flex justify-between items-center">
                <h2 className="text-base md:text-2xl font-bold">Products Categories</h2>
                <h2 className="text-base md:text-2xl">
                    Result: <b>{categories.length}</b>
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-5 py-2">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className="text-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
                        <Link to={item.link}>
                            <div className="overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title} loading="lazy"
                                    className="rounded-lg bg-white hover:scale-105 duration-300 h-35 w-40 m-auto"/>
                            </div>
                            <h3 className="text-sm md:text-base font-medium truncate mt-1">
                                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
