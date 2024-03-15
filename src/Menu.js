import './menu.css'
import toggleMenuActive from './utils/toggleMenuActive'
function Menu(content) {
  const Menu = document.createElement('div')
  Menu.id = 'menu'
  const headSection = document.createElement('div')
  headSection.className = 'head_section'
  const h1 = document.createElement('h1')
  h1.textContent = 'What’ll it be?'
  const h3 = document.createElement('h3')
  h3.textContent = 'view menus below'
  headSection.appendChild(h1)
  headSection.appendChild(h3)

  // Menu Section
  const section = document.createElement('section')
  section.className = 'menuSection'

  const Menu1 = document.createElement('div')
  const Menu2 = document.createElement('div')
  const Menu3 = document.createElement('div')
  Menu1.classList.add('foodCategory', 'lunch')
  Menu2.classList.add('foodCategory', 'drink')
  Menu3.classList.add('foodCategory', 'dinner')
  const anchor1 = document.createElement('a')
  anchor1.href = '/'
  anchor1.className = 'link'
  anchor1.innerHTML = 'Lunch'
  Menu1.appendChild(anchor1)

  const anchor2 = document.createElement('a')
  anchor2.href = '/'
  anchor2.className = 'link'
  anchor2.innerHTML = 'Drinks'
  Menu2.appendChild(anchor2)

  const anchor3 = document.createElement('a')
  anchor3.href = '/'
  anchor3.className = 'link'
  anchor3.innerHTML = 'Dinner'
  Menu3.appendChild(anchor3)

  section.appendChild(Menu1)
  section.appendChild(Menu2)
  section.appendChild(Menu3)

  //   const img1 = createImg('')

  Menu.appendChild(headSection)
  Menu.appendChild(section)
  content.appendChild(Menu)

  const MenuNav = document.getElementById('menuBtn')
  toggleMenuActive(MenuNav)
}
export default Menu
