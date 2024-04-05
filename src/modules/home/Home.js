import Hero from '../../components/hero/Hero'
import Products from '../../components/hero/products/Products'
import FaetureCard from '../../components/faeture-card/FaetureCard'
import StatCard from '../../components/stat-card/StatCard'
import Admin from '../../components/admin/Admin'
import Single from '../../components/single/Single'



function Home() {
    return (
        <>
            <Hero />
            <Products />
            <FaetureCard />
            <StatCard />
            <Single />
        </>
    )
}

export default Home