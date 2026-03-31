import { Link } from 'react-router-dom'
import profileImg from '../assets/images/pdpCartoon-removebg.png'
import flowersImg from '../assets/images/flowers.png'
import poteauImg from '../assets/images/poteauFleuris.png'
import heroBg from '../assets/images/heroBg.jpg'

export default function Home() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-cream/60 z-10" />

      {/* Contenu */}
      <div className="relative z-20 flex flex-col md:flex-row items-center gap-8 px-6 py-12 max-w-6xl mx-auto w-full">

        {/* Texte — en premier sur mobile */}
        <div className="flex-1 text-center md:text-left">
          <div className="[text-shadow:1px_1px_2px_#333]">
            <h1 className="font-chewy text-4xl md:text-5xl text-melon mb-4">
              Bonjour, je suis Oumou !
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-white mb-4">
              Apprentie développeuse Full Stack passionnée par le Front-End !
            </h2>
            <p className="text-base md:text-lg text-white leading-relaxed">
              Je crée des interfaces web modernes, colorées et fonctionnelles.
              Spécialisée en front-end, j'aime transformer des idées créatives
              en expériences utilisateur engageantes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Link
              to="/projects"
              className="bg-melon hover:bg-pink text-white font-chewy text-lg px-8 py-3 rounded-full shadow-md transition-all hover:scale-105"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-pink font-poppins font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:scale-105"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Image profil */}
        <div className="relative flex-shrink-0">
          <img
            src={profileImg}
            alt="Photo de profil"
            className="hidden md:block w-64 md:w-96 object-contain relative z-10"
          />
        </div>

      </div>

      {/* Déco — cachée sur mobile pour ne pas surcharger */}
      <img src={flowersImg} alt="" className="hidden md:block absolute bottom-0 right-24 z-30 pointer-events-none w-2/5" />
      <img src={poteauImg} alt="" className="hidden md:block absolute top-10 right-0 w-56 h-full z-20 pointer-events-none object-cover" />
    </section>
  )
}