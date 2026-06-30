import Image from "next/image";
import logo from "../../public/assets/logo.webp";

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  House,
  LogOutIcon,
  Menu,
  PhoneForwarded,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const navlinks = (
    <>
      <ul className="flex gap-4">
        <li className="cursor-pointer hover:text-[#FBBF42]">
          <a href="#hero">Home</a>
        </li>
        <li className="cursor-pointer hover:text-[#FBBF42]">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer hover:text-[#FBBF42]">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer hover:text-[#FBBF42]">
          <a href="#Blog">Blog</a>
        </li>
        <li className="cursor-pointer hover:text-[#FBBF42]">
          <a href="#contact">Contact</a>
        </li>
        <li className="cursor-pointer hover:text-[#FBBF42]  md:ml-5 lg::ml-10">
          <a
            className="flex items-center text-yellow-1"
            href="tel:+8801963225525"
          >
            <PhoneForwarded /> <span className="ml-2">+880 1963225525</span>
          </a>
        </li>
      </ul>
    </>
  );
  return (
    <nav className="bg-[#050b16] text-white  p-4">
      <div className=" ">
     <div className="flex justify-between items-center lg:block max-w-8xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="logo flex items-center ">
              <Image src={logo} width={45} alt="Logo"></Image>
              <p className="text-white text-3xl mb-1">Rafid</p>
            </div>
            {/* Nav Links for large device*/}
            <div className="nav-links hidden lg:block">{navlinks}</div>
          </div>

          {/* nav links for small device */}
          <section className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu className="rounded-full bg-black text-yellow-1 block lg:hidden" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-black-2 border border-gray-800  text-white w-64 block lg:hidden"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <li className="cursor-pointer hover:text-[#FBBF42] ">
                      <a href="#hero">Home</a>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li className="cursor-pointer hover:text-[#FBBF42]">
                      <a href="#projects">Projects</a>
                    </li>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <li className="cursor-pointer hover:text-[#FBBF42]">
                      <a href="#about">About</a>
                    </li>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuItem>
                  <li className="cursor-pointer hover:text-[#FBBF42]">
                    <a href="#Blog">Blog</a>
                  </li>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <li className="cursor-pointer hover:text-[#FBBF42]">
                    <a href="#contact">Contact</a>
                  </li>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <li className="cursor-pointer hover:text-[#FBBF42]  ">
                    <a
                      className="flex items-center text-yellow-1"
                      href="tel:+8801963225525"
                    >
                      <PhoneForwarded />{" "}
                      <span className="ml-2">+880 1963225525</span>
                    </a>
                  </li>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
