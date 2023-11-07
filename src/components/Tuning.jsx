import React from "react";
import { Image } from "@nextui-org/react";

function Tuning() {
  return (
    <div className="flex flex-col items-center mt-[120px] relative">
      <h1 className="flex font-bold text-[20px]  justify-center text-[black]">
        Afinación
      </h1>
      <Image
        className="rounded-[0px] h-[200px] lg:h-full"
        alt="NextUI hero Image"
        src="/balanceo.png"
      />
      <p
        className="absolute text-center text-[14px] p-[10px] top-[70px] lg:p-[0px] lg:text-[20px] lg:top-[230px] lg:w-[900px] "
        style={{ zIndex: 10 }}
      >
        En nuestro taller nos enorgullecemos de ofrecer una gama completa de
        servicios de afinacion diseñados para optimizar el rendimiento y la
        eficiencia de tu vehículo. Nuestro equipo de técnicos altamente
        capacitados utiliza herramientas y equipos de diagnóstico de vanguardia
        para realizar un cambio de aceite y filtro de alta calidad, reemplazar
        las bujías, ajustar la sincronización del motor, limpiar los inyectores
        de combustible, verificar la suspensión y alinear las ruedas,
        inspeccionar los frenos y garantizar que todos los sistemas funcionen de
        manera óptima.
      </p>
    </div>
  );
}

export default Tuning;
