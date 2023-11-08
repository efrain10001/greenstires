import React from "react";
import { Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

function Address() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-[80px]" id="visit">
      <h1 className=" font-bold text-[20px]  text-[black]"> {t("visitUs")}</h1>
      <p className=" text-[black] mb-[30px]">{t("address")}</p>
      <Image
        className="rounded-[0px]"
        alt="NextUI hero Image"
        src="/mapa.jfif"
      />
    </div>
  );
}

export default Address;
