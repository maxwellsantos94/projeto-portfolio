import FormContact from "../components/FormContact";

function Contact() {
    return (
        <section className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">

                <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
                    Entre em contato
                </h1>

                <p className="mt-4 mb-10 text-slate-600 dark:text-slate-400 max-w-2xl">
                    Caso queira conversar sobre projetos, oportunidades ou apenas trocar uma ideia sobre tecnologia, envie uma mensagem.
                </p>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
                    <FormContact />
                </div>

            </div>
        </section>
    );
}

export default Contact;