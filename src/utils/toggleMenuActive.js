function toggleMenuActive(CurrentMenu) {
  const HomeNav = document.getElementById('homeBtn')
  const MenuNav = document.getElementById('menuBtn')
  const contactNav = document.getElementById('contactBtn')

  const allNav = [HomeNav, MenuNav, contactNav]

  allNav.map((menu) => {
    menu.className = ''
  })
  CurrentMenu.classList.add('active')
}
export default toggleMenuActive
