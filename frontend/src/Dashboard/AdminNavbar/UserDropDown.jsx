const UserDropDown = () => {
    return (
        //este componente pertenece al navbar de pagina admin(dashboard) y se encargara de mostrar el avatar del usuario y un dropdown con las opciones de perfil, configuracion y cerrar sesion.
        <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-primary">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=default" alt="User Avatar" />
                </div>
            </button>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                <li>
                    <a>Perfil</a>
                </li>
                <li>
                    <a>Configuración</a>
                </li>
                <li>
                    <a>Cerrar sesión</a>
                </li>
            </ul>
        </div>
    )
}
export default UserDropDown
