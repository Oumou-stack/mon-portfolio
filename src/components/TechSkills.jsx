import { techSkills } from '../data/skills'

function SkillItem({ name, icon, img }) {
  return (
    <div className="flex flex-col items-center">
      {img
        ? <img src={img} className="w-9 h-9 object-contain" alt={name} />
        : <i className={`${icon} text-4xl`}></i>
      }
      <p className="text-[10px] mt-2 font-bold uppercase">{name}</p>
    </div>
  )
}

export default function TechSkills() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="font-chewy text-4xl md:text-5xl text-pink text-center mb-12">
        Compétences Techniques
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techSkills.map(group => (
          <div key={group.category} className="bg-white p-6 rounded-3xl border-t-4 border-veranda-blue hover:shadow-lg transition-shadow">
            <h3 className="font-chewy text-2xl text-pink mb-6 text-center">{group.category}</h3>
            <div className="grid grid-cols-3 gap-y-8">
              {group.items.map(skill => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}