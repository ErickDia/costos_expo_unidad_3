import LayoutDash from "../LayoutDash"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from '@/components/ui/table';
import { Pencil } from "lucide-react";
import { Button } from '@/components/ui/button';

const balance = [
  {
    "2020": "1,459,969",
    "2021": "1,323,118",
    "2022": "1,377,477",
    "2023": "1,184,112",
    "2024": "1,617,082",
    "Activos": "Activos Corrientes"
  },
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

export const Southern = () => {
  return (
    <LayoutDash>
        <div className='flex justify-center flex-col items-center'>
            <div className="border rounded-lg shadow-sm w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Activos</TableHead>
                            <TableHead className="w-[70px]">2021</TableHead>
                            <TableHead className="w-[70px]">2021</TableHead>
                            <TableHead className="w-[70px]">2022</TableHead>
                            <TableHead className="w-[70px]">2023</TableHead>
                            <TableHead className="w-[70px]">2024</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            balance.map((bal) => {
                                if (bal.Activos === "Activos Corrientes" || bal.Activos === "Activos no Corrientes" || bal.Activos === "Total Activos") {
                                    return (
                                        <TableRow key={bal.Activos}>
                                            <TableCell className="font-bold">{bal.Activos}</TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2020]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2021]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2022]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2023]}</p></div></TableCell>
                                            <TableCell className="font-bold"><div className=" flex justify-between pr-2 pl-2"><p>S/.</p><p>{bal[2024]}</p></div></TableCell>
                                        </TableRow>
                                    )
                                }
                                return (
                                    <TableRow key={bal.Activos}>
                                        <TableCell>{bal.Activos}</TableCell>
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
            </div>
        </div>
        
    </LayoutDash>
  )
}
