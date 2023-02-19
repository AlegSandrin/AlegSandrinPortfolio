import profile from './img/profile.png'

function Welcome() {
    return (
<div className="Welcome">

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-700" id='sobremim'>
            <div className="bg-gray-900 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12 opacity-90 lg:rounded-r-[90%] lg:border-r-[15px] border-gray-800 z-20">

                <div className="flex-grow z-20">

                    <div className='flex text-white bg-gray-800 -translate-y-10 rounded-full shadow-xl w-[300px] mx-auto p-2'>
                
                    <a className='ml-auto font-bold' href='#sobremim'>Sobre mim</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <a href='#projetos'>Projetos</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <a className='mr-auto' href='#contato'>Contato</a>

                    </div>

                    <img src={profile} className="sm:flex-shrink-0 mx-auto h-24 sm:h-[200px] lg:h-[300px] lg:mb-4 rounded-full"></img>
                    <h1 className="text-blue-200 text-center text-2xl sm:text-5xl mb-2">
                        Seja bem-vindo(a)
                    </h1>
                    <p className="text-center text-blue-300 sm-text-lg">
                        Portfólio de Alexsandro Urbano
                    </p>
                </div>


            </div>


        <div className='lg:min-h-screen lg:flex lg:items-center p-6 lg:p-12 xl:p-18 z-20 opacity-90'>
            <div className="flex-grow bg-gray-600 shadow-xl rounded-md p-8 pl-4 pr-4">
                <h1 className='text-left text-blue-100 text-4xl sm:text-4xl'>Um pouco sobre mim</h1>
                <p className='text-left text-white mt-5 indent-4'>
                    Meu nome é Alexsandro Urbano, tenho 18 anos e sou estudante na instituição ETEC Albert Einstein, 
                    cursando o Ensino Médio com Habilitação Profissional de Técnico em Desenvolvimento de Sistemas.
                    Sempre tive grande interesse pela área de Informática, e atualmente estou estudando
                    programação Web, Mobile e banco de dados, Front-end e Back-end, com o objetivo de ingressar no
                    ramo profissional desta área.
                </p>
                <h2 className='text-left text-blue-100 text-2xl sm:text-2xl mt-5'>Conhecimentos:</h2>
                <div className='flex flex-row gap-4 mt-2'>
                    <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" className='h-full icon'/></a>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" className='h-full icon'/> </a>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png" className="rounded-full icon" alt="mysql" width="40" height="40" /> </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" className='h-full icon'/> </a>
                </div>
                <h2 className='text-left text-blue-100 text-2xl sm:text-2xl mt-3'>Aprendendo:</h2>
                <div className='flex flex-row gap-4 mt-2'>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" className='h-full icon'/> </a> 
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" className='h-full icon'/> </a>  
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="nodejs" width="40" height="40" className='h-full icon'/> </a> 
                </div>

            </div>
        </div>

    </div>
</div>

    )
}

export default Welcome;