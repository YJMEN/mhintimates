const Header = () => {
    return (
        <div className="text-center mb-8 sm:mb-10">
                    <div className="relative inline-block mb-4">
                        <div className="absolute -inset-1 bg-[#D4AF37] rounded-full opacity-10 blur-sm"></div>
                        <img
                            className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-[#D4AF37]/30 mx-auto shadow-sm"
                            src="/src/assets/logo.jpeg"
                            alt="Logo MH"
                        />
                    </div>
                    <h2 className="text-[#B8860B] font-bold tracking-[0.35em] xs:tracking-[0.4em] text-[9px] xs:text-[10px] uppercase mb-1">
                        Crear cuenta
                    </h2>
                    <p className="text-zinc-900 text-xl sm:text-2xl font-light italic font-serif tracking-tight">
                        MH Management
                    </p>
                </div>
    );
};

export default Header;

    