import { Metadata } from "next";
import React from "react";
import PropertyList from "./_components/PropertyList";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {
  return (
    <ScrollArea className=" w-full h-screen">
      <PropertyList />
    </ScrollArea>
  );
}
