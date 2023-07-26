import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <section className="app">
      <div className="app__content">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
