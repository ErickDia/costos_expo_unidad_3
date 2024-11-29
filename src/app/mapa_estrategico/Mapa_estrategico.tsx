
import React, { useEffect, useRef, useState, Fragment } from 'react';
import LayoutDash from '../LayoutDash';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { requestApi } from '@/hooks/useRequestApi';

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, Plus, Trash2 } from 'lucide-react';


import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils"

// import imagen_etapa from './mapa_estrategico.png'

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
  name_perspectiva: string;
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
  conexiones: number[];
};

type Perspectiva = {
  perspectiva: string;
  indicadores: Indicador[];
};

export const Mapa_estrategico = () => {

  const [refreshpage, setrefreshpage] = useState(true)

  const [perspectivas, set_perspectivas] = useState<Perspectiva[]>([])
  
  const refs = useRef<(React.RefObject<HTMLDivElement> | null)[]>([]);

  const workspaceRef = useRef<HTMLDivElement | null>(null); // Referencia al área de trabajo
  const [lines, setLines] = useState([{ x1: 0, y1: 0, x2: 0, y2: 0 }]);

  console.log(setrefreshpage);
  
  
  const updateLines = (data: Indicador[]) => {
    // console.log(workspaceRef);
    // console.log(refs);


    if (workspaceRef.current && refs.current.length) {
      const workspaceRect = workspaceRef.current.getBoundingClientRect();
      const newLines = data.flatMap((indicador: Indicador) => {
        return indicador.conexiones.map((id) => {
          // console.log(indicador.objBase_id - 1, id - 1);
          
          const rect1 = refs.current[indicador.objBase_id - 1]?.current?.getBoundingClientRect();
          // console.log("refs: ", refs.current[indicador.objBase_id - 1]);

          const rect2 = refs.current[id - 1]?.current?.getBoundingClientRect();
          
          if (rect1 && rect2){
            return {
              x1: rect1.right - workspaceRect.left,
              y1: rect1.top + rect1.height / 2 - workspaceRect.top,
              x2: rect2.left - workspaceRect.left,
              y2: rect2.top + rect2.height / 2 - workspaceRect.top,
            };
          } else {
            return { x1: 0, y1: 0, x2: 0, y2: 0 }
          }
          
        })
        
      });
      
      setLines(newLines);
    }
  };

  const buttonNuevaCategoria = useRef<HTMLButtonElement>(null);

  const [conexiones, setConexiones] = useState<number[]>([])
  const [perspectivaval, setperspectivaval] = useState<string>("")
  const [objBase_idval, setobjBase_idval] = useState<number>(0)


  const [cate_id, setCate_id] = useState(0)
  const [categorias, setCategorias] = useState<Indicador[]>([])
  const [openComboCategorias, setOpenComboCategorias] = useState(false)





  const sendForm = () => {

    console.log('awd');
    
    requestApi({ url: `/api/v1/costos/indicadores/conexiones`, type: 'PUT', data: {
      perspectiva: perspectivaval,
      objBase_id: objBase_idval,
      conexiones: conexiones,
    }})
      .then(() => {
        setrefreshpage(!refreshpage);
        buttonNuevaCategoria.current?.click()
      });

  }

  
  useEffect(() => {
    requestApi({ url: `/api/v1/costos/indicadores`, type: 'GET' }).then(({ data }) => {
      set_perspectivas(data);
      setCategorias(data.flatMap((perspectiva: Perspectiva) => perspectiva.indicadores))
      refs.current = data.flatMap((perspectiva: Perspectiva) =>
        perspectiva.indicadores.map(() => React.createRef())
      );
  
      // Esperar al próximo ciclo de renderización
      setTimeout(() => {
        updateLines(data.flatMap((perspectiva: Perspectiva) => perspectiva.indicadores));
      }, 0);
      
      // Agregar event listener para redimensionar
      const handleResize = () => updateLines(data.flatMap((perspectiva: Perspectiva) => perspectiva.indicadores));
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    });
  }, [refreshpage]);


  

  return (
    <LayoutDash>
      <Dialog>
        <DialogTrigger asChild>
        <Button variant="outline"  className='my-4 hidden' ref={buttonNuevaCategoria}><Plus />Nueva categoria</Button>
        </DialogTrigger>
        {/* <Button variant="outline"  className='my-4'  onClick={() => {
                        buttonNuevaCategoria.current?.click()
                    }}><Plus />Nueva conexión</Button> */}
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Editar Conexiones</DialogTitle>
                <DialogDescription>
                    Puedes agregar conexiones de los objetivos.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cate_name" className="text-right">
                      Buscar
                  </Label>
                  {/* combobox */}

                  <Popover open={openComboCategorias} onOpenChange={setOpenComboCategorias}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openComboCategorias}
                        className="col-span-3 justify-between overflow-hidden"
                      >
                        {cate_id
                          ? categorias.find((categoria) => categoria.objBase_id === cate_id)?.objBase_name
                          : "Seleccionar objetivo..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Buscar categoria..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No se econtro la categoria.</CommandEmpty>
                          <CommandGroup>
                            {categorias.map((categoria) => (
                              <CommandItem
                                key={categoria.objBase_id}
                                value={`${categoria.objBase_name}`}
                                onSelect={() => {
                                  if (categoria.objBase_id == cate_id) {
                                    setCate_id(0)
                                  } else {
                                    setCate_id(categoria.objBase_id === cate_id ? 0 : categoria.objBase_id)
                                    setConexiones([...conexiones, categoria.objBase_id])
                                  }
                                  setOpenComboCategorias(false)
                                }}
                              >
                                {categoria.objBase_name}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    cate_id === categoria.objBase_id ? "opacity-100" : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  {/* fin combobox */}
                </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                    <TableHead>Perspectiva</TableHead>
                    <TableHead>Objetivo</TableHead>
                    <TableHead className="w-[40px]">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  conexiones.map((id) => {
                    return (
                      <Fragment key={id}>
                        <TableRow>
                          <TableCell className="w-1/8">{perspectivas.flatMap((perspectiva) => perspectiva.indicadores).filter((indicador) => indicador.objBase_id == id)[0].name_perspectiva}</TableCell>
                          <TableCell>{perspectivas.flatMap((perspectiva) => perspectiva.indicadores).filter((indicador) => indicador.objBase_id == id)[0].objBase_name}</TableCell>
                          <TableCell><Button className='text-sm bg-red-600' onClick={() => {
                              setConexiones(conexiones.filter(num => num !== id))
                          }}><Trash2 /></Button></TableCell>
                        </TableRow>
                      </Fragment>
                    )
                  })
                }
                  
              </TableBody>
            </Table>
            <DialogFooter>
                <Button type="submit" onClick={() => {sendForm()}}>Guardar cambios</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
        {/* <div className='flex justify-center'>
            <img src={imagen_etapa} alt=""/>
            
        </div> */}
      <div  className="border rounded-lg shadow-sm relative min-w-[500px]" ref={workspaceRef}>

        <Table>
          <TableHeader>
            <TableRow>
                {/* <TableHead className="w-[40px]">N°</TableHead> */}
                <TableHead className="w-1/12">PERSPECTIVA</TableHead>
                <TableHead>OBJETIVOS ESTRATEGICOS BASE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              perspectivas.map((perspectiva) => {
                return (
                  <Fragment key={perspectiva.perspectiva}>
                    <TableRow>
                      {/* <TableCell className="font-medium w-1/8">{obj_base.objBase_id}</TableCell> */}
                      <TableCell className="font-medium"><Badge className={
                        perspectiva.perspectiva == "Financiera" ? 'bg-yellow-500 text-base' : 
                        perspectiva.perspectiva == "Cliente" ? 'bg-purple-500 text-base' : 
                        perspectiva.perspectiva == "Procesos" ? 'bg-blue-500 text-base' : 'bg-green-500 text-base'}>{perspectiva.perspectiva}</Badge></TableCell>
                      {
                        perspectiva.indicadores.map((obj_base) => {
                          return <TableCell className="font-medium" key={obj_base.objBase_id}>
                            <p ref={refs.current[obj_base.objBase_id-1]} className={
                            (perspectiva.perspectiva == "Financiera" ? 'bg-yellow-600' : 
                            perspectiva.perspectiva == "Cliente" ? 'bg-purple-600' : 
                            perspectiva.perspectiva == "Procesos" ? 'bg-blue-600' : 'bg-green-600') + " text-base font-medium p-2 mt-4 mb-4 text-center text-white rounded-md max-w-[250px] cursor-pointer"}
                            onClick={() => {
                              
                              setperspectivaval(obj_base.name_perspectiva)
                              setobjBase_idval(obj_base.objBase_id)
                              setConexiones(obj_base.conexiones)
                              buttonNuevaCategoria.current?.click()

                              }}>{obj_base.objBase_name}</p>
                            </TableCell>
                          
                        })
                      }
                    </TableRow>
                  </Fragment>
                )
              })
            }
          </TableBody>
        </Table>

        {
          lines.map((lineCoords, index) => {
            return (
              <svg
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }} key={index}
              >
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#2C3E50" />
                  </marker>
                </defs>
                <line
                  x1={lineCoords.x1}
                  y1={lineCoords.y1}
                  x2={lineCoords.x2}
                  y2={lineCoords.y2}
                  stroke="#2C3E50"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            )
          })
        }
    </div>
    </LayoutDash>
  )
}
