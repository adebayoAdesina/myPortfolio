import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
