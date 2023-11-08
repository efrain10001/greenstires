import React from "react";
import { Image } from "@nextui-org/react";

import { useTranslation } from "react-i18next";

function Welding() {
  const { t } = useTranslation();
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
            {t("vulcanizedTitle")}
          </h1>
          <p className="text-[13px] lg:h-[280px] lg:w-[370px] text-[black] lg:mb-[100px] text-center lg:text-left ">
            {t("vulcanizedDescription")}
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:items-start gap-[30px] flex-wrap mt-[-40px] lg:mt-[0px]">
        <div className=" flex flex-col lg:w-[370px] p-[10px]  ">
          <h1 className="font-bold mt-[100px] text-[20px] h-[40px] text-[black] text-center lg:text-right">
            {t("weldingTitle")}
          </h1>

          <p className="text-[13px] mb-[40px] lg:mb-[0px] h-[280px] lg:w-[370px] text-[black] text-center lg:text-right">
            {t("weldingDescription")}
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
