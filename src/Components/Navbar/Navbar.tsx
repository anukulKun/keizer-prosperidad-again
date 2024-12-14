import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { appContext } from "../../Context/context";
import { data } from "../../data";
import { AiOutlineUp, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";

const Navbar: React.FC = () => {
  const [notes, setNotes] = useState<boolean>(false);
  const [counselling, setCounselling] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<boolean>(false);

  const navigate = useNavigate();

  const { pages, setPages, isSidebarOpen, openSidebar } =
    useContext(appContext);

  const handleOpenSubmenu = (e: any) => {
    const page = e.target.textContent;
    if (page === "Notes") {
      setNotes(true);
    }
    if (page === "Counselling") {
      setCounselling(true);
    }
    if (page === "Online Tutions") {
      setSubjects(true);
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
    <div className="w-full h-[60px] py-[12px] px-[16px] flex justify-center items-center fixed z-20 bg-white shadow-lg text-[13px] xl:text-[14px] font-medium">
      <div className="hidden w-full xl:flex xl:justify-center xl:items-center xl:gap-[3vw]">
        <div
          onClick={() => navigate("/")}
          className="w-[45px] h-[45px] overflow-hidden flex justify-center items-center cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-[45px]" />
        </div>
        <ul className=" hidden sm:flex w-fit justify-center items-center lg:gap-[8px] ">
          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Home
            </NavLink>
          </li>
          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/aboutus"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              About Us
            </NavLink>
          </li>
          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/workshops"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Workshops
            </NavLink>
          </li>
          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/Jobs"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Jobs
            </NavLink>
          </li>
          <li className="w-fit group">
            <div
              className="relative h-auto w-fit px-[8px] py-[8px]"
              onMouseEnter={handleOpenSubmenu}
              onMouseLeave={() => setSubjects(false)}
            >
              <NavLink
                to="#"
                className="group-hover:text-[#f20046] text-[#000] transition-all w-fit flex justify-center items-center gap-[10px] group"
              >
                Online Tutions
                <AiOutlineUp className="transition-transform duration-[0.5] group-hover:rotate-180" />
              </NavLink>
              {subjects && (
                <ul className="absolute top-[35px] w-fit bg-white shadow-lg rounded-md px-[24px] py-[16px] flex flex-col gap-[8px] border-[#E5E7EB] border-[2px]">
                  {pages.links?.map((item, index) => {
                    return (
                      <li className="w-fit" key={index}>
                        <NavLink
                          to={item.url}
                          onClick={() => setSubjects(false)}
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
              onMouseEnter={handleOpenSubmenu}
              onMouseLeave={() => setCounselling(false)}
            >
              <NavLink
                to="#"
                className="group-hover:text-[#f20046] text-[#000] transition-all w-fit flex justify-center items-center gap-[10px] group"
              >
                Counselling
                <AiOutlineUp className="transition-transform duration-300 group-hover:rotate-180" />
              </NavLink>
              {counselling && (
                <ul className="absolute top-[35px] w-fit bg-white shadow-lg rounded-md px-[24px] py-[16px] flex flex-col gap-[8px] border-[#E5E7EB] border-[2px]">
                  {pages.links?.map((item, index) => {
                    return (
                      <li className="w-fit" key={index}>
                        <NavLink
                          to={item.url}
                          onClick={() => setCounselling(false)}
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
              onMouseEnter={handleOpenSubmenu}
              onMouseLeave={() => setNotes(false)}
            >
              <NavLink
                to="#"
                className="group-hover:text-[#f20046] text-[#000] transition-all w-fit flex justify-center items-center gap-[10px] group "
              >
                Notes
                <AiOutlineUp className="transition-transform duration-300 group-hover:rotate-180" />
              </NavLink>
              {notes && (
                <ul className="absolute top-[35px] w-fit h-auto bg-white shadow-lg rounded-md px-[24px] py-[16px] flex flex-col gap-[8px] border-[#E5E7EB] border-[2px]">
                  {pages.links?.map((item, index) => {
                    return (
                      <li className="w-fit" key={index}>
                        <NavLink
                          to={item.url}
                          onClick={() => setNotes(false)}
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

          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/Internship"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Internship
            </NavLink>
          </li>

          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/seminars"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Seminars
            </NavLink>
          </li>

          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/franchise"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Franchise
            </NavLink>
          </li>

          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/NGO"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              NGO
            </NavLink>
          </li>
          <li className="w-fit px-[4px] py-[4px] lg:px-[8px] lg:py-[8px] group">
            <NavLink
              to="/S3"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              S3
            </NavLink>
          </li>

          <li className="w-fit px-[8px] py-[8px] group">
            <NavLink
              to="/gallery"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Gallery
            </NavLink>
          </li>
          <li className="w-fit px-[8px] py-[8px] group">
            <NavLink
              to="/contactus"
              className="group-hover:text-[#f20046] text-[#000] transition-all text-nowrap"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="w-fit flex justify-center items-center">
          <Button text="Login" path="/login" />
        </div>
      </div>

      <div className="relative w-full h-auto flex justify-between items-center xl:hidden">
        <div
          onClick={() => navigate("/")}
          className="w-[35px] h-[35px] overflow-hidden flex justify-center items-center cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-[45px]" />
        </div>

        <div className="w-fit h-auto flex justify-center items-center gap-[14px]">
          <div className="w-fit h-auto flex justify-center items-center">
            <Button text="Login" path="/login" />
          </div>
          
          <div className="w-fit h-auto flex justify-center items-center px-[8px] py-[8px]">
            <button
              className="w-fit h-auto flex justify-center items-center"
              onClick={() => {
                openSidebar();
              }}
            >
              <AiOutlineMenu className="text-[25px]" />
            </button>
            {isSidebarOpen && <Sidebar />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
