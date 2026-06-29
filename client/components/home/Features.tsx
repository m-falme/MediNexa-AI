"use client";

import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  CalendarDays,
  Languages,
  ShieldCheck,
  Ambulance,
} from "lucide-react";

const features = [
  {
    title: "AI Health Assistant",
    description:
      "Get instant health guidance powered by AI anytime, anywhere.",
    icon: Brain,
  },
  {
    title: "Digital Health Records",
    description:
      "Securely access and manage your medical records in one place.",
    icon: HeartPulse,
  },
  {
    title: "Appointments",
    description:
      "Book, manage, and receive reminders for doctor appointments.",
    icon: CalendarDays,
  },
  {
    title: "Communication Bridge",
    description:
      "Break language barriers with AI-powered multilingual healthcare communication.",
    icon: Languages,
  },
  {
    title: "Secure Data",
    description:
      "Your health information is encrypted and protected.",
    icon: ShieldCheck,
  },
  {
    title: "Emergency Support",
    description:
      "Quickly connect with emergency services and caregivers.",
    icon: Ambulance,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Everything You Need in One Platform
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            MediNexa AI brings together healthcare services,
            AI assistance, communication tools, and digital
            medical records into one seamless experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border p-8 hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}