import { Link, useLocation } from "react-router-dom";

function NotFound() {
    const location = useLocation();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-lg">

                <h1 className="text-7xl font-bold text-red-600">
                    404
                </h1>

                <h2 className="text-3xl font-bold mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mt-4">
                    Sorry, the page you are looking for does not exist.
                </p>

                <div className="mt-6 bg-gray-100 p-3 rounded-lg">
                    <span className="font-semibold">Invalid URL:</span>
                    <p className="text-red-600 break-all">
                        {location.pathname}
                    </p>
                </div>

                <Link
                    to="/"
                    className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                    🏠 Go Back Home
                </Link>

            </div>

        </div>
    );
}

export default NotFound;