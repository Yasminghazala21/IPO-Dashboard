import { HashRouter, Routes, Route } from "react-router-dom";
import IpoList from "./components/IpoList";
import IpoDetails from "./components/IpoDetails";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<IpoList />} />
        <Route path="/ipo/:id" element={<IpoDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
