import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ), 
            href: 'https://www.linkedin.com/in/mohammad-kasim-1386a0152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPNUG51kFTLKnF22h5VR%2BHQ%3D%3D',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ), 
            href: 'https://github.com/kasimwasi111',
        },
        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ), 
            href: 'mailto:foo@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ), 
            href:'/Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
        
    ]
  return (
    <div className='flex flex-col top-[40%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href,style,download})=>(
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-blue-600 to-cyan-400 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full text-black' download={download} target='_blank' rel='noreferrer'>
                   {child}
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks