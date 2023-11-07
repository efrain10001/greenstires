import { Image } from "@nextui-org/react";

const Profetional = () => {
  return (
    <div>
      <h1 className=" flex font-bold text-[20px] mt-[60px] justify-center text-[black]">
        Servicio profesional para tu auto
      </h1>
      <p className="mt-[40px] text-center text-[black] p-[10px] lg:p-[0px]">
        Bienvenido a nuestro taller mecanico, donde el rendimiento y la
        confiabilidad de tu vehiculo son nuestra principal preocupacion. En
        Greens Tires, estamos comprometido a brindarte un servicio de primera
        clase y mantener a tu automovil en su mejor forma. Aquí encontraras
        mucho mas que un simple taller mecanico, encontraras un equipo
        apacionado de mecanicos dedicados a tu comodidad y seguridad en la
        carretera.
      </p>
      <div className="flex flex-wrap lg:flex-nowrap justify-around mt-[30px]">
        <Image
          className="rounded-[0px] h-[110px]"
          alt="NextUI hero Image"
          src="/toyota.png"
        />
        <Image
          className="rounded-[0px] h-[110px]"
          alt="NextUI hero Image"
          src="/honda.png"
        />
        <Image
          className="rounded-[0px] h-[110px]"
          alt="NextUI hero Image"
          src="/nissan.png"
        />
        <Image
          className="rounded-[0px] h-[150px]"
          alt="NextUI hero Image"
          src="/ford.png"
        />
      </div>
    </div>
  );
};

export default Profetional;
