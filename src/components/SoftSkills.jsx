import { softSkills, languages } from '../data/skills'
import heroBg from '../assets/images/heroBg.jpg'

const svgPaths = {
  "Bienveillance & écoute": <><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"/><path d="m2 15 6 6"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"/></>,
  "Adaptabilité": <><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></>,
  "Rigueur & détail": <><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></>,
  "Curiosité": <><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></>,
  "Créativité": <><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></>,
  "Esprit d'équipe": <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></>,
}

function SoftSkillCard({ label, desc, color }) {
  return (
    <div className="group bg-white p-6 rounded-2xl text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110 ${color}`}>
        {svgPaths[label]}
      </svg>
      <strong className={`font-chewy text-lg block leading-tight ${color}`}>{label}</strong>
      <p className="font-poppins text-sm text-gray-500">{desc}</p>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <>
      {/* Soft skills */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="font-chewy text-4xl md:text-5xl text-veranda-blue text-center mb-12">
          Soft Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {softSkills.map(skill => (
            <SoftSkillCard key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      {/* Langues */}
      <section className="py-16 px-6 text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <h2 className="font-chewy text-4xl md:text-5xl text-cream text-border text-center mb-10">Langues</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map(lang => (
            <div key={lang.name} className="bg-white px-6 py-4 rounded-full border-2 border-melon shadow-sm">
              <p className="font-bold text-sm">{lang.name}</p>
              <p className="text-[10px] text-gray-400">{lang.level}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}