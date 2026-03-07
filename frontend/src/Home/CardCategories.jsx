const CardCategories = () => {
    return (
        <section className="max-w-[1000px] mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Categoría 1 */}
                        <div className="relative h-[400px] group overflow-hidden cursor-pointer bg-zinc-200">
                            <img
                                src="https://images.unsplash.com/photo-1610303848520-285642436d65?q=80&w=1000"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Lingerie Set"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-8">
                                <div className="text-white">
                                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1">
                                        Sets
                                    </p>
                                    <h3 className="text-2xl font-light italic font-serif">
                                        Seducción en Encaje
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* Categoría 2 */}
                        <div className="relative h-[400px] group overflow-hidden cursor-pointer bg-zinc-200">
                            <img
                                src="https://images.unsplash.com/photo-1582231243720-f97544079815?q=80&w=1000"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Satin"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-8">
                                <div className="text-white">
                                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1">
                                        Satinados
                                    </p>
                                    <h3 className="text-2xl font-light italic font-serif">
                                        Confort & Brillo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}
export default CardCategories