import BuildTeam from './components/HomeComponents/BuildTeam'
import Landing from './components/HomeComponents/Landing'
import Services from './components/HomeComponents/Services'
import Testimonials from './components/HomeComponents/Testimonials'

export default function Page() {
    return (
        <>
            <Landing />
            <Services />
            <BuildTeam />
            <Testimonials />
        </>
    )
}
