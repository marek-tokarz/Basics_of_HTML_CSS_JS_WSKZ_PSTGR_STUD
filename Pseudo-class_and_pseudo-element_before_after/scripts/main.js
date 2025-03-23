let list = document.getElementById("todos") /* Reference to a list */
list.addEventListener(
    "click",
    (event) => {
        if(event.target.tagName === "LI") {
            console.log(event.target.classList)
            event.target.classList.toggle("ready");
        }
    },
    false
);