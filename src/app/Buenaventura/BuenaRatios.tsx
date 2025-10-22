import LayoutDash from "../LayoutDash"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from '@/components/ui/table';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ratioSolvencia = [
  {
    "2020": "5.31",
    "2021": "2.64",
    "2022": "4.58",
    "2023": "4.24",
    "2024": "4.29",
    "SOLVENCIA": "Ratio de Garantía (Activo / Pasivo)"
  },
  {
    "2020": "0.49",
    "2021": "-0.32",
    "2022": "0.65",
    "2023": "0.04",
    "2024": "0.52",
    "SOLVENCIA": "Ratio Fondo Maniobra (FM / PC)"
  },
  {
    "2020": "93,517",
    "2021": "-167,808",
    "2022": "108,039",
    "2023": "9,242",
    "2024": "170,447",
    "SOLVENCIA": "Fondo de Maniobra"
  },
]
const ratioLiquidez = [
  {
    "2020": "1.49",
    "2021": "0.68",
    "2022": "1.65",
    "2023": "1.04",
    "2024": "1.52",
    "SOLVENCIA": "Liquidez general (AC/PC)"
  },
  {
    "2020": "1.30",
    "2021": "0.62",
    "2022": "1.41",
    "2023": "0.89",
    "2024": "1.39",
    "SOLVENCIA": "Liquidez estricta (AC-E)/PC"
  },
  {
    "2020": "0.36",
    "2021": "0.41",
    "2022": "0.75",
    "2023": "0.26",
    "2024": "0.82",
    "SOLVENCIA": "Disponibilidad (D/PC)"
  }
]
const ratioEndeudamiento = [
  {
    "2020": "0.19",
    "2021": "0.38",
    "2022": "0.22",
    "2023": "0.24",
    "2024": "0.23",
    "SOLVENCIA": "Utilización Deuda (P/(P+PN))"
  },
  {
    "2020": "1.23",
    "2021": "1.61",
    "2022": "1.28",
    "2023": "1.31",
    "2024": "1.30",
    "SOLVENCIA": "IAP"
  },
  {
    "2020": "0.81",
    "2021": "0.62",
    "2022": "0.78",
    "2023": "0.76",
    "2024": "0.77",
    "SOLVENCIA": "Autonomía Financiera (PN/(P+PN))"
  },
  {
    "2020": "0.23",
    "2021": "0.61",
    "2022": "0.28",
    "2023": "0.31",
    "2024": "0.30",
    "SOLVENCIA": "Endeudamiento General (P/PN)"
  },
  {
    "2020": "0.16",
    "2021": "0.38",
    "2022": "0.22",
    "2023": "0.22",
    "2024": "0.21",
    "SOLVENCIA": "Endeudamiento L/p (PNC/PN)"
  },
  {
    "2020": "0.07",
    "2021": "0.22",
    "2022": "0.06",
    "2023": "0.09",
    "2024": "0.10",
    "SOLVENCIA": "Endeudamiento C/p (PC/PN)"
  },
  {
    "2020": "0.31",
    "2021": "0.37",
    "2022": "0.20",
    "2023": "0.28",
    "2024": "0.32",
    "SOLVENCIA": "Calidad deuda (PC/P)"
  },
  {
    "2020": "0.13",
    "2021": "0.35",
    "2022": "0.18",
    "2023": "0.18",
    "2024": "0.16",
    "SOLVENCIA": "Endeudamiento bancario"
  },
  {
    "2020": "-0.05",
    "2021": "-0.12",
    "2022": "0.82",
    "2023": "0.11",
    "2024": "0.47",
    "SOLVENCIA": "Capacidad ec. devolución deuda (FCE/P)"
  },
  {
    "2020": "6.96%",
    "2021": "11.73%",
    "2022": "11.83%",
    "2023": "28.98%",
    "2024": "7.85%",
    "SOLVENCIA": "Carga Financiera (GF/V)"
  },
  {
    "2020": "13.17",
    "2021": "-6.28",
    "2022": "-38.66",
    "2023": "-78.67",
    "2024": "32.04",
    "SOLVENCIA": "Apalancamiento financiero"
  },
  {
    "2020": "-3.57",
    "2021": "-2.03",
    "2022": "-1.48",
    "2023": "-0.10",
    "2024": "3.80",
    "SOLVENCIA": "Cobertura de gastos financieros (BAII/GF)"
  },
  {
    "2020": "7.24%",
    "2021": "5.70%",
    "2022": "7.39%",
    "2023": "18.87%",
    "2024": "9.45%",
    "SOLVENCIA": "Coste de la deuda financiera (kd)"
  }
]
const ratioRentabilidad = [
{
    "2020": "-0.03",
    "2021": "-0.03",
    "2022": "-0.02",
    "2023": "0.00",
    "2024": "0.04",
    "SOLVENCIA": "ROA"
  },
  {
    "2020": "-0.12",
    "2021": "-0.23",
    "2022": "0.52",
    "2023": "0.02",
    "2024": "0.35",
    "SOLVENCIA": "ROE"
  },
  {
    "2020": "-0.25",
    "2021": "-0.24",
    "2022": "-0.18",
    "2023": "-0.03",
    "2024": "0.30",
    "SOLVENCIA": "Margen Explotac."
  },
  {
    "2020": "0.11",
    "2021": "0.11",
    "2022": "0.09",
    "2023": "0.09",
    "2024": "0.15",
    "SOLVENCIA": "Rotación Activo"
  },
  {
    "2020": "-0.35",
    "2021": "0.16",
    "2022": "0.61",
    "2023": "0.22",
    "2024": "1.44",
    "SOLVENCIA": "Dupont (ROA x apalancamiento fin.)"
  },
  {
    "2020": "0.22",
    "2021": "0.16",
    "2022": "0.24",
    "2023": "0.26",
    "2024": "0.43",
    "SOLVENCIA": "Margen Bruto"
  },
  {
    "2020": "0.07",
    "2021": "0.04",
    "2022": "0.09",
    "2023": "0.11",
    "2024": "0.33",
    "SOLVENCIA": "EBITDA"
  },
  {
    "2020": "-9.88%",
    "2021": "-8.24%",
    "2022": "-8.96%",
    "2023": "-19.15%",
    "2024": "-4.95%",
    "SOLVENCIA": "Margen Financiero Activos (ROA-Kd)"
  },
  {
    "2020": "-88,502",
    "2021": "-58,134",
    "2022": "-37,324",
    "2023": "-40,619",
    "2024": "131,279",
    "SOLVENCIA": "NOPAT (BAII - impuestos)"
  },
  {
    "2020": "-28,440",
    "2021": "-167,687",
    "2022": "688,248",
    "2023": "97,978",
    "2024": "484,567",
    "SOLVENCIA": "Cash Flow Económico"
  },
  {
    "2020": "-5,952",
    "2021": "-125,720",
    "2022": "716,906",
    "2023": "198,760",
    "2024": "531,123",
    "SOLVENCIA": "Cash Flow Bruto"
  },
  {
    "2020": "-2,557,386",
    "2021": "-383,869",
    "2022": "-33,177",
    "2023": "-2,244",
    "2024": "-182,678",
    "SOLVENCIA": "CAPEX"
  },
  {
    "2020": "-2,563,338",
    "2021": "-509,589",
    "2022": "683,729",
    "2023": "196,516",
    "2024": "348,445",
    "SOLVENCIA": "Free Cash Flow"
  },
  {
    "2020": "0.32",
    "2021": "0.15",
    "2022": "0.77",
    "2023": "0.40",
    "2024": "4.24",
    "SOLVENCIA": "RCSD"
  }
]
const ratioOperativos = [
  {
    "2020": "0.116137151",
    "2021": "0.117842436",
    "2022": "0.096756129",
    "2023": "0.098347185",
    "2024": "0.169726777",
    "SOLVENCIA": "Rotación ANC"
  },
  {
    "2020": "1.21",
    "2021": "1.12",
    "2022": "1.26",
    "2023": "1.33",
    "2024": "1.34",
    "SOLVENCIA": "Rotación AC"
  },
  {
    "2020": "-0.04",
    "2021": "-0.07",
    "2022": "0.16",
    "2023": "0.01",
    "2024": "0.09",
    "SOLVENCIA": "Rotacion de Activos totales"
  },
  {
    "2020": "-0.09",
    "2021": "-0.17",
    "2022": "0.39",
    "2023": "0.01",
    "2024": "0.21",
    "SOLVENCIA": "Rotación de Activo Fijo"
  },
  {
    "2020": "-0.021",
    "2021": "-0.037",
    "2022": "0.084",
    "2023": "0.003",
    "2024": "0.052",
    "SOLVENCIA": "Rotación de Activo Circulante"
  },
  {
    "2020": "0.30",
    "2021": "0.30",
    "2022": "0.29",
    "2023": "0.30",
    "2024": "0.29",
    "SOLVENCIA": "PMV"
  },
  {
    "2020": "6.71",
    "2021": "9.71",
    "2022": "7.21",
    "2023": "6.79",
    "2024": "9.39",
    "SOLVENCIA": "Rotación de Inventarios"
  },
  {
    "2020": "141.64",
    "2021": "89.62",
    "2022": "77.30",
    "2023": "92.66",
    "2024": "72.62",
    "SOLVENCIA": "PMC"
  },
  {
    "2020": "-0.85",
    "2021": "-2.21",
    "2022": "6.87",
    "2023": "0.18",
    "2024": "2.54",
    "SOLVENCIA": "Rotación de CxC"
  },
  {
    "2020": "141.94",
    "2021": "89.91",
    "2022": "77.59",
    "2023": "92.96",
    "2024": "72.91",
    "SOLVENCIA": "PMME"
  },
  {
    "2020": "98.63",
    "2021": "101.67",
    "2022": "141.71",
    "2023": "184.01",
    "2024": "190.38",
    "SOLVENCIA": "PMP"
  },
  {
    "2020": "43.31",
    "2021": "-11.75",
    "2022": "-64.12",
    "2023": "-91.05",
    "2024": "-117.47",
    "SOLVENCIA": "PMMF"
  },
  {
    "2020": "52,675",
    "2021": "-47,374",
    "2022": "-36,491",
    "2023": "-85,260",
    "2024": "-99,350",
    "SOLVENCIA": "NOF"
  },
  {
    "2020": "93,517",
    "2021": "-167,808",
    "2022": "108,039",
    "2023": "9,242",
    "2024": "170,447",
    "SOLVENCIA": "Fondo de Maniobra"
  },
  {
    "2020": "-40,842",
    "2021": "120,434",
    "2022": "-144,530",
    "2023": "-94,502",
    "2024": "-269,797",
    "SOLVENCIA": "NRN"
  },
  {
    "2020": "4,341",
    "2021": "45,550",
    "2022": "4,102",
    "2023": "3,326",
    "2024": "2,474",
    "SOLVENCIA": "RNC"
  },
  {
    "2020": "45,183",
    "2021": "-74,884",
    "2022": "148,632",
    "2023": "97,828",
    "2024": "272,271",
    "SOLVENCIA": "(+) EXCEDENTE TESORERÍA (-) RF"
  }
]
const ratioEstructuraBalance = [
  {
    "2020": "81%",
    "2021": "62%",
    "2022": "78%",
    "2023": "76%",
    "2024": "77%",
    "SOLVENCIA": "Peso Patrimonio Neto"
  },
  {
    "2020": "13%",
    "2021": "24%",
    "2022": "18%",
    "2023": "17%",
    "2024": "16%",
    "SOLVENCIA": "Peso Pasivo No corriente"
  },
  {
    "2020": "6%",
    "2021": "14%",
    "2022": "4%",
    "2023": "7%",
    "2024": "7%",
    "SOLVENCIA": "Peso Pasivo Corriente"
  },
  {
    "2020": "89%",
    "2021": "69%",
    "2022": "84%",
    "2023": "82%",
    "2024": "86%",
    "SOLVENCIA": "Ratio de cobertura del inmovilizado"
  },
  {
    "2020": "91%",
    "2021": "90%",
    "2022": "93%",
    "2023": "93%",
    "2024": "89%",
    "SOLVENCIA": "Peso activos no corrientes"
  },
  {
    "2020": "9%",
    "2021": "10%",
    "2022": "7%",
    "2023": "7%",
    "2024": "11%",
    "SOLVENCIA": "Peso activos corrientes"
  }
]
const ratios = [
  
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

export const BuenaRatios = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Ratios</h2>
        <div className='flex justify-center flex-col items-center gap-10'>
          <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-300 ">
                            <TableHead className="w-[200px] ">Ratios</TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>                            
                            <TableHead className="w-[70px] text-center"></TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          ratios.map((bal) => {

                            return (
                              <Collapsible asChild>
                                <>
                                  <TableRow key={bal.SOLVENCIA} className="bg-gray-100 w-full">

                                            <TableCell className="font-bold bg-gray-200">{bal.SOLVENCIA}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p></p><p>{bal[2024]}</p></div></TableCell>
                                            <TableCell>
                                              
                                                
                                                  <CollapsibleTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                                                    </Button>
                                                  </CollapsibleTrigger>
                                                
                                              
                                            </TableCell>
                                  </TableRow>
                                  <CollapsibleContent asChild>
                                    <>
                                      {
                                        
                                          (bal.SOLVENCIA == "SOLVENCIA" ? ratioSolvencia : 
                                            bal.SOLVENCIA == "LIQUIDEZ" ? ratioLiquidez : 
                                          bal.SOLVENCIA == "ENDEUDAMIENTO" ? ratioEndeudamiento : 
                                          bal.SOLVENCIA == "RENTABILIDAD Y MÁRGENES" ? ratioRentabilidad : 
                                          bal.SOLVENCIA == "RATIOS OPERATIVOS" ? ratioOperativos : ratioEstructuraBalance).map((act) => (
                                            <>
                                              <TableRow key={act.SOLVENCIA} className="">
                                                  <TableCell className="bg-gray-100">{act.SOLVENCIA}</TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p></p><p>{act[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p></p><p>{act[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p></p><p>{act[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p></p><p>{act[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p></p><p>{act[2024]}</p></div></TableCell>
                                              </TableRow>
                                            </>
                                          ))
                                        
                                      }
                                    </>  
                                  </CollapsibleContent>
                                </>
                              </Collapsible>
                            )
                          })
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
        
    </LayoutDash>
  )
}
