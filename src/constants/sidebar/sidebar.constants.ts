import {
    LayoutDashboard,
    Receipt,
    Coffee,
    Folder,
    BarChart,
} from "lucide-react";
import type {LucideIcon} from "lucide-react";

export interface SidebarMenu {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_MENUS: SidebarMenu[] = [
    {
        href: "/",
        label: "대시보드",
        icon: LayoutDashboard,
    },
    {
        href: "/orders",
        label: "주문 내역",
        icon: Receipt,
    },
    {
        href: "/menu",
        label: "메뉴 관리",
        icon: Coffee,
    },
    {
        href: "/category",
        label: "카테고리 관리",
        icon: Folder,
    },
    {
        href: "/statistics",
        label: "통계",
        icon: BarChart,
    },
];