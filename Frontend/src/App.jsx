import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import EyeChatbot from "./components/common/EyeChatbot";

function App() {

  return (
    <Router>
      <EyeChatbot/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
