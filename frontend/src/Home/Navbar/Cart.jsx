const Cart = () => {
    return (
        <>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-square btn-circle group transition-colors duration-300"
                    >
                        <div class="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 stroke-current group-hover:text-amber-500 transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>

                            <span class="badge badge-sm badge-warning indicator-item shadow-sm">
                                1
                            </span>
                        </div>
                    </div>

                    <div
                        tabindex="0"
                        class="card card-compact dropdown-content z-[1] mt-3 w-52 bg-base-100 shadow-xl border border-base-200"
                    >
                        <div class="card-body">
                            <span class="font-bold text-zinc-900">1 Artículos</span>
                            <span class="text-info">Subtotal: $29.00</span>
                            <div class="card-actions">
                                <button class="btn btn-warning btn-block">
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
