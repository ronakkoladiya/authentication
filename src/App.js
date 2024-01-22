import { Routes, Route } from "react-router-dom"
import { RouteList } from "./Routes"
import './App.css';

function App() {
  return (
    <>
      <Routes>
        {
          RouteList.map((content, index) => {
            return (
              <Route path={content.path} element={content.element} key={index} />
            )
          })
        }
      </Routes>
    </>
  );
}

export default App;