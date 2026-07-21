import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
    const { id } = useParams();
    const books = useSelector((state) => state.books.books);

    const book = books.find((book) => book.id === Number(id));

    if (!book) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-5xl font-bold text-red-600">Book Not Found</h1>

                <Link
                    to="/books"
                    className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                    Back to Browse
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-2xl rounded-2xl p-8">

                {/* Book Image */}
                <div className="flex justify-center">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-80 rounded-xl shadow-lg hover:scale-105 transition"
                    />
                </div>

                {/* Book Details */}
                <div>

                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                        {book.category}
                    </span>

                    <h1 className="text-5xl font-bold mt-5">
                        {book.title}
                    </h1>

                    <h2 className="text-2xl text-gray-600 mt-3">
                        By {book.author}
                    </h2>

                    <p className="text-yellow-500 text-2xl mt-4">
                        ⭐ {book.rating}/5
                    </p>

                    <p className="text-gray-700 mt-8 leading-8">
                        {book.description}
                    </p>

                    <Link
                        to="/books"
                        className="inline-block mt-10 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition"
                    >
                        ← Back to Browse
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default BookDetails;