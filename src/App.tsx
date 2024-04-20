import React, { Suspense } from "react";
import { Button } from "antd";
// import { useRoutes } from "react-router-dom";
import Routes from "./routes";
import AppHeader from "./components/app-header";
import { useAppSelector, useAppDispatch, shallowEqualApp } from "./store";
import { changeMessageAction } from "./store/modules/counter";

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqualApp
  );
  const dispatch = useAppDispatch();
  function handleChangeMessage() {
    dispatch(changeMessageAction("你好"));
  }
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">
          <span>
            {count}-{message}
          </span>
          <Routes></Routes>
          <Button type="primary" onClick={handleChangeMessage}>
            修改
          </Button>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
