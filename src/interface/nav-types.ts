import { Icons } from "@/components/icons";

export interface childrenItem {
  href: string;
  label: string;
  active: string;
  icon?: keyof typeof Icons;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  submenus: childrenItem[];
}
