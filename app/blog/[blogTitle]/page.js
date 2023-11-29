'use client'
import { useState, useEffect } from 'react'
import { axiosBlog } from '../../lib/axios'
// import Image from 'next/image'

// export const metadata = {
//     title: 'HelpFul Articles',
//     description: 'Some HelpFul Blog/Articles',
// }

export default function Page({ params }) {
    const [blogData, setBlogData] = useState()

    useEffect(() => {
        // Fetch job data from your API
        axiosBlog
            .get('/posts?slug=' + params.blogTitle)
            .then(res => {
                const data = res.data[0]
                setBlogData(data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    // console.log(blogData)
    return (
        <div>
            {/* Page Content */}
            <section className="">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                    {blogData && (
                        <>
                            <h1 id="title" className="font-bold text-2xl mb-9">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogData.title.rendered,
                                    }}
                                />
                            </h1>
                            {/* <Image
                            src={blogData.image}
                            alt="..."
                            className="w-full h-max mb-5"
                        /> */}
                            <p className="text-sm text-black/60 font-medium pb-4">
                                {blogData.date}
                            </p>
                            <p className="text-black/90 font-medium">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogData.content.rendered,
                                    }}
                                />
                            </p>
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}
