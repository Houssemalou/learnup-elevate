import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Users, GraduationCap, Calendar, Clock, FileText, BarChart3,
  Wallet, UserPlus, ClipboardCheck, FolderOpen, MessageSquare, Bell,
  FileDown, Building2, BookOpen, PartyPopper, ShieldCheck,
  Smartphone, Check, ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import dashboardImg from "@/assets/dashboard-mockup.jpg";
import parentImg from "@/assets/parent-app.jpg";

export const Route = createFileRoute("/school-manager")({
  head: () => ({
    meta: [
      { title: "LearnUp School Manager — Gestion intelligente des écoles privées" },
      { name: "description", content: "Digitalisez votre école : élèves, professeurs, notes, paiements, communication parents et bien plus." },
      { property: "og:title", content: "LearnUp School Manager" },
      { property: "og:description", content: "Une gestion intelligente et centralisée des écoles privées." },
    ],
  }),
  component: SchoolPage,
});

const features = [
  { icon: Users, title: "Gestion des élèves" },
  { icon: GraduationCap, title: "Gestion des professeurs" },
  { icon: Calendar, title: "Classes & emplois du temps" },
  { icon: Clock, title: "Absences & retards" },
  { icon: FileText, title: "Notes & bulletins" },
  { icon: BarChart3, title: "Tableau de bord & KPIs" },
  { icon: Wallet, title: "Finance & paiements" },
  { icon: UserPlus, title: "Inscriptions" },
  { icon: ClipboardCheck, title: "Examens" },
  { icon: FolderOpen, title: "Documents administratifs" },
  { icon: MessageSquare, title: "Communication interne" },
  { icon: Bell, title: "Notifications automatiques" },
  { icon: FileDown, title: "Rapports PDF" },
  { icon: Building2, title: "Multi-campus" },
  { icon: BookOpen, title: "Matières & programmes" },
  { icon: PartyPopper, title: "Événements scolaires" },
  { icon: ShieldCheck, title: "Sécurité & rôles" },
];

const parentFeatures = [
  "Suivi des notes",
  "Suivi des absences",
  "Notifications en temps réel",
  "Communication avec l'école",
  "Paiement en ligne",
  "Devoirs & examens",
  "Comportement & remarques",
];

function SchoolPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
                <Building2 className="h-3.5 w-3.5 text-primary" /> School Manager
              </span>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl">
                Gestion <span className="text-gradient">intelligente</span> et centralisée des écoles privées.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Digitalisez totalement votre administration, votre communication et votre suivi
                pédagogique sur une plateforme unique et sécurisée.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-brand text-white shadow-glow hover:opacity-90" asChild>
                  <Link to="/#contact">Demander une démo <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="glass" asChild>
                  <Link to="/#pricing">Voir les tarifs</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="absolute -inset-10 bg-brand opacity-20 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-3xl shadow-glow">
                <img src={dashboardImg} alt="School Manager" width={1920} height={1080} className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Fonctionnalités"
            title={<>Tout pour piloter <span className="text-gradient">votre établissement</span></>}
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PARENT APP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-brand opacity-30 blur-3xl" />
              <img src={parentImg} alt="App parent" width={1024} height={1024} loading="lazy" className="relative mx-auto max-w-md w-full" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
                <Smartphone className="h-3.5 w-3.5 text-primary" /> App Mobile Parents
              </span>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Une application mobile <span className="text-gradient">dédiée aux parents</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Gardez le lien avec l'école en temps réel : notes, absences, paiements et plus encore.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {parentFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="glass rounded-3xl p-10 text-center shadow-glow">
            <SectionHeader
              eyebrow="Tarification"
              title={<>À partir de <span className="text-gradient">25 DT/an</span> par élève</>}
              description="Toutes les fonctionnalités incluses. Tarifs dégressifs selon le nombre d'élèves."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-brand text-white shadow-glow" asChild>
                <Link to="/#contact">Demander un devis</Link>
              </Button>
              <Button size="lg" variant="outline" className="glass" asChild>
                <Link to="/#contact">Réserver une démo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
