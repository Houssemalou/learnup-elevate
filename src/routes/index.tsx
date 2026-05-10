import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Users, School, BookOpen, Bot, BarChart3, Shield,
  Check, Zap, Globe, Mail, MessageSquare, Star, ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-ai.jpg";
import dashboardImg from "@/assets/dashboard-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LearnUp — Plateforme éducative nouvelle génération" },
      { name: "description", content: "LearnUp digitalise l'éducation : coLearn pour l'enseignement collaboratif et School Manager pour la gestion complète des écoles privées." },
      { property: "og:title", content: "LearnUp — Éducation digitale premium" },
      { property: "og:description", content: "La suite SaaS qui transforme écoles, professeurs et étudiants." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "1", label: "École cliente" },
  { value: "200+", label: "Élèves actifs" },
  { value: "100%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const highlights = [
  { icon: Bot, title: "Assistant IA temps réel", desc: "Améliorez la communication en français et en anglais." },
  { icon: Users, title: "Collaboration immersive", desc: "Tableau blanc, sessions live et permissions intelligentes." },
  { icon: BarChart3, title: "Analytics pédagogiques", desc: "Suivez les performances avec des KPIs en temps réel." },
  { icon: Shield, title: "Sécurité entreprise", desc: "Gestion des rôles, RGPD et données chiffrées." },
];

const testimonials = [
  { name: "Ishak", role: "Directeur, École privée Manara", quote: "LearnUp a transformé notre administration. Tout est centralisé, fluide, et nos parents adorent l'application mobile. Une solution premium qui répond parfaitement à nos besoins." },
];

const faqs = [
  { q: "LearnUp est-il adapté aux petites écoles ?", a: "Oui. Notre plateforme s'adapte aussi bien aux écoles privées de quelques dizaines d'élèves qu'aux établissements multi-campus." },
  { q: "Combien de temps pour déployer la solution ?", a: "Le déploiement standard prend entre 2 et 5 jours, avec formation des équipes incluse." },
  { q: "Les données sont-elles sécurisées ?", a: "Toutes les données sont chiffrées, hébergées en Europe, et conformes RGPD. La gestion des rôles est granulaire." },
  { q: "Peut-on essayer LearnUp gratuitement ?", a: "Oui, nous proposons une démonstration personnalisée et un essai pilote pour les écoles intéressées." },
];

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Nouvelle génération · Édition 2026
              </span>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                L'éducation, <br />
                <span className="text-gradient">réinventée par l'IA.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                LearnUp réunit deux solutions premium pour digitaliser totalement
                l'enseignement : <strong className="text-foreground">coLearn</strong> pour des cours
                interactifs et <strong className="text-foreground">School Manager</strong> pour
                piloter votre école.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-brand text-white shadow-glow hover:opacity-90" asChild>
                  <Link to="/#pricing">
                    Commencer maintenant <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="glass" asChild>
                  <Link to="/#contact">Demander une démo</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-4 gap-4 max-w-lg">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-gradient">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-brand opacity-20 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-3xl shadow-glow">
                <img
                  src={heroImg}
                  alt="Plateforme éducative IA"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Nos solutions"
            title={<>Deux plateformes, <span className="text-gradient">un écosystème</span></>}
            description="LearnUp combine enseignement collaboratif et gestion scolaire dans une suite unifiée."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                icon: BookOpen,
                tag: "Pour professeurs & élèves",
                title: "coLearn",
                desc: "La nouvelle génération de l'enseignement en ligne : cours live, tableau blanc, IA et gamification.",
                href: "/colearn",
              },
              {
                icon: School,
                tag: "Pour écoles privées",
                title: "School Manager",
                desc: "La gestion intelligente et centralisée de votre établissement, du primaire au lycée.",
                href: "/school-manager",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:shadow-glow"
              >
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand opacity-10 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="relative">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.tag}</span>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="bg-brand flex h-12 w-12 items-center justify-center rounded-2xl shadow-glow">
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">{s.desc}</p>
                  <Button variant="ghost" className="mt-6 px-0 hover:bg-transparent" asChild>
                    <Link to={s.href}>
                      Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Pourquoi LearnUp"
            title={<>Conçu pour <span className="text-gradient">performer</span></>}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <FeatureCard key={h.title} icon={h.icon} title={h.title} description={h.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand opacity-20 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-3xl shadow-glow">
              <img src={dashboardImg} alt="Dashboard LearnUp" width={1920} height={1080} loading="lazy" className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Tarifs"
            title={<>Une formule pour <span className="text-gradient">chaque besoin</span></>}
            description="Des prix transparents pour professeurs, élèves et établissements."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "coLearn — Professeurs",
                price: "250",
                unit: "DT/an",
                features: ["Sessions illimitées", "Tableau blanc collaboratif", "Export PDF & enregistrement", "Suivi des élèves"],
              },
              {
                name: "coLearn — Élèves",
                price: "100",
                unit: "DT/an",
                features: ["Accès aux cours", "Quiz & gamification", "Documents partagés", "Classement temps réel"],
                popular: true,
              },
              {
                name: "School Manager",
                price: "35",
                unit: "DT/an / élève",
                features: ["Gestion complète", "App mobile parents", "Multi-campus", "Support dédié"],
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass relative rounded-3xl p-8 ${p.popular ? "border-primary/60 shadow-glow" : ""}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                    Le plus populaire
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
                <Button className={`mt-8 w-full ${p.popular ? "bg-brand text-white shadow-glow" : ""}`} variant={p.popular ? "default" : "outline"}>
                  Commencer
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Module IA disponible en complément à <span className="text-foreground font-semibold">20 DT/mois</span>.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Témoignages"
            title={<>Ils parlent de <span className="text-gradient">LearnUp</span></>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-6">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Questions <span className="text-gradient">fréquentes</span></>}
          />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass mb-3 rounded-xl border-0 px-6">
                <AccordionTrigger className="text-left hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12 shadow-glow">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <SectionHeader
                  title={<>Parlons de votre <span className="text-gradient">école</span></>}
                  description="Notre équipe vous répond sous 24h."
                />
                <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@learnup.tn</div>
                  <div className="flex items-center gap-3"><MessageSquare className="h-4 w-4 text-primary" /> Réponse en moins de 24h</div>
                  <div className="flex items-center gap-3"><Globe className="h-4 w-4 text-primary" /> FR · AR · EN</div>
                  <div className="flex items-center gap-3"><Zap className="h-4 w-4 text-primary" /> Démo personnalisée gratuite</div>
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Votre nom" className="glass border-white/10" />
                <Input type="email" placeholder="Email professionnel" className="glass border-white/10" />
                <Input placeholder="Nom de l'établissement" className="glass border-white/10" />
                <Textarea placeholder="Votre message" rows={4} className="glass border-white/10" />
                <Button type="submit" className="w-full bg-brand text-white shadow-glow">
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// keep for icon import
void ChevronDown;
