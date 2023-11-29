'use client'
import { useState, useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap'
import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LocationIcon from '@/public/icons/location-icon.png'
import CategoryIcon from '@/public/icons/category-icon.png'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ViewId({ id }) {
    const router = useRouter()

    const [job, setJob] = useState([])

    {
        /* This is a dummy data, remember to update it to the job data in the JSX Code */
    }
    const dummyData = {
        role: 'Full Stack Developer',
        location: 'Remote',
        category: 'Engineering',
        applicationLink: 'https://analogueshifts.com/jobs',
        companyName: 'AnalogueShifts',
        companyWebsite: 'https://analogueshifts.com',
        aboutCompany:
            'is a Remote tech support & Recruitment expert. We connect tech talents to global opportunities 🌎',
        jobRequirements: [
            'At least 3 years experience with Laravel, PHP, Javascript, CSS, MySQL and Git',
            'Fluent English, Written & Verbal. Excellent communication',
            '4-year Computer Science Degree or Equivalent experience',
            'Available for meetings between 9am to 12pm EST for meetings.   Outside of those hours can work any time',
            'Willing to do identity verification',
        ],
        requiredRequirements: [
            'you have 3+ years of professional experience',
            'lengthy technical assessments do not deter you',
        ],
    }

    const display = id
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

    /* useEffect(() => {
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
    }, [])*/

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
            <div className="grid gap-5 h-full lg:w-[900px]">
                <article>
                    {/* Post header */}
                    <header className="pt-5 mb-20">
                        {/* Post title */}
                        <p className="font-medium text-black/90 text-3xl md:text-4xl fade-in pb-4">
                            {job.role}
                        </p>
                        <div className="flex gap-6 items-center pl-20">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={LocationIcon}
                                    alt="Location Icon"
                                    className="w-4"
                                />
                                <p className="text-sm font-medium text-black/80">
                                    {dummyData.location}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={CategoryIcon}
                                    alt="Category Icon"
                                    className="w-3"
                                />
                                <p className="text-sm font-medium text-black/80">
                                    {dummyData.category}
                                </p>
                            </div>
                        </div>
                    </header>

                    <section className="w-full border-b px-8 flex gap-6 mb-16">
                        <button className="px-2.5 py-2 w-max text-black/90 text-lg font-medium border-b border-black/90">
                            Job details
                        </button>
                        {dummyData.applicationLink === '' ? (
                            <Link
                                href="/job/apply/{job.display}"
                                className="bg-as text-white w-max lg:w-fit py-2 px-4 fade-in">
                                Apply here
                            </Link>
                        ) : (
                            <Link
                                href={dummyData.applicationLink}
                                className="bg-as text-white w-max lg:w-fit py-2 px-4 fade-in">
                                Apply here
                            </Link>
                        )}
                    </section>

                    <section className="w-full px-8 mb-16">
                        <p className="font-normal text-black/90 text-2xl md:text-3xl fade-in pb-5">
                            Job description
                        </p>
                        <p className=" text-black/90 text-lg font-medium">
                            <Link
                                href={dummyData.companyWebsite}
                                className="underline text-as">
                                {dummyData.companyName}
                            </Link>{' '}
                            {dummyData.aboutCompany}
                        </p>
                    </section>
                    <section className="w-full px-8 mb-12">
                        <p className="font-normal text-black/90 text-2xl md:text-3xl fade-in pb-5">
                            Job requirements
                        </p>
                        <ul className="pl-3 list-inside list-disc flex flex-col gap-3">
                            {dummyData.jobRequirements.map(data => {
                                return (
                                    <li
                                        key={crypto.randomUUID()}
                                        className="text-black/90 text-lg font-medium">
                                        {data}
                                    </li>
                                )
                            })}
                        </ul>
                        <p className=" text-black/90 text-xl font-medium pt-4 pb-5">
                            Please apply if:
                        </p>
                        <ul className="pl-3 list-inside list-disc flex flex-col gap-3">
                            {dummyData.requiredRequirements.map(data => {
                                return (
                                    <li
                                        key={crypto.randomUUID()}
                                        className="text-black/90 text-lg font-medium">
                                        {data}
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className="w-full px-8">
                        {dummyData.applicationLink === '' ? (
                            <Link
                                href="/job/apply/{job.display}"
                                className="bg-as text-white rounded lg:w-fit py-3 px-14 fade-in">
                                Apply here
                            </Link>
                        ) : (
                            <Link
                                href={dummyData.applicationLink}
                                className="bg-as text-white rounded lg:w-fit py-3 px-14 fade-in">
                                Apply here
                            </Link>
                        )}
                    </section>
                </article>
            </div>
        </div>
    )
}
