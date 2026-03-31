import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("xkopjydk") 

  return (
    <main className="min-h-screen bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="font-chewy text-4xl md:text-6xl text-pink mb-4">On travaille ensemble ?</h1>
          <p className="font-poppins text-gray-600 text-lg">N'hésitez pas à me contacter pour discuter d'un projet !</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Infos & réseaux */}
          <div className="flex flex-col gap-6">
            <h2 className="font-chewy text-3xl text-veranda-blue">Mes informations</h2>
            <p className="font-poppins text-gray-600 leading-relaxed">
              Disponible pour une alternance en développement web. N'hésitez pas à me contacter via les réseaux ou directement par le formulaire !
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Oumou-stack" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-dark text-cream font-poppins font-semibold px-5 py-3 rounded-full hover:bg-pink transition-colors">
                <i className="devicon-github-original text-xl"></i> GitHub
              </a>
              <a href="https://linkedin.com/in/oumou-bathily" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-veranda-blue text-cream font-poppins font-semibold px-5 py-3 rounded-full hover:bg-pink transition-colors">
                <i className="devicon-linkedin-plain text-xl"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-melon">

            {state.succeeded ? (
              // Message de succès après envoi
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <span className="text-5xl">🌸</span>
                <h3 className="font-chewy text-2xl text-veranda-blue">Message envoyé !</h3>
                <p className="font-poppins text-gray-500">Merci, je vous répondrai dès que possible.</p>
              </div>
            ) : (
              // Formulaire
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 font-poppins focus:outline-none focus:ring-2 focus:ring-pink"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 font-poppins focus:outline-none focus:ring-2 focus:ring-pink"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-pink text-sm" />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 font-poppins focus:outline-none focus:ring-2 focus:ring-pink resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-pink text-sm" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-pink hover:bg-dark text-cream font-chewy text-xl py-4 rounded-xl transition-colors shadow-md hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Envoi en cours...' : 'Envoyer ✿'}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </main>
  )
}