import React, { useState } from "react";

export default function AddProduct() {
    const [product, setProduct] = useState({
        image: "",
        title: "",
        category: "",
        brand: "",
        rating: "",
        price: "",
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !product.image ||
            !product.title ||
            !product.category ||
            !product.brand ||
            !product.rating ||
            !product.price
        ) {
            alert("Please fill all fields");
            return;
        }

        // এখানে API / localStorage / Redux এ পাঠাতে পারো
        console.log("Product Added:", product);

        alert("Product added successfully ✅");

        // 🔥 Form Clear
        setProduct({
            image: "",
            title: "",
            category: "",
            brand: "",
            rating: "",
            price: "",
        });
    };

    return (
        <div className="max-w-md mx-auto p-5 border rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">
                Add New Product 📦
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={product.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={product.brand}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={product.rating}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
                >
                    Add Product ➕
                </button>
            </form>
        </div>
    );
}
