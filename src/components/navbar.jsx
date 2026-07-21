import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">

                {/* Logo */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <Link
                        to="/"
                        className="text-3xl font-bold text-white text-center md:text-left"
                    >
                        📚 Library
                    </Link>

                    {/* Menu */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">

                        <Link
                            to="/"
                            className="w-full md:w-auto text-center text-white font-semibold px-5 py-2 rounded-lg hover:bg-cyan-500 transition duration-300"
                        >
                            Home
                        </Link>

                        <Link
                            to="/books"
                            className="w-full md:w-auto text-center text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
                        >
                            Browse Books
                        </Link>

                        <Link
                            to="/add-book"
                            className="w-full md:w-auto text-center text-white font-semibold px-5 py-2 rounded-lg hover:bg-emerald-500 transition duration-300"
                        >
                            Add Book
                        </Link>

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navigation;