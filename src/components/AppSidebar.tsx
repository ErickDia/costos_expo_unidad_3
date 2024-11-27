import {  Home, ClipboardMinus, UserRound, Sheet } from "lucide-react"

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
  //   title: "Perspectiva",
  //   url: "perspectiva",
  //   icon: Shirt,
  // },
  // {
  //   title: "Etapas",
  //   url: "etapas",
  //   icon: LayoutGrid,
  // },
  {
    title: "Objetivos base",
    url: "objetivos_base",
    icon: ClipboardMinus,
  },
  // {
  //   title: "Mapa estrategico",
  //   url: "mapa_estrategico",
  //   icon: UserRound,
  // },
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
