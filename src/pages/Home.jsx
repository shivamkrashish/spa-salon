import Hero from "../components/Hero";
import Services from "./Services"; // 
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Home;