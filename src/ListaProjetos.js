import HC from "./img/projetos/healthy-care.png"
import ePF from "./img/projetos/eventoPF.png"
import eJS from "./img/projetos/exercicios-js.png"
import STA from "./img/projetos/star-wars-api.png"
import ICA from "./img/projetos/ionic-cep-api.png"

var ionic = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg"
var angular =  "https://angular.io/assets/images/logos/angular/angular.svg"
var ts = "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
var firebase = "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
var mysql = "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png"
var js = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
var php = "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
var react = "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"

const projetos = [
    {
    preview: HC,
    titulo: "Healthy Care",
    descricao: "App com objetivo de trazer ao usuário informações e dicas sobre sua própria saúde",
    link: "https://healthy-care-mu.vercel.app/home",
    linguagens: [ionic,angular,ts,firebase],
    download: 'https://drive.google.com/file/d/1QyRgN9JKd4DOXMi204lK8FIoeO3bizp5/view?usp=sharing',
    },
    {
    preview: ePF,
    titulo: "Evento Paulo Freire",
    descricao: "App sobre um evento ficticio com cadastro vínculado ao banco de dados Firebase. Projeto desenvolvido para Semana Paulo Freire.",
    link: "https://app-cadastro-evento-pf.vercel.app/loading",
    linguagens: [ionic,angular,ts,firebase],
    },
    {
    preview: eJS,
    titulo: "Exercicios Javascript",
    descricao: "Algumas práticas de JavaScript",
    link: "https://exercicios-javascript-psi.vercel.app/",
    linguagens: [js],
    },
    {
    preview: STA,
    titulo: "Star Wars API App",
    descricao: "App simples para praticar request de api JSON com Ionic Framework",
    link: "https://star-wars-api-vert.vercel.app/",
    linguagens: [ionic,angular,ts],
    },
    {
    preview: ICA,
    titulo: "Ionic CEP API",
    descricao: "App que faz request a uma API atraves de um CEP fornecido pelo usuário e é retornado dados sobre esse local. Projeto desenvolvido para uma tarefa de Programação Mobile.",
    link: "https://ionic-cep-search.vercel.app/home",
    linguagens: [ionic,angular,ts],
    }
    // {
    // preview: ,
    // titulo: "",
    // descricao: "",
    // link: "",
    // linguagens: [],
    // download: '',
    // }
]

export default projetos;