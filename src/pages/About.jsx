import { Link } from 'react-router-dom'
import aboutHero from '../assets/images/aboutHero.png'
import heroBg from '../assets/images/heroBg.jpg'
import TechSkills from '../components/TechSkills'
import SoftSkills from '../components/SoftSkills'
import Timeline from '../components/Timeline'

export default function About() {
  return (
    <main>

      {/* Hero */}
      <section
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-6 py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}>
        <img src={aboutHero} alt="Oumou parcours" className="hidden md:block w-1/3 max-w-sm" />
        <div className="w-full max-w-xl space-y-4 rounded-3xl p-6 md:p-8 bg-white/60 backdrop-blur-sm border-t-4 border-pink">
          <h1 className="font-chewy text-3xl md:text-5xl text-veranda-blue italic">À propos de moi</h1>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
            <p>Après un premier parcours dans les domaines de la <strong className="text-pink">santé et du social</strong>, j'ai développé un fort sens des responsabilités, de l'adaptation et du travail en équipe.</p>
            <p>Animée par la créativité, je me suis orientée vers la <strong className="text-pink">pâtisserie</strong> — un domaine qui m'a appris la rigueur et l'importance du détail.</p>
            <p>Actuellement en <strong className="text-pink">reconversion professionnelle</strong>, je me forme au <strong className="text-veranda-blue underline decoration-veranda-blue/30">développement web full-stack</strong> à la Web@cadémie by Epitech.</p>
            <p>Je suis à la recherche d'une <strong className="text-veranda-blue">alternance</strong>, auprès de toute structure prête à m'embarquer dans l'aventure.</p>
          </div>
        </div>
      </section>

      {/* Les 3 composants s'affichent ici, dans l'ordre */}
      <TechSkills />
      <SoftSkills />
      <Timeline />

      {/* CTA */}
      <section
        className="w-full py-20 px-6 flex justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-xl w-full rounded-3xl p-8 bg-white/60 backdrop-blur-sm border-t-4 border-pink text-center">
          <h2 className="font-chewy text-3xl text-pink">En quelques mots</h2>
          <p className="text-base text-gray-700 py-4 leading-relaxed italic">
            Motivée, curieuse et en constante évolution, je suis à la recherche d'une <strong>alternance en développement web</strong> afin de consolider mes compétences.
          </p>
          <Link to="/projects" className="inline-block bg-melon hover:bg-pink text-white font-semibold text-xl px-12 py-4 rounded-2xl transition-all shadow-lg hover:scale-105">
            Voir mes projets
          </Link>
        </div>
      </section>

    </main>
  )
}