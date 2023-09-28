interface TechTypes {
  frontEnd: Object;
  backEnd: Object;
  others: Object;
}

export const Techs: TechTypes = {
 frontEnd: {
  html: ["HTML5", "Avançado"],
  css: ["CSS3", "Avançado"],
  javascript: ["JavaScript", "Avançado"],
  typescript: ["Typescript", "Avançado"],
  bootstrap: ["Bootstrap 5", "Intermediário"],
  tailwind: ["TailwindCSS", "Avançado"],
  styledComponents: ["Styled-Components", "Intermediário"],
  angular: ["Angular", "Intermediário"],
  react: ["React", "Avançado"],
  python: ["Python", "Básico"],
 },
 backEnd: {
  nodejs: ["NodeJS", "Intermediário"],
  mongo: ["MongoDB", "Intermediário"],
  mongoose: ["Mongoose", "Intermediário"],
  express: ["Express", "Intermediário"],
  mysql: ["MySQL", "Básico"],
  // java: ["Java", "Básico"],
 },
 others: {
  metodoliaAgil: ["Metodologia Ágil", "Teórico"],
 }
} 
