import LayoutDash from "../LayoutDash"

import { Button } from "@/components/ui/button";
// import { ArrowUpIcon, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, DoughnutController, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement
  // ChartData 
} from "chart.js/auto";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { requestApi } from "@/hooks/useRequestApi";

ChartJS.register(
  BarElement,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

type SouRatioKey =
  | "souRatioSolvencia"
  | "souRatioLiquidez"
  | "souRatioEndeudamiento"
  | "souRatioRentabilidad"
  | "souRatioOperativos"
  | "souRatioEstructuraBalance";

type BueRatioKey =
  | "bueRatioSolvencia"
  | "bueRatioLiquidez"
  | "bueRatioEndeudamiento"
  | "bueRatioRentabilidad"
  | "bueRatioOperativos"
  | "bueRatioEstructuraBalance";

const souRatioSolvencia = [
  {
    "2020": "5.45",
    "2021": "4.35",
    "2022": "5.69",
    "2023": "5.51",
    "2024": "4.80",
    "SOLVENCIA": "Ratio de Garantía (Activo / Pasivo)"
  },
  {
    "2020": "1.62",
    "2021": "0.66",
    "2022": "2.01",
    "2023": "1.36",
    "2024": "1.44",
    "SOLVENCIA": "Ratio Fondo Maniobra (FM / PC)"
  },
  {
    "2020": "903450",
    "2021": "526776",
    "2022": "920516",
    "2023": "681377",
    "2024": "953470",
    "SOLVENCIA": "Fondo de Maniobra"
  }
]
const souRatioLiquidez = [
  {
    "2020": "2.62",
    "2021": "1.66",
    "2022": "3.01",
    "2023": "2.36",
    "2024": "2.44",
    "SOLVENCIA": "Liquidez general (AC/PC)"
  },
  {
    "2020": "1.98",
    "2021": "1.25",
    "2022": "2.30",
    "2023": "1.74",
    "2024": "1.87",
    "SOLVENCIA": "Liquidez estricta (AC-E)/PC"
  },
  {
    "2020": "1.06",
    "2021": "0.33",
    "2022": "0.73",
    "2023": "0.49",
    "2024": "0.93",
    "SOLVENCIA": "Disponibilidad (D/PC)"
  }
]
const souRatioEndeudamiento = [
  {
    "2020": "0.1834",
    "2021": "0.2297",
    "2022": "0.1756",
    "2023": "0.1816",
    "2024": "0.2085",
    "SOLVENCIA": "Utilización Deuda (P/(P+PN))"
  },
  {
    "2020": "1.2246",
    "2021": "1.2983",
    "2022": "1.2130",
    "2023": "1.2219",
    "2024": "1.2635",
    "SOLVENCIA": "IAP"
  },
  {
    "2020": "0.8166",
    "2021": "0.7703",
    "2022": "0.8244",
    "2023": "0.8184",
    "2024": "0.7915",
    "SOLVENCIA": "Autonomía Financiera (PN/(P+PN))"
  },
  {
    "2020": "0.2246",
    "2021": "0.2983",
    "2022": "0.2130",
    "2023": "0.2219",
    "2024": "0.2635",
    "SOLVENCIA": "Endeudamiento General (P/PN)"
  },
  {
    "2020": "0.1254",
    "2021": "0.1528",
    "2022": "0.1370",
    "2023": "0.1394",
    "2024": "0.1595",
    "SOLVENCIA": "Endeudamiento L/p (PNC/PN)"
  },
  {
    "2020": "0.0992",
    "2021": "0.1454",
    "2022": "0.0760",
    "2023": "0.0826",
    "2024": "0.1040",
    "SOLVENCIA": "Endeudamiento C/p (PC/PN)"
  },
  {
    "2020": "0.4415",
    "2021": "0.4876",
    "2022": "0.3568",
    "2023": "0.3720",
    "2024": "0.3946",
    "SOLVENCIA": "Calidad deuda (PC/P)"
  },
  {
    "2020": "0.0039",
    "2021": "0.0027",
    "2022": "0.0012",
    "2023": "0.0011",
    "2024": "0.0053",
    "SOLVENCIA": "Endeudamiento bancario"
  },
  {
    "2020": "0.90",
    "2021": "1.20",
    "2022": "1.25",
    "2023": "1.16",
    "2024": "1.11",
    "SOLVENCIA": "Capacidad ec. devolución deuda (FCE/P)"
  },
  {
    "2020": "0.3",
    "2021": "0.2",
    "2022": "0.3",
    "2023": "0.3",
    "2024": "0.3",
    "SOLVENCIA": "Carga Financiera (GF/V)"
  },
  {
    "2020": "9.64",
    "2021": "7.87",
    "2022": "13.04",
    "2023": "12.25",
    "2024": "10.28",
    "SOLVENCIA": "Apalancamiento financiero"
  },
  {
    "2020": "0.01",
    "2021": "0.00",
    "2022": "0.01",
    "2023": "0.01",
    "2024": "0.01",
    "SOLVENCIA": "Cobertura de gastos financieros (BAII/GF)"
  },
  {
    "2020": "48.98",
    "2021": "65.37",
    "2022": "155.48",
    "2023": "143.88",
    "2024": "37.65",
    "SOLVENCIA": "Coste de la deuda financiera (kd)"
  }
]
const souRatioRentabilidad = [
{
    "2020": "19.70",
    "2021": "37.23",
    "2022": "24.41",
    "2023": "24.87",
    "2024": "28.70",
    "SOLVENCIA": "ROA"
  },
  {
    "2020": "116.10",
    "2021": "236.95",
    "2022": "184.51",
    "2023": "175.35",
    "2024": "213.73",
    "SOLVENCIA": "ROE"
  },
  {
    "2020": "42.93",
    "2021": "60.55",
    "2022": "45.54",
    "2023": "48.00",
    "2024": "50.26",
    "SOLVENCIA": "Margen Explotac."
  },
  {
    "2020": "0.46",
    "2021": "0.61",
    "2022": "0.54",
    "2023": "0.52",
    "2024": "0.57",
    "SOLVENCIA": "Rotación Activo"
  },
  {
    "2020": "189.98",
    "2021": "292.90",
    "2022": "318.22",
    "2023": "304.59",
    "2024": "295.17",
    "SOLVENCIA": "Dupont (ROA x apalancamiento fin.)"
  },
  {
    "2020": "58",
    "2021": "71",
    "2022": "56",
    "2023": "60",
    "2024": "62",
    "SOLVENCIA": "Margen Bruto"
  },
  {
    "2020": "56",
    "2021": "70",
    "2022": "54",
    "2023": "58",
    "2024": "60",
    "SOLVENCIA": "EBITDA"
  },
  {
    "2020": "-29.28",
    "2021": "-28.14",
    "2022": "-131.07",
    "2023": "-119.01",
    "2024": "-8.95",
    "SOLVENCIA": "Margen Financiero Activos (ROA-Kd)"
  },
  {
    "2020": "774370",
    "2021": "1579182",
    "2022": "1296547",
    "2023": "1186338",
    "2024": "1436008",
    "SOLVENCIA": "NOPAT (BAII - impuestos)"
  },
  {
    "2020": "1134964",
    "2021": "1958533",
    "2022": "1607294",
    "2023": "1563865",
    "2024": "1869774",
    "SOLVENCIA": "Cash Flow Económico"
  },
  {
    "2020": "1142922",
    "2021": "1967663",
    "2022": "1610568",
    "2023": "1550292",
    "2024": "1854396",
    "SOLVENCIA": "Cash Flow Bruto"
  },
  {
    "2020": "",
    "2021": "-27083",
    "2022": "221974",
    "2023": "29552",
    "2024": "224598",
    "SOLVENCIA": "CAPEX"
  },
  {
    "2020": "",
    "2021": "",
    "2022": "",
    "2023": "",
    "2024": "",
    "SOLVENCIA": "Cambios en capital corriente"
  },
  {
    "2020": "",
    "2021": "1940580",
    "2022": "1832542",
    "2023": "1579844",
    "2024": "2078994",
    "SOLVENCIA": "Free Cash Flow"
  },
  {
    "2020": "97.43",
    "2021": "177.12",
    "2022": "114.06",
    "2023": "132.56",
    "2024": "143.80",
    "SOLVENCIA": "RCSD"
  }
]
const souRatioOperativos = [
  {
    "2020": "0.25",
    "2021": "0.37",
    "2022": "0.24",
    "2023": "0.25",
    "2024": "0.29",
    "SOLVENCIA": "Rotación ANC"
  },
  {
    "2020": "2.16",
    "2021": "3.30",
    "2022": "2.84",
    "2023": "3.26",
    "2024": "2.85",
    "SOLVENCIA": "Rotación AC"
  },
  {
    "2020": "0.11",
    "2021": "0.23",
    "2022": "0.17",
    "2023": "0.16",
    "2024": "0.18",
    "SOLVENCIA": "Rotación de Activos Totales"
  },
  {
    "2020": "0.11",
    "2021": "0.22",
    "2022": "0.17",
    "2023": "0.16",
    "2024": "0.20",
    "SOLVENCIA": "Rotación de Activo Fijo"
  },
  {
    "2020": "0.06",
    "2021": "0.12",
    "2022": "0.09",
    "2023": "0.08",
    "2024": "0.10",
    "SOLVENCIA": "Rotación Activo Circulante"
  },
  {
    "2020": "107",
    "2021": "100",
    "2022": "69",
    "2023": "76",
    "2024": "71",
    "SOLVENCIA": "PMV"
  },
  {
    "2020": "3.40",
    "2021": "3.655",
    "2022": "5.260",
    "2023": "4.797",
    "2024": "5.111",
    "SOLVENCIA": "Rotacion de Inventario"
  },
  {
    "2020": "37",
    "2021": "39",
    "2022": "47",
    "2023": "43",
    "2024": "35",
    "SOLVENCIA": "PMC"
  },
  {
    "2020": "2.07",
    "2021": "2.94",
    "2022": "2.10",
    "2023": "2.2",
    "2024": "2.78",
    "SOLVENCIA": "Rotación de CxC"
  },
  {
    "2020": "145",
    "2021": "139",
    "2022": "117",
    "2023": "120",
    "2024": "106",
    "SOLVENCIA": "PMME"
  },
  {
    "2020": "58",
    "2021": "59",
    "2022": "43",
    "2023": "49",
    "2024": "40",
    "SOLVENCIA": "PMP"
  },
  {
    "2020": "87",
    "2021": "80",
    "2022": "74",
    "2023": "71",
    "2024": "67",
    "SOLVENCIA": "PMMF"
  },
  {
    "2020": "395688",
    "2021": "437196",
    "2022": "591322",
    "2023": "523290",
    "2024": "438354",
    "SOLVENCIA": "NOF"
  },
  {
    "2020": "903450",
    "2021": "526776",
    "2022": "920516",
    "2023": "681377",
    "2024": "953470",
    "SOLVENCIA": "Fondo de Maniobra"
  },
  {
    "2020": "-507762",
    "2021": "-89580",
    "2022": "-329194",
    "2023": "-158087",
    "2024": "-515116",
    "SOLVENCIA": "NRN"
  },
  {
    "2020": "7284",
    "2021": "7577",
    "2022": "7258",
    "2023": "6879",
    "2024": "6355",
    "SOLVENCIA": "RNC"
  },
  {
    "2020": "515046",
    "2021": "97157",
    "2022": "336452",
    "2023": "164966",
    "2024": "521471",
    "SOLVENCIA": "(+) EXCEDENTE TESORERÍA (-) RF"
  }
]
const souRatioEstructuraBalance = [
  {
    "2020": "82",
    "2021": "77",
    "2022": "82",
    "2023": "82",
    "2024": "79",
    "SOLVENCIA": "Peso Patrimonio Neto"
  },
  {
    "2020": "10",
    "2021": "12",
    "2022": "11",
    "2023": "11",
    "2024": "13",
    "SOLVENCIA": "Peso Pasivo No corriente"
  },
  {
    "2020": "8",
    "2021": "11",
    "2022": "6",
    "2023": "7",
    "2024": "8",
    "SOLVENCIA": "Peso Pasivo Corriente"
  },
  {
    "2020": "104",
    "2021": "95",
    "2022": "102",
    "2023": "97",
    "2024": "99",
    "SOLVENCIA": "Ratio de cobertura del inmovilizado"
  },
  {
    "2020": "79",
    "2021": "81",
    "2022": "81",
    "2023": "84",
    "2024": "80",
    "SOLVENCIA": "Peso activos no corrientes"
  },
  {
    "2020": "21",
    "2021": "19",
    "2022": "19",
    "2023": "16",
    "2024": "20",
    "SOLVENCIA": "Peso activos corrientes"
  }
]

const souRatios: Record<SouRatioKey, { [year: string]: string }[]> = {
  souRatioSolvencia,
  souRatioLiquidez,
  souRatioEndeudamiento,
  souRatioRentabilidad,
  souRatioOperativos,
  souRatioEstructuraBalance
};

const efes = [
  {
    efe: "Total Efectivo - Act. Operación",
    southern: {
      result: [1369836, 2, 222312, 1399005, 1845683, 2049456],
      data: [
      {
        "2020": "",
        "2021": "",
        "2022": "",
        "2023": "",
        "2024": "",
        "Ejercicio": "Ingresos:"
      },
      {
        "2020": "3,024,870",
        "2021": "4,165,165",
        "2022": "4,013,896",
        "2023": "3,863,902",
        "2024": "4,632,925",
        "Ejercicio": "Venta de bienes"
      },
      {
        "2020": "4,740",
        "2021": "27,225",
        "2022": "28,780",
        "2023": "53,808",
        "2024": "47,588",
        "Ejercicio": "Otras actividades de operación"
      },
      {
        "2020": "",
        "2021": "",
        "2022": "",
        "2023": "",
        "2024": "",
        "Ejercicio": "Egresos:"
      },
      {
        "2020": "-894,290",
        "2021": "-762,117",
        "2022": "-1,296,583",
        "2023": "-1,148,543",
        "2024": "-1,348,274",
        "Ejercicio": "Proveedores de bienes y servicios"
      },
      {
        "2020": "-299,742",
        "2021": "-354,693",
        "2022": "-396,285",
        "2023": "-342,793",
        "2024": "-443,825",
        "Ejercicio": "Pagos a / y por cuenta de los empleados"
      },
      {
        "2020": "-286,301",
        "2021": "-534,261",
        "2022": "-688,630",
        "2023": "-309,767",
        "2024": "-527,636",
        "Ejercicio": "Impuesto a las ganancias"
      },
      {
        "2020": "-38,792",
        "2021": "-99,663",
        "2022": "-71,978",
        "2023": "-70,253",
        "2024": "-84,659",
        "Ejercicio": "Impuesto especial a la minería"
      },
      {
        "2020": "-42,999",
        "2021": "-126,392",
        "2022": "-90,738",
        "2023": "-84,178",
        "2024": "-100,642",
        "Ejercicio": "Regalías mineras"
      },
      {
        "2020": "-97,650",
        "2021": "-92,952",
        "2022": "-99,457",
        "2023": "-116,493",
        "2024": "-126,021",
        "Ejercicio": "Otras actividades de operación"
      }
      ]
    },
    buenaventura: {
      result: [74964,	-359607,	286560,	119104,	468682],
      data: [
    {
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "2024": "",
      "Ejercicio": "Ingresos:"
    },
    {
      "2020": "396,413",
      "2021": "428,683",
      "2022": "350,097",
      "2023": "315,317",
      "2024": "635,709",
      "Ejercicio": "Cobranza de ventas"
    },
    {
      "2020": "28,013",
      "2021": "158,641",
      "2022": "331,795",
      "2023": "170,859",
      "2024": "299,819",
      "Ejercicio": "Cobranza de dividendos de partes relacionadas"
    },
    {
      "2020": "19,168",
      "2021": "14,779",
      "2022": "22,349",
      "2023": "27,389",
      "2024": "32,029",
      "Ejercicio": "Cobranza por solicitud de devolución de impuestos"
    },
    {
      "2020": "1,321",
      "2021": "1,147",
      "2022": "1,662",
      "2023": "2,625",
      "2024": "3,762",
      "Ejercicio": "Cobranza de intereses"
    },
    {
      "2020": "2,500",
      "2021": "3,350",
      "2022": "0",
      "2023": "150",
      "2024": "1,150",
      "Ejercicio": "Cobranza de dividendos de otras inversiones"
    },
    {
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "2024": "",
      "Ejercicio": "Egresos:"
    },
    {
      "2020": "-21,948",
      "2021": "-304,812",
      "2022": "-276,328",
      "2023": "-245,816",
      "2024": "-292,814",
      "Ejercicio": "Pagos a proveedores y terceros, y otros, neto"
    },
    {
      "2020": "-73,534",
      "2021": "-72,774",
      "2022": "-66,288",
      "2023": "-76,701",
      "2024": "-107,013",
      "Ejercicio": "Pagos a y por cuenta de los empleados"
    },
    {
      "2020": "-10,432",
      "2021": "-6,189",
      "2022": "-33,163",
      "2023": "-30,857",
      "2024": "-30,250",
      "Ejercicio": "Pago de intereses"
    },
    {
      "2020": "-7,639",
      "2021": "-17,225",
      "2022": "-16,187",
      "2023": "-18,192",
      "2024": "-31,980",
      "Ejercicio": "Pagos de arrendamiento a bajo valor y corto plazo"
    },
    {
      "2020": "-6,157",
      "2021": "-9,029",
      "2022": "-13,284",
      "2023": "-9,296",
      "2024": "-18,939",
      "Ejercicio": "Pagos de impuestos a las ganancias y regalías al Estado Peruano"
    },
    {
      "2020": "-6,180",
      "2021": "-6,970",
      "2022": "-11,053",
      "2023": "-12,832",
      "2024": "-15,832",
      "Ejercicio": "Pago de regalías a terceros"
    },
    {
      "2020": "-246,561",
      "2021": "-549,208",
      "2022": "-3,040",
      "2023": "-3,542",
      "2024": "-6,959",
      "Ejercicio": "Pagos por embargos y desembolsos por procesos tributarios"
    }
  ]
    }
    
  },
  {
    efe: "Total Efectivo - Act. De Inversión",
    southern: {
      result: [-348976, -786275, -602608, -740816, -578300],
      data: [
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Ingresos:"
        },
        {
          "2020": "163,771",
          "2021": "12",
          "2022": "14",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Amortización de deuda de entidad relacionada"
        },
        {
          "2020": "138",
          "2021": "124",
          "2022": "476",
          "2023": "389",
          "2024": "275",
          "Ejercicio": "Venta de propiedades, planta y equipo"
        },
        {
          "2020": "4,027",
          "2021": "12,491",
          "2022": "885",
          "2023": "442",
          "2024": "2,672",
          "Ejercicio": "Dividendos de asociada"
        },
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Egresos:"
        },
        {
          "2020": "-190,512",
          "2021": "-312,546",
          "2022": "-334,609",
          "2023": "-309,801",
          "2024": "-261,563",
          "Ejercicio": "Compra de propiedades, planta y equipo"
        },
        {
          "2020": "-1,457",
          "2021": "-2,809",
          "2022": "-987",
          "2023": "-2,003",
          "2024": "-499",
          "Ejercicio": "Aportes en subsidiarias"
        },
        {
          "2020": "-5",
          "2021": "-12",
          "2022": "-14",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Préstamos otorgados a entidad relacionada"
        },
        {
          "2020": "-323,948",
          "2021": "-470,709",
          "2022": "-267,869",
          "2023": "-429,217",
          "2024": "-318,571",
          "Ejercicio": "Aumento de concesiones mineras, desbroce y desarrollo"
        },
        {
          "2020": "-990",
          "2021": "-326",
          "2022": "-504",
          "2023": "-626",
          "2024": "-614",
          "Ejercicio": "Aumento de activos intangibles"
        },
        {
          "2020": "0",
          "2021": "-12,500",
          "2022": "0",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Aumento de otros activos"
        }
      ]
    },
    buenaventura: {
      result: [-55408, -24089, -32242, -152388, -247339],
      data: [

        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Ingresos:"
        },
        {
          "2020": "",
          "2021": "",
          "2022": "45,000",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Cobranza por compra de acciones de La Zanja"
        },
        {
          "2020": "2,259",
          "2021": "559",
          "2022": "6,586",
          "2023": "1,140",
          "2024": "1,912",
          "Ejercicio": "Cobranza por venta de propiedad, planta y equipo a terceros"
        },
        {
          "2020": "15,000",
          "2021": "20,000",
          "2022": "2,677",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Cobranza por préstamo a relacionadas"
        },
        {
          "2020": "",
          "2021": "",
          "2022": "1,577",
          "2023": "245",
          "2024": "534",
          "Ejercicio": "Cobranza adicional por venta de inversiones"
        },
        {
          "2020": "190",
          "2021": "224",
          "2022": "280",
          "2023": "249",
          "2024": "27",
          "Ejercicio": "Cobranza por venta de propiedad, planta y equipo a relacionadas"
        },
        {
          "2020": "",
          "2021": "3,640",
          "2022": "0",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Cobranza por venta de acciones en subsidiarias"
        },
        {
          "2020": "-",
          "2021": "-",
          "2022": "-",
          "2023": "0",
          "2024": "70,000",
          "Ejercicio": "Cobranza por venta de acciones de subsidiaria Chaupiloma Dos de Cajamarca S.C.R.L."
        },
        {
          "2020": "-",
          "2021": "-",
          "2022": "-",
          "2023": "27,003",
          "2024": "1,060",
          "Ejercicio": "Cobranza por venta de acciones de subsidiaria Contacto Corredores de Seguros S.A."
        },
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Egresos:"
        },
        {
          "2020": "-31,126",
          "2021": "-40,707",
          "2022": "-75,552",
          "2023": "-154,341",
          "2024": "-286,482",
          "Ejercicio": "Pagos por adquisiciones de propiedad, planta y equipo"
        },
        {
          "2020": "-16,807",
          "2021": "-7,400",
          "2022": "-12,432",
          "2023": "-22,879",
          "2024": "-31,884",
          "Ejercicio": "Aportes en subsidiarias y asociadas"
        },
        {
          "2020": "-1,471",
          "2021": "-343",
          "2022": "-263",
          "2023": "-3,805",
          "2024": "-2,506",
          "Ejercicio": "Pagos por adquisiciones de otros activos"
        },
        {
          "2020": "-10,000",
          "2021": "",
          "2022": "-115",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Pagos de préstamos otorgados a relacionadas"
        },
        {
          "2020": "-13,453",
          "2021": "-62",
          "2022": "0",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Pagos por compra de acciones en subsidiarias y asociadas"
        }
      ]
    }
  },
  {
    efe: "Total Efectivo - Act. Financiamiento",
    southern: {
      result: [-799719, -1758647, -727634, -1193099, -1101244 ],
      data: [
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Ingresos:"
        },
        {
          "2020": "1,052",
          "2021": "100",
          "2022": "1,586",
          "2023": "865",
          "2024": "1,025",
          "Ejercicio": "Devolución de dividendos no cobrados"
        },
        {
          "2020": "0",
          "2021": "391,151",
          "2022": "54,340",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Préstamo recibidos"
        },
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Egresos:"
        },
        {
          "2020": "-760,864",
          "2021": "-1,711,668",
          "2022": "-641,438",
          "2023": "-1,139,286",
          "2024": "-1,041,734",
          "Ejercicio": "Dividendos a accionistas de inversión y remesas a casa matriz"
        },
        {
          "2020": "-31,286",
          "2021": "-37,857",
          "2022": "-9,734",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Impuesto a los dividendos remitidos a accionistas no domiciliados"
        },
        {
          "2020": "-8,621",
          "2021": "-9,222",
          "2022": "-78,048",
          "2023": "-9,586",
          "2024": "-8,579",
          "Ejercicio": "Pasivo por arrendamientos"
        },
        {
          "2020": "0",
          "2021": "-391,151",
          "2022": "-54,340",
          "2023": "-45,092",
          "2024": "-51,956",
          "Ejercicio": "Pago de préstamo recibido"
        }
      ]
    },
    buenaventura: {
      result: [-4342, 533992, -348533, -22823, -23423],
      data: [
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Actividades de Financiamiento"
        },
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Ingresos:"
        },
        {
          "2020": "0",
          "2021": "539,300",
          "2022": "0",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Emisión de bonos Senior Notes, neto de costos de emisión"
        },
        {
          "2020": "0",
          "2021": "50,000",
          "2022": "0",
          "2023": "49,000",
          "2024": "0",
          "Ejercicio": "Obtención de préstamos bancarios"
        },
        {
          "2020": "",
          "2021": "",
          "2022": "",
          "2023": "",
          "2024": "",
          "Ejercicio": "Egresos:"
        },
        {
          "2020": "0",
          "2021": "0",
          "2022": "-275,000",
          "2023": "0",
          "2024": "0",
          "Ejercicio": "Pago de obligaciones financieras"
        },
        {
          "2020": "0",
          "2021": "-50,000",
          "2022": "-50,000",
          "2023": "-49,000",
          "2024": "0",
          "Ejercicio": "Pago de préstamos bancarios"
        },
        {
          "2020": "0",
          "2021": "0",
          "2022": "-18,542",
          "2023": "-18,542",
          "2024": "-20,011",
          "Ejercicio": "Pago de dividendos a propietarios"
        },
        {
          "2020": "-4,342",
          "2021": "-5,308",
          "2022": "-4,991",
          "2023": "-4,281",
          "2024": "-3,412",
          "Ejercicio": "Pagos de arrendamientos"
        }
      ]
    }
  },
  {
    efe: "Variación de Efec. Y Equi. Efect en el Año",
    southern: {
      result: [221141, -322610, 68763, -88232, 369912],
      data: [
        {
          "2020": "1,369,836",
          "2021": "2,222,312",
          "2022": "1,399,005",
          "2023": "1,845,683",
          "2024": "2,049,456",
          "Ejercicio": "Total Efectivo - Act. Operación"
        },
        {
          "2020": "-348,976",
          "2021": "-786,275",
          "2022": "-602,608",
          "2023": "-740,816",
          "2024": "-578,300",
          "Ejercicio": "Total Efectivo - Act. De Inversión"
        },
        {
          "2020": "-799,719",
          "2021": "-1,758,647",
          "2022": "-727,634",
          "2023": "-1,193,099",
          "2024": "-1,101,244",
          "Ejercicio": "Total Efectivo - Act. Financiamiento"
        }
      ]
    },
    buenaventura: {
      result: [15214, 150296, -94215, -56107, 197920],
      data: [
        {
          "2020": "74,964",
          "2021": "-359,607",
          "2022": "286,560",
          "2023": "119,104",
          "2024": "468,682",
          "Ejercicio": "Total Efectivo - Act. Operación"
        },
        {
          "2020": "-55,408",
          "2021": "-24,089",
          "2022": "-32,242",
          "2023": "-152,388",
          "2024": "-247,339",
          "Ejercicio": "Total Efectivo - Act. De Inversión"
        },
        {
          "2020": "-4,342",
          "2021": "533,992",
          "2022": "-348,533",
          "2023": "-22,823",
          "2024": "-23,423",
          "Ejercicio": "Total Efectivo - Act. Financiamiento"
        }
      ]
    }
  },
  {
    efe: "Efectivo y Equivalente de Efecto a inicio de Año",
    southern: {
      result: [367886, 589027, 266417, 335180, 246948],
      data: [
        {
          "2020": "367,886",
          "2021": "589,027",
          "2022": "266,417",
          "2023": "335,180",
          "2024": "246,948",
          "Ejercicio": "Efectivo y Equivalente de Efecto a inicio de Año"
        }
      ]
    },
    buenaventura: {
      result: [53757, 68971, 219267, 125052, 68945],
      data: [
        {
          "2020": "53,757",
          "2021": "68,971",
          "2022": "219,267",
          "2023": "125,052",
          "2024": "68,945",
          "Ejercicio": "Efectivo y Equivalente de Efecto a inicio de Año"
        }
      ]
    }
  },
  {
    efe: "Efectivo al Final del Período",
    southern: {
      result: [589027, 266417, 335180, 246948, 616860],
      data: [
        {
          "2020": "589,027",
          "2021": "266,417",
          "2022": "335,180",
          "2023": "246,948",
          "2024": "616,860",
          "Ejercicio": "Efectivo al Final del Período"
        }
      ]
    },
    buenaventura: {
      result: [68971, 219267, 125052, 68945, 266865],
      data: [
        {
          "2020": "68,971",
          "2021": "219,267",
          "2022": "125,052",
          "2023": "68,945",
          "2024": "266,865",
          "Ejercicio": "Efectivo al Final del Período"
        }
      ]
    }
  }
]



// function formatearConSeparadorDeMiles(numero: number): string {
//   const partes = String(numero).split('.');
//   partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Usa punto para separar los miles
//   return partes.join(',');
// }

function formatNumber(number : number): string {
  return new Intl.NumberFormat("es-MX").format(number);
}

export const Efes = () => {

  const [subRatioid, setSubRatioId] = useState(0);


  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">EFE'S</h2>
      
      <Card>
        <CardContent className="flex justify-center p-3 gap-4 flex-wrap">
          <Button variant="outline" onClick={() => {setSubRatioId(0)}}>Total Efectivo - Act. Operación</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Total Efectivo - Act. De Inversión</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(2)}}>Total Efectivo - Act. Financiamiento</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(3)}}>Variación de Efec. Y Equi. Efect en el Año</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(4)}}>Efectivo y Equivalente de Efecto a inicio de Año</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(5)}}>Efectivo al Final del Período</Button>

        </CardContent>
      </Card>

      

      
        
    <div className="flex gap-4">

        {/* <Card className="mt-5">
            <CardContent className="flex justify-center p-3 gap-2 flex-col">
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Total Efectivo - Act. Operación</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Total Efectivo - Act. De Inversión</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Total Efectivo - Act. Financiamiento</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Variación de Efec. Y Equi. Efect en el Año</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Efectivo y Equivalente de Efecto a inicio de Año</Button>
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Efectivo al Final del Período</Button>

            </CardContent>
        </Card> */}

      <div className="flex gap-4 flex-col w-full">
        <div className="w-full mt-5">
          {
          <Card className="md:w-[100] w-full min-h-[300px] max-h-[400px] p-10 flex justify-center flex-col">
            <p className="text-center text-2xl font-semibold text-gray-500">{efes[subRatioid].efe}</p>
              <Chart type="bar" className="w-full max-h-[550px]"
                data = {{
                  "labels": [
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024"
                  ],
                  "datasets": [
                      {
                          "label": "Southern Copper Perú",
                          "data": [
                            efes[subRatioid].southern.result[0],
                            efes[subRatioid].southern.result[1],
                            efes[subRatioid].southern.result[2],
                            efes[subRatioid].southern.result[3],
                            efes[subRatioid].southern.result[4]
                          ],
                          // "type": "bar",
                          "type": "line",
                          "tension": 0.3,
                          "borderColor": "rgba(122, 9, 33, 1)",
                          "pointRadius": 2,
                          "backgroundColor": "rgba(122, 9, 33, 0.54)",
                          "borderWidth": 2
                      },
                      {
                          "label": "Buena Ventura",
                          "type": "line",
                          "data": [
                            efes[subRatioid].buenaventura.result[0],
                            efes[subRatioid].buenaventura.result[1],
                            efes[subRatioid].buenaventura.result[2],
                            efes[subRatioid].buenaventura.result[3],
                            efes[subRatioid].buenaventura.result[4]
                          ],
                          "borderColor": "rgba(11, 100, 164, 1)",
                          "backgroundColor": "rgba(11, 100, 164, 0.52)",
                          "borderWidth": 2,
                          "tension": 0.3,
                          "pointRadius": 2
                      }
                  ]
                }} 
                options = {{
                        responsive: true,
                        maintainAspectRatio: false, 
                        interaction: {
                          mode: 'nearest',   // Busca el punto más cercano
                          axis: 'x',         // O 'xy' si quieres que considere ambos ejes
                          intersect: false,  // No exige que el cursor esté justo sobre el punto
                        },
                        scales: {
                          x: {
                            ticks: {
                              maxTicksLimit: 10, 
                              autoSkip: false,// Limita el número de etiquetas en el eje X
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            display: true,
                            position: 'top'
                          },
                          tooltip: {
                            enabled: true,  // Asegura que el tooltip esté activo
                            mode: 'nearest',
                            intersect: false,
                            callbacks: {
                              // Puedes personalizar lo que se muestra en el tooltip
                              label: function (context) {
                                const value = context.parsed.y.toLocaleString('es-PE');
                                return `${context.dataset.label}: ${value}`;
                              },
                            },
                          },
                        }
                      }}/>
                </Card>
          }
        

        </div>
        
      </div>
      
      
      </div>
      <div className="flex gap-4 w-full">
        <Card  className="mt-5 p-4 w-full">
          <Table className="w-full">
              <TableHeader>
                  <TableRow className="">
                      <TableHead className="w-[70px] ">SOUTHERN COPPER PERÚ</TableHead>
                      
                      <TableHead className="w-[70px] text-center">2020</TableHead>
                      <TableHead className="w-[70px] text-center">2021</TableHead>
                      <TableHead className="w-[70px] text-center">2022</TableHead>
                      <TableHead className="w-[70px] text-center">2023</TableHead>
                      <TableHead className="w-[70px] text-center">2024</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                {
                  efes[subRatioid].southern.data.map((item, index) => (
                    <TableRow key={index} className=" w-full">
                      <TableCell className="font-semibold">{item.Ejercicio}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2020"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2021"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2022"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2023"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2024"]}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
          </Table>
      </Card>
      <Card  className="mt-5 p-4 w-full">
          <Table className="w-full">
              <TableHeader>
                  <TableRow className="">
                      <TableHead className="w-[70px] ">BUENAVENTURA</TableHead>
                      <TableHead className="w-[70px] text-center">2020</TableHead>
                      <TableHead className="w-[70px] text-center">2021</TableHead>
                      <TableHead className="w-[70px] text-center">2022</TableHead>
                      <TableHead className="w-[70px] text-center">2023</TableHead>
                      <TableHead className="w-[70px] text-center">2024</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                {
                  efes[subRatioid].buenaventura.data.map((item, index) => (
                    <TableRow key={index} className=" w-full">
                      <TableCell className="font-semibold">{item.Ejercicio}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2020"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2021"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2022"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2023"]}</TableCell>
                      <TableCell className="font-semibold text-center">{item["2024"]}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
          </Table>
      </Card>
      </div>

    </LayoutDash>
  )
}