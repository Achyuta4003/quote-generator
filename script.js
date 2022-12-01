const time = document.querySelector('.time')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const section = document.querySelector('.section')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')


const date = new Date;
const hour =date.getHours();

if(hour >= 0 & hour < 12){
    time.innerHTML="morning"
}
else if(hour >= 12 & hour < 16){
    time.innerHTML="afternoon";
}
else{
    time.innerHTML="night"
}
btn.addEventListener("click",newQuote)
let color1 = ['#D32F2F', '#AFB42B', '#7B1FA2','#C2185B','#689F38','#0097A7','#FFA000','#388E3C','#5D4037' ,'#F57C00' ]
let color2 = ['#FFCDD2', '#F0F4C3', '#E1BEE7','#F8BBD0','#DCEDC8','#B2EBF2','#FFECB3','#C8E6C9','#D7CCC8','#FFE0B2' ]
let quotes = ['We grow fearless when we do the things we fear.','When you want something, all the universe conspires in helping you to achieve it.','When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.',"If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",'Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.',"You can't be great if you don't feel great. Make exceptional health your number one priority.",'Impossible is just an opinion.','The secret of getting ahead is getting started.','Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.','All our dreams can come true if we have the courage to pursue them.']


let authors = ['Robin Sharma','The Alchemist','Helen Keller','Vincent Van Gogh','Paulo Coelho','Robin Sharma','Paulo Coelho','Mark Twain','Paulo Coelho','Walt Disney'];
console.log(authors.length)
let i = 0;
function newQuote (){
    i = i < color1.length-1 ? ++(i) : 0; 
    container.style.backgroundColor = color1[i];
    btn.style.backgroundColor = color1[i];
    section.style.backgroundColor = color2[i];
    section.style.color = color1[i];
    quote.innerHTML=quotes[i];
    author.innerHTML=authors[i];
}
