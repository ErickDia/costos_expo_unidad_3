import LayoutDash from "../LayoutDash"
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, DoughnutController, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement
  // ChartData 
} from "chart.js/auto";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { requestApi } from "@/hooks/useRequestApi";

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
type Dataset = {
  label: string;
  data?: number[];
  type?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  tension?: number;
  pointRadius?: number;
};

type Data = {
  labels?: string[];
  datasets: Dataset[];
};

type Indicador = {
  objBase_id: number;
  name_perspectiva?: string;
  objBase_name?: string;
  name_indicador?: string;
  formula_indicador?: string;
  fuente_de_datos?: string;
  tendencia: string;
  frecuencia_medicion?: string;
  UMD?: string;
  age2021: string;
  age2022: string;
  age2023: string;
  age2024: string;
  meta2024: string;
  optimo2024?: string;
  plan_accion?: string;
  Responsable?: string;
  Status?: string;
  cumplimiento?: string;
  data: Data;
};

type Perspectiva = {
  perspectiva: string;
  indicadores: Indicador[];
  promedio: number;
};

function Dashboardedit() {
  
  const [perspectivas, set_perspectivas] = useState<Perspectiva[]>([])

  useEffect(() => {
    // const data: Perspectiva[] = datajson;
    requestApi({ url: `/api/v1/costos/indicadores`, type: 'GET'})
      .then(({ data }) => {
        set_perspectivas(data.map((perspectiva:Perspectiva) => {
          return {
            ...perspectiva,
            promedio: (perspectiva.indicadores.reduce((acumulador, valorActual) => {
              return acumulador += valorActual.tendencia == "Incrementar" ? 
              ((1-(parseFloat(valorActual.meta2024) - parseFloat(valorActual.age2024))/parseFloat(valorActual.meta2024))*100) : 
              ((1+(parseFloat(valorActual.meta2024) - parseFloat(valorActual.age2024))/parseFloat(valorActual.meta2024))*100)
            }, 0))/perspectiva.indicadores.length
          }

        }));
      });
    
    
    // set_Objetivos_base(datajson)
  }, [])

  const [seleccion, setseleccion] = useState("Financiera")


  return (
    <LayoutDash>
      
        <div>
          {
            perspectivas.length > 0 ? (
              <>
                <div className="flex justify-center gap-2 pb-6 md:flex-row flex-col">
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-2xl cursor-pointer" onClick={() => {setseleccion("Financiera")}}>FINANCIERA</Badge>
                  <Badge className="bg-purple-500 hover:bg-purple-600 text-2xl cursor-pointer" onClick={() => {setseleccion("Cliente")}}>CLIENTE</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-2xl cursor-pointer" onClick={() => {setseleccion("Procesos")}}>PROCESO</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600 text-2xl cursor-pointer" onClick={() => {setseleccion("Aprendizaje")}}>APRENDIZAJE</Badge>
                </div>
                {
                  perspectivas.map((perspectiva) => {
                    if (perspectiva.perspectiva == seleccion) {
                      return (
                        <>
                          <div className="flex justify-between pb-6 md:flex-row flex-col" key={perspectiva.perspectiva}>
                            <Card className="w-[100%] max-h-[450px] flex justify-center p-10 relative">
                              <p className="absolute bottom-[30%] left-auto font-bold text-3xl text-gray-600">
                                {perspectiva.promedio?.toFixed(2)}%
                              </p>
                              <p className="absolute bottom-10 left-auto font-bold text-4xl text-gray-600">
                                {perspectiva.perspectiva}
                              </p>
                              <Chart
                                type="doughnut" // Cambiar el tipo a doughnut
                                data={{
                                  labels: ['Filled', 'Empty'],
                                  datasets: [
                                    {
                                      data: [perspectiva.promedio/100, 1 - perspectiva.promedio/100], // Rellena según el porcentaje
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
                          <div className="grid grid-cols-2 gap-5 w-full">
                            {
                              perspectiva.indicadores.map((indicador) => {
                                return (
                                  <Card className="md:w-[100%] w-full min-h-[300px] max-h-[400px] p-10 flex justify-center flex-col">
                                    <p className="text-center text-2xl font-semibold text-gray-500">{indicador.objBase_name}</p>
                                    <Chart type="bar" className="w-full max-h-[550px]" 
                                    data = {{
                                      "labels": [
                                      "2021",
                                      "2022",
                                      "2023",
                                      "(Actual)2024"
                                      ],
                                      "datasets": [
                                          {
                                              "label": indicador.data.datasets[0].label,
                                              "data": [
                                              parseFloat(indicador.age2021),
                                              parseFloat(indicador.age2022),
                                              parseFloat(indicador.age2023),
                                              parseFloat(indicador.age2024)
                                              ],
                                              "type": "bar",
                                              "backgroundColor": "rgba(75, 192, 192, 0.6)",
                                              "borderWidth": 1
                                          },
                                          {
                                              "label": indicador.data.datasets[1].label,
                                              "type": "line",
                                              "data": [
                                                parseFloat(indicador.meta2024),
                                                parseFloat(indicador.meta2024),
                                                parseFloat(indicador.meta2024),
                                                parseFloat(indicador.meta2024)
                                              ],
                                              "borderColor": "rgba(255, 99, 132, 1)",
                                              "backgroundColor": "rgba(255, 99, 132, 0.2)",
                                              "borderWidth": 2,
                                              "tension": 0,
                                              "pointRadius": 5
                                          }
                                      ]
                                    }} 
                                    options = {{
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
                                )
                              })
                            }



                          </div>
                        </>
                        
                        
                      )
                    } else {
                      return ''
                    }
                  })
                
                }
              </>
          ): ""}
        </div>
      
        {/* <h1 className="mb-3">FINANCIERA</h1> */}
        
        
    </LayoutDash>
  )
}

export default Dashboardedit