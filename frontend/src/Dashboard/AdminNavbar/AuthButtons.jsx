const Authbuttons = () => {
    //este componente se muestra en el navbar de la pagina de dasboard y se encargara de mostrar los botones de iniciar sesion y registrarse.
    return (
        <div className="flex gap-4">
            <button className="btn btn-ghost">Iniciar Sesión</button>
            <button className="btn btn-primary">Registrarse</button>
        </div>
    )
}
export default Authbuttons
