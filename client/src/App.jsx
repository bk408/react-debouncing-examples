/**
 * In the normal case of debouncing it will work fine like if user type something then it will re-render and make only one request
 * But if we want to perform more operations where I need to use state then in this case I can not put debounce, debounced and make request functions outside because
 * if I do this then I can not use state so for resolving that issue I need to use => useEffect hook
 *
 * check Effect.jsx
 *
 */

import "./App.css";
import Ap from "./components/Ap";
//import Effect from "./components/Effect";
//import Normal from "./components/Normal";

function App() {
  return (
    <>
      <Ap />
    </>
  );
}

export default App;
