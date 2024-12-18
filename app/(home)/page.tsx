import { Metadata } from "next";
import React from "react";
import PropertyList from "./_components/PropertyList";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Property Listings",
  description:
    "Browse our collection of properties available for sale or rent. Find your perfect home today!",
};

export default function page() {
  return (
    <ScrollArea className=" container w-full h-screen">
      <PropertyList />
    </ScrollArea>
  );
}
