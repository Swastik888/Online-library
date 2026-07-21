import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/navbar";
import Home from "./pages/homepage";
import BrowseBooks from "./pages/browsebook";
import BookDetails from "./pages/bookdetails";
import AddBook from "./pages/addbook";
import NotFound from "./pages/notfound";

import Footer from "./components/footer";

function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname !== "/" &&
    location.pathname !== "/books" &&
    location.pathname !== "/add-book" &&
    !location.pathname.startsWith("/book/") &&
    !location.pathname.startsWith("/books/");

  return (
    <>
      {!hideNavbar && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;