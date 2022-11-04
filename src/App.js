// Import components
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import "./App.css";
//Import routers
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
