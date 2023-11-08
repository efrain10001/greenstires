"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { changeLanguage } from "@/translations";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState(true);
  const { t } = useTranslation();

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: t("ourServiceTitle"), key: "services" },
    { name: t("visitUs"), key: "visit" },
    { name: t("contactUs"), key: "contact" },
  ];

  const handleLanguage = (value) => {
    if (value) {
      changeLanguage("en");
      setLang(true);
    } else {
      changeLanguage("es");
      setLang(false);
    }
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="text-[#4D8F5B]">
          <p className="font-bold text-inherit ">GREENS TIRES</p>
          <div className="flex gap-[10px] ml-[10px]">
            <Button
              size="sm"
              variant="ghost"
              color={lang ? "success" : "default"}
              onClick={() => handleLanguage(true)}
            >
              EN
            </Button>
            <Button
              size="sm"
              variant="ghost"
              color={!lang ? "success" : "default"}
              onClick={() => handleLanguage(false)}
            >
              ES
            </Button>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button
            color="foreground"
            onClick={() => scrollToElement("services")}
          >
            {t("ourServiceTitle")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="foreground" onClick={() => scrollToElement("visit")}>
            {t("visitUs")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="foreground" onClick={() => scrollToElement("contact")}>
            {t("contactUs")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.key}-${index}`}>
            <Button
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
              onClick={() => scrollToElement(item.key)}
            >
              {item.name}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
