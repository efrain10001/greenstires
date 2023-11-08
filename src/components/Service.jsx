import React from "react";
import { Image } from "@nextui-org/react";

import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col mt-[120px]" id="services">
      <h1 className=" flex font-bold text-[20px]  justify-center text-[black]">
        {t("ourServiceTitle")}
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
            {t("motorRepairTitle")}
          </h1>
          <p className="text-[14px] text-center text-[black]">
            {t("motorRepairDescription")}
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
            {t("change of spare parts")}
          </h1>
          <p className="text-[14px] text-center text-[black]">
            {t("changeOfSparePartsDescription")}
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
            {t("maintenanceAndServicePreventiveTitle")}
          </h1>
          <p className="text-[14px] text-center text-[black]">
            {t("maintenanceAndServicePreventiveDescription")}
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
            {t("paintingAndWaxingTitle")}
          </h1>
          <p className="text-[14px] text-center text-[black]">
            {t("paintingAndWaxingdescrition")}
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
            {t("computerProgrammingAndKeysTitle")}
          </h1>
          <p className="text-[14px] text-center text-[black]">
            {t("computerProgrammingAndKeysDescription")}
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
            {t("weldingAndBodyworkTitle")}
          </h1>
          <p className="text-[14px] text-center text-[black]">
            {t("weldingAndBodyworkDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
