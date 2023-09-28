import { mockTechIcons } from "./mockTechIcons";

import mapApp from "/images/projects/map-app.jpg"
import portfolio23 from "/images/projects/portfolio-23.jpg"
import portfolio from "/images/projects/portfolio.jpg"
import flagApp from "/images/projects/flag-app.jpg"
import sistemaFinanceiro from "/images/projects/sistema-financeiro.jpg"


interface MockProjectType {
  mockProjects: MockProjectsTypes
}

interface MockProjectsTypes {
  id: number,
  title: string,
  description: string,
  linkRepository: string,
  linkSite: string,
  image: string,
  icons: Array<string>,
  techs: Array<string>,
  video?: string,
}

export const mockProjects = [
  {
    "id": 1,
    "title": "Portfólio 2023",
    "description": "Para esse projeto o intuito foi atualizar o portfólio, entretanto como passei a utilizar ReactJS ao invés do Angular tive que criar um novo, o que foi uma ótima oportunidade de perceber a evolução que tive nesse tempo entre a criação do primeiro e do segundo portfólio. Para esse projeto utilizei ReactJS juntamente com TailwindCSS. Em breve será adicionado ao projeto novas funcionalidades.",
    "linkRepository": "https://github.com/racalixta/portfolio-reactjs",
    "linkSite": "https://portfolio-reactjs-racalixta.vercel.app/",
    "image": "/images/projects/portfolio-23.jpg",
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.tailwind}`],
    "techs": ["HTML5", "CSS3", "ReactJS", "TailwindCSS" ],
  },
  {
    id: 2,
    title: "Controle Financeiro",
    description: "Projeto com ideia de criar um sistema de controle de finanças. Para a construção do projeto foi utilizado ReactJS junto com Typescript, Styled Components, HTML e CSS. Para o deploy do aplicativo foi utilizado o Vercel.",
    linkRepository: "https://github.com/racalixta/expense-tracker",
    linkSite: "https://expense-tracker-alpha-one.vercel.app/",
    image: "/images/projects/sistema-financeiro.jpg",
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.typescript}`],
    techs: ["HTML5", "CSS3", "React", "Typescript" ],
  },
  {
    "id": 3,
    "title": "Mapa App",
    "description": "Processo seletivo que participei para criação de dois seletores, um de Estado e outros das Cidades desse Estado com a utilização da API do IBGE. Ao selecionar uma Cidade deveria buscar as informações da Cidade na API, como uma forma de fazer a mais utilizei a biblioteca Leaflet para mostrar o mapa da Cidade selecionada. Como forma de avialação era obrigatório o uso de ReactJS e Redux, para a estilização utilizei TailwindCSS. ",
    "linkRepository": "https://github.com/racalixta/ps-ipam-seletor",
    "linkSite": "https://ps-ipam-vercel-racalixta.vercel.app/",
    "image": "/images/projects/map-app.jpg",
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.tailwind}`],
    "techs": ["HTML5", "CSS3", "React", "TailwindCSS" ],
  },
  {
    "id": 4,
    "title": "App de Países",
    "description": "Projeto de aplicativo com o intuito de mostrar informações de diversos países, para tal feito foi utilizado uma API com as informações dos países. As tecnologias utilizadas para o desenvolvimento foi HTML, CSS, React e TailwindCSS.",
    "linkRepository": "https://github.com/racalixta/flag-app",
    "linkSite": "https://flag-app-one.vercel.app/",
    "image": "/images/projects/flag-app.jpg",
    "icons": [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.react}`, `${mockTechIcons.tailwind}`],
    "techs": ["HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Portfólio 2022",
    description: "A ideia foi criar um portfólio que contém uma descrição básica sobre a minha pessoa e onde eu possa colocar todos os meus projetos desenvolvidos. Para a criação foi utilizado HTML5, CSS3, Angular e Bootstrap.",
    linkRepository: "https://github.com/racalixta/portfolio-project",
    linkSite: "https://racalixta.github.io/portfolio-project/",
    image: "/images/projects/portfolio.jpg",
    icons: [`${mockTechIcons.html}`, `${mockTechIcons.css}`, `${mockTechIcons.angular}`,`${mockTechIcons.typescript}`, `${mockTechIcons.bootstrap}`],
    techs: ["HTML5", "CSS3", "Angular", "Typescript", "Bootstrap"],
  },
]