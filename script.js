const word = document.querySelector("#word")
const textInput = document.querySelector("#text")
const score = document.querySelector("#score")
const time = document.querySelector("#time")
const endGame = document.querySelector("#end-game")

// const kelimeler = [
//     "merhaba",
//     "dünya",
//     "kitap",
//     "kalem",
//     "masa",
//     "sandalye",
//     "bilgisayar",
//     "telefon",
//     "araba",
//     "ev",
//     "ağaç",
//     "gökyüzü",
//     "deniz",
//     "güneş",
//     "ay",
//     "yıldız",
//     "kuş",
//     "köpek",
//     "kedi",
//     "balık",
//     "yemek",
//     "su",
//     "kahve",
//     "çay",
//     "sokak",
//     "park",
//     "okul",
//     "üniversite",
//     "öğrenci",
//     "öğretmen",
//     "doktor",
//     "mühendis",
//     "avukat",
//     "polis",
//     "hastane",
//     "market",
//     "restoran",
//     "sinema",
//     "tiyatro",
//     "spor",
//     "futbol",
//     "basketbol",
//     "tenis",
//     "yüzme",
//     "koşu",
//     "yürüyüş",
//     "müzik",
//     "resim",
//     "film",
//     "kitaplık",
//     "gece",
//     "gündüz",
//     "hafta",
//     "ay",
//     "yıl",
//     "mevsim",
//     "ilkbahar",
//     "yaz",
//     "sonbahar",
//     "kış",
//     "tatilegitmek",
//     "arkadaş",
//     "aile",
//     "anne",
//     "baba",
//     "kardeş",
//     "dede",
//     "nine",
//     "teyze",
//     "dayı",
//     "amca",
//     "cousin",
//     "aunt",
//     "uncle",
//     "grandfather",
//     "grandmother",
//     "sister",
//     "brother",
//     "mother",
//     "father",
//     "friend",
//     "family",
//     "holiday",
//     "school",
//     "university",
//     "student",
//     "teacher",
//     "doctor",
//     "engineer",
//     "lawyer",
//     "police",
//     "hospital",
//     "market",
//     "restaurant",
//     "cinema",
//     "theatre",
//     "sports",
//     "football",
//     "basketball",
//     "tennis",
//     "swimming",
//     "running",
//     "walking",
//     "music",
//     "painting",
//     "movie",
//     "library",
//     "night",
//     "day",
//     "week",
//     "month",
//     "year",
//     "season",
//     "spring",
//     "summer",
//     "autumn",
//     "winter",
//     "goonvacation",
//     "hello",
//     "world",
//     "book",
//     "pen",
//     "desk",
//     "chair",
//     "computer",
//     "phone",
//     "car",
//     "house",
//     "tree",
//     "sky",
//     "sea",
//     "sun",
//     "moon",
//     "star",
//     "bird",
//     "dog",
//     "cat",
//     "fish",
//     "food",
//     "water",
//     "coffee",
//     "tea",
//     "street",
//     "park",
//     "hospital",
//     "market",
//     "restaurant",
//     "cinema",
//     "theatre",
//     "sports",
//     "football",
//     "basketball",
//     "tennis",
//     "swimming",
//     "running",
//     "walking",
//     "music",
//     "painting",
//     "movie",
//     "library",
//     "night",
//     "day",
//     "week",
//     "month",
//     "year",
//     "season",
//     "spring",
//     "summer",
//     "autumn",
//     "winter",
//     "goonvacation"
// ];

const kelimeler = []

async function gosterApi(){
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=400")
    const data = await res.json()

    data.forEach((item)=>{
        kelimeler.push(item.toLowerCase())
    })

    kelimeEkle()
}

console.log(kelimeler)
gosterApi()

// Rastgele seçilen kelimeyi buna atadık
let randomKelime;

// Skorumuz
let skor = 0;
// Zamanımız
let zaman = 60;

let zamanHesap = setInterval(zamanUpdata, 1000)

// Rastgele bir kelime seçiyoruz
function randomWord(){
    return kelimeler[Math.floor(Math.random() * kelimeler.length)];
}


// Ekrana kelime yazdırmak için
function kelimeEkle(){
    randomKelime = randomWord()
    word.innerHTML = randomKelime;
}

// İlk kelimeyi ekrana yazdır
kelimeEkle()

// Skorun hesaplandıgı yer
function skorArt(){
    skor++;
    score.innerHTML = skor;
}

// Zamanını azaltmak ve ekrana yazdırmak
function zamanUpdata(){
    zaman--;
    time.innerHTML = zaman;

    if(zaman === 0){
        clearInterval(zamanHesap)
        gameOver()
    }
}

// Oyun bittiginde ekranda gösterilecek yer
function gameOver(){
    endGame.innerHTML = `
    <h1>Süreniz Bitti</h1>
    <p>Skorunuz ${skor}</p>
    <button onclick = "location.reload()">Yenile</button>
    `
    endGame.style.display = "flex"
}

// Girdi olarak alınan veri
textInput.addEventListener("input", function(e){
    let degerInput = e.target.value;

    // Eger girdi ile kelime eşitse
    if(degerInput === randomKelime){
        // Skoru arttır
        skorArt()
        // Yeni Kelime Ekle
        kelimeEkle()

        e.target.value = ""
    }
})
