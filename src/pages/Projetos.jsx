import projetos from "../data/projetos";
function CardProjeto(projeto) {
    const { titulo, descricao, stack, link, destaque } = projeto.dados;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >
            {destaque && (
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-500">
                    Destaque
                </span>
            )}

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {titulo}
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
                {descricao}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
                {stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-300">
                        {tech}
                    </span>
                ))}
            </div>
        </a>
    );
}

const Projects = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
                    Meus Projetos
                </h2>
                <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                    Alguns projetos desenvolvidos até o momento.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projetos.map((itemDoProjeto) => (
                        <CardProjeto key={itemDoProjeto.id} dados={itemDoProjeto} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;