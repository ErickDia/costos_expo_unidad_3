import LayoutDash from "../LayoutDash"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from '@/components/ui/table';

const CuentaResultados = [
  {
    "2020": "189,452",
    "2021": "531,905",
    "2022": "165,778",
    "2023": "261,124",
    "2024": "327,099",
    "Pasivos": "Pasivos Corrientes"
  },
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
export const BuenaCuentaResultados = () => {
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

                            if (bal.Pasivos === "BAI (EBT)" || bal.Pasivos === "Resultado Financiero" || bal.Pasivos === "Margen Bruto" || bal.Pasivos === "EBITDA" || bal.Pasivos === "BAII(EBIT)" || bal.Pasivos === "Resultado Neto") { 
                              return (
                                <TableRow className="bg-gray-100 w-full">
                                  <TableCell className="font-bold bg-gray-200">{bal.Pasivos}</TableCell>
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
                                  <TableCell className="font-bold bg-gray-100">{bal.Pasivos}</TableCell>
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
