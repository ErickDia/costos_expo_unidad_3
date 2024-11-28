import LayoutDash from "../LayoutDash"
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, DoughnutController, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement
  // ChartData 
} from "chart.js/auto";
import { Card } from "@/components/ui/card";
import { useState } from "react";

ChartJS.register(
  BarElement,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

type ChartDataw = {
  labels: string[],
  datasets: {
    label: string,
    data: number[],
    backgroundColor?: string | string[],
    borderColor?: string | string[],
    borderWidth?: number
    type?: 'line' | 'bar'
    tension?: number
    pointRadius?: number
  }[]
};

// const data: ChartData<'bar' | 'line', number[], string> = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//       {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       type: 'bar',
//       backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       borderWidth: 1
//     },
//     {
//       label: '# of Votes (Line)',
//       type: 'line', // Tipo de gráfico para este dataset
//       data: [10, 15, 8, 6, 3, 3],
//       borderColor: 'rgba(255, 99, 132, 1)',
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderWidth: 2,
//       tension: 0, // Suaviza la curva de la línea
//       pointRadius: 5 // Tamaño de los puntos en la línea
//     }
//   ]
// }

// const doughnutData = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green'],
//   datasets: [
//     {
//       label: 'Category Distribution',
//       data: [20, 30, 25, 25],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//       borderWidth: 1
//     }
//   ]
// };


function Dashboard() {
  const [objetivos_base, set_Objetivos_base] = useState<{ data: ChartDataw, objBase_id?: number, name_perspectiva?: string, objBase_name?: string, name_indicador?: string, formula_indicador?: string, fuente_de_datos?: string, tendencia?: string, frecuencia_medicion?: string, UMD?:string, age2021?: string, age2022?: string, age2023?: string, age2024?: string, meta2024?: string, optimo2024?: string, plan_accion?: string, Responsable?: string, Status?: string }[]>([
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
      data: {
        labels: ['2021', '2022', '2023', '(Actual)2024'],
        datasets: [
          {
            label: 'costo de reclamos',
            type: 'bar', // Tipo de gráfico para este dataset
            data: [26500, 25000, 24700, 22000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            tension: 0, // Suaviza la curva de la línea
            pointRadius: 5 // Tamaño de los puntos en la línea
          },
          {
            label: 'costo esperado',
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

  const [graficoVocimetro, setgraficoVocimetro] = useState([
    {
      id: 1,
      name: "Finaciera",
      porcentaje: "96.64%",
      porcentajenum: 0.9664
    },
    {
      id: 2,
      name: "Cliente",
      porcentaje: "80.44%",
      porcentajenum: 0.8044
    },
    {
      id: 3,
      name: "Proceso",
      porcentaje: "30.89%",
      porcentajenum: 0.3089
    },
    {
      id: 4,
      name: "Aprendizaje",
      porcentaje: "84.74%",
      porcentajenum: 0.8474
    }
  ])

console.log(set_Objetivos_base, setgraficoVocimetro);

  

  return (
    <LayoutDash>
        {/* <h1 className="mb-3">FINANCIERA</h1> */}
        <div className="flex justify-between pb-6 md:flex-row flex-col">
          <Card className="w-[100%] max-h-[450px] flex justify-center p-10 relative">
            <p className="absolute bottom-[30%] left-auto font-bold text-3xl text-gray-600">
              {graficoVocimetro[0].porcentaje}
            </p>
            <p className="absolute bottom-10 left-auto font-bold text-4xl text-gray-600">
              {graficoVocimetro[0].name}
            </p>
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={{
                labels: ['Filled', 'Empty'],
                datasets: [
                  {
                    data: [graficoVocimetro[0].porcentajenum, 1 - graficoVocimetro[0].porcentajenum], // Rellena según el porcentaje
                    backgroundColor: ['#36A2EB', '#E5E5E5'], // Color del indicador y del espacio vacío
                    borderWidth: 0, // Sin bordes
                  },
                ],
              }}
              options={{
                circumference: 180, // Muestra solo un semicírculo (180 grados)
                rotation: -90, // Empieza desde abajo (-90 grados)
                plugins: {
                  legend: {
                    display: false, // Oculta la leyenda
                  },
                  tooltip: {
                    enabled: false, // Opcional: deshabilitar tooltips
                  },
                },
              }}
            />
          </Card>
        </div>
        <div className="flex justify-between pb-6 md:flex-row flex-col">
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[0].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[1].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          {/* <Card className="w-[49%] max-h-[350px] flex justify-center p-10">
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={doughnutData}
              // className="bg-slate-800"
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: 'top'
                  }
                }
              }}
            />
          </Card> */}
        </div>
        {/* <h1 className="mb-3">Cliente</h1> */}
        <div className="flex justify-between pb-6 md:flex-row flex-col">
          <Card className="w-[100%] max-h-[450px] flex justify-center p-10 relative">
            <p className="absolute bottom-[30%] left-auto font-bold text-3xl text-gray-600">
              {graficoVocimetro[1].porcentaje}
            </p>
            <p className="absolute bottom-10 left-auto font-bold text-4xl text-gray-600">
              {graficoVocimetro[1].name}
            </p>
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={{
                labels: ['Filled', 'Empty'],
                datasets: [
                  {
                    data: [graficoVocimetro[1].porcentajenum, 1 - graficoVocimetro[1].porcentajenum], // Rellena según el porcentaje
                    backgroundColor: ['#36A2EB', '#E5E5E5'], // Color del indicador y del espacio vacío
                    borderWidth: 0, // Sin bordes
                  },
                ],
              }}
              options={{
                circumference: 180, // Muestra solo un semicírculo (180 grados)
                rotation: -90, // Empieza desde abajo (-90 grados)
                plugins: {
                  legend: {
                    display: false, // Oculta la leyenda
                  },
                  tooltip: {
                    enabled: false, // Opcional: deshabilitar tooltips
                  },
                },
              }}
            />
          </Card>
        </div>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[2].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[3].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          {/* <Card className="w-[49%] max-h-[350px] flex justify-center p-10">
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={doughnutData}
              // className="bg-slate-800"
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: 'top'
                  }
                }
              }}
            />
          </Card> */}
        </div>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
        <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[4].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[5].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
        </div>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
        <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[6].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
        </div>
        {/* <h1 className="mb-3">PROCESOS</h1> */}
        <div className="flex justify-between pb-6 md:flex-row flex-col">
          <Card className="w-[100%] max-h-[450px] flex justify-center p-10 relative">
            <p className="absolute bottom-[30%] left-auto font-bold text-3xl text-gray-600">
              {graficoVocimetro[2].porcentaje}
            </p>
            <p className="absolute bottom-10 left-auto font-bold text-4xl text-gray-600">
              {graficoVocimetro[2].name}
            </p>
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={{
                labels: ['Filled', 'Empty'],
                datasets: [
                  {
                    data: [graficoVocimetro[2].porcentajenum, 1 - graficoVocimetro[2].porcentajenum], // Rellena según el porcentaje
                    backgroundColor: ['#36A2EB', '#E5E5E5'], // Color del indicador y del espacio vacío
                    borderWidth: 0, // Sin bordes
                  },
                ],
              }}
              options={{
                circumference: 180, // Muestra solo un semicírculo (180 grados)
                rotation: -90, // Empieza desde abajo (-90 grados)
                plugins: {
                  legend: {
                    display: false, // Oculta la leyenda
                  },
                  tooltip: {
                    enabled: false, // Opcional: deshabilitar tooltips
                  },
                },
              }}
            />
          </Card>
        </div>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
        <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[7].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[8].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          {/* <Card className="w-[49%] max-h-[350px] flex justify-center p-10">
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={doughnutData}
              // className="bg-slate-800"
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: 'top'
                  }
                }
              }}
            />
          </Card> */}
        </div>
        {/* <h1 className="mb-3">APRENDIZAJE</h1> */}

        <div className="flex justify-between pb-6 md:flex-row flex-col">
          <Card className="w-[100%] max-h-[450px] flex justify-center p-10 relative">
            <p className="absolute bottom-[30%] left-auto font-bold text-3xl text-gray-600">
              {graficoVocimetro[3].porcentaje}
            </p>
            <p className="absolute bottom-10 left-auto font-bold text-4xl text-gray-600">
              {graficoVocimetro[3].name}
            </p>
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={{
                labels: ['Filled', 'Empty'],
                datasets: [
                  {
                    data: [graficoVocimetro[3].porcentajenum, 1 - graficoVocimetro[3].porcentajenum], // Rellena según el porcentaje
                    backgroundColor: ['#36A2EB', '#E5E5E5'], // Color del indicador y del espacio vacío
                    borderWidth: 0, // Sin bordes
                  },
                ],
              }}
              options={{
                circumference: 180, // Muestra solo un semicírculo (180 grados)
                rotation: -90, // Empieza desde abajo (-90 grados)
                plugins: {
                  legend: {
                    display: false, // Oculta la leyenda
                  },
                  tooltip: {
                    enabled: false, // Opcional: deshabilitar tooltips
                  },
                },
              }}
            />
          </Card>
        </div>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
        <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[9].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full min-h-[300px] max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[10].data} options = {{
                  responsive: true,
                  maintainAspectRatio: false, 
                  scales: {
                    x: {
                      ticks: {
                        maxTicksLimit: 10, 
                        autoSkip: false,// Limita el número de etiquetas en el eje X
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          {/* <Card className="w-[49%] max-h-[350px] flex justify-center p-10">
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={doughnutData}
              // className="bg-slate-800"
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: 'top'
                  }
                }
              }}
            />
          </Card> */}
        </div>
        
        
        
    </LayoutDash>
  )
}

export default Dashboard