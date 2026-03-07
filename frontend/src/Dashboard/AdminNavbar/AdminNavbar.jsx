const AdminNavbar = () => {
    return (
      <nav className="bg-white/80 backdrop-blur-md border-b border-zinc-200 px-6 py-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
        
        {/* Sección Izquierda: Marca */}
        <div className="flex items-center gap-4">
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#D4AF37] to-[#FFDF00] rounded-full opacity-20 blur-sm"></div>
                <img
                    className="relative h-12 w-12 rounded-xl object-cover border border-zinc-100 shadow-sm"
                    src="/src/assets/logo.jpeg"
                    alt="Logo MH"
                />
            </div>
            <div>
                <h1 className="text-[#B8860B] font-bold tracking-[0.3em] text-[10px] uppercase">
                    Management
                </h1>
                <p className="text-zinc-900 font-extrabold text-xl tracking-tight">
                    MH <span className="text-zinc-400 font-light">Intimates</span>
                </p>
            </div>
        </div>

        {/* Sección Central: Navegación */}
        <div className="hidden md:flex items-center bg-zinc-100/50 p-1 rounded-xl border border-zinc-200">
            <ul className="flex items-center">
                <li>
                    <button className="px-6 py-2 bg-white text-zinc-900 shadow-sm rounded-lg text-xs font-bold uppercase tracking-wider transition-all">
                        Dashboard
                    </button>
                </li>
                <li>
                    <button className="px-6 py-2 text-zinc-500 hover:text-zinc-900 text-xs font-bold uppercase tracking-wider transition-all">
                        Productos
                    </button>
                </li>
                <li>
                    <button className="px-6 py-2 text-zinc-500 hover:text-zinc-900 text-xs font-bold uppercase tracking-wider transition-all">
                        Pedidos
                    </button>
                </li>
            </ul>
        </div>

        {/* Sección Derecha: Usuario y Salir */}
        <div className="flex items-center gap-4">
            <div className="hidden lg:block text-right">
                <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-tighter">Admin Principal</p>
                <p className="text-xs font-bold text-zinc-800">Camilo Admin</p>
            </div>
            
            <div className="h-8 w-[1px] bg-zinc-200"></div>

            <button className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 transition-all duration-300 rounded-lg text-xs font-bold uppercase tracking-widest">
                <span>Salir</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    </div>
</nav>
    )
}
export default AdminNavbar
