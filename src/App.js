import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopNav from "./views/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles/index.css";

export default function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
      </BrowserRouter>
    </div>
  );
}
