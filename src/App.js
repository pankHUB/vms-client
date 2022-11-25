import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Grid from '@mui/material/Unstable_Grid2';

import Home from "./modules/home/Home";
import Header from './modules/layout/Header';
import Layout from "./modules/layout/Layout";
import Voucher from "./modules/voucher/Voucher";

import "./App.css";

function App() {
  return (
    <>
      <Layout/>
        <Col>
          <Header />
        </Col>
        <Col>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/voucher" element={<Voucher />} />
            </Routes>
          </div>
        </Col>
    </>
  );
}

export default App;
