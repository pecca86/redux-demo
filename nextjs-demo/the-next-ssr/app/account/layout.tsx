import SideNavigation from "@/app/_components/SideNavigation";
import React from "react";



export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
