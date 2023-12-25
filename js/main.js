let menuBnt = document.querySelector('.aside h3');
menuBnt.addEventListener('click',()=>{
    document.querySelector('.nav').classList.toggle('show');
})


let li = document.querySelectorAll('ul li a');

li.forEach(link => {
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        let page = document.querySelector(link.dataset.section);
        if(!page.classList.contains('active')){
            hidepages();
            page.classList.add('active')
        }
    })
});

function hidepages(){
    li.forEach(page =>{
        console.log(document.querySelector(page.dataset.section))
        document.querySelector(page.dataset.section).classList.remove('active');
    })
}

