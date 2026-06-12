import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 dark:text-white transition-colors duration-300">
            <Navbar />

            <main className="flex-1">
                <AppRouter />
            </main>

            <Footer />
        </div>
    );
}

export default App;