
import './App.css'

import Inicio from "./Pages/Inicio.jsx"
import Caracteristicas from "./Pages/Caracteristicas.jsx"
import Historia from './Pages/Historia.jsx'
import Samuel from './Pages/samuel.jsx'
import Layout from './layout.jsx/Layout.jsx'

import { BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>                
          <Route index element={<Inicio />} />
          <Route path="caracteristicas" element={<Caracteristicas />} />
          <Route path="historia" element={<Historia />} />
          <Route path="samuel" element={<Samuel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
