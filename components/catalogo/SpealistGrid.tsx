import React from "react";
import { Specialist } from "@/lib/types/specialist";

const SpecialistGrid = ( specialists:any ) => {
  return (
    <section className="flex flex-wrap">
      {specialists.map((specialist:Specialist) => (
        <div key={specialist._uid} className="specialist-card">
          <h3>{specialist.firstName}</h3>
          <p>{specialist.email}</p>
        </div>
      ))}
    </div>
  );
};

export default SpecialistGrid;
