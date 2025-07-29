import { UserIcon, WalletIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom"; // React Router için

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const sidebarRef = useRef(null); // aside için referans
  const buttonRef = useRef(null); // hamburger buton için referans
  const location = useLocation(); // Mevcut sayfa yolunu almak için

  const sideBarItem = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Müşteri Yönet", icon: UserIcon, href: "/customers" },
    { name: "Cari Yönet", icon: WalletIcon, href: "/cari" },
  ];

  // Dışarı tıklama kontrolü
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Sidebar'ı kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm  rounded-lg md:hidden  "
      >
        <span className="sr-only">Open sidebar</span>
        <Bars4Icon className="h-8 w-8 dark:text-light-quaternary text-dark-quintuple  dark:hover:text-dark-eighth hover:text-light-ninth " />
      </button>
      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40  w-56 h-screen transition-transform rounded-tr-3xl  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full p-6  overflow-y-auto rounded-tr-3xl bg-light-secondary  dark:bg-dark-secondary">
          <ul className="space-y-4 font-medium">
            {sideBarItem.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-dark-sixth group "
                  >
                    <item.icon
                      className={`h-6 w-6  group-hover:text-light-ninth dark:group-hover:text-dark-eighth ${
                        isActive
                          ? "dark:text-dark-quaternary text-light-quintuple"
                          : "dark:text-dark-sixth text-light-sixth"
                      } `}
                    />
                    <span
                      className={`ms-3 dark:text-dark-sixth text-light-sixth group-hover:text-light-ninth dark:group-hover:text-dark-eighth 
                      ${
                        isActive
                          ? "dark:text-dark-quaternary text-light-quintuple"
                          : "dark:text-dark-sixth text-light-sixth"
                      }
                      `}
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
