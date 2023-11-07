import React from "react";
import { Image } from "@nextui-org/react";

function Paint() {
  return (
    <div className="flex flex-col items-center mt-[50px] relative">
      <h1 className="flex font-bold text-[20px]  justify-center text-[black]">
        Pintura y encerado
      </h1>
      <div
        className="text-center text-[14px] p-[10px] top-[70px] lg:p-[30px] lg:text-[20px] lg:top-[230px] lg:w-[990px] "
        style={{
          zIndex: 10,
          backgroundImage: "url(/encerado.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="text-[14px] lg:text-[18px]  lg:w-[600px] p-[10px] text-center lg:text-left"
          style={{ zIndex: 10 }}
        >
          La pintura de tu automóvil es su carta de presentación, y en nuestro
          taller, nos esforzamos por devolverle su brillo y color original.
          Realizamos reparaciones de pintura, cubriendo desde pequeños arañazos
          y abolladuras hasta trabajos completos de repintado. Nuestro proceso
          de pintura cuidadosamente seleccionado garantiza un acabado uniforme y
          de alta calidad que revitalizará la estética de tu vehículo.
        </p>
        <p
          className="text-[14px] lg:text-[18px]  lg:w-[600px] p-[10px] text-center lg:text-left"
          style={{ zIndex: 10 }}
        >
          Además de la pintura,ofrecemos servicios de encerado profesional que
          no solo realzan la belleza de tu automóvil, sino que también brindan
          una capa de protección contra los elementos y el desgaste cotidiano.
          Esto no solo mantiene la apariencia de tu vehículo en su mejor
          estado,sino que también prolonga su vida útil
        </p>
      </div>
    </div>
  );
}

export default Paint;
