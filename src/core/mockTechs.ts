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
  typescript: ["Typescript", "Intermediário"],
  react: ["React", "Avançado"],
  angular: ["Angular", "Intermediário"],
  tailwind: ["TailwindCSS", "Avançado"],
  bootstrap: ["Bootstrap 5", "Intermediário"],
  styledComponents: ["Styled-Components", "Intermediário"],
  // python: ["Python", "Básico"],
 },
 backEnd: {
  java: ["Java", "Básico"],
  springBoot: ["Spring Boot", "Básico"],
  nodejs: ["NodeJS", "Intermediário"],
  mongo: ["MongoDB", "Intermediário"],
  mongoose: ["Mongoose", "Intermediário"],
  express: ["Express", "Intermediário"],
  mysql: ["MySQL", "Básico"],
 },
 others: {
  metodoliaAgil: ["Metodologia Ágil", "Teórico"],
 }
} 
