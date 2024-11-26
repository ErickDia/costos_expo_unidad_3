import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './app/dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
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
