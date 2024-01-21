/* eslint-disable react/prop-types */
import profile from '../assets/img/profile.jpg'

import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import Icon from '../components/Icon';


function Welcome({pageConfig, switchModePages: setDarkMode, toggleVantajs: setVantajs}) {

    function mobile () {
      var maxWidth = 1024;
      if(window.innerWidth < maxWidth){
          return true
      }
      else{
          return false
      }
    }

    const greeting = () => {
        if(new Date ().getHours() < 6){
            return 'boa madrugada'
        } else if(new Date ().getHours() < 12){
            return 'bom dia'
        } else if(new Date ().getHours() < 18){
            return 'boa tarde'
        } else {
            return 'boa noite'
        }
    }

    const myAge = () => {
        const age = new Date().getFullYear() - 2004
        return age
    }

    const { darkMode, vantajs } = pageConfig;

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

      function toggleVantaButton(){
      if(vantajs){
       return (
          <div onClick={() => setVantajs(!vantajs)} className='flex cursor-pointer dark:bg-gray-800 bg-slate-500 dark:text-white text-gray-900 rounded-full shadow-xl sm:text-base text-xs w-full justify-center p-[0.4rem]'>
            Fundo 3D
            <AiOutlineCheckCircle className='switchButton ml-2 sm:text-2xl text-xs text-green-600' data-aos="flip-left"/>
          </div>
       )
      } else {
       return (
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
                    
                    <Link activeclassname="active" className="ml-auto font-bold cursor-pointer" to="Sobremim" spy={true} smooth={true} duration={500}>Sobre mim</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                    <Link activeclassname="active" className="cursor-pointer" to="Projetos" spy={true} smooth={true} duration={500}>Projetos</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    
                    <Link activeclassname="active" className="mr-auto cursor-pointer" to="Contato" spy={true} smooth={true} duration={500}>Contato</Link>

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
                <p className='text-left dark:text-white text-slate-900 mt-5 text-lg'>
                    Olá! 👋 Muito {greeting()}!, fico feliz de tê-lo(a) por aqui.
                </p>

                <p className='text-left dark:text-white text-slate-900 indent-1 text-lg'>
                    Meu nome é Alexsandro Urbano, tenho {myAge()} anos e sou formado em Desenvolvimento de sistemas pela instituição ETEC Albert Einstein.
                    Programador Full Stack com foco em desenvolvimento com JavaScript, experiência em desenvolvimento WEB, Mobile, Desktop e Banco de Dados,
                    com grande interesse na área de TI no geral, busco sempre me atualizar e aprender novas tecnologias e conceitos para me especializar
                    cada vez mais como desenvolvedor e entusiasta de informática. Além disso gosto muito de arte e de vez em quando curto desenhar,
                    seja no papel ou digitalmente, ou mexer com edição de video e imagem.
                </p>

                <h2 className='text-left dark:text-blue-100 lSubTitle text-2xl sm:text-2xl mt-2'>Principais habilidades:</h2>
                <div className='flex flex-row gap-4 lg:gap-3 mt-2'>
                    <Icon link="https://reactjs.org/" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="reactjs" />
                    <Icon link="https://nextjs.org" image="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="nextjs"/>
                    <Icon link="https://www.typescriptlang.org/" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"/>
                    <Icon link="https://nodejs.org" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs"/>
                    <Icon link="https://firebase.google.com/" image="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase"/>
                    <Icon link="https://www.mongodb.com/" image="https://i.ytimg.com/an/K_m2976Yvbx-TyDLw7n1WA/featured_channel.jpg?v=6176c4d2" alt="mongodb"/>
                    <Icon link="https://tailwindcss.com/" image="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"/>
                    <Icon link="https://getbootstrap.com/" image="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" className="rounded-md" alt="bootstrap"/>
                    <Icon link="https://git-scm.com/" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" />
                </div>
                <h2 className='text-left dark:text-blue-100 lSubTitle text-2xl sm:text-2xl mt-3'>Outros conhecimentos:</h2>
                <div className='flex flex-row gap-4 lg:gap-3 mt-2'>
                    <Icon link="https://ionicframework.com" image="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic"/>  
                    <Icon link="https://angular.io" image="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular"/>
                    <Icon link="https://www.mysql.com/" alt="mysql" image="https://camo.githubusercontent.com/2d4ada77a4f2e817f153c69502f2e3dc028474de5fc0cf95d9a8b97f72f7b891/68747470733a2f2f7374796c65732e7265646469746d656469612e636f6d2f74355f32716d366b2f7374796c65732f636f6d6d756e69747949636f6e5f64686a723667756330337835312e706e673f77696474683d32353626733d33653832356237323035633766343937643436393530323865333538643236656533353966383462" /> 
                    <Icon link="https://www.php.net" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php"/> 
                    <Icon link="https://www.w3schools.com/cs/" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp"/>
                    <Icon link="https://developer.android.com/?hl=pt-br/" image="https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png" alt="android studio" />
                    <Icon link="https://ubuntu.com" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" />
                    <Icon link="https://www.figma.com/" image="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="figma" />
                    <Icon link="https://www.photoshop.com/" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png" alt="photoshop"/>
                </div>
            </div>
        </div>

    </div>
    </div>
</div>

    )
}

export default Welcome;