import "./style/main.scss";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Main_section from "./layout/main_section";
import Z_index from "./layout/z-index-9999";

function App() {
  return (
    <div className="App">
      <Header />
      <Main_section />
      <Z_index />
      <Footer />
    </div>
  );
}

export default App;
