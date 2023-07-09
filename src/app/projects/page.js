import React from 'react'
import getProjects from '../lib/getProjects'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Image from 'next/image'



const Projects = async () => {

    const projects = await getProjects()

    return (
        <div className='container p-6 mx-auto'>
            <div className='grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6'>
                {projects.map(item => (
                    <div key={item.id} className='gap-4 flex items-center rounded-lg border-t-2 border-blue-300 p-5'>
                        <div className='flex flex-col w-1/2 pl-6'>
                            <Link href={item.url}>
                                <h2 className='text-5xl mb-2 font-bold'>{item.name}</h2>
                            </Link>
                            <p className='text-2xl mb-2'>{item.description}</p>
                            <Image className='object-fill h-30 w-30' src={item.openGraphImageUrl} height={200} width={600} alt={"openGraphImage"} />
                        </div>
                        <div className='flex flex-col w-1/2 items-center'>
                            {
                                item.object.text &&
                                <div className='m-2 p-2 border rounded-md border-slate-900 bg-blue-100 h-80 overflow-auto '>
                                    <ReactMarkdown className='text-slate-600' remarkPlugins={[gfm]}>{item.object.text}</ReactMarkdown>
                                </div>
                            }
                            <Link href={item.url} className='outline outline-blue-400 text-3xl text-center p-5 mt-8 rounded-lg  hover:bg-blue-300 hover:text-black'>Click to see the code!</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

