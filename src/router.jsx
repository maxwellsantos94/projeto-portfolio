import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projetos from "./pages/Projetos";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projetos" element={<Projetos />} />

            <Route
                path="*"
                element={
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-7xl font-bold">404</h1>
                            <p className="mt-4 text-xl">
                                Página não encontrada.
                            </p>
                        </div>
                    </div>
                }
            />
        </Routes>
    );
}

export default AppRouter;