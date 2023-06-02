import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from "./routes/Auth";
import DashboardRoute from "./routes/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardRoute />} />
        <Route path="/auth" element={<AuthRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
