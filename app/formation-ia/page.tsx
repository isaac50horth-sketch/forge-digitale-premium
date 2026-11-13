import Link from 'next/link'

export default function FormationIA() {
  const modules = [
    { title: "Fondations de l’IA Générative", content: "Comprendre les modèles, les limites et les opportunités réelles en 2026." },
    { title: "Prompt Engineering Avancé", content: "Techniques de chaînage, few-shot, chain-of-thought et frameworks professionnels." },
    { title: "Agents Autonomes & Workflows", content: "Construire des agents qui exécutent des tâches complexes sans supervision." },
    { title: "Création de Produits Digitaux", content: "De l’idée au produit vendable : formations, templates, outils." },
    { title: "Contenu & Distribution", content: "Produire et diffuser du contenu à grande échelle avec l’IA." },
    { title: "Monétisation & Systèmes de Revenus", content: "Modèles de pricing, offres irrésistibles, tunnels et abonnements." },
    { title: "Automatisation & Scaling", content: "Mettre le business en pilote automatique." },
    { title: "Études de Cas & Implémentation", content: "Plans d’action concrets et exemples réels." },
  ]

  return (
    <div className="min-h-screen">
      <nav className="border-b border-white/10 sticky top-0 bg-dark/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Forge<span className="text-amber-400">Digitale</span>
          </Link>
          <Link href="/#formations" className="text-sm hover:text-amber-400">← Retour</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-amber-400 text-sm font-medium mb-4">FORMATION COMPLÈTE</div>
        <h1 className="text-5xl font-bold tracking-tight">Maîtrise Totale de l’IA</h1>
        <p className="mt-6 text-xl text-white/70">
          Le programme le plus complet pour transformer l’intelligence artificielle en avantage concurrentiel concret et en source de revenus récurrents.
        </p>

        <div className="mt-12 space-y-6">
          {modules.map((m, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-white/60">{m.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-amber-500/30 rounded-3xl p-10 text-center bg-amber-500/5">
          <div className="text-4xl font-bold">197€</div>
          <div className="mt-2 text-white/60">Accès à vie • Mises à jour incluses • Garantie 14 jours</div>
          <a href="https://buy.stripe.com/test_placeholder" className="mt-6 inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-10 py-4 rounded-full text-lg transition">
            Accéder à la formation
          </a>
        </div>
      </div>
    </div>
  )
}