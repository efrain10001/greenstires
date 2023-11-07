import React from "react";

function Tuning() {
  return (
    <div className="flex flex-col items-center mt-[120px] relative">
      <h1 className="flex font-bold text-[20px]  justify-center text-[black]">
        Afinación
      </h1>
      <p
        className="text-center text-[14px] p-[10px] top-[70px] lg:p-[30px] lg:text-[20px] lg:top-[230px] lg:w-[990px] "
        style={{
          zIndex: 10,
          backgroundImage: "url(/balanceo.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
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
