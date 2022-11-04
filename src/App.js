// Import components
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
//Import styles
import styles from "./App.css";

//Import routers
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
