import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Pages
import Home from "./pages/Home";
import Printing from "./pages/Printing";
import OfficeStationery from "./pages/OfficeStationery";
import SchoolStationery from "./pages/SchoolStationery";
import Leather from "./pages/Leather";
import ProductDetails from "./pages/ProductDetails";
import GalleryDetails from "./pages/GalleryDetails";



function App(){


return(

<BrowserRouter>


<div

className="
bg-black
text-white
min-h-screen
"

>


<Navbar/>


<Routes>


{/* ROOT REDIRECT */}

<Route

path="/"

element={
<Navigate to="/indian-enterprises" />
}

/>



{/* HOME */}

<Route

path="/indian-enterprises"

element={<Home/>}

/>



{/* SERVICES */}


<Route

path="/indian-enterprises/printing"

element={<Printing/>}

/>



<Route

path="/indian-enterprises/office-stationery"

element={<OfficeStationery/>}

/>



<Route

path="/indian-enterprises/school-stationery"

element={<SchoolStationery/>}

/>



<Route

path="/indian-enterprises/leather"

element={<Leather/>}

/>



{/* PRODUCT DETAILS */}

<Route

path="/indian-enterprises/product/:id"

element={<ProductDetails/>}

/>



{/* GALLERY DETAILS */}

<Route

path="/indian-enterprises/gallery/:category"

element={<GalleryDetails/>}

/>



{/* NOT FOUND */}

<Route

path="*"

element={<Navigate to="/indian-enterprises" />}

/>



</Routes>



<Footer/>


</div>


</BrowserRouter>


)

}


export default App;