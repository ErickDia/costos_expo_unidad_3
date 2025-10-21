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
    "2020": "1,459,969",
    "2021": "1,323,118",
    "2022": "1,377,477",
    "2023": "1,184,112",
    "2024": "1,617,082",
    "Activos": "Activos Corrientes"
  },
  
  {
    "2020": "5,412,727",
    "2021": "5,785,613",
    "2022": "5,915,103",
    "2023": "6,255,938",
    "2024": "6,446,459",
    "Activos": "Activos no Corrientes"
  },
  {
    "2020": "6,872,696",
    "2021": "7,108,731",
    "2022": "7,292,580",
    "2023": "7,440,050",
    "2024": "8,063,541",
    "Activos": "Total Activos"
  }
]

const activosCorrientes = [
{
    "2020": "589,027",
    "2021": "266,417",
    "2022": "335,180",
    "2023": "246,948",
    "2024": "616,860",
    "Activos": "Efectivo y equivalentes al efectivo"
  },
  {
    "2020": "445,830",
    "2021": "651,453",
    "2022": "546,074",
    "2023": "536,507",
    "2024": "508,207",
    "Activos": "Cuentas por cobrar comerciales"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "Activos": "Cuentas por cobrar a entidades relacionadas"
  },
  {
    "2020": "29,243",
    "2021": "43,886",
    "2022": "41,299",
    "2023": "34,764",
    "2024": "40,571",
    "Activos": "Otras cuentas por cobrar"
  },
  {
    "2020": "359,327",
    "2021": "324,549",
    "2022": "326,879",
    "2023": "310,450",
    "2024": "377,724",
    "Activos": "Inventarios (neto)"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "63,648",
    "2023": "0",
    "2024": "0",
    "Activos": "Activos por impuesto a las ganancias"
  },
  {
    "2020": "292",
    "2021": "323",
    "2022": "326",
    "2023": "335",
    "2024": "231",
    "Activos": "Activos clasificados como mantenidos para la venta"
  },
  {
    "2020": "36,250",
    "2021": "36,490",
    "2022": "64,071",
    "2023": "55,108",
    "2024": "73,489",
    "Activos": "Otros activos"
  }
]
const activosNoCorrientes = [
  {
    "2020": "147,999",
    "2021": "148,197",
    "2022": "142,174",
    "2023": "141,546",
    "2024": "145,792",
    "Activos": "Inversión en asociadas y subsidiarias"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "0",
    "2023": "0",
    "2024": "13,997",
    "Activos": "Otras cuentas por cobrar"
  },
  {
    "2020": "94,748",
    "2021": "61,566",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "Activos": "Material Lixiviable"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "42,410",
    "2023": "29,774",
    "2024": "21,700",
    "Activos": "Inventarios (neto)"
  },
  {
    "2020": "3,601,678",
    "2021": "3,581,475",
    "2022": "3,538,301",
    "2023": "3,519,859",
    "2024": "3,458,157",
    "Activos": "Propiedades, planta y equipo (neto)"
  },
  {
    "2020": "20,954",
    "2021": "13,754",
    "2022": "6,747",
    "2023": "6,987",
    "2024": "33,946",
    "Activos": "Activos por derecho de uso"
  },
  {
    "2020": "1,493,548",
    "2021": "1,913,527",
    "2022": "2,127,671",
    "2023": "2,503,389",
    "2024": "2,725,957",
    "Activos": "Concesiones mineras, desbroce y desarrollo (neto)"
  },
  {
    "2020": "11,577",
    "2021": "9,307",
    "2022": "7,154",
    "2023": "5,139",
    "2024": "3,271",
    "Activos": "Activos intangibles (neto)"
  },
  {
    "2020": "42,223",
    "2021": "57,787",
    "2022": "50,646",
    "2023": "49,244",
    "2024": "43,639",
    "Activos": "Otros activos "
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

export const SouthernBalanceGeneral = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Balance General</h2>
        <div className='flex justify-center flex-col items-center gap-10'>
          <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-400 text-white hover:bg-gray-500">
                            <TableHead className="w-[200px] text-white">Activos</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2023</TableHead>                            
                            <TableHead className="w-[70px] text-white text-center">2024</TableHead>
                            <TableHead className="w-[70px] text-white text-center"></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          balanceActivos.map((bal) => {

                            return (
                              <Collapsible asChild>
                                <>
                                  <TableRow key={bal.Activos} className="bg-gray-200 w-full">

                                            <TableCell className="font-bold bg-gray-300">{bal.Activos}</TableCell>
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
                                              <TableRow key={act.Activos} className="bg-gray-100  ">
                                                  <TableCell className="bg-gray-200">{act.Activos}</TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{act[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{act[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{act[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{act[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{act[2024]}</p></div></TableCell>
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
                        <TableRow className="bg-gray-400 text-white hover:bg-gray-500">
                            <TableHead className="w-[200px] text-white">Pasivos</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-white text-center">2023</TableHead>                            
                            <TableHead className="w-[70px] text-white text-center">2024</TableHead>
                            <TableHead className="w-[70px] text-white text-center"></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          balancePasivos.map((bal) => {

                            return (
                              <Collapsible asChild>
                                <>
                                  <TableRow key={bal.Pasivos} className="bg-gray-200 w-full">

                                            <TableCell className="font-bold bg-gray-300">{bal.Pasivos}</TableCell>
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
                                              <TableRow key={pas.Pasivos} className="bg-gray-100  ">
                                                  <TableCell className="bg-gray-200">{pas.Pasivos}</TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{pas[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{pas[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{pas[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{pas[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{pas[2024]}</p></div></TableCell>
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
