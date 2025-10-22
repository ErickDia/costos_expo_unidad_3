import LayoutDash from "../LayoutDash"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from '@/components/ui/table';
// import { Pencil } from "lucide-react";
// import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const balanceActivos = [
  {
    "2020": "282,969",
    "2021": "364,097",
    "2022": "273,817",
    "2023": "270,366",
    "2024": "497,546",
    "Activos": "Activos Corrientes"
  },
  {
    "2020": "2,954,369",
    "2021": "3,445,516",
    "2022": "3,575,081",
    "2023": "3,663,023",
    "2024": "3,923,824",
    "Activos": "Activos no Corrientes"
  },
  {
    "2020": "3,237,338",
    "2021": "3,809,613",
    "2022": "3,848,898",
    "2023": "3,933,389",
    "2024": "4,421,370",
    "Activos": "Total Activos"
  }
]

const activosCorrientes = [
  {
    "2020": "68,971",
    "2021": "219,267",
    "2022": "125,052",
    "2023": "68,945",
    "2024": "266,865",
    "Activos": "Efectivo y equivalentes al efectivo"
  },
  {
    "2020": "147,867",
    "2021": "90,665",
    "2022": "84,631",
    "2023": "134,207",
    "2024": "182,835",
    "Activos": "Cuentas por cobrar comerciales y diversas"
  },
  {
    "2020": "37,284",
    "2021": "32,834",
    "2022": "40,554",
    "2023": "38,331",
    "2024": "42,440",
    "Activos": "Inventarios, neto"
  },
  {
    "2020": "11,756",
    "2021": "10,283",
    "2022": "14,143",
    "2023": "13,056",
    "2024": "0",
    "Activos": "Activos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "17,091",
    "2021": "11,048",
    "2022": "9,437",
    "2023": "15,827",
    "2024": "5,406",
    "Activos": "Gastos contratados por anticipado"
  }
]
const activosNoCorrientes = [
  {
    "2020": "2,040,598",
    "2021": "609,086",
    "2022": "631,296",
    "2023": "558,107",
    "2024": "539,598",
    "Activos": "Cuentas por cobrar comerciales y diversas, neto"
  },
  {
    "2020": "72,230",
    "2021": "2,012,839",
    "2022": "2,099,568",
    "2023": "2,116,280",
    "2024": "2,184,794",
    "Activos": "Inversiones en subsidiarias y asociadas"
  },
  {
    "2020": "767,298",
    "2021": "712,140",
    "2022": "722,467",
    "2023": "845,579",
    "2024": "1,091,000",
    "Activos": "Propiedad, planta, equipo y costos de desarrollo"
  },
  {
    "2020": "48,565",
    "2021": "86,964",
    "2022": "98,530",
    "2023": "115,651",
    "2024": "82,217",
    "Activos": "Activo por impuestos a las ganancias diferido, neto"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "0",
    "2023": "1,909",
    "2024": "1,643",
    "Activos": "Activos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "25,678",
    "2021": "24,487",
    "2022": "23,220",
    "2023": "25,497",
    "2024": "24,572",
    "Activos": "Otros activos, neto"
  }
]

const balancePasivos = [
  
  {
    "2020": "189,452",
    "2021": "531,905",
    "2022": "165,778",
    "2023": "261,124",
    "2024": "327,099",
    "Pasivos": "Pasivos Corrientes"
  },
  {
    "2020": "420,426",
    "2021": "909,382",
    "2022": "674,270",
    "2023": "665,805",
    "2024": "703,582",
    "Pasivos": "Pasivos no Corrientes"
  },

  {
    "2020": "609,878",
    "2021": "1,441,287",
    "2022": "840,048",
    "2023": "926,929",
    "2024": "1,030,681",
    "Pasivos": "Total Pasivos"
  },
  {
    "2020": "2,627,460",
    "2021": "2,368,326",
    "2022": "3,008,850",
    "2023": "3,006,460",
    "2024": "3,390,689",
    "Pasivos": "Patrimonio"
  },
  {
    "2020": "3,237,338",
    "2021": "3,809,613",
    "2022": "3,848,898",
    "2023": "3,933,389",
    "2024": "4,421,370",
    "Pasivos": "Total Pasivo + Patrimonio"
  }

]

const pasivosCorrientes = [
  {
    "2020": "50,000",
    "2021": "50,000",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "Pasivos": "Préstamos bancarios"
  },
  {
    "2020": "93,924",
    "2021": "129,983",
    "2022": "122,844",
    "2023": "197,315",
    "2024": "280,935",
    "Pasivos": "Cuentas por pagar comerciales y diversas"
  },
  {
    "2020": "38,552",
    "2021": "40,890",
    "2022": "38,832",
    "2023": "60,483",
    "2024": "35,633",
    "Pasivos": "Provisiones, pasivos contingentes y otros pasivos"
  },
  {
    "2020": "2,635",
    "2021": "644",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "Pasivos": "Instrumentos financieros derivados de cobertura"
  },
  {
    "2020": "4,341",
    "2021": "45,550",
    "2022": "4,102",
    "2023": "3,326",
    "2024": "2,474",
    "Pasivos": "Obligaciones financieras"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "0",
    "2023": "0",
    "2024": "8,057",
    "Pasivos": "Pasivos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "0",
    "2021": "264,838",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "Pasivos": "Pasivo asociado directamente con la inversión en Yanacocha mantenida para la venta"
  }
]

const pasivosNoCorrientes = [
  {
    "2020": "0",
    "2021": "2,881",
    "2022": "3,320",
    "2023": "6,477",
    "2024": "12,806",
    "Pasivos": "Cuentas por pagar comerciales y diversas"
  },
  {
    "2020": "118,316",
    "2021": "103,483",
    "2022": "100,353",
    "2023": "84,507",
    "2024": "109,057",
    "Pasivos": "Provisiones, pasivos contingentes y otros pasivos"
  },
  {
    "2020": "280,010",
    "2021": "785,300",
    "2022": "553,692",
    "2023": "553,207",
    "2024": "553,448",
    "Pasivos": "Obligaciones financieras"
  },
  {
    "2020": "22,100",
    "2021": "17,718",
    "2022": "16,905",
    "2023": "21,614",
    "2024": "28,271",
    "Pasivos": "Pasivo financiero por contraprestación contingente"
  }
]
const patrimonio = [
  {
    "2020": "750,497",
    "2021": "750,497",
    "2022": "750,497",
    "2023": "750,497",
    "2024": "750,497",
    "Pasivos": "Capital social"
  },
  {
    "2020": "791",
    "2021": "791",
    "2022": "791",
    "2023": "791",
    "2024": "791",
    "Pasivos": "Acciones de inversión"
  },
  {
    "2020": "218,450",
    "2021": "218,450",
    "2022": "218,450",
    "2023": "218,450",
    "2024": "218,450",
    "Pasivos": "Capital adicional"
  },
  {
    "2020": "163,194",
    "2021": "163,270",
    "2022": "163,270",
    "2023": "163,372",
    "2024": "163,539",
    "Pasivos": "Reserva legal"
  },
  {
    "2020": "269",
    "2021": "269",
    "2022": "31,897",
    "2023": "31,897",
    "2024": "31,897",
    "Pasivos": "Otras reservas de capital"
  },
  {
    "2020": "1,503,785",
    "2021": "1,239,526",
    "2022": "1,841,761",
    "2023": "1,841,549",
    "2024": "2,225,611",
    "Pasivos": "Resultados acumulados"
  },
  {
    "2020": "-9,526",
    "2021": "-4,477",
    "2022": "2,184",
    "2023": "-96",
    "2024": "-96",
    "Pasivos": "Otras reservas de patrimonio"
  }
]

export const BuenaBalanceGeneral = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Balance General</h2>
        <div className='flex justify-center flex-col items-center gap-10'>
          <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[200px]">Activos</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-center">2023</TableHead>                            
                            <TableHead className="w-[70px] text-center">2024</TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          balanceActivos.map((bal) => {

                            return (
                              <Collapsible asChild>
                                <>
                                  <TableRow key={bal.Activos} className="w-full">

                                            <TableCell className="font-bold ">{bal.Activos}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
                                            <TableCell>
                                              {
                                                (bal.Activos == "Activos Corrientes" || bal.Activos == "Activos no Corrientes") ? 
                                                (
                                                  <CollapsibleTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                                                    </Button>
                                                  </CollapsibleTrigger>
                                                ) : <></>
                                              }
                                            </TableCell>
                                  </TableRow>
                                  <CollapsibleContent asChild>
                                    <>
                                      {
                                        (bal.Activos == "Activos Corrientes" || bal.Activos == "Activos no Corrientes") ? 
                                          ((bal.Activos == "Activos Corrientes" ? activosCorrientes : activosNoCorrientes).map((act) => (
                                            <>
                                              <TableRow key={act.Activos} className="">
                                                  <TableCell className="font-semibold">{act.Activos}</TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{act[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{act[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{act[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{act[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{act[2024]}</p></div></TableCell>
                                                  <TableCell></TableCell>

                                              </TableRow>
                                            </>
                                          ))) : <></>
                                        
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
            <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[200px]">Pasivos</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-center">2023</TableHead>                            
                            <TableHead className="w-[70px] text-center">2024</TableHead>
                            <TableHead className="w-[70px] text-center"></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          balancePasivos.map((bal) => {

                            return (
                              <Collapsible asChild>
                                <>
                                  <TableRow key={bal.Pasivos} className="w-full">

                                            <TableCell className="font-bold ">{bal.Pasivos}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
                                            <TableCell>
                                              {
                                                (bal.Pasivos == "Pasivos Corrientes" || bal.Pasivos == "Pasivos no Corrientes" || bal.Pasivos == "Patrimonio") ? 
                                                (
                                                  <CollapsibleTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                                                    </Button>
                                                  </CollapsibleTrigger>
                                                ) : <></>
                                              }
                                            </TableCell>
                                  </TableRow>
                                  <CollapsibleContent asChild>
                                    <>
                                      {
                                        (bal.Pasivos == "Pasivos Corrientes" || bal.Pasivos == "Pasivos no Corrientes" || bal.Pasivos == "Patrimonio") ? 
                                          ((bal.Pasivos == "Pasivos Corrientes" ? pasivosCorrientes : bal.Pasivos == "Pasivos no Corrientes" ? pasivosNoCorrientes : patrimonio).map((pas) => (
                                            <>
                                              <TableRow key={pas.Pasivos} className="">
                                                  <TableCell className="font-semibold">{pas.Pasivos}</TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{pas[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{pas[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{pas[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{pas[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2 font-semibold"><p>S/.</p><p>{pas[2024]}</p></div></TableCell>
                                                  <TableCell></TableCell>

                                              </TableRow>
                                            </>
                                          ))) : <></>
                                        
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
            {/* <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-400 text-white hover:bg-gray-500">
                            <TableHead className="w-[200px] text-white">Pasivos</TableHead>
                            <TableHead className="w-[70px] text-white">2021</TableHead>
                            <TableHead className="w-[70px] text-white">2021</TableHead>
                            <TableHead className="w-[70px] text-white">2022</TableHead>
                            <TableHead className="w-[70px] text-white">2023</TableHead>                            
                            <TableHead className="w-[70px] text-white">2024</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            balancePasivos.map((bal) => {
                                if (bal.Pasivos === "Pasivos Corrientes" || bal.Pasivos === "Pasivos no Corrientes" || bal.Pasivos === "Total Pasivos" || bal.Pasivos === "Total Pasivo + Patrimonio") {
                                    return (
                                        <TableRow key={bal.Pasivos} className="bg-gray-200">
                                            <TableCell className="font-bold bg-gray-300">{bal.Pasivos}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
                                        </TableRow>
                                    )
                                }
                                return (
                                    <TableRow key={bal.Pasivos}>
                                        <TableCell className="bg-gray-200">{bal.Pasivos}</TableCell>
                                        <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                        <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                        <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                        <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                        <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
                                    </TableRow>
                                )
                        })
                        }

                    </TableBody>
                </Table>
            </div> */}
        </div>
        
    </LayoutDash>
  )
}
