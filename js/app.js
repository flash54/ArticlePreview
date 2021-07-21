console.log("hello world");

const shareBtnClick = ()=>{

    const shareBtn = document.querySelector(".shareBtn");
    const shareBtnActive = document.querySelector(".shareBtnActive");
    const active = document.querySelector(".active");

    shareBtn.addEventListener("click", ()=>{
        
        active.style.visibility = "visible";

    });

    shareBtnActive.addEventListener("click", ()=>{
        
        active.style.visibility = "hidden";

    });

};

shareBtnClick();