const Cart = () => {
    return (
        <>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-square btn-circle group transition-colors duration-300"
                    >
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 stroke-current group-hover:text-amber-500 transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>

                            <span className="badge badge-sm badge-warning indicator-item shadow-sm">
                                1
                            </span>
                        </div>
                    </div>

                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content z-[1] mt-3 w-52 bg-base-100 shadow-xl border border-base-200"
                    >
                        <div className="card-body">
                            <span className="font-bold text-zinc-900">1 Artículos</span>
                            <span className="text-info">Subtotal: $29.00</span>
                            <div className="card-actions">
                                <button className="btn btn-warning btn-block">
                                    Ver Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart
