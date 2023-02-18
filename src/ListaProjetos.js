import HC from "./img/projetos/healthy-care.png"
import ePF from "./img/projetos/eventoPF.png"
import eJS from "./img/projetos/exercicios-js.png"

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
    // {
    // preview: ,
    // titulo: "",
    // descricao: "",
    // link: "",
    // linguagens: [],
    // }
]

export default projetos;