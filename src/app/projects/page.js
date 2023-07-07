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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map(item => (
                <div key={item.id} className='gap-4 flex flex-col items-center bg-slate-700 rounded-md p-5'>
                    <Link href={item.url}>
                        <h2 className='text-3xl font-bold'>{item.name}</h2>
                    </Link>
                    <Image className='object-fill' src={item.openGraphImageUrl} height={200} width={400}  alt={"openGraphImage"}/>
                    <p>{item.description}</p>
                    {
                        item.object.text &&
                        <div className='m-2 p-2 border rounded-md border-slate-900 bg-blue-200 h-80 overflow-auto bg-'>
                            <ReactMarkdown className='text-slate-600' remarkPlugins={[gfm]}>{item.object.text}</ReactMarkdown>
                        </div>
                    }
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects

