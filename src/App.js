import React from "react";
import Routers from "./Routers";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routers />
        <Footer />
      </div>
    );
  }
}

export default App;
