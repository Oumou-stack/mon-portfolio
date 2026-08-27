import katalonLogo from '../assets/images/katalonLogo.png'

export const techSkills = [
  {
    category: "Langages",
    items: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Markdown", icon: "devicon-markdown-original text-gray-600" },
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Spring", icon: "devicon-spring-plain colored" },
    ]
  },
  {
    category: "Bases de données",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    ]
  },
  {
    category: "Outils",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original text-gray-800" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Bash", icon: "devicon-bash-plain text-gray-700" },
      { name: "Jekyll", icon: "devicon-jekyll-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Katalon", icon: null, img: katalonLogo },
    ]
  }
]

export const methods = [
  "CRUD",
  "API REST",
  "MVC",
  "Responsive Design",
  "Agile / Scrum",
  "Git Flow",
  "CI/CD",
]

export const softSkills = [
  { label: "Bienveillance & écoute", desc: "Santé, social et petite enfance.", color: "text-pink" },
  { label: "Adaptabilité", desc: "Apprentissage rapide en milieux variés.", color: "text-veranda-blue" },
  { label: "Rigueur & détail", desc: "Pâtisserie et développement web.", color: "text-[#A8B5A0]" },
  { label: "Curiosité", desc: "Exploration constante de compétences.", color: "text-[#87CEEB]" },
  { label: "Créativité", desc: "Code et conception visuelle.", color: "text-melon" },
  { label: "Esprit d'équipe", desc: "Travail collaboratif et entraide.", color: "text-veranda-blue" },
]

export const languages = [
  { name: "Français", level: "Maternel" },
  { name: "Soninké", level: "Maternel" },
  { name: "Anglais", level: "Niveau B2" },
  { name: "Coréen", level: "A1" },
  { name: "Langue des signes FR", level: "Débutante" },
]

export const formations = [
  { title: "Web@cadémie by Epitech", sub: "2025 - en cours" },
  { title: "La Toile - Conception & Dév Web", sub: "emlyon business school | 2024 - 2025", note: "Certification obtenue, Major de promo en conception web." },
  { title: "CAP Pâtisserie", sub: "CEPROC PARIS | 2022 - 2023", note: "Obtention du CAP." },
  { title: "BAC Pro ASSP", sub: "Lycée | 2019 - 2021", note: "Obtention du BAC." },
]

export const experiences = [
  {
    title: "Stage Testeur Q&A",
    sub: "Europ Assistance | Mars 2025 - Avril 2025",
    items: ["Automatisation de test sur Katalon Studio", "Mise en place de documentation technique", "Maîtrise du processus Git (Commit, Push)"]
  },
  {
    title: "Apprentie Pâtissière",
    sub: "One More Cakes | 2022 - 2023",
    items: ["Confection des commandes.", "Service en boutique et gestion de la caisse.", "Organisation d'événements", "Gestion de la relation client et travail en équipe."]
  },
  {
    title: "Accompagnante éducatif petite enfance",
    sub: "JBM Médical | 2021 - 2025",
    items: ["Accompagnement de soins et de confort des enfants.", "Collaboration avec les familles et les équipes éducatives.", "Développement de compétences en communication, patience et empathie."]
  },
]