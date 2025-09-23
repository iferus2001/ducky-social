"use client";
import Link from "next/link";
import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { MENU } from "./menu.data";

import { MenuItem } from "./MenuItem";
export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6  text-white/80">
      {MENU.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  );
}
