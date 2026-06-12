import { useState, useEffect } from "react";
import { BiLogoReact } from "react-icons/bi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav
            className=" bg-slate-800 dark:bg-slate-950 shadow-lg flex items-center justify-around py-3 px-32
             fixed top-0 left-0 w-full transition-colors duration-300"
        >
            <Link to="/">
                <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
                    <BiLogoReact className="text-6xl" />
                    <span className="font-semibold text-2xl">
                        Maxwell Santos
                    </span>
                </span>
            </Link>

            <div className="flex items-center gap-3">
                <Link to="/" className=" py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl
                 hover:bg-slate-700 transition duration-300"
                >
                    Home
                </Link>

                <Link to="/about" className=" py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl
                 hover:bg-slate-700 transition duration-300"
                >
                    Sobre
                </Link>

                <Link
                    to="/contact" className=" py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl
                     hover:bg-slate-700 transition duration-300"
                >
                    Contato
                </Link>

                <Link to="/projetos" className=" py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl
                 hover:bg-slate-700 transition duration-300"
                >
                    Projetos
                </Link>

                <button onClick={() => setDarkMode(!darkMode)} className=" ml-4 w-10 h-10 flex items-center justify-center rounded-full
                 bg-slate-700 hover:bg-slate-600 transition-all duration-300" aria-label="Alternar tema"
                >
                    {darkMode ? (
                        <BsSunFill className="text-yellow-400 text-lg" />
                    ) : (
                        <BsMoonFill className="text-white text-lg" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;