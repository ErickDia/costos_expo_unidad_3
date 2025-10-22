import LayoutDash from "../LayoutDash"

import { Button } from "@/components/ui/button";
// import { ArrowUpIcon, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, DoughnutController, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement
  // ChartData 
} from "chart.js/auto";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { requestApi } from "@/hooks/useRequestApi";

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

const souRatioSolvencia = [
  {
    "2020": "5.45",
    "2021": "4.35",
    "2022": "5.69",
    "2023": "5.51",
    "2024": "4.80",
    "SOLVENCIA": "Ratio de Garantía (Activo / Pasivo)"
  },
  {
    "2020": "1.62",
    "2021": "0.66",
    "2022": "2.01",
    "2023": "1.36",
    "2024": "1.44",
    "SOLVENCIA": "Ratio Fondo Maniobra (FM / PC)"
  },
  {
    "2020": "903,450",
    "2021": "526,776",
    "2022": "920,516",
    "2023": "681,377",
    "2024": "953,470",
    "SOLVENCIA": "Fondo de Maniobra"
  }
]
const souRatioLiquidez = [
  {
    "2020": "2.62",
    "2021": "1.66",
    "2022": "3.01",
    "2023": "2.36",
    "2024": "2.44",
    "SOLVENCIA": "Liquidez general (AC/PC)"
  },
  {
    "2020": "1.98",
    "2021": "1.25",
    "2022": "2.30",
    "2023": "1.74",
    "2024": "1.87",
    "SOLVENCIA": "Liquidez estricta (AC-E)/PC"
  },
  {
    "2020": "1.06",
    "2021": "0.33",
    "2022": "0.73",
    "2023": "0.49",
    "2024": "0.93",
    "SOLVENCIA": "Disponibilidad (D/PC)"
  }
]
const souRatioEndeudamiento = [
  {
    "2020": "0.1834",
    "2021": "0.2297",
    "2022": "0.1756",
    "2023": "0.1816",
    "2024": "0.2085",
    "SOLVENCIA": "Utilización Deuda (P/(P+PN))"
  },
  {
    "2020": "1.2246",
    "2021": "1.2983",
    "2022": "1.2130",
    "2023": "1.2219",
    "2024": "1.2635",
    "SOLVENCIA": "IAP"
  },
  {
    "2020": "0.8166",
    "2021": "0.7703",
    "2022": "0.8244",
    "2023": "0.8184",
    "2024": "0.7915",
    "SOLVENCIA": "Autonomía Financiera (PN/(P+PN))"
  },
  {
    "2020": "0.2246",
    "2021": "0.2983",
    "2022": "0.2130",
    "2023": "0.2219",
    "2024": "0.2635",
    "SOLVENCIA": "Endeudamiento General (P/PN)"
  },
  {
    "2020": "0.1254",
    "2021": "0.1528",
    "2022": "0.1370",
    "2023": "0.1394",
    "2024": "0.1595",
    "SOLVENCIA": "Endeudamiento L/p (PNC/PN)"
  },
  {
    "2020": "0.0992",
    "2021": "0.1454",
    "2022": "0.0760",
    "2023": "0.0826",
    "2024": "0.1040",
    "SOLVENCIA": "Endeudamiento C/p (PC/PN)"
  },
  {
    "2020": "0.4415",
    "2021": "0.4876",
    "2022": "0.3568",
    "2023": "0.3720",
    "2024": "0.3946",
    "SOLVENCIA": "Calidad deuda (PC/P)"
  },
  {
    "2020": "0.0039",
    "2021": "0.0027",
    "2022": "0.0012",
    "2023": "0.0011",
    "2024": "0.0053",
    "SOLVENCIA": "Endeudamiento bancario"
  },
  {
    "2020": "0.90",
    "2021": "1.20",
    "2022": "1.25",
    "2023": "1.16",
    "2024": "1.11",
    "SOLVENCIA": "Capacidad ec. devolución deuda (FCE/P)"
  },
  {
    "2020": "0.3%",
    "2021": "0.2%",
    "2022": "0.3%",
    "2023": "0.3%",
    "2024": "0.3%",
    "SOLVENCIA": "Carga Financiera (GF/V)"
  },
  {
    "2020": "9.64",
    "2021": "7.87",
    "2022": "13.04",
    "2023": "12.25",
    "2024": "10.28",
    "SOLVENCIA": "Apalancamiento financiero"
  },
  {
    "2020": "0.01",
    "2021": "0.00",
    "2022": "0.01",
    "2023": "0.01",
    "2024": "0.01",
    "SOLVENCIA": "Cobertura de gastos financieros (BAII/GF)"
  },
  {
    "2020": "48.98%",
    "2021": "65.37%",
    "2022": "155.48%",
    "2023": "143.88%",
    "2024": "37.65%",
    "SOLVENCIA": "Coste de la deuda financiera (kd)"
  }
]
const SouRatioRentabilidad = [
{
    "2020": "19.70%",
    "2021": "37.23%",
    "2022": "24.41%",
    "2023": "24.87%",
    "2024": "28.70%",
    "SOLVENCIA": "ROA"
  },
  {
    "2020": "116.10%",
    "2021": "236.95%",
    "2022": "184.51%",
    "2023": "175.35%",
    "2024": "213.73%",
    "SOLVENCIA": "ROE"
  },
  {
    "2020": "42.93%",
    "2021": "60.55%",
    "2022": "45.54%",
    "2023": "48.00%",
    "2024": "50.26%",
    "SOLVENCIA": "Margen Explotac."
  },
  {
    "2020": "0.46",
    "2021": "0.61",
    "2022": "0.54",
    "2023": "0.52",
    "2024": "0.57",
    "SOLVENCIA": "Rotación Activo"
  },
  {
    "2020": "189.98%",
    "2021": "292.90%",
    "2022": "318.22%",
    "2023": "304.59%",
    "2024": "295.17%",
    "SOLVENCIA": "Dupont (ROA x apalancamiento fin.)"
  },
  {
    "2020": "58%",
    "2021": "71%",
    "2022": "56%",
    "2023": "60%",
    "2024": "62%",
    "SOLVENCIA": "Margen Bruto"
  },
  {
    "2020": "56%",
    "2021": "70%",
    "2022": "54%",
    "2023": "58%",
    "2024": "60%",
    "SOLVENCIA": "EBITDA"
  },
  {
    "2020": "-29.28%",
    "2021": "-28.14%",
    "2022": "-131.07%",
    "2023": "-119.01%",
    "2024": "-8.95%",
    "SOLVENCIA": "Margen Financiero Activos (ROA-Kd)"
  },
  {
    "2020": "774,370",
    "2021": "1,579,182",
    "2022": "1,296,547",
    "2023": "1,186,338",
    "2024": "1,436,008",
    "SOLVENCIA": "NOPAT (BAII - impuestos)"
  },
  {
    "2020": "1,134,964",
    "2021": "1,958,533",
    "2022": "1,607,294",
    "2023": "1,563,865",
    "2024": "1,869,774",
    "SOLVENCIA": "Cash Flow Económico"
  },
  {
    "2020": "1,142,922",
    "2021": "1,967,663",
    "2022": "1,610,568",
    "2023": "1,550,292",
    "2024": "1,854,396",
    "SOLVENCIA": "Cash Flow Bruto"
  },
  {
    "2020": "",
    "2021": "-27,083",
    "2022": "221,974",
    "2023": "29,552",
    "2024": "224,598",
    "SOLVENCIA": "CAPEX"
  },
  {
    "2020": "",
    "2021": "",
    "2022": "",
    "2023": "",
    "2024": "",
    "SOLVENCIA": "Cambios en capital corriente"
  },
  {
    "2020": "",
    "2021": "1,940,580",
    "2022": "1,832,542",
    "2023": "1,579,844",
    "2024": "2,078,994",
    "SOLVENCIA": "Free Cash Flow"
  },
  {
    "2020": "97.43",
    "2021": "177.12",
    "2022": "114.06",
    "2023": "132.56",
    "2024": "143.80",
    "SOLVENCIA": "RCSD"
  }
]
const SouRatioOperativos = [
  {
    "2020": "0.25",
    "2021": "0.37",
    "2022": "0.24",
    "2023": "0.25",
    "2024": "0.29",
    "SOLVENCIA": "Rotación ANC"
  },
  {
    "2020": "2.16",
    "2021": "3.30",
    "2022": "2.84",
    "2023": "3.26",
    "2024": "2.85",
    "SOLVENCIA": "Rotación AC"
  },
  {
    "2020": "0.11",
    "2021": "0.23",
    "2022": "0.17",
    "2023": "0.16",
    "2024": "0.18",
    "SOLVENCIA": "Rotación de Activos Totales"
  },
  {
    "2020": "0.11",
    "2021": "0.22",
    "2022": "0.17",
    "2023": "0.16",
    "2024": "0.20",
    "SOLVENCIA": "Rotación de Activo Fijo"
  },
  {
    "2020": "0.06",
    "2021": "0.12",
    "2022": "0.09",
    "2023": "0.08",
    "2024": "0.10",
    "SOLVENCIA": "Rotación Activo Circulante"
  },
  {
    "2020": "107",
    "2021": "100",
    "2022": "69",
    "2023": "76",
    "2024": "71",
    "SOLVENCIA": "PMV"
  },
  {
    "2020": "3.40",
    "2021": "3.655",
    "2022": "5.260",
    "2023": "4.797",
    "2024": "5.111",
    "SOLVENCIA": "Rotacion de Inventario"
  },
  {
    "2020": "37",
    "2021": "39",
    "2022": "47",
    "2023": "43",
    "2024": "35",
    "SOLVENCIA": "PMC"
  },
  {
    "2020": "2.07",
    "2021": "2.94",
    "2022": "2.10",
    "2023": "2.2",
    "2024": "2.78",
    "SOLVENCIA": "Rotación de CxC"
  },
  {
    "2020": "145",
    "2021": "139",
    "2022": "117",
    "2023": "120",
    "2024": "106",
    "SOLVENCIA": "PMME"
  },
  {
    "2020": "58",
    "2021": "59",
    "2022": "43",
    "2023": "49",
    "2024": "40",
    "SOLVENCIA": "PMP"
  },
  {
    "2020": "87",
    "2021": "80",
    "2022": "74",
    "2023": "71",
    "2024": "67",
    "SOLVENCIA": "PMMF"
  },
  {
    "2020": "395,688",
    "2021": "437,196",
    "2022": "591,322",
    "2023": "523,290",
    "2024": "438,354",
    "SOLVENCIA": "NOF"
  },
  {
    "2020": "903,450",
    "2021": "526,776",
    "2022": "920,516",
    "2023": "681,377",
    "2024": "953,470",
    "SOLVENCIA": "Fondo de Maniobra"
  },
  {
    "2020": "-507,762",
    "2021": "-89,580",
    "2022": "-329,194",
    "2023": "-158,087",
    "2024": "-515,116",
    "SOLVENCIA": "NRN"
  },
  {
    "2020": "7,284",
    "2021": "7,577",
    "2022": "7,258",
    "2023": "6,879",
    "2024": "6,355",
    "SOLVENCIA": "RNC"
  },
  {
    "2020": "515,046",
    "2021": "97,157",
    "2022": "336,452",
    "2023": "164,966",
    "2024": "521,471",
    "SOLVENCIA": "(+) EXCEDENTE TESORERÍA (-) RF"
  }
]
const souRatioEstructuraBalance = [
  {
    "2020": "82%",
    "2021": "77%",
    "2022": "82%",
    "2023": "82%",
    "2024": "79%",
    "SOLVENCIA": "Peso Patrimonio Neto"
  },
  {
    "2020": "10%",
    "2021": "12%",
    "2022": "11%",
    "2023": "11%",
    "2024": "13%",
    "SOLVENCIA": "Peso Pasivo No corriente"
  },
  {
    "2020": "8%",
    "2021": "11%",
    "2022": "6%",
    "2023": "7%",
    "2024": "8%",
    "SOLVENCIA": "Peso Pasivo Corriente"
  },
  {
    "2020": "104%",
    "2021": "95%",
    "2022": "102%",
    "2023": "97%",
    "2024": "99%",
    "SOLVENCIA": "Ratio de cobertura del inmovilizado"
  },
  {
    "2020": "79%",
    "2021": "81%",
    "2022": "81%",
    "2023": "84%",
    "2024": "80%",
    "SOLVENCIA": "Peso activos no corrientes"
  },
  {
    "2020": "21%",
    "2021": "19%",
    "2022": "19%",
    "2023": "16%",
    "2024": "20%",
    "SOLVENCIA": "Peso activos corrientes"
  }
]
const souRatios = [
  {
    "2020": "2020",
    "2021": "2021",
    "2022": "2022",
    "2023": "2023",
    "2024": "2024",
    "SOLVENCIA": "SOLVENCIA"
  },
  {
    "2020": "2020",
    "2021": "2021",
    "2022": "2022",
    "2023": "2023",
    "2024": "2024",
    "SOLVENCIA": "LIQUIDEZ"
  },
  {
    "2020": "2020",
    "2021": "2021",
    "2022": "2022",
    "2023": "2023",
    "2024": "2024",
    "SOLVENCIA": "ENDEUDAMIENTO"
  },
  
  {
    "2020": "2020",
    "2021": "2021",
    "2022": "2022",
    "2023": "2023",
    "2024": "2024",
    "SOLVENCIA": "RENTABILIDAD Y MÁRGENES"
  },
  
  {
    "2020": "2020",
    "2021": "2021",
    "2022": "2022",
    "2023": "2023",
    "2024": "2024",
    "SOLVENCIA": "RATIOS OPERATIVOS"
  },
  
  {
    "2020": "2020",
    "2021": "2021",
    "2022": "2022",
    "2023": "2023",
    "2024": "2024",
    "SOLVENCIA": "ESTRUCTURA BALANCE"
  }
]




export const RatioComparativo = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Ratio Comparativo (Southern Copper vs Buena Ventura)</h2>
      
      <Card>
        <CardContent className="flex justify-center p-3 gap-4 flex-wrap">
          <Button variant="outline">Solvencia</Button>
          <Button variant="outline">Liquidez</Button>
          <Button variant="outline">Endeudamiento</Button>
          <Button variant="outline">Rentabilidad y Márgenes</Button>
          <Button variant="outline">Ratios Operativos</Button>
          <Button variant="outline">Estructura Balance</Button>
        </CardContent>
      </Card>
      
        <div className="w-full mt-5">
                <Card className="md:w-[100%] w-full min-h-[300px] max-h-[400px] p-10 flex justify-center flex-col">
                  <p className="text-center text-2xl font-semibold text-gray-500">FONDO DE MANIOBRA</p>
                  <Chart type="bar" className="w-full max-h-[550px]" 
                  data = {{
                    "labels": [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024"
                    ],
                    "datasets": [
                        {
                            "label": "Southern Copper Perú",
                            "data": [
                            903450,
                            526776,
                            920516,
                            681377,
                            953470
                            ],
                            // "type": "bar",
                            "type": "line",
                            "tension": 0.3,
                            "borderColor": "rgba(122, 9, 33, 1)",
                            "pointRadius": 2,
                            "backgroundColor": "rgba(122, 9, 33, 0.54)",
                            "borderWidth": 2
                        },
                        {
                            "label": "Buena Ventura",
                            "type": "line",
                            "data": [
                              93517,	-167808,	108039,	9242,	170447
                            ],
                            "borderColor": "rgba(11, 100, 164, 1)",
                            "backgroundColor": "rgba(11, 100, 164, 0.52)",
                            "borderWidth": 2,
                            "tension": 0.3,
                            "pointRadius": 2
                        }
                    ]
                  }} 
                  options = {{
                          responsive: true,
                          maintainAspectRatio: false, 
                          interaction: {
                            mode: 'nearest',   // Busca el punto más cercano
                            axis: 'x',         // O 'xy' si quieres que considere ambos ejes
                            intersect: false,  // No exige que el cursor esté justo sobre el punto
                          },
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
                            },
                            tooltip: {
                              enabled: true,  // Asegura que el tooltip esté activo
                              mode: 'nearest',
                              intersect: false,
                              callbacks: {
                                // Puedes personalizar lo que se muestra en el tooltip
                                label: function (context) {
                                  const value = context.parsed.y.toLocaleString('es-PE');
                                  return `${context.dataset.label}: ${value}`;
                                },
                              },
                            },
                          }
                        }}/>
                </Card>

        </div>
        <Card className="mt-5">
          <CardContent className="flex justify-center p-3 gap-4 flex-wrap">
            <Button variant="outline">Fondo de Maniobra</Button>
            <Button variant="outline">Ratio de Garantía (Activo / Pasivo)</Button>
            <Button variant="outline">Ratio Fondo Maniobra (FM / PC)</Button>
          </CardContent>
      </Card>
      <div className="flex gap-4">

      <Card className="mt-5 p-4 w-full">
        
        <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[70px] ">Ratios</TableHead>
                            <TableHead className="w-[70px] text-center">2020</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-center">2023</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="0" className=" w-full">

                          <TableCell className="font-bold">Fondo de Maniobra</TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2020</p></div></TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2021</p></div></TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2022</p></div></TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2023</p></div></TableCell>
                      </TableRow>
                    </TableBody>
                </Table>

                
      </Card>
      <Card  className="mt-5 p-4 w-full">
        <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[70px] ">Ratios</TableHead>
                            <TableHead className="w-[70px] text-center">awdwa</TableHead>
                            <TableHead className="w-[70px] text-center">awda</TableHead>
                            <TableHead className="w-[70px] text-center">awdwa</TableHead>
                            <TableHead className="w-[70px] text-center">awda</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="0" className=" w-full">

                          <TableCell className="font-bold">2020</TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2020</p></div></TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2021</p></div></TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2022</p></div></TableCell>
                          <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>2023</p></div></TableCell>
                      </TableRow>
                    </TableBody>
                </Table>
      </Card>
      </div>

    </LayoutDash>
  )
}
