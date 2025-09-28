import Header from "../../global_components/Header";
import Navbar from "../../global_components/Navbar";
import Footer from "../../global_components/Footer";
import Overview from "./components/Overview";
function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Overview />
      <Footer />
    </>
  );
}

export default Home;
