import React, { useState, useContext, useEffect, useRef } from "react";
import { appContext } from "../../Context/context";
import { data } from "../../data";
import { AiOutlineUp, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Sidebar: React.FC = () => {
  const [notes, setNotes] = useState<boolean>(false);
  const [counselling, setCounselling] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { pages, setPages, closeSidebar } = useContext(appContext);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      console.log(sidebarRef.current?.childNodes);
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  const handleOpenSubmenu = (e: any) => {
    const page = e.target.textContent;
    console.log("handle");
    if (page === "Notes") {
      setNotes((prev) => !prev);
      setCounselling(false);
      setSubjects(false);
    }
    if (page === "Counselling") {
      setCounselling((prev) => !prev);
      setNotes(false);
      setSubjects(false);
    }
    if (page === "Online Tutions") {
      setSubjects((prev) => !prev);
      setNotes(false);
      setCounselling(false);
    }

    const pageData = data.find((a) => a.page === page);
    if (pageData) {
      setPages(pageData);
    } else {
      setPages({
        page: "",
        url: "",
        Submenu: null,
        links: [],
      });
    }
  };
  return (
    <div
      ref={sidebarRef}
      className="absolute z-[20] top-0 left-0 xl:hidden w-full max-h-[95vh] overflow-x-hidden px-[8px] py-[8px] flex flex-col justify-center items-center bg-white shadow-lg rounded-md border-[#E5E7EB] border-[2px] "
    >
      <div className="w-full h-auto flex justify-end items-center">
        <button
          className="w-fit h-auto flex justify-center items-center mr-[5px] mt-[5px]"
          onClick={() => {
            closeSidebar();
          }}
        >
          <AiOutlineClose className="text-[25px]" />
        </button>
      </div>
      <ul className="flex flex-col w-full h-full justify-start overflow-scroll overflow-x-hidden items-start px-[24px] py-[16px] gap-[8px] ">
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Home
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/aboutus"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            About Us
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/workshops"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Workshops
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/jobs"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Jobs
          </NavLink>
        </li>
        <li className="w-fit group">
          <div
            className="relative h-auto w-fit px-[8px] py-[8px]"
            onClick={handleOpenSubmenu}
          >
            <NavLink
              to="#"
              className={`${
                subjects ? "text-[#f20046]" : "text-[#000]"
              } transition-all w-fit flex justify-center items-center gap-[10px] group`}
            >
              Online Tutions
              <AiOutlineUp
                className={`${
                  subjects
                    ? "transition-transform duration-300 rotate-180"
                    : "transition-transform duration-300 rotate-0"
                } `}
              />
            </NavLink>
            {subjects && (
              <ul className="top-[35px] w-full bg-white px-[16px] py-[8px] flex flex-col gap-[8px]">
                {pages.links?.map((item, index) => {
                  return (
                    <li className="w-fit" key={index}>
                      <NavLink
                        to={item.url}
                        onClick={(e) => {
                          closeSidebar();
                          e.stopPropagation();
                        }}
                        className="block hover:text-[#f20046] text-[#000] text-nowrap transition-all py-2"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </li>
        <li className="w-fit group">
          <div
            className="relative h-auto w-fit px-[8px] py-[8px]"
            onClick={handleOpenSubmenu}
          >
            <NavLink
              to="#"
              className={`${
                counselling ? "text-[#f20046]" : "text-[#000]"
              } transition-all w-fit flex justify-center items-center gap-[10px] group`}
            >
              Counselling
              <AiOutlineUp
                className={`${
                  counselling
                    ? "transition-transform duration-300 rotate-180"
                    : "transition-transform duration-300 rotate-0"
                } `}
              />
            </NavLink>
            {counselling && (
              <ul className="top-[35px] w-full bg-white px-[16px] py-[8px] flex flex-col gap-[8px]">
                {pages.links?.map((item, index) => {
                  return (
                    <li className="w-fit" key={index}>
                      <NavLink
                        to={item.url}
                        onClick={(e) => {
                          closeSidebar();
                          e.stopPropagation();
                        }}
                        className="block hover:text-[#f20046] text-[#000] transition-all py-2"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </li>

        <li className="w-fit group">
          <div
            className="relative h-auto w-fit px-[8px] py-[8px]"
            onClick={handleOpenSubmenu}
          >
            <NavLink
              to="#"
              className={`${
                notes ? "text-[#f20046]" : "text-[#000]"
              } transition-all w-fit flex justify-center items-center gap-[10px] group`}
            >
              Notes
              <AiOutlineUp
                className={`${
                  notes
                    ? "transition-transform duration-300 rotate-180"
                    : "transition-transform duration-300 rotate-0"
                } `}
              />
            </NavLink>
            {notes && (
              <ul className=" top-[35px] w-full h-auto bg-white px-[16px] py-[8px] flex flex-col gap-2 ">
                {pages.links?.map((item, index) => {
                  return (
                    <li className="w-fit" key={index}>
                      <NavLink
                        to={item.url}
                        onClick={(e) => {
                          closeSidebar();
                          e.stopPropagation();
                        }}
                        className="block hover:text-[#f20046] text-[#000] transition-all py-2 text-nowrap"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/internship"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Internship
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/seminars"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Seminars
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/franchise"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Franchise
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/NGO"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            NGO
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/S3"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            S3
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/gallery"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Gallery
          </NavLink>
        </li>
        <li className="w-fit px-[8px] py-[8px] group">
          <NavLink
            to="/contactus"
            onClick={closeSidebar}
            className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
