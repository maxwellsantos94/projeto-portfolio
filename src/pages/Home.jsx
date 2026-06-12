import { useEffect, useState } from "react";
import profile from "../assets/images/profile.png";
import { Link } from "react-router";

const Home = () => {
    const roles = [
        "Desenvolvedor Full Stack",
        "Desenvolvedor React"
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index % roles.length];

        const timeout = setTimeout(() => {

            if (!deleting) {
                setText(current.substring(0, text.length + 1));

                if (text === current) {
                    setTimeout(() => setDeleting(true), 1200);
                }

            } else {
                setText(current.substring(0, text.length - 1));
                if (text === "") {
                    setDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }
        }, deleting ? 50 : 100);

        return () => clearTimeout(timeout);

    }, [text, deleting, index]);

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors
             duration-300"
        >
            <div className=" max-w-5xl mx-auto px-8 text-center">
                <div className="flex justify-center mb-8">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl">
                        <img
                            src={profile}
                            alt="Maxwell Santos"
                            className=" w-48 h-48 md:w-60 md:h-60 object-cover rounded-full
                             bg-white dark:bg-slate-900"
                        />
                    </div>
                </div>

                <h1 className=" text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                    Olá, eu sou{" "}
                    <span className="text-blue-500">
                        Maxwell Santos
                    </span>
                </h1>

                <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 h-14">
                    {text}
                    <span className="animate-pulse text-blue-500">|</span>
                </h2>

                <p className=" mt-8 text-lg md:text-xl leading-8 max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                    Sou apaixonado por tecnologia e desenvolvimento de software.
                    Gosto de transformar ideias em soluções modernas, escaláveis
                    e intuitivas, sempre buscando criar experiências que façam
                    sentido para quem as utiliza.
                </p>

                <div className=" mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className=" flex items-center gap-3 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white
                     font-semibold transition duration-300"
                    >
                        <Link to="/projetos">Ver Projetos</Link>

                    </button>

                    <button className=" px-7 py-4 rounded-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 
                    hover:text-white transition duration-300 font-semibold"
                    >
                        <Link to="/contact">Contato</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;