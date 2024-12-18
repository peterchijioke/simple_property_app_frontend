import { getApiService } from "@/service/getListing";
import React, { useState } from "react";
import useSwr from "swr";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types/property.type";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PropertyList() {
  const [pageData, setPageData] = useState({
    limit: 3,
    page: 1,
  });
  const { data, isLoading } = useSwr(
    `/properties?limit=${pageData.limit}&page=${pageData.page}`,
    getApiService
  );

  const properties: Array<Property> = data?.data ?? [];

  if (isLoading) {
    <div className=" w-full h-screen flex items-center justify-center">
      <Loader className=" size-7 text-black animate-spin" />
    </div>;
  }

  if (properties.length === 0 && !isLoading) {
    <div className=" w-full h-screen flex items-center justify-center">
      <span className=" size-7 text-black animate-spin">
        No Property listed yes=t
      </span>
      <Button variant="outline">List Property</Button>
    </div>;
  }
  return <div></div>;
}
