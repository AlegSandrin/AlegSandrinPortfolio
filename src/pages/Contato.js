
import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Recaptcha from 'react-recaptcha';

function Result(condition) {

    if(condition === "captcha"){
        return (
            <div className='flex absolute right-[60px] translate-y-[85px] sm:translate-y-[70px] md:translate-y-0 md:right-auto col-span-2 bg-red-700 text-white text-[0.8rem] p-2 rounded-md'>Complete a verificação para continuar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
            </div>
        )
    }
    else{
    return (
        <div className='flex absolute right-[60px] translate-y-[85px] sm:translate-y-[70px] md:translate-y-0 md:right-auto col-span-2 bg-lime-700 text-white p-2 rounded-md'>Mensagem enviada <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
    )
}
}

function Contato(props){

    const [callback, setCallback] = useState(false)
    function onloadCallback(){
        console.log("Recaptcha loaded")
        setCallback(true)
    }

    const [darkMode, setDarkMode] = useState(true)
    const [theme, setTheme] = useState('dark')
    const [seed, setSeed] = useState();
    useEffect(() => {
        setDarkMode(props.darkMode)
        if(!props.darkMode){
            setTheme('light')
        }
        else{
            setTheme('dark')
        }
    },[props])

    let recaptchaInstance;
    useEffect(() => {
        if(callback){
        // recaptchaInstance.reset()
        setSeed(Math.random()); 
        // Forma que utilizei para alternar o tema do Recaptcha, pois o .reset() não estava funcionando
    }
    },[callback, theme])

    const [result, showResult] = useState('')
    const [state, setState] = useState(false)
    
    var verifyCallback = function (response) {
        if(response){
            setState(true)
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        
        if(state){
            emailjs.sendForm('service_j8pnd9j', 'template_cwogk6l', e.target, 'IrFDu6Unz77ioGs15')
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                // console.log(error.text);
            })
            e.target.reset();
            showResult('send')

    }
    else {
        showResult('captchaError')
    }
    setTimeout(() => {
        showResult('false')
    }, 5000)
    }

    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if(message.length > 1000){
            setIsDisabled(true)
        }
        else{
            setIsDisabled(false)
        }
    },[message])

return(

<div className={`Contato ${darkMode ? "dark" : ""} overflow-y-hidden h-full w-full`} id="contato" name='contato'>

<div className="transition-all ease-in-out duration-[2000ms] p-6 lg:p-10 dark:bg-gray-700 bg-slate-200">

    <div className='items-center text-center'>
    <h1 className='text-center dark:text-purple-300 dark:saturate-100 text-purple-600 saturate-50 lg:text-6xl md:text-5xl text-4xl mx-auto' data-aos='fade-down' data-aos-delay='600'>Entre em contato comigo!</h1>
    <p className='text-center dark:text-purple-100 dark:saturate-100 text-purple-400 saturate-50 lg:text-xl md:text-xl text-xl mb-8 mt-3 mx-auto' data-aos='fade-up' data-aos-delay='800'>Oportunidades de emprego/freelance, sugestões ou perguntas estou a disposição</p>
    </div>
    <div className='dark:bg-gray-800 bg-slate-500 h-[85%] w-[98%] lg:h-[700px] lg:w-[900px] mx-auto shadow-xl opacity-[0.94] z-20 p-8 rounded-3xl overflow-hidden' data-aos='fade-up' data-aos-delay='600'>
        
    <form className='w-full h-full flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-4' onSubmit={sendEmail}>

        <div className='lg:row-span-6 '>
        <label className='label'>Nome:</label>
        <input className='input' type="text" name="user_name" placeholder='Seu nome' required/>

        <label className='label'>Email</label>
        <input className='input' type="email" name="user_email" placeholder='Seu email' required/>

        <label className='label'>Assunto</label>
        <input className='input' type='text' name="subject" placeholder='Assunto da mensagem' required/>

        <div data-aos='fade-right' data-aos-delay='1000'>
        <Recaptcha
        sitekey='6LdP-p8kAAAAAMBJp2hawp3jfjE5nfeVZQ8f7YB8'
        render='explicit'
        verifyCallback={verifyCallback}
        onloadCallback={onloadCallback}
        ref={e => recaptchaInstance = e}
        theme={theme}
        hl='pt-PT'
        size='compact'
        key={seed}
        />
        </div>

        </div>

        <div className='lg:col-span-1 lg:row-span-6'>
        <label className='label'>Mensagem</label>
        <textarea className='inputM' name="message" placeholder='Diga-me' value={message} onChange={(e) => setMessage(e.target.value)} required/>
        <div className='flex items-center justify-between gap-2'>
            <p className={`font-bold md:mb-0 mb-5 text-sm ${message.length > 1000 ? 'text-red-700' : 'text-white'}`}>{`${message.length}/1000`}</p>
        </div>

        <div data-aos='fade-left' data-aos-delay='1000'>
        <input disabled={isDisabled} className={`button col-span-2 ${isDisabled ? 'saturate-0' : 'saturate-100'}`} type="submit" value="Enviar"/>
        </div>

        <div className='result'> {result === "send" ? Result('send') : null} </div> 
        <div className='result'> {result === "captchaError" ? Result('captcha') : null} </div> 

        </div>

        <div className='w-auto lg:mx-auto' data-aos='fade-up' data-aos-delay='1000'>
        <div className='md:col-span-2 md:flex grid grid-cols-3 h-[50px] lg:-mb-8 -translate-y-14 md:translate-y-0 lg:-translate-y-5 sm:gap-5 gap-2 md:w-auto sm:w-[50%] w-[35%] md:gap-10 float-left lg:mx-auto' >
            <a className='icon' href='https://github.com/AlegSandrin'> <img src='https://cdn-icons-png.flaticon.com/512/1322/1322053.png' width='40px' height='40px'/> </a>
            <a className='icon' href='https://www.linkedin.com/in/alexsandro-urbano-666292237/'> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384889.png' width='40px' height='40px'/> </a>
            <a className='icon' href='https://www.instagram.com/alexsandro.urbano9/'> <img src='https://cdn-icons-png.flaticon.com/512/408/408707.png' width='40px' height='40px'/> </a>
            <a className='icon' href='https://www.facebook.com/alexsandro.urbano.1/'> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384879.png' width='40px' height='40px'/></a>
            <a className='icon'> <img src='https://cdn-icons-png.flaticon.com/512/2335/2335279.png' width='40px' height='40px'/><h5 className='hover:text-[1rem] text-[0.8rem] translate-x-[-25px] text-white transition duration-500 hover:translate-x-[-35px]'>RedSpyBR#9490</h5></a>
        </div>
        </div>


    </form>
    

  </div>

</div>

</div>

)

}

export default Contato