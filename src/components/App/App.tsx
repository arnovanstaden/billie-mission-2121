import ReactToolTip from "react-tooltip"

// Components
import Header from "../UI/Header/header";
import Dashboard from "../Content/Dashboard/Dashboard";
import { DataProvider } from "../../context/DataContext"


// Styles, Fonts, Icons
import "../../styles/global.scss";
import "typeface-source-serif-pro";
import "typeface-montserrat";
import "../../assets/icons/style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Dashboard />
      </DataProvider>
      <ReactToolTip />
    </div>
  );
}

export default App;
