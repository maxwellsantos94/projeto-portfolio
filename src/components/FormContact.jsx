import { useState } from "react";

function FormContact() {
    const [formContact, setFormContact] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    function enviarFormulario(event) {
        event.preventDefault();

        console.log(formContact);

        alert("Mensagem enviada com sucesso!");

        setFormContact({
            nome: "",
            email: "",
            assunto: "",
            mensagem: "",
        });
    }

    return (
        <form
            onSubmit={enviarFormulario}
            className="flex flex-col gap-5"
        >
            <label className="flex flex-col gap-2 text-slate-700 dark:text-slate-300">
                Nome
                <input required minLength="2" type="text" value={formContact.nome} onChange={(event) =>
                    setFormContact({
                        ...formContact, nome: event.target.value,

                    })
                }
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white outline-none focus:border-blue-500"
                />
            </label>

            <label className="flex flex-col gap-2 text-slate-700 dark:text-slate-300">
                E-mail
                <input required type="email" value={formContact.email} onChange={(event) =>
                    setFormContact({
                        ...formContact, email: event.target.value,
                    })
                }
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white outline-none focus:border-blue-500"
                />
            </label>

            <label className="flex flex-col gap-2 text-slate-700 dark:text-slate-300">
                Assunto
                <input required minLength="3" type="text" value={formContact.assunto} onChange={(event) =>
                    setFormContact({
                        ...formContact, assunto: event.target.value,
                    })
                }
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white outline-none focus:border-blue-500"
                />
            </label>

            <label className="flex flex-col gap-2 text-slate-700 dark:text-slate-300">
                Mensagem
                <textarea required rows="6" value={formContact.mensagem} onChange={(event) =>
                    setFormContact({
                        ...formContact, mensagem: event.target.value,
                    })
                }
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white outline-none resize-none focus:border-blue-500"
                />
            </label>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
                Enviar mensagem
            </button>
        </form>
    );
}

export default FormContact;