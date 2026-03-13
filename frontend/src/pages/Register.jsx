import React from 'react'
import Registerform from '../Dashboard/Register/Registerform'
import Footerform from '../Dashboard/Register/Footerform'
import Header from '../Dashboard/Register/Headerform'
//register sera  usado para dashboard.
const Register = () => {
    return (
        <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center items-center px-4 sm:px-6 py-10 sm:py-14">
            {/* Tarjeta de Registro */}
            <div className="w-full max-w-md sm:max-w-lg bg-white border border-zinc-200 rounded-2xl shadow-xl shadow-zinc-200/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                {/* Detalle decorativo dorado superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFDF00] to-[#D4AF37]"></div>

                {/* Logo y Encabezado */}
                <div><Header /></div>

                {/* Formulario de Registro */}
                <div>
                    <Registerform />
                </div>

                {/* Footer del Registro */}
               <div><Footerform /></div>
            </div>

            {/* Marca de agua sutil fuera de la tarjeta */}
            <p className="mt-6 sm:mt-8 text-[10px] text-zinc-300 uppercase tracking-[0.5em] font-light">
                MH Intimates Premium © 2024
            </p>
        </div>
    );
};

export default Register
