import { Link } from "@tanstack/react-router";
import { GraduationCap, Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-lg font-bold">
                Learn<span className="text-gradient">Up</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              La plateforme tout-en-un pour digitaliser l'éducation moderne.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-primary/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Produits</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/colearn" className="hover:text-foreground">coLearn</Link></li>
              <li><Link to="/school-manager" className="hover:text-foreground">School Manager</Link></li>
              <li><Link to="/#pricing" className="hover:text-foreground">Tarifs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Entreprise</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">À propos</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@learnup.tn</li>
              <li>Tunis, Tunisie</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 LearnUp. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Confidentialité</a>
            <a href="#" className="hover:text-foreground">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
