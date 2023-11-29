function Footer() {
    return (
        <div>
            <footer className="bg-black-500 py-4 mt-auto">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                    <div className="grid xl:flex justify-between gap-3">
                        <div className="flex gap-3">
                            <a className="text-slate-900" href="/about">
                                Privacy
                            </a>
                            <a className="link-light small" href="/about">
                                Terms
                            </a>
                            <a className="link-light small" href="/contact">
                                Contact
                            </a>
                        </div>
                        <div className="text-slate-900">
                            <div className="text-slate-900">
                                Copyright &copy; AnalogueShifts 2023
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                className="text-slate-900"
                                href="https://www.linkedin.com/company/analogue-shifts/"
                                target="_blank"
                                rel="noreferrer">
                                LinkIn
                            </a>
                            <a
                                className="text-slate-900"
                                href="https://www.instagram.com/analogueshifts_/?igshid=MzRlODBiNWFlZA%3D%3D"
                                target="_blank"
                                rel="noreferrer">
                                Instagram
                            </a>
                            <a
                                className="text-slate-900"
                                href="https://twitter.com/AnalogueShifts?t=vfspjJw0TwePEcAGydIHdQ&s=09"
                                target="_blank"
                                rel="noreferrer">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
