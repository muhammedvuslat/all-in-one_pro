//  Component that displays the application's sidebar.

import { useEffect, useRef, useState } from "react";
import {
  UserIcon,
  WalletIcon,
  HomeIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { ThemeToggle } from "../../components/Button";

// Sidebar component
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  // Sidebar items
  const sideBarItems = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Manage Customers", icon: UserIcon, href: "/customers" },
    { name: "Account Management", icon: WalletIcon, href: "/account" },
  ];

  //  Toggles the sidebar open/close state
  const toggleSidebar = () => setIsOpen(!isOpen);

  //  Closes the sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger menu button for mobile devices */}
      <button
        ref={buttonRef}
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg md:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars4Icon className="h-8 w-8 dark:text-light-quaternary text-dark-quintuple dark:hover:text-dark-eighth hover:text-light-ninth" />
      </button>
      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-58 h-screen transition-transform rounded-tr-3xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full p-6 overflow-y-auto rounded-tr-3xl bg-light-secondary dark:bg-dark-secondary">
          {/*  Theme toggle button */}
          <ThemeToggle />
          <ul className="space-y-4 font-light">
            {sideBarItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-dark-sixth group"
                  >
                    <item.icon
                      className={`h-6 w-6 group-hover:text-light-ninth dark:group-hover:text-dark-eighth ${
                        isActive
                          ? "dark:text-dark-quaternary text-light-quintuple"
                          : "dark:text-dark-sixth text-light-sixth"
                      }`}
                    />
                    <span
                      className={`ms-3 dark:text-dark-sixth text-light-sixth group-hover:text-light-ninth dark:group-hover:text-dark-eighth ${
                        isActive
                          ? "dark:text-dark-quaternary text-light-quintuple"
                          : "dark:text-dark-sixth text-light-sixth"
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
