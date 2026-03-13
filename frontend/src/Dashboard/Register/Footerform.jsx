const Footerform = () => {
    return (
         <div className="mt-8 sm:mt-10 pt-6 border-t border-zinc-100 text-center space-y-3">
                    <a
                        href="/"
                        className="block text-zinc-400 hover:text-[#B8860B] text-[9px] uppercase tracking-[0.2em] transition-colors font-bold"
                    >
                        ← Volver a la tienda
                    </a>
                    <a
                        href="/login"
                        className="block text-zinc-400 hover:text-[#B8860B] text-[9px] uppercase tracking-[0.2em] transition-colors font-bold"
                    >
                        ¿Ya tienes cuenta? Inicia sesión
                    </a>
                </div>
    );
};

export default Footerform;