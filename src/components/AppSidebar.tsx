import {  Home, Book, Circle } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  // SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  // {
  //   title: "Southern Copper Perú",
  //   url: "southern",
  //   icon: Book,
  // },


  // {
  //   title: "Clase Costos",
  //   url: "clase",
  //   icon: Book,
  // },
  // {
  //   title: "Etapas",
  //   url: "etapas",
  //   icon: Boxes,
  // },
  // {
  //   title: "Objetivos base",
  //   url: "objetivos_base",
  //   icon: ClipboardMinus,
  // },
  // {
  //   title: "Mapa estrategico",
  //   url: "mapa_estrategico",
  //   icon: Waypoints,
  // },
  // {
  //   title: "Tablero de control",
  //   url: "tablero_de_control",
  //   icon: Sheet,
  // },
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>BALANCED SCORECARD</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem key="SouthernCopper" className="cursor-pointer">
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <span>
                          <Circle />
                          <span>Southern Copper Perú</span>
                        </span>
                        
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuButton asChild>
                            <a href="southernBalanceGeneral">
                              <Book />
                              <span>Balance General</span>
                            </a>
                          </SidebarMenuButton>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuButton asChild>
                          <a href="southernCuentaResultados">
                            <Book />
                            <span>Cuenta de Resultados</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuButton asChild>
                          <a href="southernRatios">
                            <Book />
                            <span>Ratios Financieros</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuButton asChild>
                          <a href="southernVertical">
                            <Book />
                            <span>Analisis Vertical</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenuItem>

              {/* BuenaVentura */}

              <SidebarMenuItem key="BuenaVentura" className="cursor-pointer">
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <span>
                          <Circle />
                          <span>Buena Ventura</span>
                        </span>
                        
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuButton asChild>
                            <a href="buenaBalanceGeneral">
                              <Book />
                              <span>Balance General</span>
                            </a>
                          </SidebarMenuButton>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuButton asChild>
                          <a href="buenaCuentaResultados">
                            <Book />
                            <span>Cuenta de Resultados</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <SidebarMenuButton asChild>
                          <a href="buenaRatios">
                            <Book />
                            <span>Ratios Financieros</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenuItem>
              
              {/* ratioComparativo */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="ratioComparativo">
                    <Book />
                    <span>Ratios Comparativos</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* ratioComparativo */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="Efes">
                    <Book />
                    <span>EFES</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>


            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
