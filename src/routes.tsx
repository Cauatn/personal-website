import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Component from "./routes/root";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
      </Routes>
    </Router>
  );
}
