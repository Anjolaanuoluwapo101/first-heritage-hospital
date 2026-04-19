import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  service: z.string().min(1, "Choose a service"),
  message: z.string().min(10, "Tell us a little more"),
});
type FormData = z.infer<typeof schema>;

const services = [
  "24/7 Emergency and Trauma Care",
  "General Outpatient Consultation",
  "Maternity and Antenatal Care",
  "Pediatrics and Child Health",
  "Laboratory and Diagnostic Services",
  "General Surgery",
  "Premium Ward Reservation",
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitting(false);
    toast.success("Booking request received", {
      description: `Thank you, ${data.name}. Our team will call ${data.phone} within 1 business hour.`,
    });
    reset();
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
      {/* LEFT — Data on Ash */}
      <div className="bg-ash p-10 md:p-16 lg:p-24 flex flex-col">
        <p className="eyebrow mb-6">Visit · Call · Write</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[0.95] mb-16">
          We are open.<br />
          <span className="italic text-primary">Right now.</span>
        </h1>

        <div className="space-y-12 flex-1">
          <div className="border-t border-foreground/30 pt-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1.5 text-primary" />
              <div>
                <p className="eyebrow mb-2">Address</p>
                <p className="font-serif text-2xl leading-snug">
                  33 Ayantuga St,<br />Mushin, Lagos 102215
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/30 pt-8">
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1.5 text-primary" />
              <div>
                <p className="eyebrow mb-2">Phone</p>
                <a href="tel:+2349070918225" className="font-serif text-2xl hover:text-primary transition-colors">
                  0907 091 8225
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/30 pt-8">
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 mt-1.5 text-primary" />
              <div>
                <p className="eyebrow mb-2">Hours</p>
                <p className="font-serif text-2xl">Open 24 Hours · 7 Days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-foreground/30 p-6 bg-background">
          <p className="eyebrow mb-3">Coordinates</p>
          <p className="font-mono text-sm">6.5354° N, 3.3540° E</p>
          <p className="text-xs text-muted-foreground mt-2">
            Lagos State Health Facility — HEFAMAA registered.
          </p>
        </div>
      </div>

      {/* RIGHT — Brutalist form */}
      <div className="bg-background p-10 md:p-16 lg:p-24">
        <p className="eyebrow mb-6">Secure Booking</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[0.95] mb-12">
          Request a consultation.
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <div>
            <label htmlFor="name" className="eyebrow block mb-3">Full Name</label>
            <input id="name" {...register("name")} className="input-brutal" placeholder="Adebayo Olusanya" />
            {errors.name && <p className="mt-2 text-xs text-primary">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label htmlFor="email" className="eyebrow block mb-3">Email</label>
              <input id="email" type="email" {...register("email")} className="input-brutal" placeholder="you@example.com" />
              {errors.email && <p className="mt-2 text-xs text-primary">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="eyebrow block mb-3">Phone</label>
              <input id="phone" {...register("phone")} className="input-brutal" placeholder="0907 091 8225" />
              {errors.phone && <p className="mt-2 text-xs text-primary">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="service" className="eyebrow block mb-3">Service</label>
            <select
              id="service"
              {...register("service")}
              className="input-brutal appearance-none bg-[length:12px] bg-no-repeat bg-[right_0.25rem_center]"
              defaultValue=""
            >
              <option value="" disabled>Select a service</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="mt-2 text-xs text-primary">{errors.service.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="eyebrow block mb-3">Message</label>
            <textarea id="message" rows={3} {...register("message")} className="input-brutal resize-none" placeholder="Briefly describe your request" />
            {errors.message && <p className="mt-2 text-xs text-primary">{errors.message.message}</p>}
          </div>

          <button type="submit" disabled={submitting} className="btn-brutal-primary w-full md:w-auto disabled:opacity-70">
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
              </>
            ) : (
              <>
                Submit Request <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
