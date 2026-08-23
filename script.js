function elemanEkle(){
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
    const h6 = document.createElement("th");
    h6.textContent = "Islemler";
    satir_h.appendChild(h6);
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
        const s6 = document.createElement("td");
        const editbuton = document.createElement("button");
        editbuton.textContent = "Edit";
        editbuton.addEventListener("click", function(e){
            console.log(madde.id);
            const idli = to_do.find(liste => liste.id === madde.id);
            editId = idli.id;
            f_title.value = idli.title;
            f_desc.value = idli.description;
            f_crlvl.value = idli.critical_lvl;
            f_date.value = idli.deadline_date;
            f_status.value = idli.status;
        });
        s6.appendChild(editbuton);
        const silbuton = document.createElement("button");
        silbuton.textContent = "Delete";
        silbuton.addEventListener("click",function(e){
            to_do = to_do.filter(liste => liste.id !== madde.id);
            kaydet();
            elemanEkle();
        })
        s6.appendChild(silbuton);
        satir.appendChild(s6);
    })
}

function kaydet(){
    localStorage.setItem("todolar",JSON.stringify(to_do));
}

let to_do;
let editId = null;
const depo = localStorage.getItem("todolar");

if(depo!=null){
    to_do = JSON.parse(depo);
}
else{
    to_do=[];
}
elemanEkle();

const form = document.querySelector("#form");
const f_title = document.querySelector("#f_title");
const f_desc = document.querySelector("#f_desc");
const f_crlvl = document.querySelector("#f_crlvl");
const f_date = document.querySelector("#f_date");
const f_status = document.querySelector("#f_status");
const buton = document.querySelector("#buton");
const yapilacaklar = document.querySelector("#yapilacaklar");
const devamEdiyor = document.querySelector("#devamEdiyor");
const tamamlananlar = document.querySelector("#tamamlananlar");
buton.addEventListener("click",function(e){
    e.preventDefault();
    console.log("tiklandi");
    if(f_title.value ===""||f_desc.value===""||f_date.value===""){
        alert("Formu doldurunuz")
        return;
    }
    if(editId){
        const editlenen = to_do.find(list => list.id == editId);
        editlenen.title = f_title.value;
        editlenen.description = f_desc.value;
        editlenen.critical_lvl = f_crlvl.value;
        editlenen.deadline_date = f_date.value;
        editlenen.status = f_status.value;
        editId = null;
    }
    else{
        const arr = {id:Date.now(),title: f_title.value,description: f_desc.value,critical_lvl: f_crlvl.value,deadline_date:f_date.value,status:f_status.value};
        to_do.push(arr);
    }
    kaydet();
    elemanEkle();
    f_title.value = "";
    f_desc.value = "";
    f_date.value = "";
    f_status.value = "Yapilacak";
    f_crlvl.value = "1";
});
