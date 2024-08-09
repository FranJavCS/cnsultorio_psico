import React from "react";
import { SiZoom, SiGooglemeet, SiGooglemaps } from "react-icons/si";

import { Locations } from "@/types/locations";

const SectionLocations = ({ locations }: { locations: Locations[] }) => {
  return (
    <section className="flex flex-row gap-2">
      <SiZoom className="size-5 text-blue-500" />
      <SiGooglemeet className="size-5 text-yellow-200" />
      <SiGooglemaps className="size-5 text-primary" />
    </section>
  );
};

export default SectionLocations;
