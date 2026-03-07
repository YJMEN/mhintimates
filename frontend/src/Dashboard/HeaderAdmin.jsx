const HeaderAdmin =() => {
    return (
         <div className="flex justify-between items-end border-b border-zinc-200 pb-6">
            <div>
                <h1 className="text-4xl font-light tracking-tight text-zinc-900">
                    Panel de <span className="font-bold text-[#B8860B]">Administración</span>
                </h1>
                <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">
                    Sistema central de gestión • MH Intimates Premium
                </p>
            </div>
            <div className="text-right hidden sm:block">
                <p className="text-zinc-400 text-[10px] font-bold uppercase">Última conexión</p>
                <p className="text-sm font-medium text-zinc-600">Hoy, 10:45 AM</p>
            </div>
        </div>
    )
}
export default HeaderAdmin