import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";
import Login from "./pages/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
