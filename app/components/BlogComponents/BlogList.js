'use client'
import { useState, useEffect } from 'react'
import { axiosBlog } from '../../lib/axios'
import Link from 'next/link'
import Image from 'next/image'
import SearchIcon from '@/public/images/search-icon.png'
// import { data } from 'autoprefixer'

export default function BlogList() {
    const [blogData, setBlogData] = useState([])
    const [searchFilter, setSearchFilter] = useState('')

    useEffect(() => {
        // Fetch job data from your API
        axiosBlog
            .get('/posts')
            .then(res => {
                const data = res.data
                setBlogData(data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    // useEffect(() => {
    //     if (searchValue.length > 1) {
    //         setBlogData(
    //             blogData.filter(blog => {
    //                 return blog.title
    //                     .toLowerCase()
    //                     .includes(searchValue.toLowerCase())
    //             }),
    //         )
    //     } else {
    //         setBlogData(data)
    //     }
    // }, [searchValue])

    return (
        <div className="w-full">
            <div className="w-full h-max overflow-hidden bg-white rounded-lg border flex items-center pl-3">
                <Image
                    className="cursor-pointer w-5 h-5 mr-3 opacity-70"
                    src={SearchIcon}
                    alt="Search Icon"
                />
                <input
                    placeholder="Search Jobs"
                    value={searchFilter}
                    onChange={e => setSearchFilter(e.target.value)}
                    className="w-full outline-none border border-gray-300 rounded-md px-3 py-2"
                />
            </div>
            <div className="pt-5 w-full flex justify-between flex-wrap gap-y-5">
                {blogData &&
                    blogData
                        .filter(data =>
                            data.title.rendered
                                .toLowerCase()
                                .includes(searchFilter.toLowerCase()),
                        )
                        .map(data => (
                            <Link
                                key={crypto.randomUUID()}
                                href={`blog/${data.slug}`}
                                className="w-[31%] h-max pb-6 max-[1000px]:w-[48%] max-[600px]:w-full overflow-hidden rounded-2xl shadow-xl flex flex-col blog-box">
                                <div className="w-full h-6/12 overflow-hidden">
                                    {/* <Image
                                    src={data.image}
                                    alt="Image"
                                    className="duration-300 blog-img"
                                /> */}
                                </div>
                                <div className="w-full h-6/12  p-3.5">
                                    <div className="flex flex-col pb-5 max-[500px]:h-[220px] w-full justify-between h-[200px]">
                                        <p
                                            // style={{ color: data.color }}
                                            className="text-sm font-medium">
                                            RESMUE HELP
                                        </p>
                                        <p className="font-bold text-black/70 text-xl">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: data.title.rendered,
                                                }}
                                            />
                                        </p>
                                        <p className="text-black/60 text-sm tracking-wide">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        data.excerpt.rendered,
                                                }}
                                            />
                                        </p>
                                    </div>
                                    {/* <div className="flex w-full h-[50px] gap-4">
                                    <Image
                                        src={data.userImage}
                                        alt=""
                                        className="w-[50px] h-[50px] rounded-full"
                                    />
                                    <div className="h-full py-1 flex flex-col justify-between">
                                        <p className="text-sm text-black/80 font-medium">
                                            {data.userName}
                                        </p>
                                        <p className="text-xs text-black/60 font-medium">
                                            {data.date}
                                        </p>
                                    </div>
                                </div> */}
                                </div>
                            </Link>
                        ))}
            </div>
        </div>
    )
}
