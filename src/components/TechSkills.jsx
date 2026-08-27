import { techSkills, methods } from "../data/skills";

function SkillItem({ name, icon, img }) {
  return (
    <div className="flex flex-col items-center">
      {img ? (
        <img src={img} className="w-9 h-9 object-contain" alt={name} />
      ) : (
        <i className={`${icon} text-4xl`}></i>
      )}
      <p className="text-[10px] mt-2 font-bold uppercase">{name}</p>
    </div>
  );
}

export default function TechSkills() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="font-chewy text-4xl md:text-5xl text-pink text-center mb-12">
        Compétences Techniques
      </h2>

      {/* Cartes des compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {techSkills.map((group) => (
          <div
            key={group.category}
            className="bg-white p-6 rounded-3xl border-t-4 border-veranda-blue hover:shadow-lg transition-shadow"
          >
            <h3 className="font-chewy text-2xl text-pink mb-6 text-center">
              {group.category}
            </h3>

            <div className="grid grid-cols-3 gap-y-8">
              {group.items.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Méthodologies */}
      <div className="mt-14">
        <h3 className="font-chewy text-3xl md:text-4xl text-veranda-blue text-center mb-6">
          Méthodologies
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {methods.map((method) => (
            <span
              key={method}
              className="bg-melon text-white px-5 py-2 rounded-full font-poppins font-semibold shadow-sm hover:scale-105 transition-transform"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}