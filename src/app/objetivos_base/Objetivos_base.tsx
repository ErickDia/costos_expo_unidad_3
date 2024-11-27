import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Fragment, useState } from 'react';

import LayoutDash from '../LayoutDash';
import { Badge } from "@/components/ui/badge";

  
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

export const Objetivos_base = () => {

  const [objetivos_base, set_Objetivos_base] = useState([
        {
            objBase_id: 1,
            name_perspectiva: "Financiera",
            objBase_name: "Reducir los costos operativos de la flota",
        },
        {
            objBase_id: 2,
            name_perspectiva: "Financiera",
            objBase_name: "Optimizar la inversión en vehículos nuevos",
        },
        {
            objBase_id: 3,
            name_perspectiva: "Cliente",
            objBase_name: "Mejorar la puntualidad de entregas",
        },
        {
            objBase_id: 4,
            name_perspectiva: "Procesos",
            objBase_name: "Incrementar la eficiencia del uso de vehículos",
        },
        {
            objBase_id: 5,
            name_perspectiva: "Procesos",
            objBase_name: "Reducir el tiempo de inactividad por mantenimiento",
        },
        {
            objBase_id: 6,
            name_perspectiva: "Aprendizaje",
            objBase_name: "Mejorar la capacidad de análisis para decisiones vehiculares",
        },
        {
            objBase_id: 7,
            name_perspectiva: "Aprendizaje",
            objBase_name: "Incrementar el uso de tecnología para optimizar la gestión",
        }
    ])

    console.log(set_Objetivos_base);
    

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
            {objetivos_base.map((obj_base) => (
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
            ))}
          </TableBody>
        </Table>
      </div>
    </LayoutDash>
  )
}
