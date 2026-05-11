import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Video, PenTool, Lock, FileDown, Radio, Sparkles, FolderSymlink, Eye,
  Trophy, Gamepad2, Award, Mic, Languages, NotebookPen, ArrowRight, Check,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import dashboardImg from "@/assets/dashboard-mockup.jpg";

export const Route = createFileRoute("/colearn")({
  head: () => ({
    meta: [
      { title: "coLearn — La nouvelle génération de l'enseignement en ligne" },
      { name: "description", content: "Plateforme collaborative IA pour professeurs et élèves : tableau blanc, sessions live, quiz, classements et assistant IA." },
      { property: "og:title", content: "coLearn — Enseignement collaboratif IA" },
      { property: "og:description", content: "Une expérience interactive, intelligente et immersive." },
    ],
  }),
  component: CoLearnPage,
});

const features = [
  { icon: Video, title: "Sessions de cours en ligne", desc: "Gérez et planifiez vos cours en un clic." },
  { icon: PenTool, title: "Tableau blanc collaboratif", desc: "Temps réel entre professeur et élève." },
  { icon: Lock, title: "Permissions intelligentes", desc: "Contrôlez qui peut écrire sur le tableau." },
  { icon: FileDown, title: "Export automatique PDF", desc: "Vos cours sauvegardés au format PDF." },
  { icon: Radio, title: "Enregistrement automatique", desc: "Toutes les sessions enregistrées." },
  { icon: Sparkles, title: "Résumés IA", desc: "Génération intelligente des résumés." },
  { icon: FolderSymlink, title: "Partage de documents", desc: "Gestion centralisée prof/élèves." },
  { icon: Eye, title: "Suivi de consultation", desc: "Voyez qui a consulté chaque document." },
  { icon: Trophy, title: "Challenges & compétitions", desc: "Stimulez la motivation des élèves." },
  { icon: Gamepad2, title: "Quiz & jeux éducatifs", desc: "Apprentissage interactif et ludique." },
  { icon: Award, title: "Classement temps réel", desc: "Scores et rankings instantanés." },
  { icon: Mic, title: "Assistant vocal IA", desc: "Conversation IA en temps réel." },
  { icon: Languages, title: "FR & EN améliorés", desc: "Communication multilingue boostée par l'IA." },
  { icon: NotebookPen, title: "Résumés post-IA", desc: "Récapitulatif après chaque conversation." },
];

const stats = [
  { value: "10x", label: "Engagement élève" },
  { value: "85%", label: "Cours mieux assimilés" },
  { value: "3h", label: "Gagnées par semaine" },
  { value: "98%", label: "Satisfaction prof" },
];

function FolderSymlinkIcon() { return null; }
void FolderSymlinkIcon;

function CoLearnPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> coLearn
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl">
              La nouvelle génération de <br />
              <span className="text-gradient">l'enseignement en ligne.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Une plateforme collaborative permettant aux professeurs et élèves de vivre une
              expérience interactive, intelligente et immersive.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-brand text-white shadow-glow hover:opacity-90" asChild>
                <Link to="/#pricing">Essayer maintenant <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="glass" asChild>
                <Link to="/#contact">Réserver une démonstration</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-16"
          >
            <div className="absolute -inset-10 bg-brand opacity-20 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-3xl shadow-glow">
              <img src={dashboardImg} alt="coLearn" width={1920} height={1080} className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Fonctionnalités"
            title={<>Tout ce dont vous avez <span className="text-gradient">besoin</span></>}
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Pourquoi coLearn"
            title={<>Une révolution <span className="text-gradient">mesurable</span></>}
            description="Les résultats observés chez nos écoles partenaires en moins d'un trimestre."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-gradient">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Tarifs coLearn"
            title={<>Tarification <span className="text-gradient">claire</span></>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Prof — Starter", price: "250", unit: "DT/an", features: ["5 sessions / mois", "Tableau blanc", "Export PDF", "Enregistrements"] },
              { name: "Prof — Pro", price: "500", unit: "DT/an", features: ["12 sessions / mois", "Tableau blanc", "Export PDF", "Enregistrements"], popular: true },
              { name: "Prof — Pay as you go", price: "Sur mesure", unit: "", features: ["Sessions illimitées", "Facturation à l'usage", "Tableau blanc", "Enregistrements"] },
              { name: "Élèves", price: "100", unit: "DT/an", features: ["Accès cours", "Quiz & jeux", "Classements", "Documents"] },
            ].map((p) => (
              <div key={p.name} className={`glass relative rounded-3xl p-8 ${p.popular ? "border-primary/60 shadow-glow" : ""}`}>
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                    Recommandé
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gradient">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.unit}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button className={`mt-8 w-full ${p.popular ? "bg-brand text-white shadow-glow" : ""}`} variant={p.popular ? "default" : "outline"} asChild>
                  <Link to="/#contact">Essayer maintenant</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
