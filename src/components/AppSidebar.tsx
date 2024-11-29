import {  Home, ClipboardMinus, Sheet, Boxes, Waypoints } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  // {
  //   title: "Clase Costos",
  //   url: "clase",
  //   icon: Book,
  // },
  {
    title: "Etapas",
    url: "etapas",
    icon: Boxes,
  },
  {
    title: "Objetivos base",
    url: "objetivos_base",
    icon: ClipboardMinus,
  },
  {
    title: "Mapa estrategico",
    url: "mapa_estrategico",
    icon: Waypoints,
  },
  {
    title: "Tablero de control",
    url: "tablero_de_control",
    icon: Sheet,
  },
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
