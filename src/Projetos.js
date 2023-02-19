import projetos from "./ListaProjetos"

function ProjetosListar(){

    
    const lista = []
    const len = projetos.length
    for(var i = 0; i < len; i++){ 

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
            <>
                <div className="bg-gray-600 relative flex flex-grow rounded-3xl pr-10 h-40 sm:h-40 md:h-40 lg:h-52 xl:h-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:brightness-125 duration-300">
                    <a href={projetos[i].link} className="flex flex-shrink-0 sm-max:flex-shrink-0 sm:flex-shrink-0 rounded-l-3xl">
                    <img src={projetos[i].preview} href={projetos[i].link} className="rounded-l-3xl max-w-[300px]"/>
                    </a>
                    <div className="m-2">
                    <h1 className="text-indigo-400 text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl tracking-tight">{projetos[i].titulo}</h1>
                    <h1 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tight "> 
                    {projetos[i].descricao}
                    </h1>
                    <div className='flex flex-row gap-4 absolute bottom-0 m-2 mr-4 right-0'>
                        {GeraLinguagens()}
                    </div>
                    </div>
                </div>
            </> 
        )
    }
    return (lista)
}

function Projetos(){

    return(
        <div className="Projetos h-full bg-gray-700 p-6 lg:p-10 ">

            <div className="h-full">
                <h1 className="text-indigo-300 text-left text-4xl sm:text-5xl m-5 "> Projetos </h1>

                <div className="min-h-screen bg-gray-800 rounded-3xl shadow-2xl opacity-90 p-8 z-20 ">
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8'>
                        {ProjetosListar()}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projetos;