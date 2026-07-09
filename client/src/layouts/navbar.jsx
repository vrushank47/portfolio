import {
  House,
  User,
  Code2,
  FolderGit2,
  Mail,
  FileText,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: <House size={18} />, href: "#home" },
  { name: "About", icon: <User size={18} />, href: "#about" },
  { name: "Skills", icon: <Code2 size={18} />, href: "#skills" },
  { name: "Projects", icon: <FolderGit2 size={18} />, href: "#projects" },
  { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
  { name: "Resume", icon: <FileText size={18} />, href: "#resume" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-12 top-1/2 z-50 -translate-y-1/2">
      <div className="w-40 rounded-[32px] border border-[#d29f22]/50 bg-[#252628]/55 p-4 backdrop-blur-2xl shadow-2xl">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
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
  );
};

export default Navbar;