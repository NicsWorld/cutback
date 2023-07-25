import "./App.css";
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <section className="app">
      <Header />
      <div className="app__content">
        <Welcome />
      </div>
    </section>
  );
}

export default App;
