import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleAction = () => {
    navigate("/shop");
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p>Some Slogan</p>
        <p>Some Statements</p>
        <button onClick={handleAction}>Some Shopping</button>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
