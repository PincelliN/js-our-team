//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

const Team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "../img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Carol",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg",
  },
];

//
for (let i = 0; i < Team.length; i++) {
  const element = Team[i];

  let Name = element.name;
  console.log(Name);
  let Role = element.role;
  console.log(Role);
  let Pic = element.image;
  console.log(Pic);
  document.getElementById("box-card").innerHTML +=
    '<div class="col card"> <img class="card-img-top img-fluid" scr='+Pic+' alt="People-img"><div class="card-Body"><h5 class="card-title text-center">' +
    Name +
    '</h5><p class=text-center>' +
    Role +
    '</p></div></div>';
}
