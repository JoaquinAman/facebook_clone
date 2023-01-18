import React from "react";
import { CgMoreAlt } from "react-icons/cg";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import Contacts from "./Contacts";

const RightSideBar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Joaquin Aman"
        src="https://estaticos.sport.es/resources/jpg/9/3/1535901152339.jpg"
        status="online"
          />
          <Contacts
        name="Enrique Aman"
        src="https://www.ole.com.ar/2022/11/23/c-2KoHlO2_400x400__1.jpg"
        status="online"
          />
          <Contacts
        name="Valentin Aman"
        src="https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg"
        status="offline"
      />
    </div>
  );
};

export default RightSideBar;
