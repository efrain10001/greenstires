import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Schedules() {
  const { t } = useTranslation();

  const sendEmail = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div
      className="flex justify-around mb-[20px] mt-[50px] flex-col lg:flex-row"
      id="contact"
    >
      <div className=" flex flex-col w-full lg:w-[400px] lg:left-[30px] p-[20px]">
        <h1 className="font-bold text-[15px]  text-[black]">{t("schedule")}</h1>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] lg:w-[100px]  text-[black]">
            {t("Monday")}
          </p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] lg:w-[100px]  text-[black]">
            {t("Tuesday")}
          </p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] lg:w-[100px]  text-[black]">
            {t("Wednesday")}
          </p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] lg:w-[100px]  text-[black]">
            {t("Thursday")}
          </p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 6 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] lg:w-[100px]  text-[black]">
            {t("Friday")}
          </p>
          <p className=" h-[20px] w-[110px] text-[black]">9 am - 5 pm</p>
        </div>
        <div className="flex ">
          <p className="mr-[10px] h-[20px] lg:w-[100px] text-[black]">
            {t("Saturday")}
          </p>
          <p className=" h-[20px] w-[240px] text-[black] ">
            9 am - 2 pm {t("dating_only")}
          </p>
        </div>
        <div className="flex">
          <p className="mr-[10px] h-[20px] lg:w-[100px]  text-[black]">
            {t("Sunday")}
          </p>
          <p className=" h-[20px] w-[110px] text-[black]"> {t("closed")}</p>
        </div>
      </div>
      <div className="flex flex-col mb-[20px] lg:mb-[0px] mt-[40px] lg:mt-[0px] w-full p-[20px] lg:p-[0px]">
        <h1 className="font-bold text-[15px] text-[black] mb-[10px]">
          {t("contactUs")}
        </h1>
        <Input className="mb-[10px]" placeholder={t("name")} />
        <Input className="mb-[10px]" placeholder={t("phone")} />
        <Input className="mb-[10px]" placeholder={t("help")} />
        <Button onClick={() => sendEmail()}>{t("send_email")}</Button>
      </div>
    </div>
  );
}

export default Schedules;
