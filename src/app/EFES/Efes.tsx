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

const bueRatioSolvencia = [
  {
    "2020": "5.31",
    "2021": "2.64",
    "2022": "4.58",
    "2023": "4.24",
    "2024": "4.29",
    "SOLVENCIA": "Ratio de Garantía (Activo / Pasivo)"
  },
  {
    "2020": "0.49",
    "2021": "-0.32",
    "2022": "0.65",
    "2023": "0.04",
    "2024": "0.52",
    "SOLVENCIA": "Ratio Fondo Maniobra (FM / PC)"
  },
  {
    "2020": "93517",
    "2021": "-167808",
    "2022": "108039",
    "2023": "9242",
    "2024": "170447",
    "SOLVENCIA": "Fondo de Maniobra"
  },
]
const bueRatioLiquidez = [
  {
    "2020": "1.49",
    "2021": "0.68",
    "2022": "1.65",
    "2023": "1.04",
    "2024": "1.52",
    "SOLVENCIA": "Liquidez general (AC/PC)"
  },
  {
    "2020": "1.30",
    "2021": "0.62",
    "2022": "1.41",
    "2023": "0.89",
    "2024": "1.39",
    "SOLVENCIA": "Liquidez estricta (AC-E)/PC"
  },
  {
    "2020": "0.36",
    "2021": "0.41",
    "2022": "0.75",
    "2023": "0.26",
    "2024": "0.82",
    "SOLVENCIA": "Disponibilidad (D/PC)"
  }
]
const bueRatioEndeudamiento = [
  {
    "2020": "0.19",
    "2021": "0.38",
    "2022": "0.22",
    "2023": "0.24",
    "2024": "0.23",
    "SOLVENCIA": "Utilización Deuda (P/(P+PN))"
  },
  {
    "2020": "1.23",
    "2021": "1.61",
    "2022": "1.28",
    "2023": "1.31",
    "2024": "1.30",
    "SOLVENCIA": "IAP"
  },
  {
    "2020": "0.81",
    "2021": "0.62",
    "2022": "0.78",
    "2023": "0.76",
    "2024": "0.77",
    "SOLVENCIA": "Autonomía Financiera (PN/(P+PN))"
  },
  {
    "2020": "0.23",
    "2021": "0.61",
    "2022": "0.28",
    "2023": "0.31",
    "2024": "0.30",
    "SOLVENCIA": "Endeudamiento General (P/PN)"
  },
  {
    "2020": "0.16",
    "2021": "0.38",
    "2022": "0.22",
    "2023": "0.22",
    "2024": "0.21",
    "SOLVENCIA": "Endeudamiento L/p (PNC/PN)"
  },
  {
    "2020": "0.07",
    "2021": "0.22",
    "2022": "0.06",
    "2023": "0.09",
    "2024": "0.10",
    "SOLVENCIA": "Endeudamiento C/p (PC/PN)"
  },
  {
    "2020": "0.31",
    "2021": "0.37",
    "2022": "0.20",
    "2023": "0.28",
    "2024": "0.32",
    "SOLVENCIA": "Calidad deuda (PC/P)"
  },
  {
    "2020": "0.13",
    "2021": "0.35",
    "2022": "0.18",
    "2023": "0.18",
    "2024": "0.16",
    "SOLVENCIA": "Endeudamiento bancario"
  },
  {
    "2020": "-0.05",
    "2021": "-0.12",
    "2022": "0.82",
    "2023": "0.11",
    "2024": "0.47",
    "SOLVENCIA": "Capacidad ec. devolución deuda (FCE/P)"
  },
  {
    "2020": "6.96",
    "2021": "11.73",
    "2022": "11.83",
    "2023": "28.98",
    "2024": "7.85",
    "SOLVENCIA": "Carga Financiera (GF/V)"
  },
  {
    "2020": "13.17",
    "2021": "-6.28",
    "2022": "-38.66",
    "2023": "-78.67",
    "2024": "32.04",
    "SOLVENCIA": "Apalancamiento financiero"
  },
  {
    "2020": "-3.57",
    "2021": "-2.03",
    "2022": "-1.48",
    "2023": "-0.10",
    "2024": "3.80",
    "SOLVENCIA": "Cobertura de gastos financieros (BAII/GF)"
  },
  {
    "2020": "7.24",
    "2021": "5.70",
    "2022": "7.39",
    "2023": "18.87",
    "2024": "9.45",
    "SOLVENCIA": "Coste de la deuda financiera (kd)"
  }
]
const bueRatioRentabilidad = [
{
    "2020": "-0.03",
    "2021": "-0.03",
    "2022": "-0.02",
    "2023": "0.00",
    "2024": "0.04",
    "SOLVENCIA": "ROA"
  },
  {
    "2020": "-0.12",
    "2021": "-0.23",
    "2022": "0.52",
    "2023": "0.02",
    "2024": "0.35",
    "SOLVENCIA": "ROE"
  },
  {
    "2020": "-0.25",
    "2021": "-0.24",
    "2022": "-0.18",
    "2023": "-0.03",
    "2024": "0.30",
    "SOLVENCIA": "Margen Explotac."
  },
  {
    "2020": "0.11",
    "2021": "0.11",
    "2022": "0.09",
    "2023": "0.09",
    "2024": "0.15",
    "SOLVENCIA": "Rotación Activo"
  },
  {
    "2020": "-0.35",
    "2021": "0.16",
    "2022": "0.61",
    "2023": "0.22",
    "2024": "1.44",
    "SOLVENCIA": "Dupont (ROA x apalancamiento fin.)"
  },
  {
    "2020": "0.22",
    "2021": "0.16",
    "2022": "0.24",
    "2023": "0.26",
    "2024": "0.43",
    "SOLVENCIA": "Margen Bruto"
  },
  {
    "2020": "0.07",
    "2021": "0.04",
    "2022": "0.09",
    "2023": "0.11",
    "2024": "0.33",
    "SOLVENCIA": "EBITDA"
  },
  {
    "2020": "-9.88",
    "2021": "-8.24",
    "2022": "-8.96",
    "2023": "-19.15",
    "2024": "-4.95",
    "SOLVENCIA": "Margen Financiero Activos (ROA-Kd)"
  },
  {
    "2020": "-88502",
    "2021": "-58134",
    "2022": "-37324",
    "2023": "-40619",
    "2024": "131279",
    "SOLVENCIA": "NOPAT (BAII - impuestos)"
  },
  {
    "2020": "-28440",
    "2021": "-167687",
    "2022": "688248",
    "2023": "97978",
    "2024": "484567",
    "SOLVENCIA": "Cash Flow Económico"
  },
  {
    "2020": "-5952",
    "2021": "-125720",
    "2022": "716906",
    "2023": "198760",
    "2024": "531123",
    "SOLVENCIA": "Cash Flow Bruto"
  },
  {
    "2020": "-2557386",
    "2021": "-383869",
    "2022": "-33177",
    "2023": "-2244",
    "2024": "-182678",
    "SOLVENCIA": "CAPEX"
  },
  {
    "2020": "0",
    "2021": "0",
    "2022": "0",
    "2023": "0",
    "2024": "0",
    "SOLVENCIA": "Cambios en capital corriente"
  },
  {
    "2020": "-2563338",
    "2021": "-509589",
    "2022": "683729",
    "2023": "196516",
    "2024": "348445",
    "SOLVENCIA": "Free Cash Flow"
  },
  {
    "2020": "0.32",
    "2021": "0.15",
    "2022": "0.77",
    "2023": "0.40",
    "2024": "4.24",
    "SOLVENCIA": "RCSD"
  }
]
const bueRatioOperativos = [
  {
    "2020": "0.116137151",
    "2021": "0.117842436",
    "2022": "0.096756129",
    "2023": "0.098347185",
    "2024": "0.169726777",
    "SOLVENCIA": "Rotación ANC"
  },
  {
    "2020": "1.21",
    "2021": "1.12",
    "2022": "1.26",
    "2023": "1.33",
    "2024": "1.34",
    "SOLVENCIA": "Rotación AC"
  },
  {
    "2020": "-0.04",
    "2021": "-0.07",
    "2022": "0.16",
    "2023": "0.01",
    "2024": "0.09",
    "SOLVENCIA": "Rotacion de Activos totales"
  },
  {
    "2020": "-0.09",
    "2021": "-0.17",
    "2022": "0.39",
    "2023": "0.01",
    "2024": "0.21",
    "SOLVENCIA": "Rotación de Activo Fijo"
  },
  {
    "2020": "-0.021",
    "2021": "-0.037",
    "2022": "0.084",
    "2023": "0.003",
    "2024": "0.052",
    "SOLVENCIA": "Rotación de Activo Circulante"
  },
  {
    "2020": "0.30",
    "2021": "0.30",
    "2022": "0.29",
    "2023": "0.30",
    "2024": "0.29",
    "SOLVENCIA": "PMV"
  },
  {
    "2020": "6.71",
    "2021": "9.71",
    "2022": "7.21",
    "2023": "6.79",
    "2024": "9.39",
    "SOLVENCIA": "Rotación de Inventarios"
  },
  {
    "2020": "141.64",
    "2021": "89.62",
    "2022": "77.30",
    "2023": "92.66",
    "2024": "72.62",
    "SOLVENCIA": "PMC"
  },
  {
    "2020": "-0.85",
    "2021": "-2.21",
    "2022": "6.87",
    "2023": "0.18",
    "2024": "2.54",
    "SOLVENCIA": "Rotación de CxC"
  },
  {
    "2020": "141.94",
    "2021": "89.91",
    "2022": "77.59",
    "2023": "92.96",
    "2024": "72.91",
    "SOLVENCIA": "PMME"
  },
  {
    "2020": "98.63",
    "2021": "101.67",
    "2022": "141.71",
    "2023": "184.01",
    "2024": "190.38",
    "SOLVENCIA": "PMP"
  },
  {
    "2020": "43.31",
    "2021": "-11.75",
    "2022": "-64.12",
    "2023": "-91.05",
    "2024": "-117.47",
    "SOLVENCIA": "PMMF"
  },
  {
    "2020": "52675",
    "2021": "-47374",
    "2022": "-36491",
    "2023": "-85260",
    "2024": "-99350",
    "SOLVENCIA": "NOF"
  },
  {
    "2020": "93517",
    "2021": "-167808",
    "2022": "108039",
    "2023": "9242",
    "2024": "170447",
    "SOLVENCIA": "Fondo de Maniobra"
  },
  {
    "2020": "-40842",
    "2021": "120434",
    "2022": "-144530",
    "2023": "-94502",
    "2024": "-269797",
    "SOLVENCIA": "NRN"
  },
  {
    "2020": "4341",
    "2021": "45550",
    "2022": "4102",
    "2023": "3326",
    "2024": "2474",
    "SOLVENCIA": "RNC"
  },
  {
    "2020": "45183",
    "2021": "-74884",
    "2022": "148632",
    "2023": "97828",
    "2024": "272271",
    "SOLVENCIA": "(+) EXCEDENTE TESORERÍA (-) RF"
  }
]
const bueRatioEstructuraBalance = [
  {
    "2020": "81",
    "2021": "62",
    "2022": "78",
    "2023": "76",
    "2024": "77",
    "SOLVENCIA": "Peso Patrimonio Neto"
  },
  {
    "2020": "13",
    "2021": "24",
    "2022": "18",
    "2023": "17",
    "2024": "16",
    "SOLVENCIA": "Peso Pasivo No corriente"
  },
  {
    "2020": "6",
    "2021": "14",
    "2022": "4",
    "2023": "7",
    "2024": "7",
    "SOLVENCIA": "Peso Pasivo Corriente"
  },
  {
    "2020": "89",
    "2021": "69",
    "2022": "84",
    "2023": "82",
    "2024": "86",
    "SOLVENCIA": "Ratio de cobertura del inmovilizado"
  },
  {
    "2020": "91",
    "2021": "90",
    "2022": "93",
    "2023": "93",
    "2024": "89",
    "SOLVENCIA": "Peso activos no corrientes"
  },
  {
    "2020": "9",
    "2021": "10",
    "2022": "7",
    "2023": "7",
    "2024": "11",
    "SOLVENCIA": "Peso activos corrientes"
  }
]
const bueRatios: Record<BueRatioKey, { [year: string]: string }[]> = {
  bueRatioSolvencia,
  bueRatioLiquidez,
  bueRatioEndeudamiento,
  bueRatioRentabilidad,
  bueRatioOperativos,
  bueRatioEstructuraBalance
};

// function formatearConSeparadorDeMiles(numero: number): string {
//   const partes = String(numero).split('.');
//   partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Usa punto para separar los miles
//   return partes.join(',');
// }

function formatNumber(number : number): string {
  return new Intl.NumberFormat("es-MX").format(number);
}

export const Efes = () => {
  const [ratio, setRatio] = useState("Solvencia");
  const [souRatio, setsouRatio] = useState<SouRatioKey>("souRatioSolvencia");
  const [bueRatio, setbueRatio] = useState<BueRatioKey>("bueRatioSolvencia");

  // const [subRatio, setSubRatio] = useState("Fondo de Maniobra");
  const [subRatioid, setSubRatioId] = useState(2);


  return (
    <LayoutDash>
      <h2 className="text-xl font-bold mb-4 text-gray-800">EFE'S</h2>
      
      {/* <Card>
        <CardContent className="flex justify-center p-3 gap-4 flex-wrap">
          <Button variant="outline" onClick={() => {setRatio("Solvencia"); setsouRatio("souRatioSolvencia"); setbueRatio("bueRatioSolvencia"); setSubRatioId(0);}}>Solvencia</Button>
          <Button variant="outline" onClick={() => {setRatio("Liquidez"); setsouRatio("souRatioLiquidez"); setbueRatio("bueRatioLiquidez"); setSubRatioId(0);}}>Liquidez</Button>
          <Button variant="outline" onClick={() => {setRatio("Endeudamiento"); setsouRatio("souRatioEndeudamiento"); setbueRatio("bueRatioEndeudamiento"); setSubRatioId(0);}}>Endeudamiento</Button>
          <Button variant="outline" onClick={() => {setRatio("Rentabilidad y Márgenes"); setsouRatio("souRatioRentabilidad"); setbueRatio("bueRatioRentabilidad"); setSubRatioId(0);}}>Rentabilidad y Márgenes</Button>
          <Button variant="outline" onClick={() => {setRatio("Ratios Operativos"); setsouRatio("souRatioOperativos"); setbueRatio("bueRatioOperativos"); setSubRatioId(0);}}>Ratios Operativos</Button>
          <Button variant="outline" onClick={() => {setRatio("Estructura Balance"); setsouRatio("souRatioEstructuraBalance"); setbueRatio("bueRatioEstructuraBalance"); setSubRatioId(0);}}>Estructura Balance</Button>
        </CardContent>
      </Card>

       */}

      
        
      <div className="flex gap-4">

        <Card className="mt-5">
            <CardContent className="flex justify-center p-3 gap-2 flex-col">
              {/* <h2 className="text-xl font-bold text-gray-500 text-center mb-2 mt-1">RATIO DE {ratio.toUpperCase()}</h2> */}
              <Button variant="outline" onClick={() => {setSubRatioId(1)}}>Total Efectivo - Act. Operación</Button>
            </CardContent>
        </Card>

      <div className="flex gap-4 flex-col w-full">
        <div className="w-full mt-5">
          {
          <Card className="md:w-[100] w-full min-h-[300px] max-h-[400px] p-10 flex justify-center flex-col">
            <p className="text-center text-2xl font-semibold text-gray-500">{souRatios[souRatio][subRatioid]["SOLVENCIA"].toUpperCase()}</p>
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
                            Number(souRatios[souRatio][subRatioid]["2020"]),
                            Number(souRatios[souRatio][subRatioid]["2021"]),
                            Number(souRatios[souRatio][subRatioid]["2022"]),
                            Number(souRatios[souRatio][subRatioid]["2023"]),
                            Number(souRatios[souRatio][subRatioid]["2024"])
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
                            Number(bueRatios[bueRatio][subRatioid]["2020"]),
                            Number(bueRatios[bueRatio][subRatioid]["2021"]),
                            Number(bueRatios[bueRatio][subRatioid]["2022"]),
                            Number(bueRatios[bueRatio][subRatioid]["2023"]),
                            Number(bueRatios[bueRatio][subRatioid]["2024"])
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
        <Card  className="mt-5 p-4 w-full">
        <Table className="w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="w-[70px] ">{souRatios[souRatio][subRatioid]["SOLVENCIA"].toUpperCase()}</TableHead>
                            
                            <TableHead className="w-[70px] text-center">2020</TableHead>
                            <TableHead className="w-[70px] text-center">2021</TableHead>
                            <TableHead className="w-[70px] text-center">2022</TableHead>
                            <TableHead className="w-[70px] text-center">2023</TableHead>
                            <TableHead className="w-[70px] text-center">2024</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="0" className=" w-full">

                          <TableCell className="font-semibold">Southern Copper Perú</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(souRatios[souRatio][subRatioid]["2020"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(souRatios[souRatio][subRatioid]["2021"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(souRatios[souRatio][subRatioid]["2022"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(souRatios[souRatio][subRatioid]["2023"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(souRatios[souRatio][subRatioid]["2024"]))}</TableCell>
                      </TableRow>
                      <TableRow key="0" className=" w-full">

                          <TableCell className="font-semibold">Buena Ventura</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(bueRatios[bueRatio][subRatioid]["2020"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(bueRatios[bueRatio][subRatioid]["2021"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(bueRatios[bueRatio][subRatioid]["2022"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(bueRatios[bueRatio][subRatioid]["2023"]))}</TableCell>
                          <TableCell className="font-semibold text-center">{formatNumber(Number(bueRatios[bueRatio][subRatioid]["2024"]))}</TableCell>
                      </TableRow>

                      
                    </TableBody>
                </Table>
      </Card>
      </div>
    
      
      </div>

    </LayoutDash>
  )
}
