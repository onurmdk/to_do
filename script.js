//user butona basacak is ekle diye oradan prompt alacagiz sonra clickin icinde
//tr olusturup gerekli infolari alip dolduracagiz ve status olacak
function elemanEkle(to_do){
    tablo.innerHTML = "";
    const satir_h = document.createElement("tr");
    tablo.appendChild(satir_h);
    const h1 = document.createElement("th");
    h1.textContent = "Title";
    satir_h.appendChild(h1);
    const h2 = document.createElement("th");
    h2.textContent = "Description";
    satir_h.appendChild(h2);
    const h3 = document.createElement("th");
    h3.textContent = "Critical Level";
    satir_h.appendChild(h3);
    const h4 = document.createElement("th");
    h4.textContent = "Deadline Date";
    satir_h.appendChild(h4);
    const h5 = document.createElement("th");
    h5.textContent = "Status";
    satir_h.appendChild(h5);
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
}

function kaydet(to_do){
    localStorage.setItem("todolar",JSON.stringify(to_do));
}

let to_do;
/*= [
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
]*/
const depo = localStorage.getItem("todolar");
if(depo!=null){
    to_do = JSON.parse(depo);
}
else{
    to_do=[];
}
elemanEkle(to_do);

const form = document.querySelector("#form");
const f_title = document.querySelector("#f_title");
const f_desc = document.querySelector("#f_desc");
const f_crlvl = document.querySelector("#f_crlvl");
const f_date = document.querySelector("#f_date");
const f_status = document.querySelector("#f_status");
const buton = document.querySelector("#buton");
buton.addEventListener("click",function(e){
    e.preventDefault();
    console.log("tiklandi");
    if(f_title.value ===""||f_desc.value===""||f_date.value===""){
        alert("Formu doldurunuz")
        return;
    }
    const arr = {title: f_title.value,description: f_desc.value,critical_lvl: f_crlvl.value,deadline_date:f_date.value,status:f_status.value};
    console.log(arr);
    to_do.push(arr);
    kaydet(to_do);
    console.log(f_title.value);

    elemanEkle(to_do);
});






