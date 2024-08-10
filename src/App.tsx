import Homepage from "./Pages/Home/Homepage";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <div className=" container mx-auto " >
        <Navbar></Navbar>
        <Homepage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
