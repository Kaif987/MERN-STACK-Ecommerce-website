import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App font-montserrat">
      <Routes>
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />}/>
        <Route path="/HomePage" element= {<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
