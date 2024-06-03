import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Chat from "./pages/Chat";
import Nav from "./components/Nav";
import AddCard from "./pages/AddCard";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/addCard" element={<AddCard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
