import "./App.css";
import Contextdata from "./components/context/Context";
import CountDown from "./components/countdown/CountDown";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Contextdata>
      <div class="flex flex-col justify-between h-screen">
        <NavBar />
        <CountDown />
        <Footer />
      </div>
    </Contextdata>
  );
}

export default App;
