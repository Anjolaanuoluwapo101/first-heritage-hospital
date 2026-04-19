import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "24/7 Emergency and Trauma Care",
    desc: "Continuous triage, resuscitation, and stabilisation backed by uninterrupted power, on call physicians, and a fully equipped resuscitation bay. Every hour of every day, including public holidays.",
  },
  {
    title: "General Outpatient Consultation",
    desc: "Same day consultations across primary care complaints with a focus on accurate diagnosis, transparent treatment plans, and clear next steps. Walk ins accepted alongside scheduled appointments.",
  },
  {
    title: "Maternity and Antenatal Care",
    desc: "Comprehensive antenatal monitoring, supervised vaginal and caesarean delivery, and postnatal recovery in private en suite wards. Lactation support and newborn screening included as standard.",
  },
  {
    title: "Pediatrics and Child Health",
    desc: "Routine immunisation, paediatric consultations, growth monitoring, and child friendly assessment rooms for ages zero through sixteen. Parents remain bedside throughout treatment.",
  },
  {
    title: "Laboratory and Diagnostic Services",
    desc: "On site laboratory covering haematology, clinical chemistry, microbiology, and serology. Most routine results are returned the same day to keep clinical decisions moving.",
  },
  {
    title: "General Surgery",
    desc: "Elective and emergency procedures performed in a fully equipped theatre with consultant surgeon coverage, modern anaesthesia, and a recovery suite staffed by dedicated post operative nurses.",
  },
];

const Services = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <div className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Clinical Directory</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Six core services.<br />
              <span className="italic text-primary">One disciplined standard.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-foreground/30 lg:pl-10 self-end">
            <p className="text-muted-foreground leading-relaxed">
              Tap any service to expand. Each entry leads directly to a consultation request, so there is no phone tag and no friction between you and a clinician.
            </p>
          </div>
        </div>

        <div className="border-t border-foreground/30">
          {services.map((s, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={s.title} className="border-b border-foreground/30">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 md:gap-10 py-8 md:py-10 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm tracking-[0.2em] text-muted-foreground w-10 shrink-0">
                    {num}
                  </span>
                  <span
                    className={cn(
                      "flex-1 font-serif text-2xl md:text-4xl transition-colors",
                      isOpen ? "text-primary" : "group-hover:text-primary",
                    )}
                  >
                    {s.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 shrink-0 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 md:pl-20">
                        <p className="md:col-span-7 text-lg text-muted-foreground leading-relaxed">
                          {s.desc}
                        </p>
                        <div className="md:col-span-5 flex md:justify-end items-start">
                          <Link to="/contact" className="btn-brutal-primary">
                            Request Consultation <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
