import React, { Suspense } from "react";
// import { useRoutes } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">
          <Routes></Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
