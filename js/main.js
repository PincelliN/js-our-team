//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

const Team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Carol",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

//
for (let i = 0; i < Team.length; i++) {
  const element = Team[i];
  document.getElementById("box-card").innerHTML +=
    '<div class="col card"> <img class="card-img-top img-fluid" scr="img/' +
    element.image +
    '" alt="People-img"><div class="card-Body"><h5 class="card-title text-center">' +
    element.name +
    "</h5><p class=text-center>" +
    element.role +
    "</p></div></div>";
}
