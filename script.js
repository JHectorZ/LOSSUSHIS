const sliderElement = document.querySelectorAll('.sliderPage');
const sliderButton = document.querySelectorAll('.buttonSlider');
const closeIcon = document.querySelector('#svgIcon');
const menuContainer = document.querySelector('.contenedor');
const menuFood = document.querySelector('.menu');
const tiContainer = document.querySelector('#titleContainer');
const imgContainer = document.querySelector('#imageContainer');
const teContainer = document.querySelector('#textContainer');
const priContainer = document.querySelector('#priceContainer');
const claseNone = document.getElementsByClassName('.CloseWindow');


var contador = 0;
function sliderNext(){
    
    let sliderElementStart =  sliderElement[contador];
    let sliderButtonStart = sliderButton[contador];

    sliderElementStart.classList.remove('inactive');
    sliderButtonStart.classList.add('activeButton');

    if (contador < 2){
        contador++;
    }else{
        contador = 0;
    };

    setTimeout(function(){
        sliderElementStart.classList.add('inactive');
        sliderButtonStart.classList.remove('activeButton')
    },3000);

};


const listMenuImg = [];
listMenuImg.push({
    nombre:'Mar y Tierra',
    precio: 120,
    id: 'img1',
    imagen:'./Multimedia/Menu/SushiMenu1.png',
    resum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti sed delectus quo enim officiis nulla eaque deserunt, cum ad ipsam amet nesciunt corrupti aspernatur sequi quisquam. Sit, temporibus voluptate?'
});
listMenuImg.push({
    nombre:'Cordon Blue',
    precio: 150,
    id: 'img2',
    imagen:'./Multimedia/Menu/SushiMenu2.png',
    resum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti sed delectus quo enim officiis nulla eaque deserunt, cum ad ipsam amet nesciunt corrupti aspernatur sequi quisquam. Sit, temporibus voluptate?'
});
listMenuImg.push({
    nombre:'Surime',
    precio:250,
    id: 'img3',
    imagen:'./Multimedia/Menu/SushiMenu3.png',
    resum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti sed delectus quo enim officiis nulla eaque deserunt, cum ad ipsam amet nesciunt corrupti aspernatur sequi quisquam. Sit, temporibus voluptate?'
});
listMenuImg.push({
    nombre:'Tres Quesos',
    precio: 140,
    id: 'img4',
    imagen:'./Multimedia/Menu/SushiMenu4.png',
    resum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti sed delectus quo enim officiis nulla eaque deserunt, cum ad ipsam amet nesciunt corrupti aspernatur sequi quisquam. Sit, temporibus voluptate?'
});
listMenuImg.push({
    nombre:'Emperador',
    precio:320,
    id: 'img5',
    imagen:'./Multimedia/Menu/SushiMenu5.png',
    resum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, deleniti sed delectus quo enim officiis nulla eaque deserunt, cum ad ipsam amet nesciunt corrupti aspernatur sequi quisquam. Sit, temporibus voluptate?'
});

function createMenu(array){

    for(product of array){

        let imageMenu = document.createElement("img");
        imageMenu.setAttribute('src',product.imagen);
        imageMenu.setAttribute('name','imageMenu');
        imageMenu.setAttribute('ID',product.id)
        menuFood.appendChild(imageMenu);

    };
};

createMenu(listMenuImg);
setInterval(sliderNext,3000);

function closeWindow(){
    menuContainer.style.opacity  = '0';
    menuContainer.style.transition  = '.5s';
    setTimeout(function(){
        menuContainer.classList.add('CloseWindow');
    },500)
};

function openWindow(){
    menuContainer.classList.remove('CloseWindow');
    setTimeout(function(){
        menuContainer.style.transition  = '.5s';
        menuContainer.style.opacity  = '1';
    },80)
};

closeIcon.addEventListener("click",function(){
    closeWindow();
});

function queryProductList(array, idElement){

    for(product of array){
        
        if (idElement == product.id){
            tiContainer.innerHTML = product.nombre;
            priContainer.innerHTML = '$'+product.precio;
            imgContainer.setAttribute('src',product.imagen);
            teContainer.innerHTML == product.resum;
        };
    };

};

$(function() {
    $(document).on('click', 'img[name="imageMenu"]', function(event) {
       let idProduct = this.id;
       openWindow();
       queryProductList(listMenuImg, idProduct)
    });
});

