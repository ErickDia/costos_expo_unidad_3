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
  SidebarMenuSubItem,
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
              <SidebarMenuItem key="prueba" className="cursor-pointer">
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
                        <SidebarMenuSubItem />
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenuItem>
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
