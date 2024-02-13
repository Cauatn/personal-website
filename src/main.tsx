import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
