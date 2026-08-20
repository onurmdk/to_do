//user butona basacak is ekle diye oradan prompt alacagiz sonra clickin icinde
//tr olusturup gerekli infolari alip dolduracagiz ve status olacak

const to_do = [
    {
        title: "TO-DO projesi yapilacak.",
        description:"HTML,CSS ve JS kullanilacak.",
        critical_lvl:5,
        deadline_date:"21 Aug 2026",
        status:"Devam Ediyor"
    },
    {
        title: "Saat projesi yapilacak.",
        description:"HTML,CSS ve JS kullanilacak.",
        critical_lvl:2,
        deadline_date:"25 Aug 2026",
        status:"Yapilacak"
    }
]

const tablo = document.querySelector("#tablo");

to_do.forEach(madde => {
    const satir = document.createElement("tr");
    tablo.appendChild(satir);
    const s1 = document.createElement("td");
    s1.textContent = madde.title;
    satir.appendChild(s1);
    const s2 = document.createElement("td");
    s2.textContent = madde.description;
    satir.appendChild(s2);
    const s3 = document.createElement("td");
    s3.textContent = madde.critical_lvl;
    satir.appendChild(s3);
    const s4 = document.createElement("td");
    s4.textContent = madde.deadline_date;
    satir.appendChild(s4);
    const s5 = document.createElement("td");
    s5.textContent = madde.status;
    satir.appendChild(s5);
})



