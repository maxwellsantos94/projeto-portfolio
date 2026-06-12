import { BiLogoReact } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-slate-800 dark:bg-slate-950 text-white transition-colors duration-300 mt-auto ">
            <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-blue-400">
                        <BiLogoReact className="text-5xl" />
                        <div>
                            <h2 className="text-2xl font-bold">
                                Maxwell Santos
                            </h2>
                            <p className="text-sm text-slate-300">
                                Desenvolvedor Full Stack
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="https://github.com/maxwellsantos94" target="_blank" rel="noopener noreferrer" className=" text-2xl
                         hover:text-sky-300  transition duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a href="https://linkedin.com/in/maxwellsantos-1994" target="_blank" rel="noopener noreferrer" className=" text-2xl
                        hover:text-sky-300 transition duration-300">
                            <FaLinkedin />
                        </a>

                        <a href="mailto:maxwelldossantos94@gmail.com" className=" text-2xl hover:text-sky-300 transition duration-300">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-700 my-6"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Maxwell Santos. Todos os direitos reservados.
                    </p>
                    <p>
                        Desenvolvido com React, Vite e Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;