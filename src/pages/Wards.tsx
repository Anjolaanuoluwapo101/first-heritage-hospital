import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bath, Snowflake, Squircle, ArrowRight, BedDouble } from "lucide-react";
import { CustomVideoPlayer } from "@/components/CustomVideoPlayer";
import receptionTv from "@/assets/reception-with-tv.jpg";

const Wards = () => {
  return (
    <>
      {/* Editorial intro */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">Premium Wards · Olusanya Wing</p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-5xl md:text-7xl leading-[0.95]"
              >
                The Olusanya<br />
                <span className="italic text-primary">Ward Experience.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-foreground/30 lg:pl-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                En suite private rooms, including the celebrated Room 5, feature modern porcelain tiling, climate controlled air conditioning, and quiet, sound considered architecture so recovery is uninterrupted from admission to discharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video walkthrough */}
      <section className="bg-ash">
        <div className="container py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Walkthrough</p>
              <h2 className="font-serif text-3xl md:text-5xl">A guided tour, on the record.</h2>
            </div>
            <span className="hidden md:block font-serif text-xl text-muted-foreground">01 / 01</span>
          </div>
          <CustomVideoPlayer src="/media/ward-walkthrough.mp4" poster={receptionTv} />
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            Filmed inside the Olusanya Ward exactly as it stands today. No staging, no stock footage. What you see is the room you will be admitted to.
          </p>
        </div>
      </section>

      {/* Spec list */}
      <section>
        <div className="container py-24">
          <p className="eyebrow mb-6">Room Specification</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 max-w-2xl">
            Engineered for rest, not just for stay.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/20 border border-foreground/20">
            {[
              { icon: Bath, title: "En Suite Bathroom", body: "A private bathroom inside every premium room. Cleaned to surgical standard between every admission, with hot water available at any hour." },
              { icon: Snowflake, title: "Climate Control", body: "Independent split unit air conditioning per room. Set the temperature you find restful and hold it through the night without disturbing other patients." },
              { icon: Squircle, title: "Modern Tiling", body: "Full height porcelain finishes on walls and floor. Easy to disinfect, premium to the touch, and resistant to the humidity that wears down lesser surfaces." },
            ].map((s) => (
              <div key={s.title} className="p-10">
                <s.icon className="h-7 w-7 text-primary mb-6" />
                <p className="font-serif text-2xl mb-3">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 items-center">
            <BedDouble className="h-6 w-6" />
            <span className="font-serif text-xl">Room 5 available on request.</span>
            <Link to="/contact" className="btn-brutal-primary md:ml-auto">
              Reserve a Ward <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wards;
