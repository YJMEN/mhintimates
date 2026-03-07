const SalesCardAdmin = () => {
    return (
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Venta Hoy - Estilo Cristalino */}
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#D4AF37]/10 transition-colors"></div>
                
                <p className="text-[#B8860B] text-[10px] font-extrabold uppercase tracking-widest mb-2">
                    Ventas del día
                </p>
                <div className="flex items-baseline gap-1">
                    <span className="text-zinc-400 text-xl font-light">$</span>
                    <span className="text-4xl font-black tracking-tighter text-zinc-900">450.000</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-green-600 text-[10px] font-bold">
                    <span className="bg-green-100 px-2 py-0.5 rounded-full">↑ 12%</span>
                    <span className="text-zinc-400">vs ayer</span>
                </div>
            </div>

            {/* Pedidos - Minimalista */}
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <p className="text-zinc-400 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                    Órdenes Pendientes
                </p>
                <div className="text-4xl font-black tracking-tighter text-zinc-900">
                    12 <span className="text-sm font-medium text-zinc-400 tracking-normal italic">envíos</span>
                </div>
                <div className="mt-4 text-[10px] text-zinc-400 font-medium uppercase tracking-tighter">
                    8 en preparación • 4 en ruta
                </div>
            </div>

            {/* Stock - Alerta Sofisticada */}
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:border-red-200 transition-all">
                <p className="text-red-400 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                    Atención Stock
                </p>
                <div className="text-4xl font-black tracking-tighter text-red-600">
                    03 <span className="text-sm font-medium text-zinc-400 tracking-normal italic">agotados</span>
                </div>
                <div className="mt-4">
                    <button className="text-[10px] font-bold text-zinc-900 underline decoration-[#D4AF37] underline-offset-4 hover:text-[#B8860B]">
                        Ver inventario crítico
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SalesCardAdmin
