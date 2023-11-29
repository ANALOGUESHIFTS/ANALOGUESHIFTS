'use client'
import Link from 'next/link'
import Data from './Utilities/BuildTeamData.json'
import { useInView } from 'react-intersection-observer'

function BuildTeam() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })
    return (
        <section ref={ref} className="bg-gray-200">
            <div
                className={`container duration-300 mx-auto py-16 px-5 xl:px-20 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="flex justify-center mb-9">
                    <Link
                        className="text-xl px-10 py-4 rounded-lg bg-as text-white hover:scale-105 font-medium duration-300"
                        href="https://app.analogueshifts.com/tools/hire">
                        Find Top Talents
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Data.BuildTeamData.map(el => (
                        <a
                            key={el.title}
                            href="https://app.analogueshifts.com"
                            className="bg-as order border-black duration-300 rounded p-5 flex motion-safe:hover:scale-[1.02] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                            <div>
                                <h2 className="mt-6 text-xl font-semibold text-slate-900">
                                    {el.title}
                                </h2>

                                <p className="mt-4 text-slate-900 text-xs leading-relaxed">
                                    {el.datails}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BuildTeam
