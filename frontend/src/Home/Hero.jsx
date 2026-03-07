const Hero = () => {
    return(
         <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 z-0">
            {/* Aquí iría tu foto principal de lencería */}
            <img 
                src="https://images.unsplash.com/photo-1551392505-f4056bb3abd1?q=80&w=2000" 
                className="w-full h-full object-cover opacity-80"
                alt="Colección Premium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6">
            <h2 className="text-[#B8860B] font-medium tracking-[0.5em] text-xs uppercase mb-4 animate-pulse">
                Nueva Colección
            </h2>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-zinc-900 mb-6">
                Elegancia <br /> 
                <span className="font-serif italic font-normal text-[#D4AF37]">en cada detalle</span>
            </h1>
            <button className="px-10 py-4 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B8860B] transition-all rounded-sm shadow-xl">
                Explorar Catálogo
            </button>
        </div>
    </section>
    )
}
export default Hero