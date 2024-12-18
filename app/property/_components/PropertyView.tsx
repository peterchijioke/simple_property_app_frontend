"use client";
import React from "react";
import { Property } from "@/types/property.type";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getApiService } from "@/service/getListing";
import { Loader } from "lucide-react";

const PropertyView = () => {
  const { id } = useParams();
  const { data, isLoading } = useSWR(
    id ? `/properties/${id}` : "",
    getApiService
  );
  const property: Property = data?.data;
  if (isLoading) {
    return (
      <div className=" w-full h-screen flex items-center justify-center">
        <Loader className=" size-7 text-black animate-spin" />
      </div>
    );
  }
  return (
    <div className="max-w-3xl my-11 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900">{property.name}</h2>

        <p className="text-lg text-gray-600 mt-2">{property.address}</p>

        <div className="flex items-center mt-4">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mr-2">
            {property.propertyType}
          </span>

          <span className="text-xl font-semibold text-gray-900">
            {property.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyView;
