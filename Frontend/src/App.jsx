import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import EyeChatbot from "./components/common/EyeChatbot";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";

function Layout({ children }) {
  const location = useLocation();

  // Hide Navbar only on Home page
  const hideNavbar = location.pathname === "/";

  return (
    <div className="min-h-screen">
      {!hideNavbar && <Navbar />}
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <EyeChatbot />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
