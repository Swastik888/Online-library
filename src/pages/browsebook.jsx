import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function BrowseBooks() {
    const { category } = useParams();
    const [search, setSearch] = useState("");
    const books = useSelector((state) => state.books.books);

    // Filter by category
    let filteredBooks = books;

    if (category) {
        filteredBooks = filteredBooks.filter(
            (book) => book.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filter by search
    filteredBooks = filteredBooks.filter(
        (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-8">

            <h1 className="text-4xl font-bold text-center mb-8">
                Browse Books
            </h1>

            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    className="border-2 border-gray-300 rounded-lg w-full md:w-1/2 px-4 py-3 focus:outline-none focus:border-blue-600"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

          
            {category && (
                <h2 className="text-2xl font-semibold mb-6">
                    Category : {category}
                </h2>
            )}

           
            {filteredBooks.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <h2 className="text-center text-red-600 text-2xl">
                    No books found.
                </h2>
            )}
        </div>
    );
}

export default BrowseBooks;