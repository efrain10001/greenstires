import { Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Profetional = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className=" flex font-bold text-[20px] mt-[60px] justify-center text-[black]">
        {t("serviceTitle")}
      </h1>
      <p className="mt-[40px] text-center text-[black] p-[10px] lg:p-[0px]">
        {t("serviceDescription")}
      </p>
      <div className="flex flex-wrap  justify-around mt-[50px] gap-[20px] lg:gap-[10px]">
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/toyota.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/honda.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/nissan.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/mz.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/ford.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/subaru.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/mit.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/lexus.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/jeep.png"
        />

        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/ram.jpeg"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/bmw.png"
        />
        <Image
          className="rounded-[0px] lg:h-[110px] h-[60px]"
          alt="NextUI hero Image"
          src="/kia.png"
        />
        <Image
          className="rounded-[0px] lg:h-[100px] h-[60px]"
          alt="NextUI hero Image"
          src="/audi.png"
        />
      </div>
    </div>
  );
};

export default Profetional;
