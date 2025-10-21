import LayoutDash from "../LayoutDash"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from '@/components/ui/table';

const CuentaResultados = [
  {
    "2020": "3,153,559",
    "2021": "4,370,788",
    "2022": "3,908,517",
    "2023": "3,854,335",
    "2024": "4,604,625",
    "EJERCICIOS": "Ventas"
  },
  {
    "2020": "1,328,232",
    "2021": "1,249,675",
    "2022": "1,713,306",
    "2023": "1,528,475",
    "2024": "1,758,752",
    "EJERCICIOS": "Costo de Ventas"
  },
  {
    "2020": "1,825,327",
    "2021": "3,121,113",
    "2022": "2,195,211",
    "2023": "2,325,860",
    "2024": "2,845,873",
    "EJERCICIOS": "Margen Bruto"
  },
  {
    "2020": "15,879",
    "2021": "15,781",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "EJERCICIOS": "Gasto de Ventas"
  },
  {
    "2020": "47,267",
    "2021": "54,781",
    "2022": "53,928",
    "2023": "54,322",
    "2024": "56,441",
    "EJERCICIOS": "Gastos de Administraciòn"
  },
  {
    "2020": "8,247",
    "2021": "9,686",
    "2022": "12,455",
    "2023": "27,385",
    "2024": "33,019",
    "EJERCICIOS": "Gastos de Exploración"
  },
  {
    "2020": "1,753,934",
    "2021": "3,040,865",
    "2022": "2,128,828",
    "2023": "2,244,153",
    "2024": "2,756,413",
    "EJERCICIOS": "EBITDA"
  },
  {
    "2020": "344,766",
    "2021": "345,803",
    "2022": "351,464",
    "2023": "370,387",
    "2024": "415,119",
    "EJERCICIOS": "Depreciación/Amortizaciones"
  },
  {
    "2020": "14,724",
    "2021": "34,323",
    "2022": "67,048",
    "2023": "22,998",
    "2024": "78,318",
    "EJERCICIOS": "Otros ingresos"
  },
  {
    "2020": "70,025",
    "2021": "82,875",
    "2022": "64,492",
    "2023": "46,573",
    "2024": "105,278",
    "EJERCICIOS": "Otros gastos"
  },
  {
    "2020": "1,353,867",
    "2021": "2,646,510",
    "2022": "1,779,920",
    "2023": "1,850,191",
    "2024": "2,314,334",
    "EJERCICIOS": "BAII(EBIT)"
  },
  {
    "2020": "2,760",
    "2021": "461",
    "2022": "8,132",
    "2023": "23,623",
    "2024": "28,191",
    "EJERCICIOS": "Ingresos financieros"
  },
  {
    "2020": "10,718",
    "2021": "9,591",
    "2022": "11,406",
    "2023": "10,050",
    "2024": "12,813",
    "EJERCICIOS": "Gastos Financieros"
  },
  {
    "2020": "-7,958",
    "2021": "-9,130",
    "2022": "-3,274",
    "2023": "13,573",
    "2024": "15,378",
    "EJERCICIOS": "Resultado Financiero"
  },
  {
    "2020": "17,373",
    "2021": "29,048",
    "2022": "-33,717",
    "2023": "-4,244",
    "2024": "3,269",
    "EJERCICIOS": "Diferencia en cambio, neto"
  },
  {
    "2020": "6,413",
    "2021": "13,630",
    "2022": "-3,726",
    "2023": "-2,189",
    "2024": "0",
    "EJERCICIOS": "Participación en los resultados de asociadas"
  },
  {
    "2020": "1,369,695",
    "2021": "2,680,058",
    "2022": "1,739,203",
    "2023": "1,857,331",
    "2024": "2,332,981",
    "EJERCICIOS": "BAI (EBT)"
  },
  {
    "2020": "579,497",
    "2021": "1,067,328",
    "2022": "483,373",
    "2023": "663,853",
    "2024": "878,326",
    "EJERCICIOS": "Gasto por impuestos a las ganancias"
  },
  {
    "2020": "790,198",
    "2021": "1,612,730",
    "2022": "1,255,830",
    "2023": "1,193,478",
    "2024": "1,454,655",
    "EJERCICIOS": "Resultado Neto"
  }
]

export const SouthernCuentaResultados = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Solvencia</h2>
        <div className='flex justify-center flex-col items-center gap-10'>
          <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-300">
                            <TableHead className="w-[200px]">Activos</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-center">2023</TableHead>                            
                            <TableHead className="w-[70px] text-center">2024</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                          CuentaResultados.map((bal) => {

                            if (bal.EJERCICIOS === "BAI (EBT)" || bal.EJERCICIOS === "Resultado Financiero" || bal.EJERCICIOS === "Margen Bruto" || bal.EJERCICIOS === "EBITDA" || bal.EJERCICIOS === "BAII(EBIT)" || bal.EJERCICIOS === "Resultado Neto") { 
                              return (
                                <TableRow className="bg-gray-100 w-full">
                                  <TableCell className="font-bold bg-gray-200">{bal.EJERCICIOS}</TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
                                </TableRow>
                              )
                            } else {
                              return (
                                <TableRow className="w-full">
                                  <TableCell className="font-bold bg-gray-100">{bal.EJERCICIOS}</TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                  <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
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
