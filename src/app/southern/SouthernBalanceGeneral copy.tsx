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
    "2020": "556,519",
    "2021": "796,342",
    "2022": "456,961",
    "2023": "502,735",
    "2024": "663,612",
    "Pasivos": "Pasivos Corrientes"
  },
  {
    "2020": "703,878",
    "2021": "836,885",
    "2022": "823,771",
    "2023": "848,543",
    "2024": "1,018,016",
    "Pasivos": "Pasivos no Corrientes"
  },
  {
    "2020": "1,260,397",
    "2021": "1,633,227",
    "2022": "1,280,732",
    "2023": "1,351,278",
    "2024": "1,681,628",
    "Pasivos": "Total Pasivos"
  },
  {
    "2020": "5,612,299",
    "2021": "5,475,504",
    "2022": "6,011,848",
    "2023": "6,088,772",
    "2024": "6,381,913",
    "Pasivos": "Patrimonio"
  },
  {
    "2020": "6,872,696",
    "2021": "7,108,731",
    "2022": "7,292,580",
    "2023": "7,440,050",
    "2024": "8,063,541",
    "Pasivos": "Total Pasivo + Patrimonio"
  }
]

const pasivosCorrientes = [
  {
    "2020": "243,172",
    "2021": "218,816",
    "2022": "255,026",
    "2023": "219,439",
    "2024": "251,956",
    "Pasivos": "Cuentas por pagar comerciales"
  },
  {
    "2020": "66,340",
    "2021": "83,777",
    "2022": "67,904",
    "2023": "74,537",
    "2024": "91,947",
    "Pasivos": "Otras cuentas por pagar"
  },
  {
    "2020": "7,284",
    "2021": "7,577",
    "2022": "7,258",
    "2023": "6,879",
    "2024": "6,355",
    "Pasivos": "Pasivo por arrendamientos"
  },
  {
    "2020": "129,200",
    "2021": "280,099",
    "2022": "0",
    "2023": "64,455",
    "2024": "144,245",
    "Pasivos": "Pasivo por impuesto a las ganancias"
  },
  {
    "2020": "110,523",
    "2021": "206,073",
    "2022": "126,773",
    "2023": "137,425",
    "2024": "169,109",
    "Pasivos": "Pasivo para beneficios a los trabajadores"
  }
]

const pasivosNoCorrientes = [
  {
    "2020": "14,599",
    "2021": "7,094",
    "2022": "78",
    "2023": "106",
    "2024": "27,679",
    "Pasivos": "Pasivo por arrendamientos"
  },
  {
    "2020": "485,122",
    "2021": "638,093",
    "2022": "703,144",
    "2023": "738,655",
    "2024": "820,170",
    "Pasivos": "Pasivo por impuesto a las ganancias diferido"
  },
  {
    "2020": "170,618",
    "2021": "165,038",
    "2022": "96,674",
    "2023": "99,565",
    "2024": "89,224",
    "Pasivos": "Pasivo para retiro de activos y cierre de mina"
  },
  {
    "2020": "33,539",
    "2021": "26,660",
    "2022": "23,875",
    "2023": "10,217",
    "2024": "80,943",
    "Pasivos": "Otras cuentas por pagar"
  }
]
const patrimonio = [
  {
    "2020": "321,797",
    "2021": "321,797",
    "2022": "321,797",
    "2023": "321,797",
    "2024": "321,797",
    "Pasivos": "Capital social asignado "
  },
  {
    "2020": "51,847",
    "2021": "51,847",
    "2022": "51,847",
    "2023": "51,847",
    "2024": "51,847",
    "Pasivos": "Acciones de inversión"
  },
  {
    "2020": "61,972",
    "2021": "61,972",
    "2022": "61,972",
    "2023": "61,972",
    "2024": "61,972",
    "Pasivos": "Capital adicional"
  },
  {
    "2020": "245,000",
    "2021": "245,000",
    "2022": "245,000",
    "2023": "245,000",
    "2024": "245,000",
    "Pasivos": "Otras reservas de capital"
  },
  {
    "2020": "4,931,683",
    "2021": "4,794,888",
    "2022": "5,331,232",
    "2023": "5,408,156",
    "2024": "5,701,297",
    "Pasivos": "Resultados acumulados"
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
                        <TableRow className="bg-gray-300 ">
                            <TableHead className="w-[200px] ">Activos</TableHead>
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
                                  <TableRow key={bal.Activos} className="bg-gray-100 w-full">

                                            <TableCell className="font-bold bg-gray-200">{bal.Activos}</TableCell>
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
                                                  <TableCell className="bg-gray-100">{act.Activos}</TableCell>
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
                        <TableRow className="bg-gray-300">
                            <TableHead className="w-[200px] ">Pasivos</TableHead>
                            <TableHead className="w-[70px]  text-center">2021</TableHead>
                            <TableHead className="w-[70px]  text-center">2021</TableHead>
                            <TableHead className="w-[70px]  text-center">2022</TableHead>
                            <TableHead className="w-[70px]  text-center">2023</TableHead>                            
                            <TableHead className="w-[70px]  text-center">2024</TableHead>
                            <TableHead className="w-[70px]  text-center"></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          balancePasivos.map((bal) => {

                            return (
                              <Collapsible asChild>
                                <>
                                  <TableRow key={bal.Pasivos} className="bg-gray-100 w-full">

                                            <TableCell className="font-bold bg-gray-200">{bal.Pasivos}</TableCell>
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
                                                  <TableCell className="bg-gray-100">{pas.Pasivos}</TableCell>
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
