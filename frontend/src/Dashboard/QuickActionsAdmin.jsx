const QuickActionsAdmin = () => {
    return (
        <div className="relative z-10">
            <h2 className="text-white text-xs font-bold uppercase tracking-[0.4em] mb-8 opacity-60">
                Terminal de Operaciones
            </h2>
            <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg">
                    + Nuevo Producto
                </button>
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all backdrop-blur-md">
                    Generar Reporte
                </button>
                <button className="px-8 py-3 text-zinc-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all">
                    Ajustes del Sistema
                </button>
            </div>
        </div>
    )
}
export default QuickActionsAdmin
