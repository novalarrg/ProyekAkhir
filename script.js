// Data card buat content
const dataCard = [{
        title: "UI/UX Bootcamp",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/UIUX_Kursus.png"
    },
    {
        title: "Mobile App Bootcamp",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/MobileApp_Kursus.png"
    },
    {
        title: "Data Science Bootc..",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/DataScience_Kursus.png"
    },
    {
        title: "Full Stack Web",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/FullStack_Kursus.png"
    },
    {
        title: "Cybersecurity Bootc..",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/Cybersecurity_Kursus.png"
    },
    {
        title: "DevOps Bootcamp",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/DevOps_Kursus.png"
    },
    {
        title: "Blockchain Dev Bootc..",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/Blockchain_Kursus.png"
    },
    {
        title: "Cloud Computing",
        content: "Desain UI/UX, membekali dengan pengetahuan dan keterampilan.",
        imageUrl: "../ProyekAkhir/Assets/Image/CloudComputing_Kursus.png"
    }
];

const cardContainer = document.getElementById("cardContainer");

for (let i = 0; i < dataCard.length; i++) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    cardElement.innerHTML = `
      <img src="${dataCard[i].imageUrl}" alt="${dataCard[i].title}">
      <div>
      <h2>${dataCard[i].title}</h2>
      <p>${dataCard[i].content}</p>
      </div>
    `;

    cardContainer.appendChild(cardElement);
}