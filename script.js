function elemanEkle(){
    yapilacaklar_icerik.innerHTML = "";
    devamEdiyor_icerik.innerHTML = "";
    tamamlananlar_icerik.innerHTML = "";
    to_do.forEach(madde => {
        const kart = document.createElement("div");
        kart.className = "kart";
        const baslik = document.createElement("h3");
        baslik.textContent = madde.title;
        kart.appendChild(baslik);
        const aciklama = document.createElement("p");
        aciklama.textContent = madde.description;
        kart.appendChild(aciklama);
        const seviye = document.createElement("p");
        seviye.textContent = "Critical Level: " + madde.critical_lvl;
        kart.appendChild(seviye);
        const tarih = document.createElement("p");
        tarih.textContent = "Deadline Date: " + madde.deadline_date;
        kart.appendChild(tarih);

        const editbuton = document.createElement("button");
        editbuton.textContent = "Edit";
        editbuton.className = "btn-edit";
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
        kart.appendChild(editbuton);
        const silbuton = document.createElement("button");
        silbuton.textContent = "Delete";
        silbuton.className = "btn-delete";
        silbuton.addEventListener("click",function(e){
            to_do = to_do.filter(liste => liste.id !== madde.id);
            kaydet();
            elemanEkle();
        });
        kart.appendChild(silbuton);

        let hedef;
        if(madde.status === "Yapilacak"){
            hedef = yapilacaklar_icerik;
        } 
        else if(madde.status === "Devam Ediyor"){
            hedef = devamEdiyor_icerik;
        } 
        else {
            hedef = tamamlananlar_icerik;
        }
        if(madde.status === "Yapilacak") kart.classList.add("k-yapilacak");
        else if(madde.status === "Devam Ediyor") kart.classList.add("k-devam");
        else kart.classList.add("k-tamamlandi");
        hedef.appendChild(kart);
    });
}

function kaydet(){
    localStorage.setItem("todolar",JSON.stringify(to_do));
}

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
const liste = document.querySelector("#liste");
const yapilacaklar_icerik = document.querySelector("#yapilacaklar_icerik");
const devamEdiyor_icerik = document.querySelector("#devamEdiyor_icerik");
const tamamlananlar_icerik = document.querySelector("#tamamlananlar_icerik");

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
buton.addEventListener("click",function(e){
    e.preventDefault();
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
