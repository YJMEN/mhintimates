import Cart from './Cart'

const Navbar = () => {
    return (
       <nav className="navbar bg-white/90 backdrop-blur-md border-b border-zinc-200 px-4 py-2 sticky top-0 z-50 shadow-sm">
    <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Sección Izquierda */}
        <div className="flex-none">
            <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#FFDF00] rounded-full blur opacity-15 group-hover:opacity-40 transition duration-1000"></div>
                <img
                    className="relative h-14 w-14 rounded-full object-cover border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all shadow-md"
                    src="/src/assets/logo.jpeg"
                    alt="Logo"
                />
            </div>
        </div>

        {/* Menú y Acciones - Sección Derecha */}
        <div className="flex items-center gap-2 md:gap-6">
            {/* Navegación (Se oculta en móviles para no romper el diseño) */}
            <ul className="hidden md:flex items-center space-x-1 font-bold tracking-widest text-[10px] uppercase">
                <li>
                    <a href="#" className="relative px-3 py-2 text-[#B8860B] group">
                        Inicio
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37]"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative px-3 py-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group">
                        Nosotros
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative px-3 py-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group">
                        Contacto
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>

            {/* Divisor sutil */}
            <div className="hidden md:block h-8 w-[1px] bg-zinc-200"></div>

            {/* Carrito */}
            <div className="flex-none scale-90 md:scale-100">
                <Cart />
            </div>
        </div>
    </div>
</nav>
    )
}
export default Navbar
