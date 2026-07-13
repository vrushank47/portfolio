import {
  House,
  User,
  Code2,
  FolderGit2,
  Mail,
  FileText,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: <House size={20} />, href: "#home" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Skills", icon: <Code2 size={20} />, href: "#skills" },
  { name: "Projects", icon: <FolderGit2 size={20} />, href: "#projects" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
  {
    name: "Resume",
    icon: <FileText size={20} />,
    href: "/resume.pdf",
    external: true,
  },
];

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed left-12 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="w-40 rounded-[32px] border border-[#d29f22]/50 bg-[#252628]/55 p-4 backdrop-blur-2xl shadow-2xl">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    download: true,
                  })}
                  className={`flex items-center gap-3 rounded-full px-3 py-2.5 transition-all duration-300 ${
                    index === 0
                      ? "bg-[#d29f22]/20 text-[#d29f22]"
                      : "text-gray-300 hover:bg-[#d29f22]/10 hover:text-[#d29f22]"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 lg:hidden">
        <div className="flex justify-around rounded-full border border-[#d29f22]/40 bg-[#252628]/80 px-3 py-3 backdrop-blur-2xl shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              {...(item.external && {
                target: "_blank",
                rel: "noopener noreferrer",
                download: true,
              })}
              className="rounded-full p-3 text-gray-300 transition hover:bg-[#d29f22]/20 hover:text-[#d29f22]"
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;