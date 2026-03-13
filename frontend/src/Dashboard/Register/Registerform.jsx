const Registerform = () =>{
    return (
         <form className="space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ml-1">
                Nombres
              </label>
              <input
                type="text"
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#D4AF37] focus:bg-white text-zinc-900 px-4 py-3 rounded-xl outline-none transition-all text-sm"
                placeholder="Juan Carlos"
              />
            </div>

            <div>
              <label className="block text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ml-1">
                Apellidos
              </label>
              <input
                type="text"
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#D4AF37] focus:bg-white text-zinc-900 px-4 py-3 rounded-xl outline-none transition-all text-sm"
                placeholder="Pérez Gómez"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ml-1">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#D4AF37] focus:bg-white text-zinc-900 px-4 py-3 rounded-xl outline-none transition-all text-sm"
              placeholder="usuario@mh-intimates.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ml-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#D4AF37] focus:bg-white text-zinc-900 px-4 py-3 rounded-xl outline-none transition-all text-sm"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ml-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#D4AF37] focus:bg-white text-zinc-900 px-4 py-3 rounded-xl outline-none transition-all text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input id="terms" type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300 text-[#B8860B] focus:ring-[#D4AF37]" />
            <label htmlFor="terms" className="text-zinc-500 text-xs leading-5">
              Acepto los términos y condiciones del servicio y la política de privacidad.
            </label>
          </div>

          <button className="w-full py-3.5 sm:py-4 bg-zinc-900 hover:bg-[#B8860B] text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all shadow-lg active:scale-[0.98]">
            Crear cuenta
          </button>
        </form>
    )
}

export default Registerform;