const tabsContainer = document.querySelector(".tabs .container");
tabsContainer.addEventListener("click", (e)=>{
    const selectedTab = e.target;
    const tab1Content = document.querySelector("#tab1-content");
    const tab2Content = document.querySelector("#tab2-content");
    const tab3Content = document.querySelector("#tab3-content");
    const div1 = document.querySelector("div .tab1")
    const div2 = document.querySelector("div .tab2")
    const div3 = document.querySelector("div .tab3")
    if(selectedTab.classList.contains("tab1")){
        tab3Content.classList.remove("show");
        tab2Content.classList.remove("show");
        tab1Content.classList.add("show");
        div1.classList.add("tab-border");
        div2.classList.remove("tab-border");
        div3.classList.remove("tab-border");
    }
    if(selectedTab.classList.contains("tab2")){
        
        tab3Content.classList.remove("show");
        tab2Content.classList.add("show");
        tab1Content.classList.remove("show");
        div1.classList.remove("tab-border");
        div2.classList.add("tab-border");
        div3.classList.remove("tab-border");
    }
    if(selectedTab.classList.contains("tab3")){
        
        tab3Content.classList.add("show");
        tab2Content.classList.remove("show");
        tab1Content.classList.remove("show");
        div1.classList.remove("tab-border");
        div2.classList.remove("tab-border");
        div3.classList.add("tab-border");
    }

})