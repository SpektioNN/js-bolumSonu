let sayac = 0; // Ana sayı
let sayiciDom = document.querySelector("#sayi");// Sayıya bağlantı
let arttir = document.querySelector("#arttir");// Arttırma butonuna bağlanma
let azalt = document.querySelector("#azalt");// azaltma butonuna bağlanma

sayiciDom.innerHTML = sayac ; // Js deki arttirdiğimiz sayıyı, html deki sayıyla eşitleme

arttir.addEventListener("click",clickEvent) //yapılacak işlem "Click"
azalt.addEventListener("click",clickEvent)

function clickEvent() { // Arttırma parametreleri
    console.log(this.id)
    if (this.id == "arttir") {

        sayiciDom.innerHTML = sayac +=1 
    }
    else {

        sayiciDom.innerHTML = sayac -=1
    }
}
