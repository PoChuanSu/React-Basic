import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Hoempage from "./pages/Homepage";
import AppLayout from "./pages/AppLayouts";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hoempage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<AppLayout />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
