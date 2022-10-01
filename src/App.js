import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Services from './components/Services';
import Support from './components/Support'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Services/>
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
