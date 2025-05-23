import { Footer, Header } from "./components/layouts";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-[#1A1A1A]">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;