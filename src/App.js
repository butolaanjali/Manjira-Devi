import "./App.css";
import Footer from "./Components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import StudentLife from "./Components/Studentlife/Studentlife";


function App() {
  return(
    <div className="App">
      <StudentLife/>
      <Footer/>
    </div>
  )
}
export default App;