let workers = document.getElementById("workers");
let team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    immagine: "wayne-barnett-founder-ceo.jpg",
  },

  {
    nome: " Angela Caroll",
    ruolo: "Chief Editor",
    immagine: "angela-caroll-chief-editor.jpg",
  },

  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    immagine: "walter-gordon-office-manager.jpg",
  },

  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    immagine: "angela-lopez-social-media-manager.jpg",
  },

  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    immagine: "scott-estrada-developer.jpg",
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    immagine: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < team.length; i++) {
  const element = team[i];
  console.log(`${element.nome} ${element.ruolo}`);
  workers.innerHTML += `${element.nome} ${element.ruolo} ${element.immagine}`;
}