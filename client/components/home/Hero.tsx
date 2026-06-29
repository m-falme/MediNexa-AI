"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  HeartPulse,
  Brain,
  ShieldCheck,
  Languages,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-medium mb-6">
            <HeartPulse size={18} />
            AI Powered Healthcare
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Smarter Healthcare
            <br />
            <span className="text-primary">
              Without Barriers
            </span>
          </h1>

          <p className="text-lg text-muted max-w-xl leading-8 mb-10">
            MediNexa AI connects patients, healthcare providers,
            hospitals and caregivers through AI-powered healthcare,
            multilingual communication, appointments, medical records,
            and intelligent health assistance—all in one platform.
          </p>

          <div className="flex flex-wrap gap-5">

            <Button variant="primary">
              Get Started
            </Button>

            <Button variant="outline">
              Learn More
            </Button>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-primary">
                50+
              </h2>

              <p className="text-muted text-sm">
                Health Facilities
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">
                24/7
              </h2>

              <p className="text-muted text-sm">
                AI Support
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">
                100+
              </h2>

              <p className="text-muted text-sm">
                Communities
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative flex justify-center"
        >

          <div className="w-[420px] h-[420px] rounded-full bg-primary/10 absolute blur-3xl" />

          <div className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-10 border border-border w-full max-w-md">

            <div className="flex justify-center mb-8">

              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">

                <HeartPulse
                  size={55}
                  className="text-primary"
                />

              </div>

            </div>

            <div className="space-y-5">

              <Feature
                icon={<Brain />}
                title="AI Health Assistant"
              />

              <Feature
                icon={<Languages />}
                title="Communication Bridge"
              />

              <Feature
                icon={<CalendarDays />}
                title="Appointments"
              />

              <Feature
                icon={<ShieldCheck />}
                title="Medical Records"
              />

              <Feature
                icon={<Stethoscope />}
                title="Doctor Consultation"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
};

function Feature({ icon, title }: FeatureProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border p-4 hover:bg-primary/5 transition">

      <div className="bg-primary/10 p-3 rounded-xl text-primary">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

    </div>
  );
}