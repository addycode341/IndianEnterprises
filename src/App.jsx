import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Printing from "./pages/Printing";
import OfficeStationery from "./pages/OfficeStationery";
import SchoolStationery from "./pages/SchoolStationery";
import Leather from "./pages/Leather";
import ProductDetails from "./pages/ProductDetails";
import GalleryDetails from "./pages/GalleryDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>

            {/* ROOT REDIRECT */}
            <Route
              path="/"
              element={
                <Navigate
                  to="/indian-enterprises"
                  replace
                />
              }
            />

            {/* HOME */}
            <Route
              path="/indian-enterprises"
              element={<Home />}
            />

            {/* PRINTING */}
            <Route
              path="/indian-enterprises/printing"
              element={<Printing />}
            />

            {/* OFFICE STATIONERY */}
            <Route
              path="/indian-enterprises/office-stationery"
              element={<OfficeStationery />}
            />

            {/* SCHOOL STATIONERY */}
            <Route
              path="/indian-enterprises/school-stationery"
              element={<SchoolStationery />}
            />

            {/* LEATHER */}
            <Route
              path="/indian-enterprises/leather"
              element={<Leather />}
            />

            {/* PRODUCT DETAILS */}
            <Route
              path="/indian-enterprises/product/:id"
              element={<ProductDetails />}
            />

            {/* GALLERY DETAILS */}
            <Route
              path="/indian-enterprises/gallery/:category"
              element={<GalleryDetails />}
            />

            {/* NOT FOUND */}
            <Route
              path="*"
              element={
                <Navigate
                  to="/indian-enterprises"
                  replace
                />
              }
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;