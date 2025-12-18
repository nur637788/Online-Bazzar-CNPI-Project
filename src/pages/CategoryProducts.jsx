import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toggleFavorite } from "../Redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

function CategoryProducts() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.favorites);
    const navigate = useNavigate();

    // ✅ Category wise products fetch
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((err) => console.error("Error loading products:", err));
    }, [category]);

    if (!products || products.length === 0)
        return <p className="text-center text-red-700 mt-10">Loading...</p>;

    return (
        <section className="w-full">
            <div className="flex justify-between">
                <p className="text-sm md:text-xl mb-2 capitalize">
                    Category: <b>{category.replace("-", " ")}</b>
                </p>
                <p className="text-sm md:text-xl mb-2">
                    Result: <b>{products.length}</b>
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((pro) => {
                    const isFav = items.some((fav) => fav.id === pro.id);

                    return (
                        <div
                            key={pro.id}
                            className="bg-gray-100 rounded-2xl border border-gray-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-300 transition"
                            onClick={() => navigate(`/product/${pro.id}`)}>
                            <div className="w-full h-50">
                                <img
                                    className="w-full h-full object-cover rounded-t-2xl"
                                    src={pro.thumbnail}
                                    alt={pro.title}
                                />
                            </div>

                            <div className="p-2">
                                <p className="truncate">{pro.title}</p>

                                <div className="flex justify-between items-center">
                                    <p>${pro.price}</p>

                                    {/* ❤️ Favorite Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // 👈 important
                                            dispatch(toggleFavorite(pro));
                                        }}
                                        className="hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="bg-black w-6 h-6 rounded-full flex justify-center items-center">
                                            {isFav ? (
                                                <IoMdHeart className="text-red-600" />
                                            ) : (
                                                <IoIosHeartEmpty className="text-white" />
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default CategoryProducts;
