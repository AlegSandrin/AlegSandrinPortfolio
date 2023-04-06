import profile from '../assets/img/profile.jpg'

import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'


function Welcome({switchModePages, toggleVantajs}) {

    function mobile () {
        var maxWidth = 1024;
        if(window.innerWidth < maxWidth){
            return true
        }
        else{
            return false
        }
      }

      const [darkMode, setDarkMode] = useState(true);

      useEffect(() => {
        switchModePages(darkMode);
      },[darkMode])

      function switchMode(){
        if(darkMode) {
        return (
        <div onClick={() => setDarkMode(!darkMode)} className='flex cursor-pointer dark:bg-gray-800 bg-slate-500 dark:text-white text-gray-900 rounded-full shadow-xl sm:text-base text-xs w-full justify-center p-[0.4rem]'>
        Tema escuro
        <BsFillMoonStarsFill className='switchButton ml-2 sm:text-2xl text-xs text-blue-500 saturate-50' data-aos="flip-left"/>
        </div>
        )
        } else {
        return(
        <div onClick={() => setDarkMode(!darkMode)} className='flex cursor-pointer dark:bg-gray-800 bg-slate-500 dark:text-white text-gray-900 rounded-full shadow-xl sm:text-base text-xs w-full justify-center p-[0.4rem]'>
        Tema claro
        <BsFillSunFill className='switchButton ml-2 sm:text-2xl text-xs text-yellow-300 saturate-50' data-aos="flip-left"/>
        </div>
            )
           }
        }

        const [vantajs, setVantajs] = useState(true)

        useEffect(() => {
            toggleVantajs(vantajs);
        },[vantajs])

        function toggleVantaButton(){
        if(vantajs){
         return(
            <div onClick={() => setVantajs(!vantajs)} className='flex cursor-pointer dark:bg-gray-800 bg-slate-500 dark:text-white text-gray-900 rounded-full shadow-xl sm:text-base text-xs w-full justify-center p-[0.4rem]'>
            Fundo 3D
            <AiOutlineCheckCircle className='switchButton ml-2 sm:text-2xl text-xs text-green-600' data-aos="flip-left"/>
            </div>
         )
        } else {
         return(
            <div onClick={() => setVantajs(!vantajs)} className='flex cursor-pointer dark:bg-gray-800 bg-slate-500 dark:text-white text-gray-900 rounded-full shadow-xl sm:text-base text-xs w-full justify-center p-[0.4rem]'>
            Fundo 3D
            <AiOutlineCloseCircle className='switchButton ml-2 sm:text-2xl text-xs text-red-600' data-aos="flip-left"/>
            </div>
            )
           }
        }

    return (
        

<div className={`Welcome ${darkMode ? "dark" : ""} overflow-x-hidden`}>

    <div className='transition-colors ease-in-out duration-[2000ms] dark:bg-gray-700 bg-slate-200 '>

      <div className="grid grid-cols-1 lg:grid-cols-2 z-20" id='Sobremim' name='Sobremim'>
            <div className="dark:bg-gray-900 bg-slate-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12 opacity-90 lg:rounded-r-[90%] lg:border-r-[15px] dark:border-gray-800 border-slate-500 z-20" data-aos={`${mobile() ? 'fade-down' : 'fade-right'}`} data-aos-delay='400'>

                <div className="flex-grow" data-aos={`${mobile() ? 'fade-down' : 'fade-up'}`} data-aos-delay="600" data-aos-anchor-placement="top-center">

                    <div className='grid grid-cols-2 gap-2 sm:w-[300px] w-[220px] mx-auto -translate-y-5'>

                    <div className='col-span-1'>{switchMode()}</div>
                    <div className='col-span-1'>{toggleVantaButton()}</div>

                    <div className='flex place-items-center col-span-2 dark:text-white dark:bg-gray-800 bg-slate-500 text-gray-900 rounded-full shadow-xl sm:text-lg text-xs mx-auto sm:w-[300px] w-[220px] p-1 lg:p-2'>
                    
                    <Link activeClass="active" className="ml-auto font-bold cursor-pointer" to="Sobremim" spy={true} smooth={true} duration={500}>Sobre mim</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                    <Link activeClass="active" className="cursor-pointer" to="Projetos" spy={true} smooth={true} duration={500}>Projetos</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    
                    <Link activeClass="active" className="mr-auto cursor-pointer" to="Contato" spy={true} smooth={true} duration={500}>Contato</Link>

                    </div>
                    </div>
                    
                    <img src={profile} className="sm:flex-shrink-0 mx-auto h-24 sm:h-[200px] lg:h-[300px] lg:w-[300px] lg:mb-4 rounded-full drop-shadow-2xl skew-y-6" data-aos="flip-right" data-aos-delay="1000"></img>
                    <h1 className="dark:text-blue-200 dark:saturate-100 saturate-[.7] lTitle text-center text-xl sm:text-4xl mb-2" id="bemvindo" data-value="SEJA BEM-VINDO(A)!">
                        SEJA BEM-VINDO(A)!
                    </h1>
                    <p className="dark:text-blue-300 dark:saturate-100 saturate-[.7] lSubTitle text-center sm-text-lg">
                        Portfólio de Alexsandro Urbano
                    </p>
                </div>
               
            </div>

        <div className='lg:min-h-screen lg:flex lg:flex-col lg:items-center p-6 lg:p-12 xl:p-18 z-20 opacity-90'>

            <div className="my-auto dark:bg-gray-600 bg-slate-400 drop-shadow-xl rounded-md p-8 pl-4 pr-4" data-aos={`${mobile() ? 'fade-up' : 'fade-left'}`} data-aos-delay='1000'>

                <div className='name flex my-2 text-center dark:text-white text-slate-800 xl:text-[4.5rem] lg:text-[3.4rem] sm:text-[4.9rem] text-[2.5rem] transition duration-150 dark:hover:text-green-500 hover:text-rose-700'>
                <h5 id='titulo'></h5>
                </div>

                <h1 className='text-left dark:text-blue-100 lSubTitle text-2xl sm:text-3xl md:text-4xl'>Um pouco sobre mim</h1>
                <p className='text-left dark:text-white text-slate-900 mt-5 indent-4 text-lg'>
                    Meu nome é Alexsandro Urbano, tenho 18 anos e sou estudante na instituição ETEC Albert Einstein, 
                    cursando o Ensino Médio com Habilitação Profissional de Técnico em Desenvolvimento de Sistemas.
                    Sempre tive grande interesse pela área de Informática, e atualmente estou estudando
                    programação Web, Mobile e banco de dados, Front-end e Back-end, com o objetivo de ingressar no
                    ramo profissional desta área.
                </p>
                <h2 className='text-left dark:text-blue-100 lSubTitle text-2xl sm:text-2xl mt-5'>Conhecimentos:</h2>
                <div className='flex flex-row gap-4 mt-2'>
                    <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" className='h-full icon'/></a>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" className='h-full icon'/> </a>  
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" className='h-full icon'/> </a>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png" className="rounded-full icon" alt="mysql" width="40" height="40" /> </a>
                    <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" className='h-full icon'/> </a>
                </div>
                <h2 className='text-left dark:text-blue-100 lSubTitle text-2xl sm:text-2xl mt-3'>Aprendendo:</h2>
                <div className='flex flex-row gap-4 mt-2'>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="nodejs" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://i.ytimg.com/an/K_m2976Yvbx-TyDLw7n1WA/featured_channel.jpg?v=6176c4d2" alt="mongodb" width="40" height="40" className='h-full icon'/> </a>
                    <a href="https://www.solidjs.com" target="_blank" rel="noreferrer"> <img src="https://www.solidjs.com/assets/logo-123b04bc.svg" alt="solidjs" width="40" height="40" className='h-full icon'/> </a>  
                </div>

            </div>
        </div>

    </div>
    </div>
</div>

    )
}

export default Welcome;