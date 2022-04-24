import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//Entry point 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
reportWebVitals();
