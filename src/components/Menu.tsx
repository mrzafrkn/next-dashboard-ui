import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "Kartlar",
    items: [
      {
        icon: "/cards.png",
        label: "Cari Tanıtım Kartı",
        href: "/list/teachers",
      },
    ],
    visible: ["admin", "user"],
  },
  {
    title: "Giriş Formları",
    items: [
      {
        icon: "/lesson.png",
        label: "Teklif Formu",
        href: "/teklif",
      },
      {
        icon: "/lesson.png",
        label: "Deneme Formu",
        href: "/list/teachers",
      },
    ],
    visible: ["admin", "user"],
  },
  {
    title: "Raporlar",
    items: [
      {
        icon: "/report.png",
        label: "Cari Raporu",
        href: "/list/cariler",
      },
      {
        icon: "/report.png",
        label: "Deneme Raporu",
        href: "/list/teachers",
      },
    ],
    visible: ["admin"],
  },
  {
    title: "Diğer",
    items: [
      {
        icon: "/home.png",
        label: "Ana Sayfa",
        href: "/admin",
      },
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
    visible: ["admin", "user"],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => {
        if (i.visible.includes(role)) {
          return (
            <div className="flex flex-col gap-2" key={i.title}>
              <span className="hidden lg:block text-gray-400 font-light my-4">
                {i.title}
              </span>
              {i.items.map((item) => {
                return (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                  >
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
