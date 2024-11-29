import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Fragment, useEffect, useState } from 'react';

import LayoutDash from '../LayoutDash';
import { Badge } from "@/components/ui/badge";
import { requestApi } from "@/hooks/useRequestApi";

  
// const daw = [
//     {
//         id_perspectiva: 1,
//         name_perspectiva: "Financiera",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Reducir los costos operativos de la flota",
//             },
//             {
//                 objBase_id: 2,
//                 objBase_name: "Optimizar la inversión en vehículos nuevos",
//             }
//         ]
//     },
//     {
//         id_perspectiva: 2,
//         name_perspectiva: "Cliente",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Mejorar la puntualidad de entregas",
//             }
//         ]
//     },
//     {
//         id_perspectiva: 3,
//         name_perspectiva: "Procesos",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Incrementar la eficiencia del uso de vehículos",
//             },
//             {
//                 objBase_id: 2,
//                 objBase_name: "Reducir el tiempo de inactividad por mantenimiento",
//             }
//         ]
//     },
//     {
//         id_perspectiva: 4,
//         name_perspectiva: "Aprendizaje",
//         objetivos_base: [
//             {
//                 objBase_id: 1,
//                 objBase_name: "Mejorar la capacidad de análisis para decisiones vehiculares",
//             },
//             {
//                 objBase_id: 2,
//                 objBase_name: "Incrementar el uso de tecnología para optimizar la gestión",
//             }
//         ]
//     }
// ]

type Dataset = {
  label?: string;
  data?: number[];
  type?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  tension?: number;
  pointRadius?: number;
};

type Data = {
  labels?: string[];
  datasets?: Dataset[];
};

type Indicador = {
  objBase_id: number;
  name_perspectiva?: string;
  objBase_name?: string;
  name_indicador?: string;
  formula_indicador?: string;
  fuente_de_datos?: string;
  tendencia?: string;
  frecuencia_medicion?: string;
  UMD?: string;
  age2021: string;
  age2022: string;
  age2023: string;
  age2024: string;
  meta2024: string;
  optimo2024?: string;
  plan_accion?: string;
  Responsable?: string;
  Status?: string;
  cumplimiento?: string;
  data?: Data;
};

type Perspectiva = {
  perspectiva: string;
  indicadores: Indicador[];
};

export const Objetivos_base = () => {

  const [refreshpage, setrefreshpage] = useState(true)

  const [perspectivas, set_perspectivas] = useState<Perspectiva[]>([])
  console.log(setrefreshpage);
  
    useEffect(() => {
      // const data: Perspectiva[] = datajson;
      requestApi({ url: `/api/v1/costos/indicadores`, type: 'GET'})
        .then(({ data }) => {
          set_perspectivas(data);
        });
      
      
      // set_Objetivos_base(datajson)
    }, [refreshpage])
  return (
    <LayoutDash>
        
        <div className="border rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
                <TableHead className="w-[40px]">N°</TableHead>
                <TableHead className="w-1/12">PERSPECTIVA</TableHead>
                <TableHead>OBJETIVOS ESTRATEGICOS BASE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {perspectivas.flatMap((perspectiva) => perspectiva.indicadores.map((obj_base) => (
              <Fragment key={obj_base.objBase_id}>
                <TableRow>
                  <TableCell className="font-medium w-1/8">{obj_base.objBase_id}</TableCell>
                  <TableCell className="font-medium"><Badge className={
                    obj_base.name_perspectiva == "Financiera" ? 'bg-yellow-500' : 
                    obj_base.name_perspectiva == "Cliente" ? 'bg-purple-500' : 
                    obj_base.name_perspectiva == "Procesos" ? 'bg-blue-500' : 'bg-green-500'}>{obj_base.name_perspectiva}</Badge></TableCell>
                  <TableCell className="font-medium">{obj_base.objBase_name}</TableCell>
                </TableRow>
              </Fragment>
            )))}
          </TableBody>
        </Table>
      </div>
    </LayoutDash>
  )
}
