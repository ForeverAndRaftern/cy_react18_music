import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="App">
      <div className="main">{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
