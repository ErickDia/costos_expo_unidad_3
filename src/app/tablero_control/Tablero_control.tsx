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
        Status: "En proceso",
        cumplimiento: "64%",
        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
              {
              label: 'Costo Anual',
              data: [16000, 17000, 19000, 18500],
              type: 'bar',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 1
            },
            {
              label: 'Costo Anual Esperado',
              type: 'line', // Tipo de gráfico para este dataset
              data: [14000, 14000, 14000, 14000],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
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
        age2021: "180%",
        age2022: "140%", 
        age2023: "70%", 
        meta2024: "150%",
        optimo2024: "≥ 160%",
        plan_accion: "",
        Responsable: "Gerente General",
        Status: "En proceso",
        cumplimiento: "75%",
        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
              {
              label: '----',
              data: [10, 12, 15, 15],
              type: 'bar',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 1
            },
            {
              label: '******',
              type: 'line', // Tipo de gráfico para este dataset
              data: [20, 20, 20, 20],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
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
        meta2024: "2",
        optimo2024: "≤ 2",
        plan_accion: "",
        Responsable: "",
        Status: "En proceso",
        cumplimiento: "72%",

        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
            {
              label: 'Tiempo Promedio de Entrega',
              type: 'line', // Tipo de gráfico para este dataset
              data: [2, 2.5, 2.3, 2.2],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            },
            {
              label: 'Tiempo Promedio Esperado',
              type: 'line', // Tipo de gráfico para este dataset
              data: [2, 2, 2, 2],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
    },
    {
      objBase_id: 4,
      name_perspectiva: "Cliente",
      objBase_name: "Incrementar el índice de clientes nuevos",
      name_indicador: "",
      formula_indicador: "",
      fuente_de_datos: "",
      tendencia: "Incrementar",
      frecuencia_medicion: "",
      UMD: "%",
      age2021: "5",
      age2022: "6.5", 
      age2023: "8.5",
      age2024: "11.5",
      meta2024: "15",
      optimo2024: "15",
      plan_accion: "",
      Responsable: "",
      Status: "En proceso",
      cumplimiento: "77%",

      data: {
        labels: ['2021', '2022', '2023', '(Actual)2024'],
        datasets: [
          {
            label: '% de nuevos clientes',
            type: 'bar', // Tipo de gráfico para este dataset
            data: [5, 6.5, 8.5, 11.5],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          },
          {
            label: '% esperado de clientes nuevos',
            type: 'line', // Tipo de gráfico para este dataset
            data: [15, 15, 15, 15],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          }
        ]
      },
    },
    {
      objBase_id: 5,
      name_perspectiva: "Cliente",
      objBase_name: "Aumentar la tasa de retención de clientes",
      name_indicador: "",
      formula_indicador: "",
      fuente_de_datos: "",
      tendencia: "Incrementar",
      frecuencia_medicion: "",
      UMD: "%",
      age2021: "3",
      age2022: "3", 
      age2023: "4",
      age2024: "5",
      meta2024: "5",
      optimo2024: "5",
      plan_accion: "",
      Responsable: "",
      Status: "En proceso",
      cumplimiento: "83%",

      data: {
        labels: ['2021', '2022', '2023', '(Actual)2024'],
        datasets: [
          {
            label: '% de retencion de clientes',
            type: 'bar', // Tipo de gráfico para este dataset
            data: [3, 3, 4, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          },
          {
            label: '% esperado',
            type: 'line', // Tipo de gráfico para este dataset
            data: [6, 6, 6, 6],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          }
        ]
      },
    },
    {
      objBase_id: 6,
      name_perspectiva: "Cliente",
      objBase_name: "Mejora la satisfaccion del cliente",
      name_indicador: "",
      formula_indicador: "",
      fuente_de_datos: "",
      tendencia: "Incrementar",
      frecuencia_medicion: "",
      UMD: "%",
      age2021: "75",
      age2022: "77", 
      age2023: "80",
      age2024: "83",
      meta2024: "90",
      optimo2024: "90",
      plan_accion: "",
      Responsable: "",
      Status: "En proceso",
      cumplimiento: "92%",
      data: {
        labels: ['2021', '2022', '2023', '(Actual)2024'],
        datasets: [
          {
            label: '% de satisfaccion de clientes',
            type: 'bar', // Tipo de gráfico para este dataset
            data: [75, 77, 80, 83],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          },
          {
            label: '% esperado',
            type: 'line', // Tipo de gráfico para este dataset
            data: [90, 90, 90, 90],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          }
        ]
      },
    },
    {
      objBase_id: 7,
      name_perspectiva: "Cliente",
      objBase_name: "Disminuir el costo de reclamos de productos",
      name_indicador: "",
      formula_indicador: "",
      fuente_de_datos: "",
      tendencia: "Reducir",
      frecuencia_medicion: "",
      UMD: "%",
      age2021: "26500",
      age2022: "25000", 
      age2023: "24700",
      age2024: "22000",
      meta2024: "18000",
      optimo2024: "18000",
      plan_accion: "",
      Responsable: "",
      Status: "En proceso",
      cumplimiento: "78%",

      data: {
        labels: ['2021', '2022', '2023', '(Actual)2024'],
        datasets: [
          {
            label: '% de satisfaccion de clientes',
            type: 'bar', // Tipo de gráfico para este dataset
            data: [26500, 25000, 24700, 22000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          },
          {
            label: '% esperado',
            type: 'line', // Tipo de gráfico para este dataset
            data: [18000, 18000, 18000, 18000],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          }
        ]
      },
    },
    {
        objBase_id: 8,
        name_perspectiva: "Procesos",
        objBase_name: "Incrementar la eficiencia del uso de vehículos",
        name_indicador: "Rendimiento de Combustible",
        formula_indicador: "Kilómetros recorridos / Litros de combustible consumido",
        fuente_de_datos: "Reporte de producción",
        tendencia: "Incrementar",
        frecuencia_medicion: "Anual",
        age2021: "8.7",
        age2022: "8.5", 
        age2023: "8.4", 
        meta2024: "≥ 10",
        optimo2024: "≥ 10.5",
        plan_accion: "Implementar monitoreo de consumo de combustible con telemetría.",
        Responsable: "Jefe de Operaciones",
        Status: "En proceso",
        cumplimiento: "84%",

        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
            {
              label: 'Rendimiento de Combustible km/L',
              type: 'bar', // Tipo de gráfico para este dataset
              data: [8.7, 8.5, 8.4, 8.5],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            },
            {
              label: 'Rendimiento de Combustible Esperado km/L',
              type: 'line', // Tipo de gráfico para este dataset
              data: [10, 10, 10, 10],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
    },
    {
        objBase_id: 9,
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
        Status: "En proceso",
        cumplimiento: "-22%",
        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
            {
              label: 'Tiempo de inactividad anual',
              type: 'bar', // Tipo de gráfico para este dataset
              data: [17, 18, 20, 21],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            },
            {
              label: 'Tiempo de inactividad esperado',
              type: 'line', // Tipo de gráfico para este dataset
              data: [9, 9, 9, 9],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
    },
    {
        objBase_id: 10,
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
        Status: "En proceso",
        cumplimiento: "81%",
        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
            {
              label: 'valoracion del clima laboral',
              type: 'bar', // Tipo de gráfico para este dataset
              data: [70, 85, 65, 75],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            },
            {
              label: 'valor esperado',
              type: 'line', // Tipo de gráfico para este dataset
              data: [80, 80, 80, 80],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
    },
    {
        objBase_id: 11,
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
        Status: "En proceso",
        cumplimiento: "88%",
        data: {
          labels: ['2021', '2022', '2023', '(Actual)2024'],
          datasets: [
            {
              label: '% cumplimiento de metas',
              type: 'line', // Tipo de gráfico para este dataset
              data: [60, 70, 75, 75],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            },
            {
              label: '% esperado',
              type: 'line', // Tipo de gráfico para este dataset
              data: [85, 85, 85, 85],
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              tension: 0, // Suaviza la curva de la línea
              pointRadius: 5 // Tamaño de los puntos en la línea
            }
          ]
        },
    }
])

    console.log(set_Objetivos_base);
    

  return (
    <LayoutDash>
        
        <div className="border rounded-lg shadow-sm w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
                <TableHead className="w-[40px]">N°</TableHead>
                <TableHead className="w-[100px]">PERSPECTIVA</TableHead>
                <TableHead className="w-[300px]">OBJETIVOS ESTRATEGICOS BASE</TableHead>
                <TableHead className="w-[200px]">NOMBRE DE INDICADOR</TableHead>
                {/* <TableHead className="w-[300px]">FORMULA DE INDICADOR</TableHead> */}
                <TableHead className="w-[150px]">FUENTE DE DATOS</TableHead>
                <TableHead className="w-[100px]">TENDENCIA</TableHead>
                <TableHead className="w-[100px]">FRECUENCIA DE MEDICION</TableHead>
                <TableHead className="w-[70px]">UMD</TableHead>
                <TableHead className="w-[70px]">2021</TableHead>
                <TableHead className="w-[70px]">2022</TableHead>
                <TableHead className="w-[70px]">2023</TableHead>
                <TableHead className="w-[70px]">2024</TableHead>
                <TableHead className="w-[100px]">META 2024</TableHead>
                <TableHead className="w-[100px]">OPTIMO 2024</TableHead>
                {/* <TableHead className="w-[50px]">PLAN DE ACCIÓN</TableHead> */}
                <TableHead className="w-[100px]">RESPONSABLE</TableHead>
                <TableHead className="w-[100px]">STATUS</TableHead>
                <TableHead className="w-[100px]">CUMPLIMIENTO</TableHead>




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
                  <TableCell>{obj_base.objBase_name}</TableCell>
                  <TableCell>{obj_base.name_indicador}</TableCell>
                  {/* <TableCell>{obj_base.formula_indicador}</TableCell> */}
                  <TableCell>{obj_base.fuente_de_datos}</TableCell>
                  <TableCell>{obj_base.tendencia}</TableCell>
                  <TableCell>{obj_base.frecuencia_medicion}</TableCell>
                  <TableCell>{obj_base.UMD}</TableCell>
                  <TableCell>{obj_base.age2021}</TableCell>
                  <TableCell>{obj_base.age2022}</TableCell>
                  <TableCell>{obj_base.age2022}</TableCell>
                  <TableCell>{obj_base.age2023}</TableCell>
                  <TableCell>{obj_base.meta2024}</TableCell>
                  <TableCell>{obj_base.optimo2024}</TableCell>
                  {/* <TableCell>{obj_base.plan_accion}</TableCell> */}
                  <TableCell>{obj_base.Responsable}</TableCell>
                  <TableCell>{obj_base.Status}</TableCell>
                  <TableCell className="text-center">{obj_base.cumplimiento}</TableCell>

                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </LayoutDash>
  )
}
