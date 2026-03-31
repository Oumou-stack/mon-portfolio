import { formations, experiences } from '../data/skills'

function TimelineCard({ title, sub, note, items }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border-r-4 border-veranda-blue">
      <h3 className="font-bold text-veranda-blue text-base">{title}</h3>
      <p className="text-sm italic text-gray-500 mt-1">{sub}</p>
      {note && <p className="text-xs text-gray-400 mt-2 italic">{note}</p>}
      {items && (
        <ul className="text-xs mt-3 space-y-1 list-disc list-inside text-gray-600">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  )
}

export default function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h2 className="font-chewy text-3xl md:text-5xl text-veranda-blue">Formations</h2>
        {formations.map(f => <TimelineCard key={f.title} {...f} />)}
      </div>
      <div className="space-y-6">
        <h2 className="font-chewy text-3xl md:text-5xl text-veranda-blue">Expériences</h2>
        {experiences.map(e => <TimelineCard key={e.title} {...e} />)}
      </div>
    </section>
  )
}