import "./styles/app.scss";
import LeftSideBar from "./components/leftside/LeftSideBar";
import RightSideBar from "./components/rightside/RightSideBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app reset">
      <div className="app__leftside">
        <LeftSideBar />
      </div>
      <div className="app__rightside">
        <RightSideBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
