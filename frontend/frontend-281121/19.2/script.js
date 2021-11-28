const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ulList = document.createElement('ul')

users.forEach(user => {
    let userItem = document.createElement('li')
    userItem.style.listStyle="none"
    let { id, firstName, lastName } = user
    userItem.textContent = `${firstName} ${lastName}`
    userItem.setAttribute('data-id', id)
    ulList.append(userItem)
})

console.log(ulList)

document.querySelector('.list-container').append(ulList)