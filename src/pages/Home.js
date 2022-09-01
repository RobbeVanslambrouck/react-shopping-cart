import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  const handleAction = () => {
    navigate("/react-shopping-cart/shop");
  };

  return (
    <div className="App">
      <Header />
      <main className="home">
        <p className="home-statement">Some Statements</p>
        <p className="home-slogan">Some Slogan</p>
        <button onClick={handleAction}>Shop</button>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
