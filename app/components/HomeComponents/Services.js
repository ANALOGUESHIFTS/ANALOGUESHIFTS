'use client'
import { useInView } from 'react-intersection-observer'

function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })

    return (
        <div ref={ref}>
            <section
                className={`duration-500 bg-gray-100 py-16 ${
                    inView ? 'opacity-1' : 'opacity-0'
                }`}>
                <div className="container mx-auto px-5 xl:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg animate-element">
                            <div className="flex items-center justify-center bg-as text-gray-900 rounded-full w-16 h-16">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-8 h-8">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                    />
                                </svg>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-900">
                                Best Results
                            </h2>
                            <p className="mt-2 text-gray-600">
                                We tailor our services to understand exactly
                                what kind of person you want, delivering the
                                best results for businesses in all industries.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg animate-element">
                            <div className="flex items-center justify-center bg-as text-gray-900 rounded-full w-16 h-16">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-8 h-8">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    />
                                </svg>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-900">
                                Focused
                            </h2>
                            <p className="mt-2 text-gray-600">
                                We focus on cultural fit, talent acquisition,
                                and matching your candidate pool with the talent
                                you need.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg animate-element">
                            <div className="flex items-center justify-center bg-as text-gray-900 rounded-full w-16 h-16">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-8 h-8">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18V8.25A2.25 2.25 0 015.25 6h4.75M10 2.057v5.193a1 1 0 001 1H16"
                                    />
                                </svg>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-900">
                                Efficient
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Our streamlined recruitment process ensures
                                efficiency and reduces the time-to-fill
                                positions, saving you valuable resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
