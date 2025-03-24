const navTab = document.getElementById('nav-tab')
const menuList = document.getElementById('menu-list')

document.getElementById('menu-icon').addEventListener('click', () => {
    navTab.classList.remove('hidden')
    menuList.classList.add('menu-open')
})

document.getElementById('close-tab').addEventListener('click', () => {
    navTab.classList.add('hidden')
    menuList.classList.remove('menu-open')
})