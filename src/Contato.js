
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Result = () => {
    return(
        <div></div>
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

return(

<div className="Contato h-full bg-gray-700 p-6 lg:p-10" id="contato">

    <h1 className='flex text-center text-purple-300 text-6xl h-[100px] w-[700px] mx-auto'>Entre em contato comigo!</h1>

    <div className=' bg-gray-800 h-[80%] w-[98%] lg:h-[600px] lg:w-[900px] mx-auto shadow-2xl opacity-95 p-8 z-20'>
        
    <form className='w-full h-full flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-4  border-blue-500' ref={form} onSubmit={sendEmail}>

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
        </div>
        <div className='col-span-2 h-[50px] lg:-mb-8 translate-y-[10px] lg:translate-y-0 flex bottom-0 gap-7 lg:gap-10 float-left lg:mx-auto'>
            <a className='icon' href='https://github.com/AlegSandrin'> <img src='https://cdn-icons-png.flaticon.com/512/1322/1322053.png' width='40px' height='40px'/> </a>
            <a className='icon' href='https://www.linkedin.com/in/alexsandro-urbano-666292237/'> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384889.png' width='40px' height='40px'/> </a>
            <a className='icon' href='https://www.instagram.com/alexsandro.urbano9/'> <img src='https://cdn-icons-png.flaticon.com/512/408/408707.png' width='40px' height='40px'/> </a>
            <a className='icon' href='https://www.facebook.com/alexsandro.urbano.1/'> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384879.png' width='40px' height='40px'/></a>
            <a className='icon'> <img src='https://cdn-icons-png.flaticon.com/512/2335/2335279.png' width='40px' height='40px'/><h5 className='hover:text-[1rem] text-[0.8rem] translate-x-[-25px] text-white hover:translate-x-[-35px]'>RedSpyBR#9490</h5></a>
        </div>

    </form>

    </div>

    <div className='confirm'> {result ? <Result/> : null} </div> 

    </div>

)

}

export default Contato