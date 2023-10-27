import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fas);
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
