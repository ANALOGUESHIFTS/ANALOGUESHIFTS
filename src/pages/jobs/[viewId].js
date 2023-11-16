import { useState, useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import SeoController from '@/lib/SeoController'

gsap.registerPlugin(ScrollTrigger)

export default function View() {
    const seoData = {
        title: 'Jobs in Tech',
        description:
            'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
        // canonical: `https://www.analogueshifts.com/jobs/${display}`,
        ogImage: '/images/a4.jpg',
    }

    const router = useRouter()

    const [job, setJob] = useState([])

    const display = router.query.viewId
    useEffect(() => {
        if (display) {
            axios
                .get(`/jobs/${display}`)
                .then(res => {
                    const data = res.data
                    setJob(data)
                })
                .catch(error => {
                    alert(error)
                })
        }
    }, [display])

    useEffect(() => {
        // Define animations
        const fadeIn = gsap.from('.fade-in', {
            opacity: 0,
            duration: 1,
            stagger: 0.2, // Stagger the animations
            scrollTrigger: {
                trigger: '.fade-in',
                start: 'top 80%', // Adjust this trigger point as needed
            },
        })

        // When the component unmounts, kill the animations to avoid memory leaks
        return () => {
            fadeIn.kill()
        }
    }, [])

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <AppLayout>
            <SeoController seoData={seoData} />
            {/* Page Content */}
            <section className="min-h-screen border-b">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                    <div className="grid gap-5 h-full lg:w-[900px]">
                        <article>
                            {/* Post header */}
                            <header className="mb-4">
                                {/* Post title */}
                                <h1 className="font-bold text-3xl md:text-5xl mb-2 fade-in">
                                    {job.role}
                                </h1>
                                {/* Post meta content */}
                                <div className="text-gray-700 italic mb-2">
                                    {job.created_at}
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3 fade-in">
                                        Job
                                    </span>
                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3 fade-in">
                                        Location: {job.hire_type}
                                    </span>
                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3 fade-in">
                                        Experience: {job.experience}
                                    </span>
                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3 fade-in">
                                        Salary: {job.range}
                                    </span>
                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3 fade-in">
                                        Duration: {job.duration}
                                    </span>
                                </div>
                            </header>
                            {/* Post content */}
                            <div className="bg-white border p-3 lg:p-16">
                                <section
                                    className="mb-5"
                                    dangerouslySetInnerHTML={{
                                        __html: job.description,
                                    }}
                                />
                            </div>
                            <div className="flex lg:justify-end w-full py-2 px-0">
                                {job.application === '' || null ? (
                                    <a
                                        href={`https://app.analogueshifts.com/apply/${job.display}`}
                                        className="bg-as text-white w-full lg:w-fit py-2 px-4 rounded-md fade-in">
                                        Apply here
                                    </a>
                                ) : (
                                    <a
                                        target="blank"
                                        href={job.application}
                                        className="bg-as text-white w-full lg:w-fit py-2 px-4 rounded-md fade-in">
                                        Apply here
                                    </a>
                                )}
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}
