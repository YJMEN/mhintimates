import AdminNavbar from '../Dashboard/AdminNavbar/AdminNavbar'
import HeaderAdmin from '../Dashboard/HeaderAdmin'
import SalesCardAdmin from '../Dashboard/SalesCardAdmin'
import QuickActionsAdmin from '../Dashboard/QuickActionsAdmin'

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen bg-[#f8f9fa] text-zinc-900 font-sans">
            <AdminNavbar />

            <main className="max-w-6xl mx-auto p-8 space-y-10">
                {/* 1. Header Admin */}
                <HeaderAdmin />
                {/* 2. Tarjetas de Stats (Clean & Modern) */}
                <SalesCardAdmin />
                {/* 3. Acciones Rápidas (Glass Style) */}
                <div className="bg-zinc-900 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                    <QuickActionsAdmin />
                    {/* Decoración dorada sutil de fondo */}
                </div>
            </main>
        </div>
    )
}
export default Dashboard
