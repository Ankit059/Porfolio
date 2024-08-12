import { Navbar } from "./compo/Navbar";
import { Main } from "./compo/Main.jsx";
import { About } from "./compo/About.jsx";
import { Projects } from "./compo/Projects.jsx";
import { Contact } from "./compo/Contact.jsx";
import { Login } from "./compo/Login";
import { Signup } from "./compo/Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  debugger;
  const navigate = useNavigate();
  const value1 = "14";

  useEffect(() => {
    if (value1 === "1") {
      navigate("/login");
    }
  }, [value1,navigate]);

  return (
    <>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
