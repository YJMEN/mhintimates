const CardSections = () => {
    return (
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16">
            <div className="text-center space-y-2">
                <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                    Pago Seguro
                </p>
                <p className="text-zinc-500 text-[10px] leading-relaxed">
                    Pagas en efectivo al recibir tu pedido en casa.
                </p>
            </div>
            <div className="text-center space-y-2 border-x border-zinc-100 px-4">
                <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                    Privacidad
                </p>
                <p className="text-zinc-500 text-[10px] leading-relaxed">
                    Empaques totalmente discretos para tu tranquilidad.
                </p>
            </div>
            <div className="text-center space-y-2">
                <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                    Calidad Premium
                </p>
                <p className="text-zinc-500 text-[10px] leading-relaxed">
                    Texturas suaves y acabados de lujo garantizados.
                </p>
            </div>
        </div>
    )
}
export default CardSections