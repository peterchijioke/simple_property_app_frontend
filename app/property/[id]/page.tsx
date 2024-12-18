import { Metadata } from "next";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PropertyView from "../_components/PropertyView";

export const metadata: Metadata = {
  title: "Property Listings",
  description:
    "Browse our collection of properties available for sale or rent. Find your perfect home today!",
};

export default function page() {
  return (
    <div className="  container w-full h-screen">
      <PropertyView />
    </div>
  );
}
