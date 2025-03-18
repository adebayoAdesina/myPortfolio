import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./view/Home";
import { MouseFollower } from "react-mouse-follower";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <MouseFollower />
        <AnimatePresence>
          <Router>
            <Routes>
              <Route path="/" Component={Home} />
            </Routes>
          </Router>
        </AnimatePresence>
      </HelmetProvider>
    </>
  );
};

export default App;
