import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VersionProvider } from "@/context/VersionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VersionProvider>
      <App />
    </VersionProvider>
  </React.StrictMode>
);
