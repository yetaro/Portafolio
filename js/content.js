var Certificates = [
    {
        Title: "SOFTWARE DEVELOPMENT AND MANAGEMENT.",
        Img: "./img/logo_utld.png",
        Description: "UNIVERSIDAD TECNOLOGICA DE LA LAGUNA.",
        Subdescription: "Engineering.",
        Date: "September, 2022"
    },
    {
        Title: "INFORMATION AND COMMUNICATION TECHNOLOGIES.",
        Img: "./img/logo_utld.png",
        Description: "UNIVERSIDAD TECNOLOGICA DE LA LAGUNA.",
        Subdescription: "TSU.",
        Date: "December, 2020"
    },
    {
        Title: "CISCO COURSE CERTIFICATION.",
        Img: "./img/cisco_logo.png",
        Description: "NETWORKS AND TELECOMMUNICATIONS",
        Subdescription: "",
        Date: "July, 2019"
    },
    {
        Title: "B2+ ENGLISH LEVEL CERTIFIED BY iTEP.",
        Img: "./img/itep_logo.png",
        Description: "HIGH INTERMEDIATE ENGLISH.",
        Subdescription: "",
        Date: "September, 2021"
    },
]
var contentCertificates = $("#certificates");;
contentCertificates.empty();

for (let i = 0; i < Certificates.length; i++) {
    var html1 = '<section class="wow">';
    html1 += '  <header>';
    html1 += '      <img src="'+ Certificates[i].Img +'" alt="">';
    html1 += '  </header>';
    html1 += '  <main>';
    html1 += '      <li>';
    html1 += '          <h5 class="mini-subtitulos">'+ Certificates[i].Title +'</h5>';
    html1 += '      </li>';
    html1 += '      <li>'+ Certificates[i].Description +'</li>';
    html1 += '      <li>'+ Certificates[i].Subdescription +'</li>';
    html1 += '      <li>'+ Certificates[i].Date +'</li>';
    html1 += '  </main>';
    html1 += '</section>';

    contentCertificates.append(html1);
}