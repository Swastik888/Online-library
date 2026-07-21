import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

            <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover"
            />

            <div className="p-4">

                <h2 className="text-xl font-bold">{book.title}</h2>

                <p className="text-gray-600">
                    {book.author}
                </p>

                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {book.category}
                </span>

                <p className="mt-2">
                    ⭐ {book.rating}
                </p>

                <Link
                    to={`/book/${book.id}`}
                    className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-800 transition"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
}

export default BookCard;