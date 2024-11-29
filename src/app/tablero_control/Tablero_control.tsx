import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Fragment, useEffect, useRef, useState } from 'react';

import LayoutDash from '../LayoutDash';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Pencil, Plus } from "lucide-react";


import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogDescription } from "@radix-ui/react-dialog";
import { requestApi } from "@/hooks/useRequestApi";

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

export const Tablero_control = () => {

  const [refreshpage, setrefreshpage] = useState(true)

  const buttonNuevaCategoria = useRef<HTMLButtonElement>(null);

  const [id_indicador, setid_indicador] = useState(0)

  const [val_2021, setVal_2021] = useState("")
  const [val_2022, setVal_2022] = useState("")
  const [val_2023, setVal_2023] = useState("")
  const [val_2024, setVal_2024] = useState("")
  const [val_meta_2024, setVal_meta_2024] = useState("")
  const [listIndicadores, setlistIndicadores] = useState<Perspectiva>({
    perspectiva: "",
    indicadores: []
  })

  const [perspectivas, set_perspectivas] = useState<Perspectiva[]>([])


  const sendForm = () => {
    console.log(id_indicador);
    
    console.log(val_2021);
    console.log(val_2022);
    console.log(val_2023);
    console.log(val_2024);
    console.log(val_meta_2024);

    requestApi({ url: `/api/v1/costos/indicadores`, type: 'PUT', data: {
      perspectiva: listIndicadores.perspectiva,
      objBase_id: id_indicador,
      age2021: val_2021,
      age2022: val_2022,
      age2023: val_2023,
      age2024: val_2024,
      meta2024: val_meta_2024
    }})
      .then(() => {
        setrefreshpage(!refreshpage);
        buttonNuevaCategoria.current?.click()
      });

  }

  // objetivos_base, set_Objetivos_base
  
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
          <Dialog>
            <DialogTrigger asChild>
            <Button variant="outline"  className='my-4 hidden' ref={buttonNuevaCategoria}><Plus />Nueva categoria</Button>
            </DialogTrigger>
            {/* <Button variant="outline"  className='my-4'  onClick={() => {
                            buttonNuevaCategoria.current?.click()
                        }}><Plus />Nueva categoria</Button> */}
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Editar Variables</DialogTitle>
                    <DialogDescription>
                        Puedes cambiar estos valores y ver como cambia el cumplimiento y los graficos.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cate_name" className="text-right">
                          2021*
                      </Label>
                      <Input type="number" id="cate_name" value={val_2021} onChange={(e) => setVal_2021(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cate_name" className="text-right">
                          2022*
                      </Label>
                      <Input type="number" id="cate_name" value={val_2022} onChange={(e) => setVal_2022(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cate_name" className="text-right">
                          2023*
                      </Label>
                      <Input type="number" id="cate_name" value={val_2023} onChange={(e) => setVal_2023(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cate_name" className="text-right">
                          2024*
                      </Label>
                      <Input type="number" id="cate_name" value={val_2024} onChange={(e) => setVal_2024(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cate_name" className="text-right">
                          META 2024*
                      </Label>
                      <Input type="number" id="cate_name" value={val_meta_2024} onChange={(e) => setVal_meta_2024(e.target.value)} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => {sendForm()}}>Guardar cambios</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        
        <div className="border rounded-lg shadow-sm w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
                <TableHead className="w-[40px]">N°</TableHead>
                <TableHead className="w-[100px]">PERSPECTIVA</TableHead>
                <TableHead className="w-[300px]">OBJETIVOS ESTRATEGICOS BASE</TableHead>
                <TableHead className="w-[200px]">NOMBRE DE INDICADOR</TableHead>
                {/* <TableHead className="w-[300px]">FORMULA DE INDICADOR</TableHead> */}
                <TableHead className="w-[150px]">FUENTE DE DATOS</TableHead>
                <TableHead className="w-[100px]">TENDENCIA</TableHead>
                <TableHead className="w-[100px]">FRECUENCIA DE MEDICION</TableHead>
                <TableHead className="w-[70px]">UMD</TableHead>
                <TableHead className="w-[70px]">2021</TableHead>
                <TableHead className="w-[70px]">2022</TableHead>
                <TableHead className="w-[70px]">2023</TableHead>
                <TableHead className="w-[70px]">2024</TableHead>
                <TableHead className="w-[100px]">META 2024</TableHead>
                {/* <TableHead className="w-[100px]">OPTIMO 2024</TableHead> */}
                {/* <TableHead className="w-[50px]">PLAN DE ACCIÓN</TableHead> */}
                {/* <TableHead className="w-[100px]">RESPONSABLE</TableHead> */}
                {/* <TableHead className="w-[100px]">STATUS</TableHead> */}
                <TableHead className="w-[100px]">CUMPLIMIENTO</TableHead>
                <TableHead className="w-[100px]">OPCIONES</TableHead>




            </TableRow>
          </TableHeader>
          <TableBody>
            {
              perspectivas.map((perspectiva) => {
                return perspectiva.indicadores.map((obj_base) => (
                  <Fragment key={obj_base.objBase_id}>
                    <TableRow>
                      <TableCell className="font-medium w-1/8">{obj_base.objBase_id}</TableCell>
                      <TableCell className="font-medium"><Badge className={
                        obj_base.name_perspectiva == "Financiera" ? 'bg-yellow-500' : 
                        obj_base.name_perspectiva == "Cliente" ? 'bg-purple-500' : 
                        obj_base.name_perspectiva == "Procesos" ? 'bg-blue-500' : 'bg-green-500'}>{obj_base.name_perspectiva}</Badge></TableCell>
                      <TableCell>{obj_base.objBase_name}</TableCell>
                      <TableCell>{obj_base.name_indicador}</TableCell>
                      {/* <TableCell>{obj_base.formula_indicador}</TableCell> */}
                      <TableCell>{obj_base.fuente_de_datos}</TableCell>
                      <TableCell>{obj_base.tendencia}</TableCell>
                      <TableCell>{obj_base.frecuencia_medicion}</TableCell>
                      <TableCell>{obj_base.UMD}</TableCell>
                      <TableCell>{obj_base.age2021}</TableCell>
                      <TableCell>{obj_base.age2022}</TableCell>
                      <TableCell>{obj_base.age2023}</TableCell>
                      <TableCell>{obj_base.age2024}</TableCell>
                      <TableCell>{obj_base.meta2024}</TableCell>
                      {/* <TableCell>{obj_base.optimo2024}</TableCell> */}
                      {/* <TableCell>{obj_base.plan_accion}</TableCell> */}
                      {/* <TableCell>{obj_base.Responsable}</TableCell> */}
                      {/* <TableCell>{obj_base.Status}</TableCell> */}
                      <TableCell className="text-center">{
                        obj_base.tendencia == "Incrementar" ? 
                        ((1-(parseFloat(obj_base.meta2024) - parseFloat(obj_base.age2024))/parseFloat(obj_base.meta2024))*100).toFixed(2) : 
                        ((1+(parseFloat(obj_base.meta2024) - parseFloat(obj_base.age2024))/parseFloat(obj_base.meta2024))*100).toFixed(2)
                      } %</TableCell>
                      <TableCell className="text-center"><Button onClick={() => {

                        setid_indicador(obj_base.objBase_id)
                        setVal_2021(obj_base.age2021)
                        setVal_2022(obj_base.age2022)
                        setVal_2023(obj_base.age2023)
                        setVal_2024(obj_base.age2024)
                        setVal_meta_2024(obj_base.meta2024)
                        setlistIndicadores(perspectiva)
                        buttonNuevaCategoria.current?.click()
                        
                        }}><Pencil/></Button></TableCell>
    
                    </TableRow>
                  </Fragment>
                ))})
              }
            
          </TableBody>
        </Table>
      </div>
    </LayoutDash>
  )
}
