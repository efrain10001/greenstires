import React from "react";
import { useTranslation } from "react-i18next";

function Paint() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-[50px] relative">
      <h1 className="flex font-bold text-[20px]  justify-center text-[black]">
        {t("paintingTitle")}
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
          {t("paintDescription")}
        </p>
      </div>
    </div>
  );
}

export default Paint;
