/* eslint-disable react/prop-types */
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import profilePic from "../assets/img/profile.png"
import { useState, useEffect } from "react";

export default function Footer(props) {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        setDarkMode(props.darkMode)
    },[props])

    return(
    <div className={`${darkMode ? "dark bg-gray-700" : "bg-slate-200"} overflow-hidden`}>
        <footer className="dark:bg-gray-900 dark:text-white bg-slate-400 text-gray-900 p-7 text-center z-20" data-aos='slide-up' data-aos-delay='800'>
            
            <img className="sm:float-left hover:border-2 shadow-2xl hover:border-red-900 mx-auto sm:mb-0 mb-4 h-[90px] rounded-full transition-all hover:brightness-110 hover:saturate-150 hover:cursor-help" src={profilePic}/>
            <ul className='flex justify-center list-none text-[2rem] gap-7 sm:-translate-x-[45px]'>
                <li className=''>
                    <a className='hover:text-purple-600' href='https://github.com/AlegSandrin'><FaGithub/></a>
                </li>
                <li>
                    <a className='hover:text-purple-600' href='https://www.linkedin.com/in/alexsandro-urbano-666292237/'><FaLinkedin/></a>
                </li>
                <li>
                    <a className='hover:text-purple-600' href='https://www.instagram.com/alexsandro.urbano9/'><FaInstagram/></a>
                </li>
                <li>
                    <a className='hover:text-purple-600' href='https://www.facebook.com/alexsandro.urbano.1/'><FaFacebook/></a>
                </li>
            </ul>
            <p className='sm:w-[70%] w-[90%] mx-auto m-4'>
                <span className='whitespace-normal text-base'> Portfólio de Alexsandro Urbano. Desenvolvido com as frameworks ReactJS e TailWindCSS</span>
            </p>
        </footer>
    </div>

    )

}