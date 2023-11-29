function Testimonials() {
    return (
        <div>
            {/* Testimonial section */}
            <div className="bg-white">
                <div className="container mx-auto py-20 px-3 md:px-9 xl:px-20">
                    <div className="flex justify-center">
                        <div className="w-[800px]">
                            <div className="text-center">
                                <div className="text-sm lg:text-2xl mb-4 italic">
                                    "Your Success in Recruitment and Technical
                                    Support is our Priority. Welcome to Analogue
                                    Shifts, where we blend the expertise of
                                    recruitment with the precision of technical
                                    support to deliver exceptional results for
                                    your business. We understand that finding
                                    top talent and providing reliable technical
                                    assistance are crucial to driving your
                                    company’s growth."
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <img
                                        className="object-cover rounded-full h-11 w-11"
                                        src="/images/team/ceo.jpeg"
                                        alt="..."
                                    />
                                    <div className="font-bold">
                                        Kenneth Malaka
                                        <span className="bold text-as mx-1">
                                            /
                                        </span>
                                        CEO, Nigeria
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </div>
        </div>
    )
}

export default Testimonials
