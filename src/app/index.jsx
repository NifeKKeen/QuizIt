import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app/App";

const rootEl = document.getElementById("root");
const rootComponent = ReactDOM.createRoot(rootEl);
rootComponent.render(<App />);