import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loader";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  // Trigger loading state when location changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate a loading delay, you can adjust this
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {!loading && <Nav />}{" "}
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer position="bottom-left" autoClose={2000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h2>Hello</h2>} />
            <Route path="/contact" element={<h2>Hello</h2>} />
            <Route path="/blog" element={<h2>Hello</h2>} />
            <Route path="/careers" element={<h2>Hello</h2>} />
            <Route path="/request-invite" element={<h2>Hello</h2>} />
            <Route
              path="*"
              element={
                <>
                  <p>Soon</p>
                </>
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
