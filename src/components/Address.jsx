import React from "react";
import { Image } from "@nextui-org/react";

function Address() {
  return (
    <div className="flex flex-col items-center mt-[80px] ">
      <h1 className=" font-bold text-[20px]  text-[black]">Visitanos</h1>
      <p className=" text-[black] mb-[30px]">
        Dirección : 5900 Castle hayne rd.28492{" "}
      </p>
      <Image
        className="rounded-[0px]"
        alt="NextUI hero Image"
        src="/mapa.jfif"
      />
    </div>
  );
}

export default Address;
