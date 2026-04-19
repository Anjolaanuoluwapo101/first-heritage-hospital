import { BrandLogo } from "./BrandLogo";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-background/15">
          <div className="pb-10 md:pb-0 md:pr-10">
            <BrandLogo inverted size="lg" />
            <p className="mt-6 text-sm text-background/75 max-w-xs leading-relaxed">
              Three decades of disciplined, multi specialty care for the people of Mushin and greater Lagos. Open every hour of every day.
            </p>
          </div>

          <div className="py-10 md:py-0 md:px-10">
            <p className="eyebrow text-background/60">Address</p>
            <div className="mt-4 flex gap-3">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              <p className="font-serif text-lg leading-snug">
                33 Ayantuga Street,<br />Mushin, Lagos 102215
              </p>
            </div>
          </div>

          <div className="py-10 md:py-0 md:px-10">
            <p className="eyebrow text-background/60">Hours & Contact</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4" />
                <span className="font-serif text-lg">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+2349070918225" className="font-serif text-lg hover:text-primary transition-colors">
                  0907 091 8225
                </a>
              </div>
              <p className="text-xs text-background/60 leading-relaxed pt-2">
                Emergency line answered within three rings, day or night.
              </p>
            </div>
          </div>

          <div className="pt-10 md:pt-0 md:pl-10">
            <p className="eyebrow text-background/60">Credentials</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm">HEFAMAA Accredited Facility</span>
              </div>
              <p className="text-xs text-background/60 leading-relaxed">
                Registered with the Corporate Affairs Commission of Nigeria and compliant with Lagos State Health Facility Monitoring and Accreditation Agency standards.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60 uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} First Heritage Hospital</span>
          <span>Lagos · Nigeria</span>
        </div>
      </div>
    </footer>
  );
};
