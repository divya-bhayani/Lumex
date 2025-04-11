import logo from "./logo.svg";
import "./App.css";
import Ceritified from "./Components/Admin/Cerified_diamond/Ceritified";
import { store } from "./Store/Store";
import { Provider, useSelector } from "react-redux";
import Search_Result from "./Components/Admin/Search_result/Search_Result";
import { Route, Routes } from "react-router-dom";

function App() {
  // useEffect(async () => {
  //   const response = await cerified();
  //   console.log(response);
  // }, []);

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Ceritified />} />
        <Route path="/Search_result" element={<Search_Result />} />
      </Routes>

      {/* <Search_Result /> */}
    </Provider>
  );
}

export default App;
