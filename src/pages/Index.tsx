import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Zap, Pill, Users, DoorClosed } from "lucide-react";
import outsideDay from "@/assets/outside-environment2.jpg";
import outsideNight from "@/assets/outside-environment.jpg";
import standby from "@/assets/standby-power-supply.jpg";
import pharmacy from "@/assets/pharmacy-area.jpg";
import moreReception from "@/assets/more-reception.jpg";
import entrance from "@/assets/entrance-with-logo.jpg";
import reception from "@/assets/reception.jpg";
import receptionTv from "@/assets/reception-with-tv.jpg";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              <motion.p variants={fadeUp} className="eyebrow mb-8">
                Established in Lagos · HEFAMAA Accredited
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-serif font-medium text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
              >
                Structural Integrity<br />
                in Healthcare.<br />
                <span className="text-primary italic">Open 24 Hours.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed"
              >
                A multi specialty hospital purpose built for the people of Mushin and greater Lagos. Emergency care, premium private wards, an in house pharmacy, and a fully equipped diagnostic laboratory all under one accredited roof.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-brutal-primary">
                  Book a Visit <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+2349070918225" className="btn-brutal-ghost">
                  <Phone className="h-3.5 w-3.5" /> Emergency Line
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-foreground">
                <img
                  src={outsideDay}
                  alt="First Heritage Hospital exterior in Mushin, Lagos"
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/95 border-t border-foreground p-5 flex items-center justify-between">
                  <div>
                    <p className="eyebrow">Location</p>
                    <p className="font-serif text-lg mt-1">33 Ayantuga Street, Mushin</p>
                  </div>
                  <span className="font-serif text-3xl">N°1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 24/7 NIGHT BANNER — parallax */}
      <section
        className="relative bg-fixed bg-cover bg-center min-h-[70vh] flex items-center"
        style={{ backgroundImage: `url(${outsideNight})` }}
        aria-label="24/7 emergency response"
      >
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="container relative py-32 text-background">
          <p className="eyebrow text-background/70 mb-8">24/7 · Always Open</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl">
            Around the Clock Emergency Response.
            <br />
            <span className="text-primary">Always Open.</span> Always Ready.
          </h2>
          <p className="mt-8 max-w-2xl text-background/80 text-lg leading-relaxed">
            When the city sleeps, the red doors stay open. Our resident physicians, triage nurses, and surgical team rotate continuously so that critical minutes are never lost waiting for staff to arrive.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-background/20 border border-background/20 max-w-3xl">
            {[
              { k: "24/7", v: "Operations" },
              { k: "365", v: "Days a Year" },
              { k: "Under 5 min", v: "Triage Time" },
              { k: "100%", v: "Power Uptime" },
            ].map((s) => (
              <div key={s.k} className="bg-foreground/80 p-6">
                <p className="font-serif text-3xl">{s.k}</p>
                <p className="eyebrow text-background/70 mt-2">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE BENTO */}
      <section className="bg-ash">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">The Infrastructure</p>
              <h2 className="font-serif text-4xl md:text-6xl max-w-2xl leading-[1.05]">
                Built on what hospitals are supposed to be.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Reliable power. A stocked pharmacy. Calm intake. Secure entry. Every system here is engineered for continuity, so that clinical care never has to pause for an infrastructure failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-px bg-foreground/20 border border-foreground/20">
            {/* Block 1 — Large */}
            <article className="md:col-span-2 md:row-span-2 bg-background relative group overflow-hidden min-h-[400px]">
              <img src={standby} alt="JMG heavy duty standby generator" className="absolute inset-0 w-full h-full object-cover " />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-background">
                <Zap className="h-8 w-8 mb-4 text-primary" />
                <p className="eyebrow text-background/70 mb-3">01 · Power</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight max-w-md">
                  HEFAMAA Accredited and Uninterrupted Power
                </h3>
                <p className="mt-4 max-w-md text-background/80">
                  A heavy duty JMG standby generator switches over within seconds of a grid outage. Surgical theatres, the maternity ward, neonatal incubators, and laboratory cold storage stay online without interruption.
                </p>
              </div>
            </article>

            {/* Block 2 — Medium */}
            <article className="md:col-span-2 bg-background relative group overflow-hidden min-h-[260px]">
              <img src={pharmacy} alt="In house pharmacy" className="absolute inset-0 w-full h-full object-cover " />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 text-background">
                <Pill className="h-6 w-6 mb-3 text-primary" />
                <p className="eyebrow text-background/70 mb-2">02 · Pharmacy</p>
                <h3 className="font-serif text-2xl md:text-3xl">Comprehensive In House Pharmacy</h3>
                <p className="mt-3 max-w-md text-sm text-background/75">
                  Prescriptions are filled before you leave the building. Essential medicines, antibiotics, and obstetric supplies are stocked on site.
                </p>
              </div>
            </article>

            {/* Block 3 — Medium */}
            <article className="bg-background relative group overflow-hidden min-h-[260px]">
              <img src={moreReception} alt="Patient intake reception" className="absolute inset-0 w-full h-full object-cover " />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 text-background">
                <Users className="h-6 w-6 mb-3 text-primary" />
                <p className="eyebrow text-background/70 mb-2">03 · Intake</p>
                <h3 className="font-serif text-2xl">Streamlined Patient Intake</h3>
              </div>
            </article>

            {/* Block 4 — Small */}
            <article className="bg-background relative group overflow-hidden min-h-[260px]">
              <img src={entrance} alt="Distinct red door entrance" className="absolute inset-0 w-full h-full object-cover " />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 text-background">
                <DoorClosed className="h-6 w-6 mb-3 text-primary" />
                <p className="eyebrow text-background/70 mb-2">04 · Entrance</p>
                <h3 className="font-serif text-2xl">The Red Door</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INSIDE THE HOSPITAL — trust strip */}
      <section className="border-t border-border">
        <div className="container py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-6">
              <p className="eyebrow mb-4">Inside the Hospital</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                A reception space that respects your time.
              </h2>
            </div>
            <p className="md:col-span-6 text-muted-foreground">
              Calm, climate controlled waiting areas with clear sightlines to the triage desk and a quiet information display for queue updates. Designed to lower anxiety from the moment you walk in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15">
            {[
              { src: reception, alt: "Hospital reception" },
              { src: receptionTv, alt: "Reception with patient information display" },
            ].map((img) => (
              <div key={img.alt} className="bg-background overflow-hidden aspect-[4/3] group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link to="/wards" className="btn-brutal">
              Tour the Wards <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-brutal-ghost">
              Clinical Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
