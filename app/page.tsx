import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-white/10 sticky top-0 bg-dark/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Forge<span className="text-amber-400">Digitale</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#formations" className="hover:text-amber-400 transition">Formations</a>
            <a href="#club" className="hover:text-amber-400 transition">Club Premium</a>
            <a href="#resultats" className="hover:text-amber-400 transition">Résultats</a>
          </div>
          <a href="#formations" className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2.5 rounded-full text-sm transition">
            Accéder aux formations
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Formations de niveau expert • Mise à jour 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Maîtrisez l’IA.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Générez des revenus en boucle.</span>
          </h1>
          <p className="mt-8 text-xl text-white/70 max-w-2xl leading-relaxed">
            Formations professionnelles conçues pour les entrepreneurs et freelances qui veulent utiliser l’intelligence artificielle pour construire des business digitaux rentables, automatisés et scalables.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#formations" className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-amber-500/20">
              Découvrir les formations
            </a>
            <a href="#club" className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg transition">
              Rejoindre le Club Premium
          </a>
          </div>
          <div className="mt-16 flex items-center gap-8 text-sm text-white/50">
            <div><span className="text-white font-semibold text-2xl">12+</span><br />modules expert</div>
            <div><span className="text-white font-semibold text-2xl">97%</span><br />satisfaction</div>
            <div><span className="text-white font-semibold text-2xl">∞</span><br />accès à vie</div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section id="formations" className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Les Formations</h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">Des programmes complets, structurés et actionnables. Pas de théorie inutile — uniquement ce qui génère des résultats.</p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:border-amber-500/30 transition">
              <div className="text-amber-400 text-sm font-medium mb-3">FORMATION PHARE</div>
              <h3 className="text-3xl font-bold">Maîtrise Totale de l’IA</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Le système complet pour passer de débutant à expert opérationnel. Prompt engineering avancé, agents autonomes, création de produits digitaux, automatisation et monétisation.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>✓ 8 modules progressifs + bonus</li>
                <li>✓ Templates et prompts prêts à l’emploi</li>
                <li>✓ Accès à vie + mises à jour</li>
                <li>✓ Garantie satisfaction 14 jours</li>
              </ul>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold">197€</div>
                  <div className="text-white/50 text-sm">paiement unique</div>
                </div>
                <a href="https://buy.stripe.com/test_placeholder" className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-full transition">
                  Acheter maintenant
                </a>
              </div>
            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
              <div className="text-amber-400 text-sm font-medium mb-3">PROCHAINEMENT</div>
              <h3 className="text-3xl font-bold">Système de Contenu Viral</h3>
              <p className="mt-4 text-white/70">Utiliser l’IA pour créer et distribuer du contenu qui attire des clients en continu.</p>
              <div className="mt-8 text-white/40">Disponible bientôt pour les membres du Club</div>
            </div>
          </div>
        </div>
      </section>

      {/* Club */}
      <section id="club" className="py-24 border-t border-white/10 bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Club Forge Premium</h2>
          <p className="mt-4 text-white/70 text-lg">
            Accès illimité à toutes les formations actuelles et futures, mises à jour prioritaires, et nouveaux systèmes chaque mois.
          </p>
          <div className="mt-10 inline-block border border-amber-500/30 rounded-3xl p-10 bg-white/[0.03]">
            <div className="text-5xl font-bold">29€<span className="text-2xl text-white/60">/mois</span></div>
            <div className="mt-2 text-white/50">Annulable à tout moment</div>
            <ul className="mt-8 text-left space-y-3 max-w-sm mx-auto">
              <li>✓ Toutes les formations débloquées</li>
              <li>✓ Nouveaux modules chaque mois</li>
              <li>✓ Templates et ressources exclusives</li>
              <li>✓ Accès prioritaire aux futures formations</li>
            </ul>
            <a href="https://buy.stripe.com/test_placeholder_sub" className="mt-8 inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-10 py-4 rounded-full text-lg transition">
              Rejoindre le Club
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-white/40 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          Forge Digitale • Formations professionnelles sur l’IA et les business digitaux
          <div className="mt-2">Paiements sécurisés par Stripe</div>
        </div>
      </footer>
    </div>
  )
}