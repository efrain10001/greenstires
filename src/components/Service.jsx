import React from "react";
import { Image } from "@nextui-org/react";

function Service() {
  return (
    <div className=" flex flex-col mt-[120px] ">
      <h1 className=" flex font-bold text-[20px]  justify-center text-[black]">
        Nuestros servicios
      </h1>
      <div className="flex justify-around mt-[40px] flex-wrap ">
        <div className="flex flex-col items-center w-[230px] ">
          <div className="h-[50px] ">
            <Image
              className="rounded-[0px] h-[50px]"
              alt="NextUI hero Image"
              src="/reparacion.png"
            />
          </div>
          <h1 className="text-[15px] h-[40px] font-bold  text-[#4D8F5B]">
            Reparación de motores
          </h1>
          <p className="text-[14px] text-center text-[black]">
            Restauramos la potencia y el rendimiento de motores con precisión y
            experiencia, devolviendo vida a tu vehículo
          </p>
        </div>

        <div className="flex flex-col items-center w-[230px] mt-[20px] lg:mt-[0px] ">
          <div className="h-[50px] ">
            <Image
              className="rounded-[0px] h-[50px]"
              alt="NextUI hero Image"
              src="/cambio.png"
            />
          </div>
          <h1 className="text-[15px] h-[40px] font-bold  text-[#4D8F5B]">
            Cambio de refacciones
          </h1>
          <p className="text-[14px] text-center text-[black]">
            Renovamos tu vehículo con repuestos de calidad, devolviendo la
            eficiencia y confiabilidad a tu automóvil
          </p>
        </div>

        <div className="flex flex-col items-center w-[230px] mt-[20px] lg:mt-[0px]">
          <div className="h-[50px]  ">
            <Image
              className="rounded-[0px] h-[60px]"
              alt="NextUI hero Image"
              src="/mantenimiento.png"
            />
          </div>

          <h1 className="text-[15px] h-[40px]  font-bold text-center  text-[#4D8F5B]">
            Mantenimiento y servicio preventivo
          </h1>
          <p className="text-[14px] text-center text-[black]">
            Protege tu inversión automotriz con nuestro mantenimiento experto,
            previniendo problemas y alargando la vida de tu vehículo.
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-[40px] flex-wrap ">
        <div className="flex flex-col items-center  w-[230px] ">
          <div className="h-[50px] ">
            <Image
              className="rounded-[0px] h-[50px]"
              alt="NextUI hero Image"
              src="/pintura.png"
            />
          </div>
          <h1 className="text-[15px] font-bold h-[40px]  text-[#4D8F5B]">
            Pintura y encerado
          </h1>
          <p className="text-[14px] text-center text-[black]">
            Restaura el brillo y protege la estética de tu vehículo con nuestro
            servicio de pintura y encerado profesional.
          </p>
        </div>
        <div className="flex flex-col items-center  w-[230px] mt-[20px] lg:mt-[0px] ">
          <div className="h-[50px] ">
            <Image
              className="rounded-[0px] h-[50px]"
              alt="NextUI hero Image"
              src="/programacion.png"
            />
          </div>

          <h1 className="text-[15px] font-bold text-center h-[40px]  text-[#4D8F5B]">
            Programación de computadoras y llaves
          </h1>
          <p className="text-[14px] text-center text-[black]">
            Recupera el control total de tu vehículo con nuestra programación de
            llaves y computadoras automotrices especializada
          </p>
        </div>
        <div className="flex flex-col items-center w-[230px] mt-[20px] lg:mt-[0px] ">
          <div className="h-[55px]">
            <Image
              className="rounded-[0px] h-[60px]"
              alt="NextUI hero Image"
              src="/soldadura.png"
            />
          </div>

          <h1 className="text-[15px] font-bold text-center h-[40px]  text-[#4D8F5B]">
            Soldadura y hojalatería
          </h1>
          <p className="text-[14px] text-center text-[black]">
            Reparamos tu vehículo con precisión y calidad a través de nuestro
            servicio de soldadura y talachería experta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
