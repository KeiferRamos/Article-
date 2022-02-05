const itemArray = [
    {
        id: 'article1',
        title: 'Article 1097',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        when an unknown printer.`,
        date: 'September 13 1994',
        img: 'img1.jpg'
    },
    {
        id: 'article2',
        title: 'Article 2012',
        content: `It is a long established fact that a reader will be distracted 
        by the readable content of a page when looking at its layout.`,
        date: 'November 19 2012',
        img: 'img2.jpg'
    },
    {
        id: 'article3',
        title: 'Article 1997',
        content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia,`,
        date: 'December 9 2009',
        img: 'img3.jpg'
    },
    {
        id: 'article4',
        title: 'Article 1994',
        content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia,`,
        date: 'December 9 2009',
        img: 'img4.jpg'
    },
    {
        id: 'article5',
        title: 'Article 2018',
        content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia,`,
        date: 'December 12 2019',
        img: 'img5.jpg'
    }
];

const Articles = document.querySelector('.articles');
const btns = document.querySelector('.buttons');
const imagecontainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded',()=>{
    displayItems();
    displayBtns();
});

function displayItems(){
    const articles = itemArray.map((item)=>{
        return  `<div id="${item.id}" class="article">
                    <h2 class="article-title">${item.title}</h2>
                    <p class="content">${item.content}</p>
                    <p class="date">${item.date}</p>
                 </div>`
    }).join('');
    Articles.innerHTML = articles;
}

function displayBtns(){
    const buttons = itemArray.map((item)=>{
        return (item == itemArray.at(0)) ? `<li class="btn active" href="${item.id}">${item.title}</li>`:
        `<li class="btn" href="${item.id}">${item.title}</li>`;
    }).join('');
    btns.innerHTML = buttons;
    let liBtn = document.querySelectorAll('li');
    liBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            let activeBtn = e.currentTarget;
            let item = itemArray.find((item)=> item.id === activeBtn.getAttribute('href'));
            imagecontainer.style.background = `url(${item.img})`;
            let activeArticle = document.getElementById(item.id);
            let articles  = Articles.querySelectorAll('.article');
            articles.forEach((item)=>{
               item.style.display =  (item === activeArticle) ? 'block' : 'none';
            });
            activeBtn.classList.add('active');
            liBtn.forEach((item)=>{
                if(item !== activeBtn){
                    item.classList.remove('active');
                }
            });
        });
    });
}
