import Navbar from '../Home/Navbar/Navbar'
import Hero from '../Home/Hero'
import CardSections from '../Home/CardSections'
import CardCategories from '../Home/CardCategories'

const Home = () => {
    return (
        <div className="w-full">
            <Navbar />
            <main className="w-full">
                {/* 1. SECCIÓN HERO - El impacto visual */}
                <Hero />
                {/* 2. VENTAJAS (Confianza del Cliente) */}
                <CardSections />
                {/* 3. GRID DE CATEGORÍAS */}
                <CardCategories />
            </main>
        </div>
    )
}
export default Home
