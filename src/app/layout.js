import { Montserrat } from "next/font/google";

import { Providers } from "./providers";
import { Image } from "@nextui-org/react";

import "./globals.css";

//Components
import Nav from "@/components/Nav";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "GREENS TIRES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
          <div className="bg-[#4D8F5B] lg:h-[60px] flex flex-col lg:flex-row justify-between lg:items-center p-[10px] gap-[10px]">
            <div className="flex gap-[20px]">
              <Image
                className="rounded-[5px] h-[30px]"
                alt="NextUI hero Image"
                src="/insta.png"
              />
              <Image
                className="rounded-[5px]  h-[30px]"
                alt="NextUI hero Image"
                src="/face.png"
              />
            </div>
            <p className="text-[14px]">
              Made With ❤️ By WebCrafters © 2023 GREENS TIRES
            </p>
          </div>
        </Providers>
      </body>
    </html>
  );
}
