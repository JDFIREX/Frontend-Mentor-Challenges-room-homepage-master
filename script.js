// resize
window.addEventListener('resize',(e) => imgChange(e));
window.addEventListener('load',(e) => imgChange(e))


function imgChange(e){
    let imgIndex = document.querySelector('.discover_slider_img').dataset.index;
    console.log(e)
    if(window.innerWidth > 750){
        document.querySelector('.discover_slider_img').src = `images/desktop-image-hero-${imgIndex}.jpg`;
        document.querySelector('.hr_list').style.visibility = "visible";
    }else{
        document.querySelector('.discover_slider_img').src = `images/mobile-image-hero-${imgIndex}.jpg`;
    }
}



// menu
let hamb  = document.querySelector('.hr_hamb_box');
let hambClicked = false;
let hambIcon = "images/icon-hamburger.svg";
let hambCloseIcon = 'images/icon-close.svg';
hamb.addEventListener('click', (e) => menuClick(e,hambIcon,hambCloseIcon))


function menuClick(e,hamb,close){
    !hambClicked ? hambClicked = true: hambClicked = false;
    let icon = document.querySelector('.hr_hamb')
    let list  = document.querySelector('.hr_list');
    let listP = document.querySelectorAll('.item_p')
    if(hambClicked){
        icon.src = close;
        list.style.visibility = "visible";
        list.style.top = "0rem";
        list.style.minHeight = "9rem";
        setTimeout(() => {
            listP.forEach( p => p.style.top = "0rem");
        }, 200);
    }else{ 
        icon.src = hamb;
        listP.forEach( p => p.style.top = "-100rem");
        setTimeout(() => {
            list.style.top = "-100rem";
            list.style.visibility = "hidden";
            list.style.minHeight = "0rem";
        }, 200);
    }
}


// slider
class Header {
    constructor(header,p,index,img_d,img_m){
        this.header = header;
        this.p = p;
        this.index = index;
        this.img_d = img_d;
        this.img_m = img_m;
    };
}
let slider1 = new Header("Discover innovative ways to decorate","We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.","1","images/desktop-image-hero-1.jpg","images/mobile-image-hero-1.jpg");
let slider2 = new Header("We are available all across the globe","With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.","2","images/desktop-image-hero-2.jpg","images/mobile-image-hero-2.jpg")
let slider3 = new Header("Manufactured with the best materials","Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.","3","images/desktop-image-hero-3.jpg","images/mobile-image-hero-3.jpg")
let indexStart = 0;
let sliders = [slider1,slider2,slider3]

let buttons  = document.querySelectorAll('.discover_button');
buttons.forEach( b => b.addEventListener('click', (e) => buttonClick(e,sliders)));

function buttonClick(e,sliders){
    let side = e.path[0].dataset.side;
    console.log(side)
    let headerChange = document.querySelector('.discover_h');
    let pChange = document.querySelector('.discover_p');
    let imgChange = document.querySelector('.discover_slider_img')
    if(side == "right"){
        let img;
        indexStart++;
        if(indexStart > 2){
            indexStart = 0;
        }
        window.innerWidth > 750 ? img = "desktop" : "mobile";
        changeInnerHtml(headerChange,pChange,imgChange,indexStart,sliders,img)
    }
    if(side == "left"){
        let img;
        indexStart--;
        if(indexStart < 0){
            indexStart = 2;
        }
        window.innerWidth > 750 ? img = "desktop" : "mobile";
        changeInnerHtml(headerChange,pChange,imgChange,indexStart,sliders,img)
    }
}

function changeInnerHtml(h,p,img,index,sliders,imgType){
    h.innerHTML = sliders[index].header;
    p.innerHTML = sliders[index].p;
    imgType == "desktop" ? img.src = sliders[index].img_d : img.src = sliders[index].img_m;
    img.dataset.index = sliders[index].index;
}