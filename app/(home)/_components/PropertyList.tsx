"use client";
import { getApiService } from "@/service/getListing";
import React, { useState } from "react";
import useSwr from "swr";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types/property.type";
import { Loader } from "lucide-react";
import PaginationComponent from "./PaginationComponent";

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
  const { currentPage, totalPages } = data?.meta || {
    currentPage: 1,
    totalPages: 1,
  };

  if (isLoading) {
    return (
      <div className=" w-full h-screen flex items-center justify-center">
        <Loader className=" size-7 text-black animate-spin" />
      </div>
    );
  }

  if (properties.length === 0 && !isLoading) {
    return (
      <div className=" w-full h-screen flex items-center justify-center">
        <span className=" text-2xl text-black ">No Property found</span>
      </div>
    );
  }

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageData((prevData) => ({ ...prevData, page: newPage }));
    }
  };

  return (
    <div className=" w-full h-full flex items-center justify-center bg-gray-300">
      <div className="grid h-full w-full bg-slate-500 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}

        <div className=" w-full mt-6">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
