import { Link } from "react-router-dom";
import books from "../data/books";
import BookCard from "../components/BookCard";

function Home() {

    const categories = [
        "Programming",
        "Fiction",
        "Fantasy",
        "Sci-Fi",
        "Novel",
        "Mystery",
        "Historical Fiction",
        "Self Help",
        "Motivation",
        "Finance",
        "Business",
        "Technology",
        "History",
        "Biography",
    ];

    return (
        <>
            {/* Hero Section */}

            <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-24">

                <div className="max-w-7xl mx-auto text-center">

                    <h1 className="text-6xl font-bold">
                        Welcome to Online Library 📚
                    </h1>

                    <p className="mt-6 text-xl">
                        Discover thousands of books from every category.
                    </p>

                    <div className="mt-10 flex justify-center gap-5">

                        <Link
                            to="/books"
                            className="bg-white text-blue-700 px-7 py-3 rounded-lg font-bold hover:bg-gray-200"
                        >
                            Browse Books
                        </Link>

                        <Link
                            to="/add-book"
                            className="border-2 border-white px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700"
                        >
                            Add Book
                        </Link>

                    </div>

                </div>

            </section>

            {/* Categories */}

            <section className="py-20 bg-gray-100">

                <h1 className="text-center text-4xl font-bold mb-10">
                    Book Categories
                </h1>

                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">

                    {categories.map((item) => (
                        <Link
                            key={item}
                            to={`/books/${item}`}
                            className="bg-white px-8 py-4 rounded-xl shadow hover:bg-blue-600 hover:text-white transition"
                        >
                            {item}
                        </Link>
                    ))}

                </div>

            </section>

            {/* Popular Books */}

            <section className="py-20">

                <h1 className="text-center text-4xl font-bold mb-12">
                    Popular Books
                </h1>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}

                </div>

            </section>
        </>
    );
}

export default Home;