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
  const [objetivos_base, set_Objetivos_base] = useState<{ data: ChartDataw, objBase_id?: number, name_perspectiva?: string, objBase_name?: string, name_indicador?: string, formula_indicador?: string, fuente_de_datos?: string, tendencia?: string, frecuencia_medicion?: string, UMD?:string  }[]>([
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
        name_perspectiva: "Procesos",
        objBase_name: "Incrementar la eficiencia del uso de vehículos",
        name_indicador: "Rendimiento de Combustible",
        formula_indicador: "Kilómetros recorridos / Litros de combustible consumido",
        fuente_de_datos: "Reporte de producción",
        tendencia: "Incrementar",
        frecuencia_medicion: "Anual",
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
        objBase_id: 5,
        name_perspectiva: "Procesos",
        objBase_name: "Reducir el tiempo de inactividad por mantenimiento",
        name_indicador: "Frecuencia de Averías",
        formula_indicador: "Tiempo total de reparaciones + tiempo de mantenimientos",
        fuente_de_datos: "Reporte de mantenimiento",
        tendencia: "Reducir",
        frecuencia_medicion: "Anual",
        UMD: "Horas",
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
        objBase_id: 6,
        name_perspectiva: "Aprendizaje",
        objBase_name: "Mejorar la capacidad de análisis para decisiones vehiculares",
        name_indicador: "Índice de Clima Laboral",
        formula_indicador: "N° Empleados con valoración >= 4 / Total de empleados",
        fuente_de_datos: "Encuesta de clima laboral",
        tendencia: "Incrementar",
        frecuencia_medicion: "Anual",
        UMD: "%",
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
        objBase_id: 7,
        name_perspectiva: "Aprendizaje",
        objBase_name: "Incrementar el uso de tecnología para optimizar la gestión",
        name_indicador: "Tasa de cumplimiento de metas",
        formula_indicador: "N° empleados que cumplieron el objetivo / Total de empleados",
        fuente_de_datos: "Cuadro de control de objetivos del personal",
        tendencia: "Incrementar",
        frecuencia_medicion: "Mensual/Anual",
        UMD: "%",
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
        <h1 className="mb-3">FINANCIERA</h1>
        <div className="flex justify-between pb-6 md:flex-row flex-col">
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full max-h-[550px]"  data = {objetivos_base[0].data} options = {{
                  scales: {
                    y: {  
                      beginAtZero: true 
                    }
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full"  data = {objetivos_base[1].data} options = {{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
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
        <h1 className="mb-3">Cliente</h1>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full"  data = {objetivos_base[2].data} options = {{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
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
        <h1 className="mb-3">PROCESOS</h1>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full"  data = {objetivos_base[3].data} options = {{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full"  data = {objetivos_base[4].data} options = {{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
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
        <h1 className="mb-3">APRENDIZAJE</h1>
        <div className="flex justify-between pb-10 md:flex-row flex-col">
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full"  data = {objetivos_base[5].data} options = {{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top'
                    }
                  }
                }}/>
          </Card>
          <Card className="md:w-[49%] w-full max-h-[550px] p-10 flex justify-center">
            <Chart type="bar" className="w-full"  data = {objetivos_base[6].data} options = {{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
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