import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './app/dashboard/Dashboard'
import { Objetivos_base } from './app/objetivos_base/Objetivos_base'
import { Tablero_control } from './app/tablero_control/Tablero_control'

function App() {

  return (
    <>
      <Routes>
          <Route path='/tablero_de_control' element={<Tablero_control />} />
          <Route path='/objetivos_base' element={<Objetivos_base />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
          {/* <Route path='/categorias' element={<Categorias />} />
          <Route path='/reporte' element={<Reporte />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<Navigate to="/home" />} /> */}
      </Routes>
    </>
  )
}

export default App
