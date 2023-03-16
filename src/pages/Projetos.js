import projetos from "../components/ListaProjetos.js"

import { useState, useEffect } from "react";

function Projetos(props){

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        setDarkMode(props.darkMode)
    },[props])
    
    return(
    <div className={`Projetos ${darkMode ? "dark" : ""}`}>
        <div className="transition-all ease-in-out duration-[2000ms] h-full w-full dark:bg-gray-700 bg-slate-200 p-6 lg:px-24 lg:py-10 lg:pt-2 scroll-smooth">

            <div className="h-full w-full mx-auto my-auto">
                <h1 className="dark:text-indigo-300 text-indigo-600 dark:saturate-100 saturate-50 text-left text-4xl sm:text-5xl mb-2 m-6" data-aos='fade-down' data-aos-delay='400'> Projetos </h1>
                <p className='dark:text-indigo-100 text-indigo-400 dark:saturate-100 saturate-50 lg:text-xl md:text-xl text-xl ml-6 mb-3 mx-auto' data-aos='fade-up' data-aos-delay='600'>Atividades e Projetos que desenvolvi e postei no meu GitHub</p>

                <div data-aos='zoom-in' data-aos-delay='400'><div className="ListaProjetos h-[90vh] dark:bg-gray-800 bg-slate-600 rounded-3xl shadow-2xl opacity-[0.93] p-8 z-20 overflow-auto overflow-x-hidden">
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8' data-aos='slide-down' data-aos-delay='800'>
                        
                    {projetos.map((projeto, index) => (
                        <div key={index} className="dark:bg-gray-600 bg-slate-400 relative flex flex-grow rounded-3xl pr-2 h-40 sm:h-40 md:h-40 lg:h-52 xl:h-60 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-125 duration-300">

                            <a href={projeto.link} className="flex flex-shrink-0 sm-max:flex-shrink-0 sm:flex-shrink-0 rounded-l-3xl">
                            <img src={projeto.preview} href={projeto.link} className="flex-shrink-0 rounded-l-3xl lg:max-w-[200px] xl:max-w-[300px] max-w-[130px]"/>
                            </a>
                            <div className="w-full grid grid-flow-row grid-cols-4 m-2 overflow-auto overflow-x-hidden ListaProjetos">
                                <h1 className="dark:text-indigo-400 text-indigo-600 dark:saturate-100 saturate-50 text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl tracking-tight row-span-1 col-span-4">{projeto.titulo}</h1>
                                <h1 className="dark:text-white text-slate-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tight row-span-6 col-span-4"> 
                                {projeto.descricao}
                                </h1>
                    
                                { projeto.download && <a href={projeto.download} className="flex sm:m-2 sm:mt-auto mt-8 icon dark:text-indigo-100 text-slate-700 hover:text-indigo-800 xl:h-[35px] xl:w-[35px] md:h-[30px] md:w-[30px] sm:w-[25px] sm:h-[25px] h-[20px] w-[20px]">
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                                </a> }
                                <div className={`flex gap-1 sm:gap-2 m-2 my-auto place-content-end ${projeto.download ? 'col-span-3' : 'col-span-full'}`}>
                                    {projeto.linguagens.map((linguagem, index) => (
                                    <img key={index} src={linguagem} className='xl:h-[35px] xl:w-[35px] md:h-[30px] md:w-[30px] sm:w-[25px] sm:h-[25px] h-[20px] w-[20px]'/>
                                    ))}
                                </div>
                    
                            </div>
                        </div>
                    ))}

                    </div>
                </div></div>

            </div>
        </div>
    </div>
    )
}

export default Projetos;