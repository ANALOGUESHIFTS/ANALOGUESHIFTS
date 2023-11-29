'use client'
import { useEffect, useState } from 'react'
import axios from '@/app/lib/axios'
import Link from 'next/link'
import { gsap, ScrollTrigger } from 'gsap'
import Image from 'next/image'
import Job1 from '@/public/images/jobs/1.jpg'
import { useInView } from 'react-intersection-observer'

export default function JobView() {
    const [jobs, setJobs] = useState([])
    const [searchFilter, setSearchFilter] = useState('')

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px', //triggers when the div is -50px up
    })

    useEffect(() => {
        // Fetch job data from your API
        axios
            .get('/jobs')
            .then(res => {
                const data = res.data.jobs
                setJobs(data)
            })
            .catch(error => {
                alert(error)
            })

        // Initialize GSAP and ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)

        // Add GSAP animation to the "Head" card
        /*gsap.from('.animate-fade-in-head', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.animate-fade-in-head',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
        })*/

        // Animation for the job description section
        /*gsap.from('#intro', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })*/

        // Add GSAP animation to the job cards as they enter the viewport
        /* gsap.from('.animate-fade-in-job', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.animate-fade-in-job',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
        })*/
    }, [])

    return (
        <>
            <section
                ref={ref}
                className={`duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    <h1 className="font-bold text-2xl mb-9 animate-fade-in-head">
                        AnalogueShifts Jobs
                    </h1>
                    <div className="bg-white overflow-hidden">
                        <div id="intro" className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-6 py-16 px-3 lg:px-3 mr-3">
                                <div className="grid gap-5 lg:w-96">
                                    <div className="flex justify-start mb-2">
                                        <span className="bg-as text-white text-xs font-bold rounded-full py-1 px-3">
                                            Jobs
                                        </span>
                                    </div>
                                    <div className="text-3xl md:text-4xl leading-[50px] tracking-normal font-bold text-black/90">
                                        AnalogueShifts featured job posts.
                                    </div>
                                    <p className="text-[15px] leading-[30px] font-medium text-black/70 text-justify">
                                        Clear and concise job listings, The job
                                        search page contains detailed
                                        descriptions of the available positions,
                                        including the job title, location, and
                                        required qualifications. Here, you'll
                                        find the latest updates and developments
                                        from our recruitment company.
                                    </p>
                                </div>
                            </div>
                            <div className="grid lg:col-span-6">
                                <Image
                                    className="object-cover h-full w-full"
                                    src={Job1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* job preview section */}
            <section className="">
                <div
                    className={`container mx-auto py-5 px-3 md:px-9 xl:px-20 duration-500`}>
                    <div className="flex w-full py-5">
                        <input
                            placeholder="Search Jobs"
                            value={searchFilter}
                            onChange={e => setSearchFilter(e.target.value)}
                            className="w-full outline-none border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3 mb-3">
                        {jobs &&
                            jobs
                                .filter(job =>
                                    job.role
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase()),
                                )
                                .map((job, index) => (
                                    <Link
                                        href={`/jobs/${job.display}`}
                                        as={`/jobs/${job.display}`}
                                        // as={`/jobs/${job.role.replace(
                                        //     /\s+/g,
                                        //     '-',
                                        // )}/${job.id}`}
                                        className="mb-5 animate-fade-in-job"
                                        key={index}>
                                        <div className="bg-white h-full shadow border-0">
                                            <div className="p-5">
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3">
                                                        Job
                                                    </span>
                                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3">
                                                        Location:{' '}
                                                        {job.hire_type}
                                                    </span>
                                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3">
                                                        Experience:{' '}
                                                        {job.experience}
                                                    </span>
                                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3">
                                                        Salary: {job.range}
                                                    </span>
                                                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3">
                                                        Duration: {job.duration}
                                                    </span>
                                                </div>

                                                <h5 className="h-16 overflow-hidden font-bold text-lg mb-3">
                                                    {job.role}
                                                </h5>
                                                <div className="h-fit mb-0 overflow-hidden">
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                job.description.substring(
                                                                    0,
                                                                    350,
                                                                ) + '...',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-4 pt-0 bg-transparent border-t-0">
                                                <div className="flex items-end justify-start">
                                                    <div className="flex gap-5 items-center">
                                                        {/* You can add user and created_at information here */}
                                                        {/* Example: <img className="object-cover rounded-full h-11 w-11" src="/images/assets/blankuser.png" alt="..." /> */}
                                                        <div className="small">
                                                            {/* Replace these placeholders with actual user and date information */}
                                                            <div className="font-bold">
                                                                {/* {job.user.name} */}
                                                            </div>
                                                            <div className="text-gray-500">
                                                                {/* {job.created_at} (diffForHumans()) */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                    </div>

                    {/* Call to action */}
                    <aside className="flex justify-center py-16">
                        <div className="bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg">
                            <div className="grid gap-5 text-center lg:text-start">
                                <div className="text-2xl font-bold text-white">
                                    New products, delivered to you.
                                </div>
                                <div className="text-gray-100 text-sm">
                                    Sign up for our Jobsletter for the latest
                                    updates.
                                </div>
                            </div>
                            <div className="grid gap-5 text-center lg:text-start">
                                <form className="flex mb-2 min-w-full">
                                    <input
                                        className="text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md"
                                        type="email"
                                        placeholder="Email address..."
                                        aria-label="Email address..."
                                        aria-describedby="button-Jobsletter"
                                    />
                                    <button
                                        className="bg-transparent text-sm border outline-none w-full py-2 px-5 rounded-r-md"
                                        type="button">
                                        Sign up
                                    </button>
                                </form>
                                <div className="text-gray-100 text-sm">
                                    We care about privacy, and will never share
                                    your data.
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}
