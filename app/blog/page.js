import BlogList from '../components/BlogComponents/BlogList'

export const metadata = {
    title: 'HelpFul Articles',
    description: 'Some HelpFul Blog/Articles',
}

export default function Page() {
    return (
        <div>
            {/* Page Content */}
            <section className="">
                <div className="container py-5 px-3 md:px-9 xl:px-14">
                    <h1 id="title" className="font-bold text-2xl mb-9">
                        AnalogueShifts HelpFul Articles
                    </h1>
                    <BlogList />
                </div>
            </section>
        </div>
    )
}
