import React from "react";
import { SiZoom, SiGooglemeet, SiGooglemaps } from "react-icons/si";

import { Location } from "@/types/locations";

const IconLocation: any = {
  zm: <SiZoom className="size-6 text-blue-500" />,
  mt: <SiGooglemeet className="size-6 text-yellow-200" />,
  fc: <SiGooglemaps className="size-6 text-primary" />,
};

const SectionLocations = ({ locations }: { locations: Location[] }) => {
  return (
    <section className="flex flex-row gap-2">
      {locations.map(
        (location) =>
          IconLocation[location._code] || (
            <SiGooglemaps
              key={location._code}
              className="size-6 text-primary"
            />
          ),
      )}
    </section>
  );
};

export default SectionLocations;
