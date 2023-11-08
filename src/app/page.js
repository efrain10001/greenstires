"use client";

//Sections
import Home from "../components/Home";
import Profetional from "../components/Profetional";
import Service from "../components/Service";
import Tuning from "../components/Tuning";
import Welding from "@/components/Welding";
import Paint from "@/components/Paint";
import Address from "@/components/Address";
import Schedules from "@/components/Schedules";

import i18n from "@/translations";

export default function App() {
  return (
    <div>
      <div class="flex flex-col items-center mx-auto max-w-[1440px] bg-[white]">
        <div className="lg:w-[990px]">
          <Home />
          <Profetional />
          <Service />
          <Tuning />
          <Welding />
          <Paint />
          <Address />
          <Schedules />
        </div>
      </div>
    </div>
  );
}
