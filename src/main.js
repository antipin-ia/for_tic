import React from "react";
import { createRoot } from "react-dom/client";
import App from "./ui/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = document.querySelector(".app");

createRoot(root).render(<App />);
