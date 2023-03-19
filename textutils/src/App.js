import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
let name  = "TextUtils";
function App() {
  return (
    <>
      <Navbar title={4} about={"about "+name}/>
      <div className="container my-3">
      <TextForm heading="Enter some text to analyse"></TextForm>
      <button className="btn btn-primary">Convert</button>
      </div>
    </>
  );
}

export default App;
