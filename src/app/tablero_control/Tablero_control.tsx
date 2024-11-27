import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Fragment, useState } from 'react';

import LayoutDash from '../LayoutDash';
import { Badge } from "@/components/ui/badge";

  
// const daw = [
//     {
//         id_perspectiva: 1,
//         name_perspectiva: "Financiera",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Reducir los costos operativos de la flota",
//             },
//             {
//                 objBase_id: 2,
//                 objBase_name: "Optimizar la inversión en vehículos nuevos",
//             }
//         ]
//     },
//     {
//         id_perspectiva: 2,
//         name_perspectiva: "Cliente",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Mejorar la puntualidad de entregas",
//             }
//         ]
//     },
//     {
//         id_perspectiva: 3,
//         name_perspectiva: "Procesos",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Incrementar la eficiencia del uso de vehículos",
//             },
//             {
//                 objBase_id: 2,
//                 objBase_name: "Reducir el tiempo de inactividad por mantenimiento",
//             }
//         ]
//     },
//     {
//         id_perspectiva: 4,
//         name_perspectiva: "Aprendizaje",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Mejorar la capacidad de análisis para decisiones vehiculares",
//             },
//             {
//                 objBase_id: 2,
//                 objBase_name: "Incrementar el uso de tecnología para optimizar la gestión",
//             }
//         ]
//     }
// ]

export const Tablero_control = () => {

  const [objetivos_base, set_Objetivos_base] = useState([
        {
            objBase_id: 1,
            name_perspectiva: "Financiera",
            objBase_name: "Reducir los costos operativos de la flota",
            name_indicador: "Costo Total de Vida de la Camioneta",
            formula_indicador: "(Costo adquisición + Mantenimiento + Combustible + Neumáticos) / 10 años",
            fuente_de_datos: "Reporte de costos vehiculares",
            tendencia: "Reducir",
            frecuencia_medicion: "Anual",
            UMD: "USD",
            age2021: "16000",
            age2022: "17000", 
            age2023: "19000", 
            meta2024: "≤ 14000",
            optimo2024: "≤ 11000",
            plan_accion: "Implementar un sistema de análisis de costos totales para decisiones de compra de flota.",
            Responsable: "Jefe de Finanzas",
            Status: "En proceso"
        },
        {
            objBase_id: 2,
            name_perspectiva: "Financiera",
            objBase_name: "Optimizar la inversión en vehículos nuevos",
            name_indicador: "Retorno de la Inversión de la Camioneta",
            formula_indicador: "(Ahorros operativos / Costo de adquisición) * 100",
            fuente_de_datos: "Análisis financiero",
            tendencia: "Incrementar",
            frecuencia_medicion: "Anual",
            UMD: "%",
            age2021: "10",
            age2022: "12", 
            age2023: "15", 
            meta2024: "≥ 20",
            optimo2024: "≥ 25",
            plan_accion: "Evaluar vehículos con mejor eficiencia energética y bajo costo de mantenimiento.",
            Responsable: "Gerente General",
            Status: "En proceso"
        },
        {
            objBase_id: 3,
            name_perspectiva: "Cliente",
            objBase_name: "Mejorar la puntualidad de entregas",
            name_indicador: "Tiempo Promedio de Entrega",
            formula_indicador: "Tiempo total de entregas / Número de entregas",
            fuente_de_datos: "Encuestas y registros operativos",
            tendencia: "Reducir",
            frecuencia_medicion: "Mensual",
            UMD: "Horas",
            age2021: "2",
            age2022: "2.5", 
            age2023: "2.3", 
            meta2024: "≤ 1.8",
            optimo2024: "≤ 1.7",
            plan_accion: "Renovar flota con vehículos más confiables para evitar retrasos.",
            Responsable: "Jefe de Logística",
            Status: "En proceso"
        },
        {
            objBase_id: 4,
            name_perspectiva: "Procesos",
            objBase_name: "Incrementar la eficiencia del uso de vehículos",
            name_indicador: "Rendimiento de Combustible",
            formula_indicador: "Kilómetros recorridos / Litros de combustible consumido",
            fuente_de_datos: "Reporte de producción",
            tendencia: "Incrementar",
            frecuencia_medicion: "Anual",
            UMD: "Km/L",
            age2021: "8.7",
            age2022: "8.5", 
            age2023: "8.4", 
            meta2024: "≥ 10",
            optimo2024: "≥ 10.5",
            plan_accion: "Implementar monitoreo de consumo de combustible con telemetría.",
            Responsable: "Jefe de Operaciones",
            Status: "En proceso"
        },
        {
            objBase_id: 5,
            name_perspectiva: "Procesos",
            objBase_name: "Reducir el tiempo de inactividad por mantenimiento",
            name_indicador: "Frecuencia de Averías",
            formula_indicador: "Tiempo total de reparaciones + tiempo de mantenimientos",
            fuente_de_datos: "Reporte de mantenimiento",
            tendencia: "Reducir",
            frecuencia_medicion: "Anual",
            UMD: "Horas",
            age2021: "17",
            age2022: "18", 
            age2023: "20", 
            meta2024: "≤ 9",
            optimo2024: "≤ 8",
            plan_accion: "Crear un plan preventivo de mantenimiento para prolongar la vida útil de los vehículos.",
            Responsable: "Jefe de Operaciones",
            Status: "En proceso"
        },
        {
            objBase_id: 6,
            name_perspectiva: "Aprendizaje",
            objBase_name: "Mejorar la capacidad de análisis para decisiones vehiculares",
            name_indicador: "Índice de Clima Laboral",
            formula_indicador: "N° Empleados con valoración >= 4 / Total de empleados",
            fuente_de_datos: "Encuesta de clima laboral",
            tendencia: "Incrementar",
            frecuencia_medicion: "Anual",
            UMD: "%",
            age2021: "70%",
            age2022: "85%", 
            age2023: "65%", 
            meta2024: "≥ 80%",
            optimo2024: "≥ 90%",
            plan_accion: "Implementar evaluación 360°",
            Responsable: "Jefe de RRHH",
            Status: "En proceso"
        },
        {
            objBase_id: 7,
            name_perspectiva: "Aprendizaje",
            objBase_name: "Incrementar el uso de tecnología para optimizar la gestión",
            name_indicador: "Tasa de cumplimiento de metas",
            formula_indicador: "N° empleados que cumplieron el objetivo / Total de empleados",
            fuente_de_datos: "Cuadro de control de objetivos del personal",
            tendencia: "Incrementar",
            frecuencia_medicion: "Mensual/Anual",
            UMD: "%",
            age2021: "60%",
            age2022: "70%", 
            age2023: "75%", 
            meta2024: "85%",
            optimo2024: "≥ 85%",
            plan_accion: "Aplicar políticas reconocimiento por cumplimiento de objetivos",
            Responsable: "Jefe de RRHH",
            Status: "En proceso"
        }
    ])

    console.log(set_Objetivos_base);
    

  return (
    <LayoutDash>
        
        <div className="border rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
                <TableHead className="w-[40px]">N°</TableHead>
                <TableHead className="w-1/12">PERSPECTIVA</TableHead>
                <TableHead>OBJETIVOS ESTRATEGICOS BASE</TableHead>
                <TableHead>NOMBRE DE INDICADOR</TableHead>
                <TableHead>FORMULA DE INDICADOR</TableHead>
                <TableHead>FUENTE DE DATOS</TableHead>
                <TableHead>TENDENCIA</TableHead>
                <TableHead>fRECUENCIA DE MEDICION</TableHead>
                <TableHead>UMD</TableHead>
                <TableHead>2021</TableHead>
                <TableHead>2022</TableHead>
                <TableHead>2023</TableHead>
                <TableHead>META 2024</TableHead>
                <TableHead>OPTIMO 2024</TableHead>
                <TableHead>PLAN DE ACCIÓN</TableHead>
                <TableHead>RESPONSABLE</TableHead>
                <TableHead>STATUS</TableHead>




            </TableRow>
          </TableHeader>
          <TableBody>
            {objetivos_base.map((obj_base) => (
              <Fragment key={obj_base.objBase_id}>
                <TableRow>
                  <TableCell className="font-medium w-1/8">{obj_base.objBase_id}</TableCell>
                  <TableCell className="font-medium"><Badge className={
                    obj_base.name_perspectiva == "Financiera" ? 'bg-yellow-500' : 
                    obj_base.name_perspectiva == "Cliente" ? 'bg-purple-500' : 
                    obj_base.name_perspectiva == "Procesos" ? 'bg-blue-500' : 'bg-green-500'}>{obj_base.name_perspectiva}</Badge></TableCell>
                  <TableCell className="font-medium">{obj_base.objBase_name}</TableCell>
                  <TableCell className="font-medium">{obj_base.name_indicador}</TableCell>
                  <TableCell className="font-medium">{obj_base.formula_indicador}</TableCell>
                  <TableCell className="font-medium">{obj_base.fuente_de_datos}</TableCell>
                  <TableCell className="font-medium">{obj_base.tendencia}</TableCell>
                  <TableCell className="font-medium">{obj_base.frecuencia_medicion}</TableCell>
                  <TableCell className="font-medium">{obj_base.UMD}</TableCell>
                  <TableCell className="font-medium">{obj_base.age2021}</TableCell>
                  <TableCell className="font-medium">{obj_base.age2022}</TableCell>
                  <TableCell className="font-medium">{obj_base.age2022}</TableCell>
                  <TableCell className="font-medium">{obj_base.age2023}</TableCell>
                  <TableCell className="font-medium">{obj_base.meta2024}</TableCell>
                  <TableCell className="font-medium">{obj_base.optimo2024}</TableCell>
                  <TableCell className="font-medium">{obj_base.plan_accion}</TableCell>
                  <TableCell className="font-medium">{obj_base.Responsable}</TableCell>
                  <TableCell className="font-medium">{obj_base.Status}</TableCell>

                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </LayoutDash>
  )
}
