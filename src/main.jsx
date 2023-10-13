import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./features/Home/pages/HomePage";
import BillPage from "./features/Bill/pages/BillPage";

const Container = styled.div`
  max-width: 100vw;
  margin: 0px 10%;
  background-color: --background;
`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <Container>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/billing"  element={<BillPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>
);
