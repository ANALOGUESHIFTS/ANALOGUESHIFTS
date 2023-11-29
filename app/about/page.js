import PageContent from '../components/AboutComponents/PageContent'

export const metadata = {
    title: 'About Us',
    description:
        "At Analogueshifts, we're passionate about connecting employers with top tech talent from around the world. Our team of experts brings years of experience and industry knowledge to every recruitment search. Learn more about us and our mission today.",
}

export default function Page() {
    /*useEffect(() => {
        // Animation for the main heading
        gsap.from('#title', {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.5,
        })

        // Animation for the job description section
        gsap.from('#intro', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })

        // Animation for the contact form section
        gsap.from('#form', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
        })

        // Animation for the contact cards
        gsap.from('#card', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })
    }, [])*/

    return <PageContent />
}
