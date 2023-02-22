import projetos from "./ListaProjetos"


function ProjetosListar(){

    const lista = []
    const len = projetos.length
    for(var i = 0; i < len; i++){ 

        function GeraDownload(){
            if(projetos[i].download)
                return(
                    <a href={projetos[i].download} className="flex m-2 sm:mt-auto mt-8 icon text-indigo-100 hover:text-indigo-800 w-[35px] h-[35px]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=""><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                    </a>
                )
            else return <div></div>

        }

        function GeraLinguagens(){
        const linguagens = []
        const len = projetos[i].linguagens.length
        for(var l = 0; l < len; l++){
            linguagens.push(
                    <img src={projetos[i].linguagens[l]} className='xl:h-[35px] xl:w-[35px] md:h-[30px] md:w-[30px] sm:w-[25px] sm:h-[25px] h-[20px] w-[20px]'/>
            )
        }
        return (linguagens)
        }

        lista.push(
                <div className="bg-gray-600 relative flex flex-grow rounded-3xl pr-2 h-40 sm:h-40 md:h-40 lg:h-52 xl:h-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-125 duration-300">
                    <a href={projetos[i].link} className="flex flex-shrink-0 sm-max:flex-shrink-0 sm:flex-shrink-0 rounded-l-3xl">
                    <img src={projetos[i].preview} href={projetos[i].link} className="rounded-l-3xl lg:max-w-[300px] max-w-[130px]"/>
                    </a>
                    <div className="w-full grid grid-flow-row grid-cols-4 m-2 overflow-auto overflow-x-hidden ListaProjetos">
                    <h1 className="text-indigo-400 text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl tracking-tight row-span-1 col-span-4">{projetos[i].titulo}</h1>
                    <h1 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tight row-span-6 col-span-4"> 
                    {projetos[i].descricao}
                    </h1>

                    {GeraDownload()}

                    <div className='flex gap-1 sm:gap-2 m-2 place-content-end col-span-3'>
                        {GeraLinguagens()}
                    </div>
                    </div>
                </div>
        )
    }
    return (lista)
}

function Projetos(){

    return(
        <div className="h-full bg-gray-700 p-6 lg:p-8 lg:px-16 scroll-smooth" >

            <div className="h-full">
                <h1 className="projetos text-indigo-300 text-left text-4xl sm:text-5xl m-6"> Projetos </h1>

                <div className="ListaProjetos h-[90vh] bg-gray-800 rounded-3xl shadow-2xl opacity-90 p-8 z-20 overflow-auto overflow-x-hidden">
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8'>
                        {ProjetosListar()}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projetos;