const allUsers = JSON.parse(localStorage.getItem("users")) || [];

const idGiven = sessionStorage.getItem("name");

let user = allUsers.find(u => u.id === idGiven);

let container = document.querySelector(".container");

container.innerHTML = user.index;


const createNew = document.querySelector(".create");
const presentation = `
        <div class="presentation">
            <form>
                <input type="text" placeholder="Enter Name" id="name" required>
                <input type="text" placeholder="Enter id" id="id" required>
                <input type="text" placeholder="Enter Password" id="password" required>
                <button type="submit" class="save">SAVE</button>
                <button class="remove">DELETE</button>
            </form>
        </div>`
console.log(container)

createNew.addEventListener('click', () => {

    container.insertAdjacentHTML("beforeend", presentation);

});

container.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const nameValue = form.querySelector('#name').value;
    const idValue = form.querySelector('#id').value;
    const passwordValue = form.querySelector('#password').value;

    form.innerHTML = `
        <h2>Name: ${nameValue}</h2>
        <h2>ID: ${idValue}</h2>
        <h2>Password: ${passwordValue}</h2>
        <button class="remove">DELETE</button>
    `;
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        e.target.closest('.presentation').remove();
    }
});

setInterval(() => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let targetUserIndex = users.findIndex(u =>
        u.name === user.name &&
        u.id === user.id &&
        u.password === user.password
    );

    if (targetUserIndex !== -1) {
        users[targetUserIndex].index = container.innerHTML;
    } else {
        console.log("User not found");
    }

    localStorage.setItem("users", JSON.stringify(users));
}, 3000);


