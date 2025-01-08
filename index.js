let items = document.querySelectorAll(".item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnails = document.querySelectorAll(".slide");

//config param

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();

};

prev.onclick = function(){
    itemActive = itemActive - 1
    if(itemActive <= 0){
        itemActive = countItem -1;

    }
    showSlider();
    
}

function showSlider(){
    let itemActiveOld = document.querySelector('.item.active');
    let thumbnailActiveOld = document.querySelector('.slide.active');
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");

}
thumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    });
});
console.log(items);
