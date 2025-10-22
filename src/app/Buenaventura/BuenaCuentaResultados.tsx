import LayoutDash from "../LayoutDash"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from '@/components/ui/table';

const CuentaResultados = [
  {
    "2020": "343112",
    "2021": "406028",
    "2022": "345911",
    "2023": "360248",
    "2024": "665978",
    "Ejercicio": "Ventas"
  },
  {
    "2020": "269260",
    "2021": "340402",
    "2022": "264426",
    "2023": "267634",
    "2024": "379090",
    "Ejercicio": "Costo de Ventas"
  },
  {
    "2020": "73852",
    "2021": "65626",
    "2022": "81485",
    "2023": "92614",
    "2024": "286888",
    "Ejercicio": "Margen Bruto"
  },
  {
    "2020": "8542",
    "2021": "10104",
    "2022": "9709",
    "2023": "7011",
    "2024": "11841",
    "Ejercicio": "Gasto de Ventas"
  },
  {
    "2020": "38273",
    "2021": "36370",
    "2022": "35419",
    "2023": "38828",
    "2024": "45032",
    "Ejercicio": "Gastos de Administraciòn"
  },
  {
    "2020": "3650",
    "2021": "4176",
    "2022": "5034",
    "2023": "5452",
    "2024": "8075",
    "Ejercicio": "Exploración en áreas no operativas"
  },
  {
    "2020": "23387",
    "2021": "14976",
    "2022": "31323",
    "2023": "41323",
    "2024": "221940",
    "Ejercicio": "EBITDA"
  },
  {
    "2020": "107278",
    "2021": "96388",
    "2022": "85698",
    "2023": "78123",
    "2024": "81878",
    "Ejercicio": "Depreciación/Amortizaciones"
  },
  {
    "2020": "3721",
    "2021": "1182",
    "2022": "1067",
    "2023": "3568",
    "2024": "551",
    "Ejercicio": "Provisión por contingencias"
  },
  {
    "2020": "2083",
    "2021": "0",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "Ejercicio": "Recupero por deterioro de activos de larga duración"
  },
  {
    "2020": "139",
    "2021": "-14232",
    "2022": "-5093",
    "2023": "22413",
    "2024": "58209",
    "Ejercicio": "Otros, neto"
  },
  {
    "2020": "-85390",
    "2021": "-96826",
    "2022": "-60535",
    "2023": "-10819",
    "2024": "198822",
    "Ejercicio": "BAII(EBIT)"
  },
  {
    "2020": "1405",
    "2021": "5659",
    "2022": "12249",
    "2023": "3619",
    "2024": "5735",
    "Ejercicio": "Ingresos financieros"
  },
  {
    "2020": "23893",
    "2021": "47626",
    "2022": "40907",
    "2023": "104401",
    "2024": "52291",
    "Ejercicio": "Gastos Financieros"
  },
  {
    "2020": "-22488",
    "2021": "-41967",
    "2022": "-28658",
    "2023": "-100782",
    "2024": "-46556",
    "Ejercicio": "Resultado Financiero"
  },
  {
    "2020": "-1284",
    "2021": "-12963",
    "2022": "25162",
    "2023": "17856",
    "2024": "-8366",
    "Ejercicio": "Diferencia en cambio, neto"
  },
  {
    "2020": "43358",
    "2021": "236593",
    "2022": "164823",
    "2023": "150248",
    "2024": "327354",
    "Ejercicio": "Participación en los resultados de asociadas"
  },
  {
    "2020": "-65804",
    "2021": "84837",
    "2022": "100792",
    "2023": "56503",
    "2024": "471254",
    "Ejercicio": "BAI (EBT)"
  },
  {
    "2020": "-224",
    "2021": "-295",
    "2022": "-1917",
    "2023": "-46921",
    "2024": "-34109",
    "Ejercicio": "Impuestos a las ganancias corriente"
  },
  {
    "2020": "-2888",
    "2021": "38987",
    "2022": "25128",
    "2023": "17121",
    "2024": "-33434",
    "Ejercicio": "Impuestos a las ganancias diferido"
  },
  {
    "2020": "-68916",
    "2021": "123529",
    "2022": "124003",
    "2023": "26703",
    "2024": "403711",
    "Ejercicio": "Ganancia (pérdida) por operaciones continuadas"
  },
  {
    "2020": "-66802",
    "2021": "-387604",
    "2022": "478547",
    "2023": "-6848",
    "2024": "-1022",
    "Ejercicio": "Operaciones discontinuadas"
  },
  {
    "2020": "-135718",
    "2021": "-264075",
    "2022": "602550",
    "2023": "19855",
    "2024": "402689",
    "Ejercicio": "Resultado Neto"
  }
]
export const BuenaCuentaResultados = () => {
  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Cuenta de Resultados</h2>
        <div className='flex justify-center flex-col items-center gap-10'>
          <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[200px]"></TableHead>
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

                            if (bal.Ejercicio === "BAI (EBT)" || bal.Ejercicio === "Resultado Financiero" || bal.Ejercicio === "Margen Bruto" || bal.Ejercicio === "EBITDA" || bal.Ejercicio === "BAII(EBIT)" || bal.Ejercicio === "Resultado Neto") { 
                              return (
                                <TableRow className="w-full" key={bal.Ejercicio}>
                                  <TableCell className="font-bold">{bal.Ejercicio}</TableCell>
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
                                  <TableCell className="font-semibold">{bal.Ejercicio}</TableCell>
                                  <TableCell className="font-semibold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                  <TableCell className="font-semibold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                  <TableCell className="font-semibold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                  <TableCell className="font-semibold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                  <TableCell className="font-semibold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
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
