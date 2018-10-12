const btn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');
const text = document.getElementById('text');
const author = document.getElementById('author');
const body = document.getElementsByTagName('body')[0];
const html = document.getElementsByTagName('html')[0];
const url = 'https://talaikis.com/api/quotes/random/';

const colors = ['lightgreen', 'lightblue', 'tomato', 
                'pink', 'orange', 'cyan', '#542733',
                '#8C4646', '#85C4B9', '#354458',
                '#9B539C', '#8C6954', '#260126',
                '#7F7F7F', '#BFF073', '#60047A', 
                ' #9C0F5F'];

const getQuote = async () => {
    let request = await fetch(url);
    let data = await request.json();
    return { data };
}
    
let color = 0;

btn.addEventListener('click', () => {
    text.style.opacity = 0;
    author.style.opacity = 0;
    setTimeout(() => getQuote()
        .then(json => {
           let quote = json.data.quote;
           let auth = json.data.author;
           text.innerHTML = `" ${quote} "`;
           author.innerHTML = `~ ${auth}`;
           tweetBtn.href = `https://twitter.com/intent/tweet?text=${text.innerHTML} ${author.innerHTML}`;
        }), 500);
    setTimeout(() => { 
        text.style.opacity = 1
        author.style.opacity = 1
    }, 1000);
    body.style.backgroundColor = colors[color];
    html.style.backgroundColor = colors[color];
    btn.style.backgroundColor = colors[color];
    
    color++;
    if (color > colors.length - 1) color = 0;
});

