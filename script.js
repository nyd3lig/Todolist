const formAdd = document.querySelector(".add")
const listGroup = document.querySelector(".list-group")
const search = document.querySelector(".search input")




//delete items
listGroup.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentNode.remove()
    }
})
//generates new todos
const generateTemplate = (input) => {
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${input}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
    listGroup.innerHTML += html;
};

formAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = formAdd.add.value.trim()
    if(input.length){
    generateTemplate(input)
    }
    formAdd.reset()
});


const filteredTodos = (searchValue) => {
    Array.from(listGroup.children)
    .filter((item) => {
       return !item.textContent.toLowerCase().includes(searchValue)
    })
    .forEach((item) => {
        item.classList.add("filtered")
    })

    Array.from(listGroup.children)
    .filter((item) => {
       return item.textContent.toLowerCase().includes(searchValue)
    })
    .forEach((item) => {
        item.classList.remove("filtered")
    })
}

search.addEventListener("keyup", () => {
    let searchValue = search.value.trim().toLowerCase()
    filteredTodos(searchValue)
})