import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "@components/layouts";
import App from "./App";
import "@styles/globals.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>
  // </React.StrictMode>
);
