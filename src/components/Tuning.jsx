import React from "react";

import { useTranslation } from "react-i18next";

function Tuning() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-[120px] relative">
      <h1 className="flex font-bold text-[20px]  justify-center text-[black]">
        {t("tuningTitle")}
      </h1>
      <p
        className="text-center text-[14px] p-[10px] top-[70px] lg:p-[30px] lg:text-[20px] lg:top-[230px] lg:w-[990px] "
        style={{
          zIndex: 10,
          backgroundImage: "url(/balanceo.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {t("tuningDescription")}
      </p>
    </div>
  );
}

export default Tuning;
