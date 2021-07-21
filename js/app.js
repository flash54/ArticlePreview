console.log("hello world");

const shareBtnClick = ()=>{

    const shareBtn = document.querySelector(".shareBtn");
    const active = document.querySelector(".active");
    const shareBtnActive = document.querySelector(".shareBtnActive");

    shareBtn.addEventListener("click", ()=>{
        
        active.style.visibility = "visible";

    });

    shareBtnActive.addEventListener("click", ()=>{
        
        active.style.visibility = "hidden";

    });

};

shareBtnClick();