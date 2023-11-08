import { Image } from "@nextui-org/react";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="relative ">
      <Image
        className="rounded-[0px]"
        alt="NextUI hero Image"
        src="/home.png"
      />
      <div
        className="absolute top-[90px] right-[20px] lg:right-[35px] lg:top-[250px]"
        style={{ zIndex: 10 }}
      >
        <p className="text-[20px] lg:text-[40px] text-[white]">
          {t("service_mechanic")}
        </p>
        <p className="text-[30px] font-bold lg:text-[60px]  text-[#4D8F5B]">
          GREENS TIRES
        </p>
      </div>
    </div>
  );
};

export default Home;
