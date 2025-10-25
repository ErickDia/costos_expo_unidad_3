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
    "2020": "21.2%",
    "2021": "18.6%",
    "2022": "18.9%",
    "2023": "15.9%",
    "2024": "20.1%",
    "ACTIVO": "Activos Corrientes"
  },
  {
    "2020": "78.8%",
    "2021": "81.4%",
    "2022": "81.1%",
    "2023": "84.1%",
    "2024": "79.9%",
    "ACTIVO": "Activos no Corrientes"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "ACTIVO": "Total Activos"
  }
]

const activosCorrientes = [
  {
    "2020": "21.2%",
    "2021": "18.6%",
    "2022": "18.9%",
    "2023": "15.9%",
    "2024": "20.1%",
    "ACTIVO": "Activos Corrientes"
  },
  {
    "2020": "8.6%",
    "2021": "3.7%",
    "2022": "4.6%",
    "2023": "3.3%",
    "2024": "7.6%",
    "ACTIVO": "Efectivo y equivalentes al efectivo"
  },
  {
    "2020": "6.5%",
    "2021": "9.2%",
    "2022": "7.5%",
    "2023": "7.2%",
    "2024": "6.3%",
    "ACTIVO": "Cuentas por cobrar comerciales"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Cuentas por cobrar a entidades relacionadas"
  },
  {
    "2020": "0.4%",
    "2021": "0.6%",
    "2022": "0.6%",
    "2023": "0.5%",
    "2024": "0.5%",
    "ACTIVO": "Otras cuentas por cobrar"
  },
  {
    "2020": "5.2%",
    "2021": "4.6%",
    "2022": "4.5%",
    "2023": "4.2%",
    "2024": "4.7%",
    "ACTIVO": "Inventarios (neto)"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.9%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Activos por impuesto a las ganancias"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Activos clasificados como mantenidos para la venta"
  },
  {
    "2020": "0.5%",
    "2021": "0.5%",
    "2022": "0.9%",
    "2023": "0.8%",
    "2024": "1.1%",
    "ACTIVO": "Otros activos "
  }
]

const activosNoCorrientes = [
  {
    "2020": "2.2%",
    "2021": "2.1%",
    "2022": "1.9%",
    "2023": "1.9%",
    "2024": "1.8%",
    "ACTIVO": "Inversión en asociadas y subsidiarias"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.2%",
    "ACTIVO": "Otras cuentas por cobrar"
  },
  {
    "2020": "1.4%",
    "2021": "0.9%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Material Lixiviable"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.6%",
    "2023": "0.4%",
    "2024": "0.3%",
    "ACTIVO": "Inventarios (neto)"
  },
  {
    "2020": "52.4%",
    "2021": "50.4%",
    "2022": "48.5%",
    "2023": "47.3%",
    "2024": "42.9%",
    "ACTIVO": "Propiedades, planta y equipo (neto)"
  },
  {
    "2020": "0.3%",
    "2021": "0.2%",
    "2022": "0.1%",
    "2023": "0.1%",
    "2024": "0.4%",
    "ACTIVO": "Activos por derecho de uso"
  },
  {
    "2020": "21.7%",
    "2021": "26.9%",
    "2022": "29.2%",
    "2023": "33.6%",
    "2024": "33.8%",
    "ACTIVO": "Concesiones mineras, desbroce y desarrollo (neto)"
  },
  {
    "2020": "0.2%",
    "2021": "0.1%",
    "2022": "0.1%",
    "2023": "0.1%",
    "2024": "0.0%",
    "ACTIVO": "Activos intangibles (neto)"
  },
  {
    "2020": "0.6%",
    "2021": "0.8%",
    "2022": "0.7%",
    "2023": "0.7%",
    "2024": "0.5%",
    "ACTIVO": "Otros activos "
  }
]

// pasivos

const balancePasivos = [
  {
    "2020": "8.1%",
    "2021": "11.2%",
    "2022": "6.3%",
    "2023": "6.8%",
    "2024": "8.2%",
    "ACTIVO": "Pasivos Corrientes"
  },
  {
    "2020": "10.2%",
    "2021": "11.8%",
    "2022": "11.3%",
    "2023": "11.4%",
    "2024": "12.6%",
    "ACTIVO": "Pasivos no Corrientes"
  },
  {
    "2020": "18.3%",
    "2021": "23.0%",
    "2022": "17.6%",
    "2023": "18.2%",
    "2024": "20.9%",
    "ACTIVO": "Total Pasivos"
  },
  {
    "2020": "81.7%",
    "2021": "77.0%",
    "2022": "82.4%",
    "2023": "81.8%",
    "2024": "79.1%",
    "ACTIVO": "Patrimonio"
  },
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "ACTIVO": "Total Pasivo + Patrimonio"
  }
]

const pasivosCorrientes = [
  {
    "2020": "3.5%",
    "2021": "3.1%",
    "2022": "3.5%",
    "2023": "2.9%",
    "2024": "3.1%",
    "ACTIVO": "Cuentas por pagar comerciales"
  },
  {
    "2020": "1.0%",
    "2021": "1.2%",
    "2022": "0.9%",
    "2023": "1.0%",
    "2024": "1.1%",
    "ACTIVO": "Otras cuentas por pagar"
  },
  {
    "2020": "0.1%",
    "2021": "0.1%",
    "2022": "0.1%",
    "2023": "0.1%",
    "2024": "0.1%",
    "ACTIVO": "Pasivo por arrendamientos"
  },
  {
    "2020": "1.9%",
    "2021": "3.9%",
    "2022": "0.0%",
    "2023": "0.9%",
    "2024": "1.8%",
    "ACTIVO": "Pasivo por impuesto a las ganancias"
  },
  {
    "2020": "1.6%",
    "2021": "2.9%",
    "2022": "1.7%",
    "2023": "1.8%",
    "2024": "2.1%",
    "ACTIVO": "Pasivo para beneficios a los trabajadores"
  }
]

const pasivosNoCorrientes = [
  {
    "2020": "0.2%",
    "2021": "0.1%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.3%",
    "ACTIVO": "Pasivo por arrendamientos"
  },
  {
    "2020": "7.1%",
    "2021": "9.0%",
    "2022": "9.6%",
    "2023": "9.9%",
    "2024": "10.2%",
    "ACTIVO": "Pasivo por impuesto a las ganancias diferido"
  },
  {
    "2020": "2.5%",
    "2021": "2.3%",
    "2022": "1.3%",
    "2023": "1.3%",
    "2024": "1.1%",
    "ACTIVO": "Pasivo para retiro de activos y cierre de mina"
  },
  {
    "2020": "0.5%",
    "2021": "0.4%",
    "2022": "0.3%",
    "2023": "0.1%",
    "2024": "1.0%",
    "ACTIVO": "Otras cuentas por pagar"
  }
]

const patrimonio = [
  {
    "2020": "4.7%",
    "2021": "4.5%",
    "2022": "4.4%",
    "2023": "4.3%",
    "2024": "4.0%",
    "ACTIVO": "Capital social asignado "
  },
  {
    "2020": "0.8%",
    "2021": "0.7%",
    "2022": "0.7%",
    "2023": "0.7%",
    "2024": "0.6%",
    "ACTIVO": "Acciones de inversión"
  },
  {
    "2020": "0.9%",
    "2021": "0.9%",
    "2022": "0.8%",
    "2023": "0.8%",
    "2024": "0.8%",
    "ACTIVO": "Capital adicional"
  },
  {
    "2020": "3.6%",
    "2021": "3.4%",
    "2022": "3.4%",
    "2023": "3.3%",
    "2024": "3.0%",
    "ACTIVO": "Otras reservas de capital"
  },
  {
    "2020": "71.8%",
    "2021": "67.5%",
    "2022": "73.1%",
    "2023": "72.7%",
    "2024": "70.7%",
    "ACTIVO": "Resultados acumulados"
  }
]

const cuentaResultados = [
  {
    "2020": "100.0%",
    "2021": "100.0%",
    "2022": "100.0%",
    "2023": "100.0%",
    "2024": "100.0%",
    "EJERCICIOS": "Ventas"
  },
  {
    "2020": "42.1%",
    "2021": "28.6%",
    "2022": "43.8%",
    "2023": "39.7%",
    "2024": "38.2%",
    "EJERCICIOS": "Costo de Ventas"
  },
  {
    "2020": "57.9%",
    "2021": "71.4%",
    "2022": "56.2%",
    "2023": "60.3%",
    "2024": "61.8%",
    "EJERCICIOS": "Margen Bruto"
  },
  {
    "2020": "0.5%",
    "2021": "0.4%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "EJERCICIOS": "Gasto de Ventas"
  },
  {
    "2020": "1.5%",
    "2021": "1.3%",
    "2022": "1.4%",
    "2023": "1.4%",
    "2024": "1.2%",
    "EJERCICIOS": "Gastos de Administraciòn"
  },
  {
    "2020": "0.3%",
    "2021": "0.2%",
    "2022": "0.3%",
    "2023": "0.7%",
    "2024": "0.7%",
    "EJERCICIOS": "Gastos de Exploración"
  },
  {
    "2020": "55.6%",
    "2021": "69.6%",
    "2022": "54.5%",
    "2023": "58.2%",
    "2024": "59.9%",
    "EJERCICIOS": "EBITDA"
  },
  {
    "2020": "10.9%",
    "2021": "7.9%",
    "2022": "9.0%",
    "2023": "9.6%",
    "2024": "9.0%",
    "EJERCICIOS": "Depreciación/Amortizaciones"
  },
  {
    "2020": "0.5%",
    "2021": "0.8%",
    "2022": "1.7%",
    "2023": "0.6%",
    "2024": "1.7%",
    "EJERCICIOS": "Otros ingresos"
  },
  {
    "2020": "2.2%",
    "2021": "1.9%",
    "2022": "1.7%",
    "2023": "1.2%",
    "2024": "2.3%",
    "EJERCICIOS": "Otros gastos"
  },
  {
    "2020": "42.9%",
    "2021": "60.5%",
    "2022": "45.5%",
    "2023": "48.0%",
    "2024": "50.3%",
    "EJERCICIOS": "BAII(EBIT)"
  },
  {
    "2020": "0.1%",
    "2021": "0.0%",
    "2022": "0.2%",
    "2023": "0.6%",
    "2024": "0.6%",
    "EJERCICIOS": "Ingresos financieros"
  },
  {
    "2020": "0.3%",
    "2021": "0.2%",
    "2022": "0.3%",
    "2023": "0.3%",
    "2024": "0.3%",
    "EJERCICIOS": "Gastos Financieros"
  },
  {
    "2020": "-0.3%",
    "2021": "-0.2%",
    "2022": "-0.1%",
    "2023": "0.4%",
    "2024": "0.3%",
    "EJERCICIOS": "Resultado Financiero"
  },
  {
    "2020": "0.6%",
    "2021": "0.7%",
    "2022": "-0.9%",
    "2023": "-0.1%",
    "2024": "0.1%",
    "EJERCICIOS": "Diferencia en cambio, neto"
  },
  {
    "2020": "0.2%",
    "2021": "0.3%",
    "2022": "-0.1%",
    "2023": "-0.1%",
    "2024": "0.0%",
    "EJERCICIOS": "Participación en los resultados de asociadas"
  },
  {
    "2020": "43.4%",
    "2021": "61.3%",
    "2022": "44.5%",
    "2023": "48.2%",
    "2024": "50.7%",
    "EJERCICIOS": "BAI (EBT)"
  },
  {
    "2020": "18.4%",
    "2021": "24.4%",
    "2022": "12.4%",
    "2023": "17.2%",
    "2024": "19.1%",
    "EJERCICIOS": "Gasto por impuestos a las ganancias"
  },
  {
    "2020": "25.1%",
    "2021": "36.9%",
    "2022": "32.1%",
    "2023": "31.0%",
    "2024": "31.6%",
    "EJERCICIOS": "Resultado Neto"
  }
]

export const SouthernAnalisisH = () => {
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
