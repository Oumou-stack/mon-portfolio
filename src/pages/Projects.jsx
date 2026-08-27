import { Link } from "react-router-dom"
import guardianImg from '../assets/images/projects/guardian.gif'
import klivioImg from '../assets/images/projects/klivio.gif'
import connectinImg from '../assets/images/projects/connectin.gif'

export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="font-chewy text-5xl text-veranda-blue text-center mb-4">Mes projets</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 text-center mb-12">
            Découvrez les différents projets sur lesquels j'ai travaillé, que ce soit en projets de formation ou en projets personnels.
        </p>
        {/*grille de projets*/}
        <div className="mt-12 grid gap-8 md:grid-rows-3">
            {/* Projet 1 */}
            <div className="projects-card flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-[20px] shadow-lg border-t-[5px] border-pink transition-transform hover:-translate-y-2 duration-300">
                <img src={guardianImg} loading="lazy" alt="Guardian" className="w-full md:w-[500px] rounded-2xl shadow-sm" />
                <div className="p-6">
                    <h2 className="font-chewy text-3xl text-veranda-blue mb-4 text-shadow-none">Application Prévention Catastrophes Naturelles</h2>
                    <p className="mb-2"><strong>Contexte :</strong> Projet de groupe d'un mois</p>
                    <p className="mb-4 text-gray-600 text-sm italic"><strong>Objectif :</strong> Développer une application informative pour sensibiliser aux risques naturels et aux gestes de prévention</p>
                    <p className="mb-4"><strong>Rôle :</strong> Développeuse front-end et contribution à la conception UX/UI</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">HTML</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">CSS</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">JavaScript</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Figma</span>
                    </div>

                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Travail d'équipe et gestion de projet
                        </li>
                        
                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Développement front-end avec HTML, CSS et JavaScript
                        </li>

                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Conception UX/UI (wireframes et maquettes Figma)
                        </li>

                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Développement collaboratif avec Git
                        </li>
                    </ul>
                    {/*Btns*/}
                    <div className="flex gap-4 mt-6">
                        <Link target="_blank" to="https://oumou-stack.github.io/guardian" className="bg-melon hover:bg-pink text-white text-lg font-semibold px-6 py-2 rounded-xl transition shadow-md text-shadow-btn">Voir le projet</Link>

                        <Link target="_blank" to="https://github.com/Oumou-stack/guardian" className="text-pink font-semibold border-2 border-melon border hover:bg-pink hover:text-white px-6 py-2 rounded-xl transition shadow-md text-shadow-btn">
                            Voir le code
                        </Link>
                    </div>
                </div>
            </div>

            {/* Projet 2 */}
            <div className="projects-card flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-[20px] shadow-lg border-t-[5px] border-pink transition-transform hover:-translate-y-2 duration-300">
                <img src={klivioImg} loading="lazy" alt="Aperçu Klivio" className="w-full md:w-[500px] rounded-2xl shadow-sm" />
                
                <div className="flex-1">
                    <h3 className="font-chewy text-3xl text-veranda-blue mb-4 text-shadow-none">Reproduction de Maquette (WAC)</h3>
                    <p className="mb-2"><strong>Contexte :</strong> Projet académique à la Wild Code School</p>
                    <p className="mb-6 text-gray-600 text-sm italic"><strong>Objectif :</strong> Reproduire une maquette au pixel près, d'abord en HTML/CSS pur, puis en utilisant Tailwind avec un style libre</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">HTML</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">CSS</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Tailwind CSS</span>
                    </div>

                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Intégration fidèle d'une maquette
                        </li>
                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Maîtrise de Tailwind CSS
                        </li>
                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Responsive design
                        </li>
                        <li className="relative pl-6">
                            <span className="absolute left-0">🌸</span>
                            Rigueur et attention au détail
                        </li>
                    </ul>

                    {/*Btns*/}
                    <div className="flex gap-4 mt-6">
                        <Link target="_blank" to="https://oumou-stack.github.io/site-statique" className="bg-melon hover:bg-pink text-white text-lg font-semibold px-6 py-2 rounded-xl transition shadow-md text-shadow-btn">Voir le projet</Link>

                        <Link to="https://github.com/Oumou-stack/site-statique" className="text-pink font-semibold border-2 border-melon border hover:bg-pink hover:text-white px-6 py-2 rounded-xl transition shadow-md text-shadow-btn">
                            Voir le code
                        </Link>
                    </div>
                </div>
            </div>

            {/* Projet 3 */}
            <div className="projects-card flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-[20px] shadow-lg border-t-[5px] border-pink transition-transform hover:-translate-y-2 duration-300">
                <img src={connectinImg} loading="lazy" alt="Aperçu Connect'In" className="w-full md:w-[500px] rounded-2xl shadow-sm" />
                
                <div className="flex-1">
                    <h3 className="font-chewy text-3xl text-veranda-blue mb-4">Connect'In</h3>
                    <p className="mb-2"><strong>Contexte :</strong> Projet de groupe — Web@cadémie by Epitech</p>
                    <p className="mb-6 text-gray-600 text-sm italic"><strong>Objectif :</strong> Concevoir et développer un réseau social interne d'entreprise avec authentification, posts, commentaires et likes</p>
                    <p className="mb-4"><strong>Rôle :</strong> Développement en duo — front-end & intégration API</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Laravel</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">PHP</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">MySQL</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">JavaScript</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Tailwind CSS</span>
                        <span className="bg-pink/10 text-dark border-2 border-pink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">API REST</span>
                    </div>

                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="relative pl-6"><span className="absolute left-0">🌸</span>Architecture MVC avec API RESTful Laravel</li>
                        <li className="relative pl-6"><span className="absolute left-0">🌸</span>Authentification sécurisée par token</li>
                        <li className="relative pl-6"><span className="absolute left-0">🌸</span>Gestion des posts, commentaires et likes en dynamique</li>
                        <li className="relative pl-6"><span className="absolute left-0">🌸</span>Consommation d'API via fetch/Axios</li>
                        <li className="relative pl-6"><span className="absolute left-0">🌸</span>Travail en équipe, Git collaboratif</li>
                    </ul>

                    <div className="flex gap-4 mt-6">
                        <Link target="_blank" to="https://github.com/Oumou-stack/connectin" className="bg-melon hover:bg-pink text-white text-lg font-semibold px-6 py-2 rounded-xl transition shadow-md">
                            Voir le code
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </main>
  )
}