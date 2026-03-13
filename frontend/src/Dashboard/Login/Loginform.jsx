const Loginform = () =>{
    return (
         <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center items-center p-6">
      
      {/* Tarjeta de Login */}
      <div className="w-full max-w-[400px] bg-white border border-zinc-200 rounded-2xl shadow-xl shadow-zinc-200/50 p-10 relative overflow-hidden">
        
        {/* Detalle decorativo dorado superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFDF00] to-[#D4AF37]"></div>

        {/* Logo y Encabezado */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 bg-[#D4AF37] rounded-full opacity-10 blur-sm"></div>
            <img
              className="relative h-20 w-20 rounded-full object-cover border border-[#D4AF37]/30 mx-auto shadow-sm"
              src="/src/assets/logo.jpeg"
              alt="Logo MH"
            />
          </div>
          <h2 className="text-[#B8860B] font-bold tracking-[0.4em] text-[10px] uppercase mb-1">
            Acceso Corporativo
          </h2>
          <p className="text-zinc-900 text-2xl font-light italic font-serif tracking-tight">
            MH Management
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-6">
          <div>
            <label className="block text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ml-1">
              Usuario
            </label>
            <input 
              type="text" 
              className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#D4AF37] focus:bg-white text-zinc-900 px-4 py-3 rounded-xl outline-none transition-all text-sm"
              placeholder="admin@mh-intimates.com"
            />
          </div>

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

          <button className="w-full py-4 bg-zinc-900 hover:bg-[#B8860B] text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all shadow-lg active:scale-[0.98]">
            Ingresar al Panel
          </button>
          <a href="/register" className="mt-3 block w-full py-4 border border-zinc-200 text-zinc-700 hover:border-[#D4AF37] hover:text-[#B8860B] bg-white rounded-xl text-[10px] uppercase font-bold tracking-[0.3em] text-center transition-all shadow-sm">
            Crear cuenta
          </a>
        </form>

        {/* Footer del Login */}
        <div className="mt-10 pt-6 border-t border-zinc-100 text-center">
            <a href="/" className="text-zinc-400 hover:text-[#B8860B] text-[9px] uppercase tracking-[0.2em] transition-colors font-bold">
                ← Volver a la tienda
            </a>
        </div>
      </div>

      {/* Marca de agua sutil fuera de la tarjeta */}
      <p className="mt-8 text-[10px] text-zinc-300 uppercase tracking-[0.5em] font-light">
        MH Intimates Premium © 2024
      </p>
    </div>
    );
};

export default Loginform;
