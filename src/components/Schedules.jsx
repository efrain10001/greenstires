import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import React from "react";

function Schedules() {
  const sendEmail = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex justify-around mb-[20px] mt-[50px] flex-col lg:flex-row">
      <div className=" flex flex-col w-full lg:w-[400px] lg:left-[30px] p-[20px]">
        <h1 className="font-bold text-[15px]  text-[black]">Horarios</h1>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] w-[80px]  text-[black]">Lunes:</p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] w-[80px]  text-[black]">Martes:</p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] w-[80px]  text-[black]">
            Miercoles:
          </p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] w-[80px]  text-[black]">Jueves:</p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] w-[80px]  text-[black]">Viernes:</p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 5 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] w-[80px] text-[black]">Sabado:</p>
          <p className=" h-[20px] w-[240px] text-[black] ">
            9 am - 2 pm (Solo citas)
          </p>
        </div>
        <div className="flex">
          <p className="mr-[10px] h-[20px] w-[80px]  text-[black]">Domingo:</p>
          <p className=" h-[20px] w-[110px] text-[black]"> Cerrado</p>
        </div>
      </div>
      <div className="flex flex-col mb-[20px] lg:mb-[0px] mt-[40px] lg:mt-[0px] w-full p-[20px] lg:p-[0px]">
        <h1 className="font-bold text-[15px] text-[black] mb-[10px]">
          Contactanos
        </h1>
        <Input className="mb-[10px]" placeholder="Nombre..." />
        <Input className="mb-[10px]" placeholder="Teléfono..." />
        <Input className="mb-[10px]" placeholder="¿Como podemos ayudarte?" />
        <Button onClick={() => sendEmail()}>send email</Button>
      </div>
    </div>
  );
}

export default Schedules;
