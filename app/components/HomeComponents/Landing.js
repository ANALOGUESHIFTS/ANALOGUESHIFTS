'use client'
import Image from 'next/image'
import A4 from '@/public/images/a4.jpg'
import { useInView } from 'react-intersection-observer'

function Landing() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })
    return (
        <div ref={ref}>
            {/* Page Content */}
            <section
                className={`md:py-9 duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    <div id="intro" className="bg-white overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-6 py-16 items-center px-3">
                                <div className="grid justify-center lg:justify-start gap-5 lg:w-[500px]">
                                    <span className="text-3xl md:text-4xl leading-[50px] tracking-normal font-bold text-black/90">
                                        The Future of Talent Recruitment
                                    </span>
                                    <p className="text-[15px] leading-[30px] font-medium text-black/70 text-justify">
                                        Your Success in Recruitment and
                                        Technical Support is our Priority.
                                        Welcome to Analogue Shifts, where we
                                        blend the expertise of recruitment with
                                        the precision of technical support to
                                        deliver exceptional results for your
                                        business. We understand that finding top
                                        talent and providing reliable technical
                                        assistance are crucial to driving your
                                        company’s growth.
                                    </p>
                                </div>
                            </div>
                            <div className="grid lg:col-span-6">
                                <Image
                                    className="object-cover h-full w-full"
                                    src={A4}
                                    alt="landing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
