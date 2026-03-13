import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <footer className="w-full border-t border-zinc-200 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-400 py-6 px-4 sm:px-6 lg:px-8">
                MH Intimates © 2024
            </footer>
        </div>
    )
}
export default Layout
