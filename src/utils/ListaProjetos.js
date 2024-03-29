import HC from "../assets/img/projetos/healthy-care.png"
import ePF from "../assets/img/projetos/eventoPF.png"
import eJS from "../assets/img/projetos/exercicios-js.png"
import STA from "../assets/img/projetos/star-wars-api.png"
import ICA from "../assets/img/projetos/ionic-cep-api.png"
import IT from "../assets/img/projetos/ionic-triangulo.png"
import DGV from "../assets/img/projetos/datagridview.png"
import PMD from "../assets/img/projetos/php-mysql-dashboard.png"
import FC from "../assets/img/projetos/FireChat.png"

var ionic = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg"
var angular =  "https://angular.io/assets/images/logos/angular/angular.svg"
var ts = "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
var firebase = "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
var mysql = "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png"
var js = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
var php = "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
var react = "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
var csharp = "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
var tailwind = "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
var tauri = "https://img.gs/czjpqfbdkz/full/https://github.com/tauri-apps/tauri/raw/dev/app-icon.png"
var androidstudio = "https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png"

const projetos = [
    {
    preview: FC,
    titulo: "FireChat",
    descricao: "Aplicação Web de conversa entre usuários com chat público (geral) e privado (entre usuários específicos)",
    link: "https://fire-chat-eight.vercel.app/",
    linguagens: [react, js, firebase, tailwind, tauri],
    download: 'https://drive.google.com/file/d/141WcQ8Y4v36vtBOZhys0BBp2_YyS2vaq/view?usp=share_link',
    },
    {
    preview: HC,
    titulo: "Healthy Care",
    descricao: "App com objetivo de trazer ao usuário informações e dicas sobre sua própria saúde",
    link: "https://healthy-care-mu.vercel.app/home",
    linguagens: [ionic,angular,ts,firebase,androidstudio],
    download: 'https://drive.google.com/file/d/1QyRgN9JKd4DOXMi204lK8FIoeO3bizp5/view?usp=sharing',
    },
    {
    preview: ePF,
    titulo: "Evento Paulo Freire",
    descricao: "App sobre um evento ficticio com cadastro vínculado ao banco de dados Firebase. Projeto desenvolvido para Semana Paulo Freire.",
    link: "https://app-cadastro-evento-pf.vercel.app/loading",
    linguagens: [ionic,angular,ts,firebase,androidstudio],
    download: "https://drive.google.com/file/d/16_EZyi95dQYTL2R0OIwItBGIB_o53PFJ/view?usp=sharing"
    },
    {
    preview: ICA,
    titulo: "Ionic CEP API",
    descricao: "App que faz request a uma API atraves de um CEP fornecido pelo usuário e é retornado dados sobre esse local. Projeto desenvolvido para uma tarefa de Programação Mobile.",
    link: "https://ionic-cep-search.vercel.app/home",
    linguagens: [ionic,angular,ts,androidstudio],
    download: "https://drive.google.com/file/d/1Hffop24ClIGW_RveBJ6MT1uUhC0eT1L6/view?usp=sharing"
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
    preview: IT,
    titulo: "Ionic-Triangulo",
    descricao: "App simples que verifica o tipo de triangulo de acordo com os valores informados no input.",
    link: "https://ionic-triangulo-six.vercel.app/home",
    linguagens: [ionic,angular,ts],
    },
    {
    preview: DGV,
    titulo: "DataGridView + SQL",
    descricao: "Aplicação em C# com banco de dados MySQL de cadastro de informações de usuários",
    link: "https://github.com/AlegSandrin/DataGridView",
    linguagens: [csharp, mysql],
    download: 'https://github.com/AlegSandrin/DataGridView/archive/refs/heads/master.zip',
    },
    {
    preview: PMD,
    titulo: "Cadastro & Login PHP-MySQL",
    descricao: "Página de cadastro e login em PHP/JS/MySql com Dashboard para administrador",
    link: "https://github.com/AlegSandrin/Cadastro-Login-PHP-MySQL",
    linguagens: [php,mysql],
    download: 'https://github.com/AlegSandrin/Cadastro-Login-PHP-MySQL/archive/refs/heads/master.zip',
    },
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

// OBS: não utilizei da API do Github para listar os projetos pois preferi listar
// apenas os projetos que mais me interessavam mostrar, com algumas adições a mais
// como imagem de preview e link para download de alguns deles