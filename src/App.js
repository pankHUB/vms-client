import { Routes, Route } from "react-router-dom";
import { Col, Row } from "reactstrap";

import "./App.css";

import Home from "./modules/body/Home";
import Details from "./modules/common/Details";
import Header from "./modules/main/Header";
import Footer from "./modules/main/Footer";
import Navbar from "./modules/main/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Row style={{ width: "100%" }}>
        <Col>
          <Header />
        </Col>
        <Col>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default App;
