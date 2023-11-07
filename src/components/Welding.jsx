import React from "react";
import { Image } from "@nextui-org/react";

function Welding() {
  return (
    <div className="flex justify-center flex-wrap mt-[60px]">
      <div className="flex items-end justify-center  flex-wrap gap-[30px] ">
        <Image
          className="rounded-[0px] h-[350px] lg:w-[370px] lg:h-[450px] "
          alt="NextUI hero Image"
          src="/vulcanizados.png"
        />
        <div className="flex flex-col lg:w-[370px] p-[15px] lg:p-[0px] ">
          <h1 className="font-bold  text-[20px] h-[40px] text-[black] text-center lg:text-left ">
            Vulcanizados
          </h1>
          <p className="text-[13px] lg:h-[280px] lg:w-[370px] text-[black] lg:mb-[100px] text-center lg:text-left ">
            En nuestra vulcanizadora, nos especializamos en brindarte soluciones
            de alta calidad para tus neumáticos. Nuestro equipo de expertos
            altamente capacitados utiliza tecnología avanzada y métodos de
            vulcanización precisos para reparar tus neumáticos dañados, extender
            su vida útil y mantener la seguridad en la carretera. Realizamos
            reparaciones rápidas y eficientes, desde la detección y reparación
            de pinchazos hasta el reencauche de neumáticos desgastados. Además,
            ofrecemos una amplia gama de servicios que incluyen el equilibrado y
            alineación de llantas para garantizar un rendimiento óptimo de tus
            neumáticos. Confía en nosotros para mantener tus ruedas en excelente
            estado y disfruta de un viaje suave y seguro en todo momento.
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:items-start gap-[30px] flex-wrap mt-[-40px] lg:mt-[0px]">
        <div className=" flex flex-col lg:w-[370px] p-[10px]  ">
          <h1 className="font-bold mt-[100px] text-[20px] h-[40px] text-[black] text-center lg:text-right">
            Soldadura y hojalatería
          </h1>

          <p className="text-[13px] mb-[40px] lg:mb-[0px] h-[280px] lg:w-[370px] text-[black] text-center lg:text-right">
            Realizamos reparaciones de chapa y soldadura con precisión para
            eliminar abolladuras, golpes y daños en la carrocería de tu
            vehículo. Ya sea un pequeño raspón o un daño más extenso, estamos
            preparados para devolverle su apariencia original. Además, ofrecemos
            servicios de talachería de alta calidad, que incluyen el equilibrado
            y alineación de ruedas para garantizar un rendimiento óptimo de tus
            neumáticos. Esto no solo mejora la conducción, sino que también
            prolonga la vida útil de tus neumáticos y asegura la seguridad en la
            carretera. Confía en nosotros para restaurar la belleza y la
            funcionalidad de tu vehículo, sin importar el alcance de los daños.
            En nuestro taller, tu coche será tratado con el máximo cuidado y
            atención al detalle, y te devolveremos un vehículo que luce y
            funciona como nuevo.
          </p>
        </div>

        <Image
          className="rounded-[0px] h-[350px] lg:w-[370px] lg:h-[450px] mt-[-70px]"
          alt="NextUI hero Image"
          src="/soldar.png"
        />
      </div>
    </div>
  );
}

export default Welding;
