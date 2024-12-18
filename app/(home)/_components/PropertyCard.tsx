import React from "react";
import { Property } from "@/types/property.type";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PropertyImage from "./PropertyImage";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="w-full max-w-xs">
      <PropertyImage
        src={property.imageUrl}
        alt={property.name}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-500">{property.address}</p>
        <p className="mt-2 text-xl font-bold">{property.price}</p>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
