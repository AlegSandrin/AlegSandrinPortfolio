
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Result = () => {
    return(
        <div className='flex absolute right-[60px] translate-y-[85px] sm:translate-y-[70px] md:translate-y-0 md:right-auto col-span-2 bg-lime-700 text-white p-2 rounded-md'>Mensagem enviada <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
    )
}

function Contato(){

        const form = useRef();
      
        const [result, showResult] = useState(false)

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_j8pnd9j', 'template_cwogk6l', e.target, 'IrFDu6Unz77ioGs15')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            e.target.reset();
            showResult(true)
        }
        setTimeout(() => {
            showResult(false)
        }, 5000)

return(

<div className="Contato lg:h-[100vh] h-full w-full bg-gray-700 p-6 lg:p-10" id="contato" name='contato'>

    <div className='w-[100%] items-center text-center'>
    <h1 className='text-center text-purple-300 lg:text-6xl md:text-5xl text-4xl mx-auto'>Entre em contato comigo!</h1>
    <p className='text-center text-purple-100 lg:text-xl md:text-xl text-xl mb-8 mt-3 mx-auto'>Oportunidades de emprego/freelance, sugestões ou perguntas estou a disposição</p>
    </div>
    <div className=' bg-gray-800 h-[85%] w-[98%] lg:h-[600px] lg:w-[900px] mx-auto shadow-2xl opacity-95 p-8 z-20 rounded-3xl'>
        
    <form className='w-full h-full flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-4 border-blue-500' ref={form} onSubmit={sendEmail}>

        <div className='lg:row-span-6 '>
        <label className='label'>Nome:</label>
        <input className='input' type="text" name="user_name" placeholder='Seu nome' required/>

        <label className='label'>Email</label>
        <input className='input' type="email" name="user_email" placeholder='Seu email' required/>

        <label className='label'>Assunto</label>
        <input className='input' type='text' name="subject" placeholder='Assunto da mensagem' required/>
        </div>
        <div className='lg:col-span-1 lg:row-span-6 '>
        <label className='label'>Mensagem</label>
        <textarea className='inputM' name="message" placeholder='Diga-me' required/>
        <input className='button col-span-2' type="submit" value="Enviar" />
        
        <div className='result'> {result ? <Result/> : null} </div> 

        </div>
        <div className='md:col-span-2 md:flex grid grid-cols-3 h-[50px] lg:-mb-8 -translate-y-14 md:translate-y-0 sm:gap-5 gap-2 md:w-auto sm:w-[50%] w-[35%] md:gap-10 float-left lg:mx-auto'>
            <a className='icon ' href='https://github.com/AlegSandrin'> <img src='https://cdn-icons-png.flaticon.com/512/1322/1322053.png' width='40px' height='40px'/> </a>
            <a className='icon ' href='https://www.linkedin.com/in/alexsandro-urbano-666292237/'> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384889.png' width='40px' height='40px'/> </a>
            <a className='icon ' href='https://www.instagram.com/alexsandro.urbano9/'> <img src='https://cdn-icons-png.flaticon.com/512/408/408707.png' width='40px' height='40px'/> </a>
            <a className='icon ' href='https://www.facebook.com/alexsandro.urbano.1/'> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384879.png' width='40px' height='40px'/></a>
            <a className='icon '> <img src='https://cdn-icons-png.flaticon.com/512/2335/2335279.png' width='40px' height='40px'/><h5 className='hover:text-[1rem] text-[0.8rem] translate-x-[-25px] text-white hover:translate-x-[-35px]'>RedSpyBR#9490</h5></a>
        </div>

    </form>

    </div>

</div>

)

}

export default Contato