import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      <div className="relative">
        <div className="bg-brand mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-glow">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
