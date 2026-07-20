// =========================
// ELEMENTS
// =========================

const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const music = document.getElementById("musicSection");
const rose = document.getElementById("roseSection");
const finalPage = document.getElementById("final");

const beginBtn = document.getElementById("beginBtn");
const openLetter = document.getElementById("openLetter");
const continueBtn = document.getElementById("continueBtn");
const nextBtn = document.getElementById("nextBtn");
const heart = document.getElementById("heart");
const forgive = document.getElementById("forgive");

const typewriter = document.getElementById("typewriter");

// =========================
// LOVE LETTER
// =========================

const message = `Hey Shiraa ❤️

If you're reading this...

Thank you for giving me a chance.

I know you're hurt.

I know I made a mistake.

I'm not here to make excuses.

I'm here because you mean more to me than my ego ever could.

You are my favorite smile.

My favorite notification.

My favorite person.

Every moment with you has become a memory I never want to lose.

If I could undo the moment that hurt you...

I would.

But since I can't...

I'll spend every day proving that I'm worthy of your trust again.

I promise to listen better.

To understand better.

To love you better.

Because even after everything...

I'd still choose you.

Every single day.

I love you.

— Sarthak ❤️`;

let index = 0;

// =========================
// HELPERS
// =========================

function hideAll() {

intro.classList.add("hidden");
hero.classList.add("hidden");
letter.classList.add("hidden");
music.classList.add("hidden");
rose.classList.add("hidden");
finalPage.classList.add("hidden");

}

function show(section){

hideAll();

section.classList.remove("hidden");

}

function typeLetter(){

if(index < message.length){

typewriter.innerHTML += message.charAt(index);

index++;

setTimeout(typeLetter,30);

}

}

// =========================
// BUTTONS
// =========================

beginBtn.onclick = ()=>{

show(hero);

};

openLetter.onclick = ()=>{

show(letter);

typewriter.innerHTML="";
index=0;

typeLetter();

};

continueBtn.onclick = ()=>{

show(music);

};

nextBtn.onclick = ()=>{

show(rose);

};

heart.onclick = ()=>{

heartBurst();

show(finalPage);

};

forgive.onclick = ()=>{

confetti();

forgive.innerHTML="❤️ Thank You ❤️";

};

// =========================
// FLOATING HEARTS
// =========================

const floating = document.getElementById("floating-hearts");

function createHeart(){

const h = document.createElement("div");

h.innerHTML = Math.random()>0.5 ? "❤️" : "💕";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-40px";

h.style.fontSize=(16+Math.random()*25)+"px";

h.style.opacity=.85;

h.style.pointerEvents="none";

const duration=6+Math.random()*4;

h.animate([

{
transform:"translateY(0px)",
opacity:1
},

{
transform:"translateY(-120vh)",
opacity:0
}

],{

duration:duration*1000,

iterations:1

});

floating.appendChild(h);

setTimeout(()=>{

h.remove();

},duration*1000);

}

setInterval(createHeart,450);

// =========================
// HEART BURST
// =========================

function heartBurst(){

for(let i=0;i<120;i++){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left="50%";

h.style.top="55%";

h.style.fontSize=(12+Math.random()*22)+"px";

h.style.pointerEvents="none";

const angle=Math.random()*360;

const distance=100+Math.random()*450;

const x=Math.cos(angle)*distance;

const y=Math.sin(angle)*distance;

h.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) scale(.2)`,

opacity:0

}

],{

duration:1800,

fill:"forwards"

});

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},1800);

}

}

// =========================
// CONFETTI
// =========================

function confetti(){

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.innerHTML=Math.random()>0.5?"❤️":"🌸";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-30px";

c.style.fontSize=(15+Math.random()*18)+"px";

document.body.appendChild(c);

const fall=5000+Math.random()*2000;

c.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:`translateY(${window.innerHeight+150}px) rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:fall,

fill:"forwards"

});

setTimeout(()=>{

c.remove();

},fall);

}

}

// =========================
// SHOW INTRO
// =========================

show(intro);
