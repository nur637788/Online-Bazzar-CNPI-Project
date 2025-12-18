import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice'
import { Link, useNavigate } from 'react-router-dom';
import { toggleFavorite } from "../../Redux/favoriteSlice";


function AllProducts() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items } = useSelector((state) => state.favorites);
    const [sortType, setSortType] = useState("");

    //  JSON data 
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=194")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);
    if (!products || products.length == 0)
        return <p className="text-center text-red-700 mt-10">Loading...</p>;

    // Search Filter data
    const filteredData = products.filter((item) => {
        const matchTitle = item.title?.toLowerCase().includes(search.toLowerCase());
        const matchPrice = item.price?.toString().includes(search);
        const matchBrand = item.brand?.toLowerCase().includes(search.toLowerCase());

        if (search === "All Category") {
            return true;
        }

        return matchTitle || matchPrice || matchBrand || item.category.toLowerCase().includes(search.toLowerCase())
    });

    const sortedProducts = [...filteredData].sort((a, b) => {
        if (sortType === "name-abc") {
            return (a.title || "").localeCompare(b.title || "");
        }

        if (sortType === "name-desc") {
            return (b.title || "").localeCompare(a.title || "");
        }
        if (sortType === "price-abc") {
            return a.price - b.price;
        }
        if (sortType === "price-desc") {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <div id='up'>
            <div className='flex gap-2 -mt-4 relative'>
                {/* ---------Side bar----------- */}
                <div className='w-35 md:w-50 py-5 sticky top-10 self-start'>
                    {/* ----- Search bar ------ */}
                    <input type="search" value={search}
                        onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='px-2 border border-gray-300 rounded w-30 md:w-45' />

                    {/* ===== Category Area ===== */}
                    <div className="mt-2 text-[10px] md:text-base">
                        <button
                            onClick={() => setOpen(!open)}
                            className="font-bold">
                            {selected ? selected : "All Category"}
                        </button>

                        {open && (
                            <div className="mt-1 space-y-1">
                                {["All Category", "mens-shoes", "laptops", "smartphones", "mens-shirts", "mens-watches",
                                    "mobile-accessories", "womens-dresses", "womens-jewellery", "womens-shoes", "motorcycle", "skin-care",
                                ].map((item) => (
                                    <label key={item} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={item}
                                            checked={selected === item}
                                            onChange={() => {
                                                setSelected(item);
                                                setSearch(item);
                                                setOpen(true);
                                            }} />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* --------Main Products Area ------------ */}
                <div className=' py-5'>
                    {/* ====== Header Sorting and length ======= */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1'>
                            <p className='hidden md:block'>Sort by</p>
                            <select
                                className="border md:text-sm text-[10px] border-gray-300 rounded cursor-pointer text-gray-500"
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value)}>
                                <option value="">Select</option>
                                <option value="name-abc">Name: A-Z</option>
                                <option value="name-desc">Name: Z-A</option>
                                <option value="price-abc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>
                        <p className='text-sm md:text-base'><b>{filteredData.length}</b> Results</p>
                    </div>

                    {/* ======= Product Grid Area ======= */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4">

                        {sortedProducts.map((pro) => {

                            const isFav = items.some((fav) => fav.id === pro.id);
                            return (
                                <div key={pro.id}
                                    className="bg-gray-50 rounded-md border border-gray-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition duration-300"
                                    onClick={() => navigate(`/product/${pro.id}`)}>

                                    <div className='flex justify-between gap-4 px-2'>
                                        {/* ===== in stack area ===== */}
                                        <p className={`mt-2 px-2 w-fit h-fit rounded text-white ${pro.stock > 50
                                            ? "bg-green-500"
                                            : pro.stock > 20
                                                ? "bg-orange-500"
                                                : "bg-red-500"
                                            }`}>
                                            In Stock: {pro.stock}
                                        </p>
                                        {/* ==== Favorite Button ==== */}
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            dispatch(toggleFavorite(pro));
                                        }}>
                                            <Link className='bg-red-100 h-7 w-7 flex items-center justify-center rounded-full border border-red-200'>
                                                {isFav ? "❤️" : "🤍"}
                                            </Link>
                                        </button>
                                    </div>
                                    {/* ===== Product Info ====== */}
                                    <div className="w-full">
                                        <img className="w-full h-full object-cover rounded-t-2xl"
                                            src={pro?.thumbnail} alt={pro.title} loading='lazy' />
                                    </div>
                                    <div className='p-2'>
                                        <h2 className="font-semibold text-base md:text-lg truncate"> {pro.title}</h2>
                                        <div className="flex justify-between items-center">
                                            <p className='text-sm'>${pro.price}</p>
                                            {/* ===== Cart Button ====== */}
                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                dispatch(addToCart(pro));
                                            }}>
                                                <Link className='bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full border border-red-100 hover:scale-105 duration-300'>
                                                    <FiShoppingCart />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <a href="#up" className='bg-amber-600 hover:bg-amber-700 px-3 py-2 fixed bottom-5 right-1 rounded'>↑</a>
        </div>
    )
}

export default AllProducts
