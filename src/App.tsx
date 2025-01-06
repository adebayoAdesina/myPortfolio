import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./view/Home";
import { MouseFollower } from "react-mouse-follower";

const App = () => {
  return (
    <>
    <MouseFollower/>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
