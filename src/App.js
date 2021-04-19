import "./App.prefixed.css";
import Header from "./layout/Header";
import SectionBonuses from "./layout/SectionBonuses";
import SectionRemote from "./layout/SectionRemote";
import SectionTestimonials from "./layout/SectionTestimonials";
import Footer from "./layout/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SectionBonuses />
        <SectionRemote />
        <SectionTestimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
