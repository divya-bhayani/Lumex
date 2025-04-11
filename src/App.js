import logo from "./logo.svg";
import "./App.css";
import Ceritified from "./Components/Admin/Cerified_diamond/Ceritified";
import { store } from "./Store/Store";
import { Provider, useSelector } from "react-redux";
import Search_Result from "./Components/Admin/Search_result/Search_Result";

function App() {
  // useEffect(async () => {
  //   const response = await cerified();
  //   console.log(response);
  // }, []);

  return (
    <Provider store={store}>
      {/* <Ceritified /> */}
      <Search_Result />
    </Provider>
  );
}

export default App;
