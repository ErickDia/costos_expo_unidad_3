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
    "2020": "8.7%",
    "2021": "9.6%",
    "2022": "7.1%",
    "2023": "6.9%",
    "2024": "11.3%",
    "ACTIVO": "Activos Corrientes"
  },
  {
    "2020": "91.3%",
    "2021": "90.4%",
    "2022": "92.9%",
    "2023": "93.1%",
    "2024": "88.7%",
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
    "2020": "2.1%",
    "2021": "5.8%",
    "2022": "3.2%",
    "2023": "1.8%",
    "2024": "6.0%",
    "ACTIVO": "Efectivo y equivalentes al efectivo"
  },
  {
    "2020": "4.6%",
    "2021": "2.4%",
    "2022": "2.2%",
    "2023": "3.4%",
    "2024": "4.1%",
    "ACTIVO": "Cuentas por cobrar comerciales y diversas"
  },
  {
    "2020": "1.2%",
    "2021": "0.9%",
    "2022": "1.1%",
    "2023": "1.0%",
    "2024": "1.0%",
    "ACTIVO": "Inventarios, neto"
  },
  {
    "2020": "0.4%",
    "2021": "0.3%",
    "2022": "0.4%",
    "2023": "0.3%",
    "2024": "0.0%",
    "ACTIVO": "Activos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "0.5%",
    "2021": "0.3%",
    "2022": "0.2%",
    "2023": "0.4%",
    "2024": "0.1%",
    "ACTIVO": "Gastos contratados por anticipado"
  }
]

const activosNoCorrientes = [
  {
    "2020": "63.0%",
    "2021": "16.0%",
    "2022": "16.4%",
    "2023": "14.2%",
    "2024": "12.2%",
    "ACTIVO": "Cuentas por cobrar comerciales y diversas, neto"
  },
  {
    "2020": "2.2%",
    "2021": "52.8%",
    "2022": "54.5%",
    "2023": "53.8%",
    "2024": "49.4%",
    "ACTIVO": "Inversiones en subsidiarias y asociadas"
  },
  {
    "2020": "23.7%",
    "2021": "18.7%",
    "2022": "18.8%",
    "2023": "21.5%",
    "2024": "24.7%",
    "ACTIVO": "Propiedad, planta, equipo y costos de desarrollo"
  },
  {
    "2020": "1.5%",
    "2021": "2.3%",
    "2022": "2.6%",
    "2023": "2.9%",
    "2024": "1.9%",
    "ACTIVO": "Activo por impuestos a las ganancias diferido, neto"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Activos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "0.8%",
    "2021": "0.6%",
    "2022": "0.6%",
    "2023": "0.6%",
    "2024": "0.6%",
    "ACTIVO": "Otros activos, neto"
  }
]

// pasivos

const balancePasivos = [
  {
    "2020": "5.9%",
    "2021": "14.0%",
    "2022": "4.3%",
    "2023": "6.6%",
    "2024": "7.4%",
    "ACTIVO": "Pasivos Corrientes"
  },
  {
    "2020": "13.0%",
    "2021": "23.9%",
    "2022": "17.5%",
    "2023": "16.9%",
    "2024": "15.9%",
    "ACTIVO": "Pasivos no Corrientes"
  },
  {
    "2020": "18.8%",
    "2021": "37.8%",
    "2022": "21.8%",
    "2023": "23.6%",
    "2024": "23.3%",
    "ACTIVO": "Total Pasivos"
  },
  {
    "2020": "81.2%",
    "2021": "62.2%",
    "2022": "78.2%",
    "2023": "76.4%",
    "2024": "76.7%",
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
    "2020": "1.5%",
    "2021": "1.3%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Préstamos bancarios"
  },
  {
    "2020": "2.9%",
    "2021": "3.4%",
    "2022": "3.2%",
    "2023": "5.0%",
    "2024": "6.4%",
    "ACTIVO": "Cuentas por pagar comerciales y diversas"
  },
  {
    "2020": "1.2%",
    "2021": "1.1%",
    "2022": "1.0%",
    "2023": "1.5%",
    "2024": "0.8%",
    "ACTIVO": "Provisiones, pasivos contingentes y otros pasivos"
  },
  {
    "2020": "0.1%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Instrumentos financieros derivados de cobertura"
  },
  {
    "2020": "0.1%",
    "2021": "1.2%",
    "2022": "0.1%",
    "2023": "0.1%",
    "2024": "0.1%",
    "ACTIVO": "Obligaciones financieras"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.2%",
    "ACTIVO": "Pasivos por impuestos a las ganancias corrientes"
  },
  {
    "2020": "0.0%",
    "2021": "7.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Pasivo asociado directamente con la inversión en Yanacocha mantenida para la venta"
  }
]

const pasivosNoCorrientes = [
  {
    "2020": "0.0%",
    "2021": "0.1%",
    "2022": "0.1%",
    "2023": "0.2%",
    "2024": "0.3%",
    "ACTIVO": "Cuentas por pagar comerciales y diversas"
  },
  {
    "2020": "3.7%",
    "2021": "2.7%",
    "2022": "2.6%",
    "2023": "2.1%",
    "2024": "2.5%",
    "ACTIVO": "Provisiones, pasivos contingentes y otros pasivos"
  },
  {
    "2020": "8.6%",
    "2021": "20.6%",
    "2022": "14.4%",
    "2023": "14.1%",
    "2024": "12.5%",
    "ACTIVO": "Obligaciones financieras"
  },
  {
    "2020": "0.7%",
    "2021": "0.5%",
    "2022": "0.4%",
    "2023": "0.5%",
    "2024": "0.6%",
    "ACTIVO": "Pasivo financiero por contraprestación contingente"
  }
]

const patrimonio = [
  {
    "2020": "23.2%",
    "2021": "19.7%",
    "2022": "19.5%",
    "2023": "19.1%",
    "2024": "17.0%",
    "ACTIVO": "Capital social"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Acciones de inversión"
  },
  {
    "2020": "6.7%",
    "2021": "5.7%",
    "2022": "5.7%",
    "2023": "5.6%",
    "2024": "4.9%",
    "ACTIVO": "Capital adicional"
  },
  {
    "2020": "5.0%",
    "2021": "4.3%",
    "2022": "4.2%",
    "2023": "4.2%",
    "2024": "3.7%",
    "ACTIVO": "Reserva legal"
  },
  {
    "2020": "0.0%",
    "2021": "0.0%",
    "2022": "0.8%",
    "2023": "0.8%",
    "2024": "0.7%",
    "ACTIVO": "Otras reservas de capital"
  },
  {
    "2020": "46.5%",
    "2021": "32.5%",
    "2022": "47.9%",
    "2023": "46.8%",
    "2024": "50.3%",
    "ACTIVO": "Resultados acumulados"
  },
  {
    "2020": "-0.3%",
    "2021": "-0.1%",
    "2022": "0.1%",
    "2023": "0.0%",
    "2024": "0.0%",
    "ACTIVO": "Otras reservas de patrimonio"
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
    "2020": "78.5%",
    "2021": "83.8%",
    "2022": "76.4%",
    "2023": "74.3%",
    "2024": "56.9%",
    "EJERCICIOS": "Costo de Ventas"
  },
  {
    "2020": "21.5%",
    "2021": "16.2%",
    "2022": "23.6%",
    "2023": "25.7%",
    "2024": "43.1%",
    "EJERCICIOS": "Margen Bruto"
  },
  {
    "2020": "2.5%",
    "2021": "2.5%",
    "2022": "2.8%",
    "2023": "1.9%",
    "2024": "1.8%",
    "EJERCICIOS": "Gasto de Ventas"
  },
  {
    "2020": "11.2%",
    "2021": "9.0%",
    "2022": "10.2%",
    "2023": "10.8%",
    "2024": "6.8%",
    "EJERCICIOS": "Gastos de Administraciòn"
  },
  {
    "2020": "1.1%",
    "2021": "1.0%",
    "2022": "1.5%",
    "2023": "1.5%",
    "2024": "1.2%",
    "EJERCICIOS": "Exploración en áreas no operativas"
  },
  {
    "2020": "6.8%",
    "2021": "3.7%",
    "2022": "9.1%",
    "2023": "11.5%",
    "2024": "33.3%",
    "EJERCICIOS": "EBITDA"
  },
  {
    "2020": "31.3%",
    "2021": "23.7%",
    "2022": "24.8%",
    "2023": "21.7%",
    "2024": "12.3%",
    "EJERCICIOS": "Depreciación/Amortizaciones"
  },
  {
    "2020": "1.1%",
    "2021": "0.3%",
    "2022": "0.3%",
    "2023": "1.0%",
    "2024": "0.1%",
    "EJERCICIOS": "Provisión por contingencias"
  },
  {
    "2020": "0.6%",
    "2021": "0.0%",
    "2022": "0.0%",
    "2023": "0.0%",
    "2024": "0.0%",
    "EJERCICIOS": "Recupero por deterioro de activos de larga duración"
  },
  {
    "2020": "0.0%",
    "2021": "-3.5%",
    "2022": "-1.5%",
    "2023": "6.2%",
    "2024": "8.7%",
    "EJERCICIOS": "Otros, neto"
  },
  {
    "2020": "-24.9%",
    "2021": "-23.8%",
    "2022": "-17.5%",
    "2023": "-3.0%",
    "2024": "29.9%",
    "EJERCICIOS": "BAII(EBIT)"
  },
  {
    "2020": "0.4%",
    "2021": "1.4%",
    "2022": "3.5%",
    "2023": "1.0%",
    "2024": "0.9%",
    "EJERCICIOS": "Ingresos financieros"
  },
  {
    "2020": "7.0%",
    "2021": "11.7%",
    "2022": "11.8%",
    "2023": "29.0%",
    "2024": "7.9%",
    "EJERCICIOS": "Gastos Financieros"
  },
  {
    "2020": "-6.6%",
    "2021": "-10.3%",
    "2022": "-8.3%",
    "2023": "-28.0%",
    "2024": "-7.0%",
    "EJERCICIOS": "Resultado Financiero"
  },
  {
    "2020": "-0.4%",
    "2021": "-3.2%",
    "2022": "7.3%",
    "2023": "5.0%",
    "2024": "-1.3%",
    "EJERCICIOS": "Diferencia en cambio, neto"
  },
  {
    "2020": "12.6%",
    "2021": "58.3%",
    "2022": "47.6%",
    "2023": "41.7%",
    "2024": "49.2%",
    "EJERCICIOS": "Participación en los resultados de asociadas"
  },
  {
    "2020": "-19.2%",
    "2021": "20.9%",
    "2022": "29.1%",
    "2023": "15.7%",
    "2024": "70.8%",
    "EJERCICIOS": "BAI (EBT)"
  },
  {
    "2020": "-0.1%",
    "2021": "-0.1%",
    "2022": "-0.6%",
    "2023": "-13.0%",
    "2024": "-5.1%",
    "EJERCICIOS": "Impuestos a las ganancias corriente"
  },
  {
    "2020": "-0.8%",
    "2021": "9.6%",
    "2022": "7.3%",
    "2023": "4.8%",
    "2024": "-5.0%",
    "EJERCICIOS": "Impuestos a las ganancias diferido"
  },
  {
    "2020": "-20.1%",
    "2021": "30.4%",
    "2022": "35.8%",
    "2023": "7.4%",
    "2024": "60.6%",
    "EJERCICIOS": "Ganancia (pérdida) por operaciones continuadas"
  },
  {
    "2020": "-19.5%",
    "2021": "-95.5%",
    "2022": "138.3%",
    "2023": "-1.9%",
    "2024": "-0.2%",
    "EJERCICIOS": "Operaciones discontinuadas"
  },
  {
    "2020": "-39.6%",
    "2021": "-65.0%",
    "2022": "174.2%",
    "2023": "5.5%",
    "2024": "60.5%",
    "EJERCICIOS": "Resultado Neto"
  }
]

export const BuenaAnalisisV = () => {
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
