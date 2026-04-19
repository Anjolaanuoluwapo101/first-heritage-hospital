import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrandLogo } from "./BrandLogo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/wards", label: "Wards" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative font-sans uppercase tracking-[0.2em] text-xs py-2 transition-colors",
    "text-foreground/70 hover:text-foreground",
    isActive &&
      "text-foreground after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-primary",
  );

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" aria-label="First Heritage Hospital home">
          <BrandLogo size="md" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:+2349070918225"
          className="hidden md:inline-flex items-center gap-2 font-sans uppercase tracking-[0.2em] text-xs border border-foreground px-4 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          0907 091 8225
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 border border-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="rounded-none border-l">
            <div className="flex flex-col gap-8 mt-12">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl"
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="tel:+2349070918225"
                className="btn-brutal-primary mt-4"
              >
                <Phone className="h-3.5 w-3.5" />
                Call 0907 091 8225
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
