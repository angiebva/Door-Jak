// creation of characters
    const VISITORS = [
  {
    name: "SoyJak",
    avatar: "👵",
    img: "https://soyjakwiki.org/images/5/58/SoyWojak.png?20220130102250",
    altImg: "https://media.tenor.com/AIY5Qv4KVE0AAAAj/soyjak-angry.gif",
    safe: true,
    desc: "a normal lookin guy",
    quote: "H-hi, you don't happen to have an extra room do you?",
    d_dial1: "uhhh, im like, a normal guy",
    d_dial2: "i-i'm from just down the road",
    d_dial3: "HOW COULD YOU!?!?!?",
  },
  {
    name: "FeralJak",
    avatar: "😈",
    img: "https://soyjakwiki.org/images/4/4f/Feraljak.png",
    altImg :"https://soyjakwiki.org/images/0/02/Ragejak.jpg",
    safe: false,
    desc: "Bro looks mad about something",
    quote: "LET! ME! IN!!!!!!!",
    d_dial1:"OPEN THE DOOR! NOW!",
    d_dial2:"WHO CARES!?",
    d_dial3: "REEEEEEEEEE",
  },
  {
    name: "WholesomeJak",
    avatar: "📦",
    img: "https://soyjakwiki.org/images/6/63/Wholesome_soyjak.png",
    altImg: "https://soyjakwiki.org/images/9/94/Guinnessworldrecordsoyjak.png",
    safe: true,
    desc: "A friendly lookin fella",
    quote: "Hey bud! You got extra room in there?",
    d_dial1: "i'm not gonna do anything don't worry",
    d_dial2: "oh just from a few blocks over, hope that's not a bother",
    d_dial3: "MEANIE!",
  },
  {
    name: "Wojak",
    avatar: "📋",
    img: "https://static.wikia.nocookie.net/rage-guy/images/a/a4/Wojak_high_res.png/revision/latest?cb=20250225170539",
    altImg:"https://static.wikia.nocookie.net/rage-guy/images/7/75/Crying_wojak.jpg/revision/latest?cb=20250225194923",
    safe: true,
    desc: "looks like just just about any chill guy",
    quote: "hey i'm kinda lost, mind letting me stay?",
    d_dial1:"I just need a place to stay for now",
    d_dial2:"like, a few miles away? i don't know",
    d_dial3:"well FINE!",
  },
  {
    name: "Suspicious Fella",
    avatar: "🍪",
    img: "https://static.wikia.nocookie.net/rage-guy/images/a/af/Pngimg.com_-_wojak_PNG109603.png/revision/latest?cb=20250115092822",
    altImg: "https://static.wikia.nocookie.net/rage-guy/images/3/37/Oomer2.jpg/revision/latest?cb=20250226163130",
    safe: false,
    desc: "his expression looks forced",
    quote: "Hi friend! You don't happen to have an extra room do you? i won't be here for long...",
    d_dial1:"because you should. wouldn't it be the right thing to do? ;)",
    d_dial2:"don't worry about it.",
    d_dial3:"You'll regret that.",
  },
  {
    name: "ZoomerJak",
    avatar: "🎁",
    img: "https://static.wikia.nocookie.net/rage-guy/images/0/0e/Zoomer_Wojak.png/revision/latest?cb=20250228190413",
    altImg: "https://i.kym-cdn.com/photos/images/newsfeed/001/472/891/015.png",
    safe: true,
    desc: "some guy your age",
    quote: "sup twin! i lowkenuinely need a place to stay for the night.",
    d_dial1:"cuz it'd be so poggermaxxing my guy",
    d_dial2: "highkey like 3 towncels over",
    d_dial3: "*zoomer stare*",
  },
  {
    name: "NPC",
    avatar: "🔧",
    img: "https://static.wikia.nocookie.net/rage-guy/images/2/23/NPC.png/revision/latest?cb=20250226055735",
    altImg:"https://static.wikia.nocookie.net/rage-guy/images/4/43/Angry_NPC.jpg/revision/latest?cb=20250225195246",
    safe: true,
    desc: "an NPC, theres a bunch of these guys around",
    quote: "hey can i stay for a bit",
    d_dial1:"because it's the nice thing to do",
    d_dial2:"a few blocks over",
    d_dial3:"what a meanie!",
  },
  {
    name: "ChudJak",
    avatar: "😰",
    img: "https://soyjakwiki.org/images/3/30/Chudjak.png",
    altImg:"https://s.yimg.com/ny/api/res/1.2/.YfF7KyFN7drhMhxlNH6ew--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExMDY7Y2Y9d2VicA--/https://media.zenfs.com/en/know_your_meme_909/6c9d32de6489dbf48963f9d03fb6e618",
    safe: false,
    desc: "he's wearing an overcoat and flipflops, what an odd choice for an outfit",
    quote: "hey can you open this door please? i'm just checking in",
    d_dial1: "are you okay? is everyone in this house okay?",
    d_dial2: "open the door. NOW. or i will fucking END you. do you understand me?",
    d_dial3: "*screeches maniacally*",
  },
  {
    name: "BoomerJak",
    avatar:"😎",
    img:"https://static.wikia.nocookie.net/rage-guy/images/d/db/Boomer_Wojak.png/revision/latest?cb=20250228190414",
    altImg:"https://static.wikia.nocookie.net/rage-guy/images/2/29/Tired_Wojak.png/revision/latest?cb=20250226163130",
    safe: true,
    desc:"some old guy who's not gonna leave behind an inheritance for his kids",
    quote:"lettin' me in would be boomertastic",
    d_dial1:"because you respect your elders, don't you?",
    d_dial2:"respect your elders and don't ask questions",
    d_dial3:"back in my day your neighbors would chew you out for doing that!",
  },
  {
    name: "PinkJak",
    avatar:"🤬",
    img:"https://static.wikia.nocookie.net/rage-guy/images/f/f2/PngItem_2964915.png/revision/latest?cb=20230506112626",
    altImg:"https://static.wikia.nocookie.net/rage-guy/images/7/78/E1trI5UXsAIFbHJ.png/revision/latest?cb=20230506112125",
    safe:false,
    desc:"some crackhead who hasn't had a dose in a while",
    quote:"OPEN THE DOOR!!!!!",
    d_dial1:"OPEN IT!!!",
    d_dial2:"I DON'T CARE! OPEN THE DOOR!",
    d_dial3:"*claws at the door till his fingers bleed*",
  },
  {
    name: "DoomerJak",
    avatar:"☹️",
    img:"https://static.wikia.nocookie.net/rage-guy/images/4/4d/Doomer.png/revision/latest?cb=20250228190414",
    altImg:"https://static.wikia.nocookie.net/rage-guy/images/0/0d/Pngimg.com_-_wojak_PNG109604.png/revision/latest?cb=20250115092851",
    safe:false,
    desc:"has a rather depressing aura",
    quote:"hey can you let me in, im kinda sad rn",
    d_dial1:"i PROMISE im not gonna make u sad",
    d_dial2:"i don't know my minds been kinda shit rn",
    d_dial3:"fiiiiiiine, you're just like the rest of them",
  },
  {
    name: "Coomer",
    avatar:"🍆",
    img:"https://static.wikia.nocookie.net/rage-guy/images/a/a9/Coomer.png/revision/latest/scale-to-width-down/1000?cb=20250228190414",
    altImg:"https://static.wikia.nocookie.net/rage-guy/images/6/61/Nooticer_Wojak.png/revision/latest?cb=20250228190411",
    safe:false,
    desc:"he looks like he hasn't left his mom's basement in months",
    quote:"hey i got evicted cuz i couldn'y pay rent, spend it on goon material, mind letting me in?",
    d_dial1:"cuz im chill, gonna let me in now?",
    d_dial2:"like, those shitty cheap townhouses over there. or at least i was living there till yesterday",
    d_dial3:"well FINE no goonstash for you!",
  },
];

// variables
let score = 0;
let round = 0;
let correct = 0;
let goodStreak = 0;
let currentVisitor = null;
let usedIndices = [];


function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function startGame() {
  score = 3;
  round = 0;
  goodStreak = 0;
  lifeStreak = 0;
  usedIndices = [];
  document.getElementById('score-hud').textContent = score;
  correct = 0;
  document.getElementById('round-hud').textContent = 0;
  show('house-screen');
}

function openDoor() {
  const pool = VISITORS.map((_, i) => i).filter(i => !usedIndices.includes(i));
  if (pool.length === 0) usedIndices = [];
  const idx = pool[Math.floor(Math.random() * pool.length)];
  usedIndices.push(idx);
  currentVisitor = VISITORS[idx];

  document.getElementById('v-img').src = currentVisitor.img;
  document.getElementById('v-name').textContent = currentVisitor.name;
  document.getElementById('v-desc').textContent = currentVisitor.desc;
  document.getElementById('v-quote').textContent = '"' + currentVisitor.quote + '"';
  document.getElementById('speech-bubble').classList.add('hidden');
  document.getElementById('speech-text').textContent = "";
  document.getElementById('door-round').textContent = round;
  document.getElementById('door-streak').textContent = goodStreak;
  document.getElementById('door-hearts').textContent = score;
  show('door-screen');
}


function askQuestion(type) {
  const bubble = document.getElementById('speech-bubble');
  const text = document.getElementById('speech-text');

  bubble.classList.remove('hidden');

  if (type === 1) {
    text.textContent = currentVisitor.d_dial1;
  } else if (type === 2) {
    text.textContent = currentVisitor.d_dial2;
  }
}

function addGoodStreak() {
  goodStreak++;
}

function makeChoice(letIn) {
  round++;
  if (letIn && !currentVisitor.safe) {
    score--;
    goodStreak = 0;
    document.getElementById('score-hud').textContent = score;
    if (score <= 0) {
      document.getElementById('final-score').textContent = round;
      show('gameover-screen');
      return;
    }
      document.getElementById("img2").src = "https://media.tenor.com/KqIKBzpRVAEAAAAe/crying-emoji.png";
      document.getElementById('dia3').textContent = "";
    document.getElementById('r-emoji').textContent = '💔';
    document.getElementById('r-title').textContent = 'You let in a strange one!';
    document.getElementById('r-msg').textContent =
    currentVisitor.name + ' was dangerous! -1 life ❤️\n\n❤️ ' + score + ' left.';
    show('result-screen');
    return;
  }

if (!letIn && currentVisitor.safe) {
    document.getElementById("img2").src = currentVisitor.altImg;
    document.getElementById('dia3').textContent = currentVisitor.d_dial3;
  document.getElementById('r-emoji').textContent = '😢';
  document.getElementById('r-title').textContent = 'You sent away a friendly... how mean.';
  document.getElementById('r-msg').textContent = currentVisitor.name + ' just wanted to come in!';
  show('result-screen');
  return;
}

if (letIn && currentVisitor.safe) {
  correct++;
  if (correct >= 10) { show('win-screen'); return; }

  addGoodStreak();

  document.getElementById("img2").src = "https://media1.tenor.com/m/gq-yroMdIUoAAAAC/e.gif";
  document.getElementById('dia3').textContent = "";


    document.getElementById('r-emoji').textContent = '✅';
    document.getElementById('r-title').textContent = 'Good call!';
    document.getElementById('r-msg').textContent =
      `${currentVisitor.name} was safe! 🔥 Streak: ${goodStreak}`;

 

  show('result-screen');
  return;
}

// Correctly turned away a bad person
correct++;

addGoodStreak();

document.getElementById("img2").src = currentVisitor.altImg;
document.getElementById('dia3').textContent = currentVisitor.d_dial3;

document.getElementById('r-emoji').textContent = '✅';
document.getElementById('r-title').textContent = 'Danger avoided!';

if (goodStreak === 0) {
  document.getElementById('r-msg').textContent =
    `3 in a row! ❤️ ${score} lives.`;
} else {
  document.getElementById('r-msg').textContent =
    `${currentVisitor.name} was bad news. 🔥 Streak: ${goodStreak}`;
}
 
show('result-screen');

if (round >= 10) {
  document.getElementById('final-score').textContent = correct;

  if (correct >= 7) {
    show('win-screen'); 
  } else {
    show('gameover-screen');
  }
  return;
}

}

function openRules() {
  document.getElementById('rules-popup').classList.remove('hidden');
}

function closeRules() {
  document.getElementById('rules-popup').classList.add('hidden');
}

function nextRound() {
document.getElementById('round-hud').textContent = round;
document.getElementById('streak-hud').textContent = goodStreak;
  show('house-screen');
}
function resetGame() {
  startGame();
}
