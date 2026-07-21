import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        category: "",
        rating: "",
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !book.title ||
            !book.author ||
            !book.category ||
            !book.rating ||
            !book.image ||
            !book.description
        ) {
            alert("Please fill all fields.");
            return;
        }

        dispatch(
            addBook({
                id: Date.now(),
                ...book,
                rating: Number(book.rating),
            })
        );

        alert("Book Added Successfully!");

        navigate("/books");
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">

            <h1 className="text-4xl font-bold text-center mb-8">
                Add New Book
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">

                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    className="w-full border p-3 rounded-lg"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="w-full border p-3 rounded-lg"
                    onChange={handleChange}
                />

                <select
                    name="category"
                    className="w-full border p-3 rounded-lg"
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    <option>Programming</option>
                    <option>Fiction</option>
                    <option>Fantasy</option>
                    <option>Finance</option>
                    <option>Business</option>
                    <option>Self Help</option>
                    <option>Sci-Fi</option>
                    <option>History</option>
                    <option>Novel</option>
                    <option>Mystery</option>
                    <option>Biography</option>
                </select>

                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    min="1"
                    max="5"
                    step="0.1"
                    className="w-full border p-3 rounded-lg"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full border p-3 rounded-lg"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    rows="5"
                    placeholder="Book Description"
                    className="w-full border p-3 rounded-lg"
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-800 transition"
                >
                    Add Book
                </button>

            </form>
        </div>
    );
}

export default AddBook;