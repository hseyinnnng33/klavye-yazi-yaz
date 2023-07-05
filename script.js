const word = document.querySelector("#word")
const textInput = document.querySelector("#text")
const score = document.querySelector("#score")
const time = document.querySelector("#time")
const endGame = document.querySelector("#end-game")

const kelimeler = [
    "merhaba",
    "dünya",
    "kitap",
    "kalem",
    "masa",
    "sandalye",
    "bilgisayar",
    "telefon",
    "araba",
    "ev",
    "ağaç",
    "gökyüzü",
    "deniz",
    "güneş",
    "ay",
    "yıldız",
    "kuş",
    "köpek",
    "kedi",
    "balık",
    "yemek",
    "su",
    "kahve",
    "çay",
    "sokak",
    "park",
    "okul",
    "üniversite",
    "öğrenci",
    "öğretmen",
    "doktor",
    "mühendis",
    "avukat",
    "polis",
    "hastane",
    "market",
    "restoran",
    "sinema",
    "tiyatro",
    "spor",
    "futbol",
    "basketbol",
    "tenis",
    "yüzme",
    "koşu",
    "yürüyüş",
    "müzik",
    "resim",
    "film",
    "kitaplık",
    "gece",
    "gündüz",
    "hafta",
    "ay",
    "yıl",
    "mevsim",
    "ilkbahar",
    "yaz",
    "sonbahar",
    "kış",
    "tatilegitmek",
    "arkadaş",
    "aile",
    "anne",
    "baba",
    "kardeş",
    "dede",
    "nine",
    "teyze",
    "dayı",
    "amca",
    "cousin",
    "aunt",
    "uncle",
    "grandfather",
    "grandmother",
    "sister",
    "brother",
    "mother",
    "father",
    "friend",
    "family",
    "holiday",
    "school",
    "university",
    "student",
    "teacher",
    "doctor",
    "engineer",
    "lawyer",
    "police",
    "hospital",
    "market",
    "restaurant",
    "cinema",
    "theatre",
    "sports",
    "football",
    "basketball",
    "tennis",
    "swimming",
    "running",
    "walking",
    "music",
    "painting",
    "movie",
    "library",
    "night",
    "day",
    "week",
    "month",
    "year",
    "season",
    "spring",
    "summer",
    "autumn",
    "winter",
    "goonvacation",
    "hello",
    "world",
    "book",
    "pen",
    "desk",
    "chair",
    "computer",
    "phone",
    "car",
    "house",
    "tree",
    "sky",
    "sea",
    "sun",
    "moon",
    "star",
    "bird",
    "dog",
    "cat",
    "fish",
    "food",
    "water",
    "coffee",
    "tea",
    "street",
    "park",
    "hospital",
    "market",
    "restaurant",
    "cinema",
    "theatre",
    "sports",
    "football",
    "basketball",
    "tennis",
    "swimming",
    "running",
    "walking",
    "music",
    "painting",
    "movie",
    "library",
    "night",
    "day",
    "week",
    "month",
    "year",
    "season",
    "spring",
    "summer",
    "autumn",
    "winter",
    "goonvacation"
  ];
  

let randomKelime;

let scoreEl = 0;
let timeEl = 60;

textInput.focus()

const timeInterval = setInterval(updateTime, 1000)

function getRandomKelime(){
    return kelimeler[Math.floor(Math.random() * kelimeler.length)];
}

function addWord(){
    randomKelime = getRandomKelime();
    word.innerHTML = randomKelime;
}

function updateScore(){
    scoreEl++;
    score.innerHTML = scoreEl;
}

function updateTime(){
    timeEl--;
    time.innerHTML = timeEl;

    if(timeEl === 0){
        clearInterval(timeInterval)
        gameOver()
    }
}

function gameOver(){
    endGame.innerHTML = ` 
    <h1>Süren Bitti</h1>
    <p>Skorun ${scoreEl}</p>
    <button onclick = "location.reload()">Yeniden</button>
    `
    endGame.style.display = "flex"
}

addWord()

textInput.addEventListener("input", function(e){
    const kelime = e.target.value;

    if(kelime === randomKelime){
        timeEl += 3;
        addWord()
        updateScore()

        e.target.value = ""

        updateTime()
    }
})
