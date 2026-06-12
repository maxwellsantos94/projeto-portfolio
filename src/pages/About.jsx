const About = () => {
    const tecnologias = [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vite",
        "Git",
        "GitHub",
    ];

 

    return (
        <section className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Sobre mim
                </h1>
                <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    <p>
                        Olá! Meu nome é{" "}
                        <span className="font-semibold text-blue-500">
                            Maxwell Santos
                        </span>{" "}
                        e sou um desenvolvedor apaixonado por criar aplicações
                        modernas, intuitivas e acessíveis.
                    </p>
                    <p>
                        Atualmente estudo desenvolvimento Full Stack com foco em
                        React, JavaScript e Tailwind CSS, sempre buscando
                        escrever código limpo, reutilizável e de fácil
                        manutenção.
                    </p>
                    <p>
                        Acredito que tecnologia deve resolver problemas reais e
                        proporcionar uma boa experiência para quem utiliza o
                        software. Por isso, gosto de desenvolver interfaces
                        simples, rápidas e responsivas.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                        Tecnologias
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {tecnologias.map((tech) => (
                            <span key={tech} className=" px-5 py-2 rounded-full bg-blue-100 dark:bg-slate-800
                             text-blue-700 dark:text-blue-400 font-medium border border-blue-200 dark:border-slate-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

               
                <div className="mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Minha filosofia
                    </h2>
                    <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Acredito que um bom software não é apenas aquele que
                        funciona, mas aquele que é simples de usar, fácil de
                        manter e desenvolvido pensando nas pessoas que irão
                        utilizá-lo. Estou sempre aprendendo novas tecnologias e
                        buscando evoluir como desenvolvedor a cada projeto.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;