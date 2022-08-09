import './App.css';
import { Routes, Route} from "react-router-dom";
import MainPage from './Pages';
function Rotas() {
  return (
    <div >
         <Routes>
        <Route path="/" element={<MainPage/>} />
        </Routes>
    </div>
  );
}

export default Rotas;
