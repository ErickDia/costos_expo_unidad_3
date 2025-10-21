import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Objetivos_base } from './app/objetivos_base/Objetivos_base'
// import { Tablero_control } from './app/tablero_control/Tablero_control'
// import { Etapas } from './app/etapas/Etapas'
// import { Mapa_estrategico } from './app/mapa_estrategico/Mapa_estrategico'
// import { Clase_costos } from './app/clase_costos/Clase_costos'
import Dashboardedit from './app/dashboard/Dashboardedit'
import { SouthernBalanceGeneral } from './app/southern/SouthernBalanceGeneral'
import { SouthernCuentaResultados } from './app/southern/SouthernCuentaResultados'

function App() {

  return (
    <>
      <Routes>
          <Route path='/southernBalanceGeneral' element={<SouthernBalanceGeneral />} />
          <Route path='/southernCuentaResultados' element={<SouthernCuentaResultados />} />

          {/* <Route path='/clase' element={<Clase_costos />} />
          <Route path='/etapas' element={<Etapas />} />
          <Route path='/tablero_de_control' element={<Tablero_control />} />
          <Route path='/objetivos_base' element={<Objetivos_base />} />
          <Route path='/mapa_estrategico' element={<Mapa_estrategico />} /> */}
          <Route path='/dashboard' element={<Dashboardedit />} />
          <Route path='/' element={<Dashboardedit />} />
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
