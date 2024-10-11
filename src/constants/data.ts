import { NavItem } from "@/interface/nav-types";
import { Status } from "@/interface/status";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    submenus: [],
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: "product",
    label: "products",
    submenus: [],
  },
  {
    title: "Todo",
    href: "/dashboard/todo",
    icon: "kanban",
    label: "todo",
    submenus: [],
  },
  {
    title: "Leaderboard",
    href: "/dashboard/leaderboard",
    icon: "leaderboard",
    label: "leaderboard",
    submenus: [],
  },
  {
    title: "Order",
    href: "/dashboard/order",
    icon: "cart",
    label: "order",
    submenus: [],
  },
  {
    title: "Sales Report",
    href: "/dashboard/sales-report",
    icon: "salesreport",
    label: "sales report",
    submenus: [],
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: "message",
    label: "messages",
    submenus: [],
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "setting",
    label: "settings",
    submenus: [],
  },
  {
    title: "Sign Out",
    href: "/",
    icon: "signout",
    label: "sign out",
    submenus: [],
  },
];

export const status: Status[] = [
  {
    value: "Semua",
    label: "Semua",
  },
  {
    value: "Selesai",
    label: "Selesai",
  },
  {
    value: "Belum Selesai",
    label: "Belum Selesai",
  },
];

export const users: Status[] = [
  {
    value: "fadli",
    label: "Fadli",
  },
  {
    value: "jhon",
    label: "Jhon",
  },
  {
    value: "clara",
    label: "Clara",
  },
];
export const division: Status[] = [
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "production",
    label: "Production",
  },
  {
    value: "document",
    label: "Document",
  },
  {
    value: "sales",
    label: "Sales",
  },
];
