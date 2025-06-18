import { Home } from "lucide-react";
import type {LucideIcon} from "lucide-react";

export interface SidebarMenu {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_MENUS: SidebarMenu[] = [
    {
        href: "/main",
        label: "메인",
        icon: Home,
    },
];