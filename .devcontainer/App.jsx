
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Products />
                        </>
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <>
                            <Navbar />
                            <Cart />
                        </>
                    }
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={
                        <>
                            <Signup />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
