import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./view/Home";
import { MouseFollower } from "react-mouse-follower";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <MouseFollower />
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
};

export default App;
