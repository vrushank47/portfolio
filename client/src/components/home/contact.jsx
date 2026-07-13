import { Mail } from "lucide-react";
import {
FaEnvelope,
FaGithub,
FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const contacts = [
  {
title: "Email",
value: "vrushanksaravade2005@gmail.com",
icon: <Mail size={22} />,
link: "mailto:vrushanksaravade2005@gmail.com",
  },
  {
title: "GitHub",
value: "github.com/vrushank47",
icon: <FaGithub size={22} />,
link: "https://github.com/vrushank47",
  },
  {
title: "LinkedIn",
value: "vrushank-saravade",
icon: <FaLinkedin size={22} />,
link: "[www.linkedin.com/in/vrushank-saravade-a53a84372](https://www.linkedin.com/in/vrushank-saravade-a53a84372)",
  },
  {
title: "X",
value: "@Vrushank736",
icon: <FaXTwitter size={22} />,
link: "https://x.com/Vrushank736",
  },
];
const Contact = () => {
return (
<section
id="contact"
className="min-h-screen flex items-center pb-28 lg:pb-0"
>
<div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">

<div className="ml-0 lg:ml-40">

{/* Heading */}

<div className="text-center">

<p className="text-sm uppercase tracking-[0.35em] text-[#d29f22]">
              Contact
</p>

<h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
              Let's Build Something Together
</h2>

<p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
              Whether it's an internship, collaboration or just
              a conversation about technology, I'd love to hear from you.
</p>

</div>

{/* Cards */}

<div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 md:grid-cols-2">

{contacts.map((contact) => (
<a
key={contact.title}
href={contact.link}
target="_blank"
rel="noopener noreferrer"
className="group rounded-2xl border border-transparent bg-[#252628]/45 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#d29f22]/50 hover:-translate-y-1"
>
<div className="flex items-center gap-4 text-[#d29f22]">
{/* Top Left */}
<div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-[#d29f22]/80" />

{/* Top Right */}
<div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#d29f22]/80" />

{/* Bottom Left */}
<div className="absolute bottom-0 left-0 h-8 w-8 border-l border-b border-[#d29f22]/80" />

{/* Bottom Right */}
<div className="absolute bottom-0 right-0 h-8 w-8 border-r border-b border-[#d29f22]/80" />
<div className="absolute left-12 top-0 h-px w-20 bg-[#d29f22]/50" />

<div className="absolute right-12 bottom-0 h-px w-20 bg-[#d29f22]/50" />

<div className="absolute left-0 top-12 h-16 w-px bg-[#d29f22]/50" />

<div className="absolute right-0 bottom-12 h-16 w-px bg-[#d29f22]/50" />
{contact.icon}

<span className="text-lg relative overflow-hidden font-semibold text-white">
{contact.title}
</span>
</div>

<p className="mt-5 text-gray-400">
{contact.value}
</p>

</a>
            ))}

</div>

{/* Footer */}

<div className="mt-12 sm:mt-16 lg:mt-20 border-t border-[#d29f22]/15 pt-8 text-center text-sm text-gray-500">
            © 2026 Vrushank Saravade. Built with React, Tailwind CSS and Node.js.
</div>

</div>

</div>
</section>
  );
};

export default Contact;