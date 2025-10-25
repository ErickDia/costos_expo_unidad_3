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

// activos

const balanceActivos = [
  {
    "2020": "100.0%",
    "2021": "128.7%",
    "2022": "96.8%",
    "2023": "95.5%",
    "2024": "175.8%",
    "ACTIVO": "Activos Corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "116.6%",
    "2022": "121.0%",
    "2023": "124.0%",
    "2024": "132.8%",
    "ACTIVO": "Activos no Corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "117.7%",
    "2022": "118.9%",
    "2023": "121.5%",
    "2024": "136.6%",
    "ACTIVO": "Total Activos"
  }
]

const activosCorrientes = [
  {
    "2020": "100.0%",
    "2021": "317.9%",
    "2022": "181.3%",
    "2023": "100.0%",
    "2024": "386.9%",
    "ACTIVO": "Efectivo y equivalentes al efectivo"
  },
  {
    "2020": "100.0%",
    "2021": "61.3%",
    "2022": "57.2%",
    "2023": "90.8%",
    "2024": "123.6%",
    "ACTIVO": "Cuentas por cobrar comerciales y diversas"
  },
  {
    "2020": "100.0%",
    "2021": "88.1%",
    "2022": "108.8%",
    "2023": "102.8%",
    "2024": "113.8%",
    "ACTIVO": "Inventarios, neto"
  },
  {
    "2020": "100.0%",
    "2021": "87.5%",
    "2022": "120.3%",
    "2023": "111.1%",
    "2024": "0.0%",
    "ACTIVO": "Activos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "64.6%",
    "2022": "55.2%",
    "2023": "92.6%",
    "2024": "31.6%",
    "ACTIVO": "Gastos contratados por anticipado"
  }
]

const activosNoCorrientes = [
  {
    "2020": "100.0%",
    "2021": "29.8%",
    "2022": "30.9%",
    "2023": "27.4%",
    "2024": "26.4%",
    "ACTIVO": "Cuentas por cobrar comerciales y diversas, neto"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "ACTIVO": "Inversiones en subsidiarias y asociadas"
  },
  {
    "2020": "100.0%",
    "2021": "92.8%",
    "2022": "94.2%",
    "2023": "110.2%",
    "2024": "142.2%",
    "ACTIVO": "Propiedad, planta, equipo y costos de desarrollo"
  },
  {
    "2020": "100.0%",
    "2021": "179.1%",
    "2022": "202.9%",
    "2023": "238.1%",
    "2024": "169.3%",
    "ACTIVO": "Activo por impuestos a las ganancias diferido, neto"
  },
  {
    "2020": "0.0%",
    "2021": "100.0%",
    "2022": "200.0%",
    "2023": "300.0%",
    "2024": "400.0%",
    "ACTIVO": "Activos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "95.4%",
    "2022": "90.4%",
    "2023": "99.3%",
    "2024": "95.7%",
    "ACTIVO": "Otros activos, neto"
  }
]

// pasivos

const balancePasivos = [
  {
    "2020": "100.0%",
    "2021": "280.8%",
    "2022": "87.5%",
    "2023": "137.8%",
    "2024": "172.7%",
    "ACTIVO": "Pasivos Corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "216.3%",
    "2022": "160.4%",
    "2023": "158.4%",
    "2024": "167.3%",
    "ACTIVO": "Pasivos no Corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "236.3%",
    "2022": "137.7%",
    "2023": "152.0%",
    "2024": "169.0%",
    "ACTIVO": "Total Pasivos"
  },
  {
    "2020": "100.0%",
    "2021": "90.1%",
    "2022": "114.5%",
    "2023": "114.4%",
    "2024": "129.0%",
    "ACTIVO": "Patrimonio"
  },
  {
    "2020": "100.0%",
    "2021": "117.7%",
    "2022": "118.9%",
    "2023": "121.5%",
    "2024": "136.6%",
    "ACTIVO": "Total Pasivo + Patrimonio"
  }
]

const pasivosCorrientes = [
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Préstamos bancarios"
  },
  {
    "2020": "100.0%",
    "2021": "138.4%",
    "2022": "130.8%",
    "2023": "210.1%",
    "2024": "299.1%",
    "ACTIVO": "Cuentas por pagar comerciales y diversas"
  },
  {
    "2020": "100.0%",
    "2021": "106.1%",
    "2022": "100.7%",
    "2023": "156.9%",
    "2024": "92.4%",
    "ACTIVO": "Provisiones, pasivos contingentes y otros pasivos"
  },
  {
    "2020": "100.0%",
    "2021": "24.4%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Instrumentos financieros derivados de cobertura"
  },
  {
    "2020": "100.0%",
    "2021": "1049.3%",
    "2022": "94.5%",
    "2023": "76.6%",
    "2024": "57.0%",
    "ACTIVO": "Obligaciones financieras"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Pasivos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Pasivo asociado directamente con la inversión en Yanacocha mantenida para la venta"
  }
]

const pasivosNoCorrientes = [
  {
    "2020": "0.0%",
    "2021": "100.0%",
    "2022": "200.0%",
    "2023": "300.0%",
    "2024": "400.0%",
    "ACTIVO": "Cuentas por pagar comerciales y diversas"
  },
  {
    "2020": "100.0%",
    "2021": "87.5%",
    "2022": "84.8%",
    "2023": "71.4%",
    "2024": "92.2%",
    "ACTIVO": "Provisiones, pasivos contingentes y otros pasivos"
  },
  {
    "2020": "100.0%",
    "2021": "280.5%",
    "2022": "197.7%",
    "2023": "197.6%",
    "2024": "197.7%",
    "ACTIVO": "Obligaciones financieras"
  },
  {
    "2020": "100.0%",
    "2021": "80.2%",
    "2022": "76.5%",
    "2023": "97.8%",
    "2024": "127.9%",
    "ACTIVO": "Pasivo financiero por contraprestación contingente"
  }
]

const patrimonio = [
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "ACTIVO": "Capital social"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "ACTIVO": "Acciones de inversión"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "ACTIVO": "Capital adicional"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.1%",
    "2024": "100.2%",
    "ACTIVO": "Reserva legal"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "11857.6%",
    "2023": "11857.6%",
    "2024": "11857.6%",
    "ACTIVO": "Otras reservas de capital"
  },
  {
    "2020": "100.0%",
    "2021": "82.4%",
    "2022": "122.5%",
    "2023": "122.5%",
    "2024": "148.0%",
    "ACTIVO": "Resultados acumulados"
  },
  {
    "2020": "100.0%",
    "2021": "47.0%",
    "2022": "-22.9%",
    "2023": "1.0%",
    "2024": "1.0%",
    "ACTIVO": "Otras reservas de patrimonio"
  }
]

const cuentaResultados = [
  {
    "2020": "100.0%",
    "2021": "118.3%",
    "2022": "100.8%",
    "2023": "105.0%",
    "2024": "194.1%",
    "EJERCICIOS": "Ventas"
  },
  {
    "2020": "100.0%",
    "2021": "126.4%",
    "2022": "98.2%",
    "2023": "99.4%",
    "2024": "140.8%",
    "EJERCICIOS": "Costo de Ventas"
  },
  {
    "2020": "100.0%",
    "2021": "88.9%",
    "2022": "110.3%",
    "2023": "125.4%",
    "2024": "388.5%",
    "EJERCICIOS": "Margen Bruto"
  },
  {
    "2020": "100.0%",
    "2021": "118.3%",
    "2022": "113.7%",
    "2023": "82.1%",
    "2024": "138.6%",
    "EJERCICIOS": "Gasto de Ventas"
  },
  {
    "2020": "100.0%",
    "2021": "95.0%",
    "2022": "92.5%",
    "2023": "101.5%",
    "2024": "117.7%",
    "EJERCICIOS": "Gastos de Administraciòn"
  },
  {
    "2020": "100.0%",
    "2021": "114.4%",
    "2022": "137.9%",
    "2023": "149.4%",
    "2024": "221.2%",
    "EJERCICIOS": "Exploración en áreas no operativas"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "EJERCICIOS": "EBITDA"
  },
  {
    "2020": "100.0%",
    "2021": "89.8%",
    "2022": "79.9%",
    "2023": "72.8%",
    "2024": "76.3%",
    "EJERCICIOS": "Depreciación/Amortizaciones"
  },
  {
    "2020": "100.0%",
    "2021": "31.8%",
    "2022": "28.7%",
    "2023": "95.9%",
    "2024": "14.8%",
    "EJERCICIOS": "Provisión por contingencias"
  },
  {
    "2020": "100.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "EJERCICIOS": "Recupero por deterioro de activos de larga duración"
  },
  {
    "2020": "100.0%",
    "2021": "-10238.8%",
    "2022": "-3664.0%",
    "2023": "16124.5%",
    "2024": "41877.0%",
    "EJERCICIOS": "Otros, neto"
  },
  {
    "2020": "100.0%",
    "2021": "113.4%",
    "2022": "70.9%",
    "2023": "12.7%",
    "2024": "-232.8%",
    "EJERCICIOS": "BAII(EBIT)"
  },
  {
    "2020": "100.0%",
    "2021": "402.8%",
    "2022": "871.8%",
    "2023": "257.6%",
    "2024": "408.2%",
    "EJERCICIOS": "Ingresos financieros"
  },
  {
    "2020": "100.0%",
    "2021": "199.3%",
    "2022": "171.2%",
    "2023": "437.0%",
    "2024": "218.9%",
    "EJERCICIOS": "Gastos Financieros"
  },
  {
    "2020": "100.0%",
    "2021": "186.6%",
    "2022": "127.4%",
    "2023": "448.2%",
    "2024": "207.0%",
    "EJERCICIOS": "Resultado Financiero"
  },
  {
    "2020": "100.0%",
    "2021": "1009.6%",
    "2022": "-1959.7%",
    "2023": "-1390.7%",
    "2024": "651.6%",
    "EJERCICIOS": "Diferencia en cambio, neto"
  },
  {
    "2020": "100.0%",
    "2021": "545.7%",
    "2022": "380.1%",
    "2023": "346.5%",
    "2024": "755.0%",
    "EJERCICIOS": "Participación en los resultados de asociadas"
  },
  {
    "2020": "100.0%",
    "2021": "-128.9%",
    "2022": "-153.2%",
    "2023": "-85.9%",
    "2024": "-716.1%",
    "EJERCICIOS": "BAI (EBT)"
  },
  {
    "2020": "100.0%",
    "2021": "131.7%",
    "2022": "855.8%",
    "2023": "20946.9%",
    "2024": "15227.2%",
    "EJERCICIOS": "Impuestos a las ganancias corriente"
  },
  {
    "2020": "100.0%",
    "2021": "-1350.0%",
    "2022": "-870.1%",
    "2023": "-592.8%",
    "2024": "1157.7%",
    "EJERCICIOS": "Impuestos a las ganancias diferido"
  },
  {
    "2020": "100.0%",
    "2021": "-179.2%",
    "2022": "-179.9%",
    "2023": "-38.7%",
    "2024": "-585.8%",
    "EJERCICIOS": "Ganancia (pérdida) por operaciones continuadas"
  },
  {
    "2020": "100.0%",
    "2021": "580.2%",
    "2022": "-716.4%",
    "2023": "10.3%",
    "2024": "1.5%",
    "EJERCICIOS": "Operaciones discontinuadas"
  },
  {
    "2020": "100.0%",
    "2021": "194.6%",
    "2022": "-444.0%",
    "2023": "-14.6%",
    "2024": "-296.7%",
    "EJERCICIOS": "Resultado Neto"
  }
]

export const BuenaAnalisisH = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Analisis Vertical</h2>
        <div className='flex justify-center flex-col items-center gap-10'>
          <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
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
                                  <TableRow key={bal.ACTIVO} className="w-full">

                                            <TableCell className="font-bold ">{bal.ACTIVO}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2024]}</p></div></TableCell>
                                            <TableCell>
                                              {
                                                (bal.ACTIVO == "Activos Corrientes" || bal.ACTIVO == "Activos no Corrientes") ? 
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
                                        (bal.ACTIVO == "Activos Corrientes" || bal.ACTIVO == "Activos no Corrientes") ? 
                                          ((bal.ACTIVO == "Activos Corrientes" ? activosCorrientes : activosNoCorrientes).map((act) => (
                                            <>
                                              <TableRow key={act.ACTIVO} className="">
                                                  <TableCell className="font-semibold">{act.ACTIVO}</TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{act[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{act[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{act[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{act[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{act[2024]}</p></div></TableCell>
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
                                  <TableRow key={bal.ACTIVO} className="w-full">

                                            <TableCell className="font-bold ">{bal.ACTIVO}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2024]}</p></div></TableCell>
                                            <TableCell>
                                              {
                                                (bal.ACTIVO == "Pasivos Corrientes" || bal.ACTIVO == "Pasivos no Corrientes" || bal.ACTIVO == "Patrimonio") ? 
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
                                        (bal.ACTIVO == "Pasivos Corrientes" || bal.ACTIVO == "Pasivos no Corrientes" || bal.ACTIVO == "Patrimonio") ? 
                                          ((bal.ACTIVO == "Pasivos Corrientes" ? pasivosCorrientes : bal.ACTIVO == "Pasivos no Corrientes" ? pasivosNoCorrientes : patrimonio).map((pas) => (
                                            <>
                                              <TableRow key={pas.ACTIVO} className="">
                                                  <TableCell className="font-semibold">{pas.ACTIVO}</TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{pas[2020]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{pas[2021]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{pas[2022]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{pas[2023]}</p></div></TableCell>
                                                  <TableCell><div className=" flex justify-center pr-2 pl-2 font-semibold"><p>{pas[2024]}</p></div></TableCell>
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
                          <TableHead className="w-[200px]">Cuenta de Resultados</TableHead>
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
                        cuentaResultados.map((bal) => {

                          if (bal.EJERCICIOS === "BAI (EBT)" || bal.EJERCICIOS === "Resultado Financiero" || bal.EJERCICIOS === "Margen Bruto" || bal.EJERCICIOS === "EBITDA" || bal.EJERCICIOS === "BAII(EBIT)" || bal.EJERCICIOS === "Resultado Neto") { 
                            return (
                              <TableRow className="w-full" key={bal.EJERCICIOS}>
                                <TableCell className="font-bold">{bal.EJERCICIOS}</TableCell>
                                <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2020]}</p></div></TableCell>
                                <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2021]}</p></div></TableCell>
                                <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2022]}</p></div></TableCell>
                                <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2023]}</p></div></TableCell>
                                <TableCell className="font-bold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2024]}</p></div></TableCell>
                              </TableRow>
                            )
                          } else {
                            return (
                              <TableRow className="w-full">
                                <TableCell className="font-semibold">{bal.EJERCICIOS}</TableCell>
                                <TableCell className="font-semibold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2020]}</p></div></TableCell>
                                <TableCell className="font-semibold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2021]}</p></div></TableCell>
                                <TableCell className="font-semibold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2022]}</p></div></TableCell>
                                <TableCell className="font-semibold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2023]}</p></div></TableCell>
                                <TableCell className="font-semibold"><div className=" flex justify-center pr-2 pl-2"><p>{bal[2024]}</p></div></TableCell>
                              </TableRow>
                            )
                          }
                              

                              
                                
                          
                        })
                      }

                  </TableBody>
              </Table>
          </div>

        </div>
        
    </LayoutDash>
  )
}
