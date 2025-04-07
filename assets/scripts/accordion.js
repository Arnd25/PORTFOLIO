const accordionContent = document.querySelectorAll(".about__accordion-item");

accordionContent.forEach((item,index) =>{
    let header = item.querySelector(".accordion-item-title");
    header.addEventListener("click", ()=> {
        item.classList.toggle("is-open");

        let description = item.querySelector(".accordion-item-content");
        if (item.classList.contains("is-open")) {
            description.style.height = `${description.scrollHeight}px`;
        } else {
            description.style.height = "0px";
        }
        removeOpenedContent(index);
    })
})

function removeOpenedContent(index){
    accordionContent.forEach((item2,index2)=> {
        if (index !== index2) {
            item2.classList.remove("is-open");
            let descrip = item2.querySelector(".accordion-item-content");
            descrip.style.height="0px"
        }
    })
}
