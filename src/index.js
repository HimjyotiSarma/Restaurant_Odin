import './index.css'
const homeBtn = document.getElementById('homeBtn')
const menuBtn = document.getElementById('menuBtn')
// const aboutBtn = document.getElementById('aboutBtn')
const contactBtn = document.getElementById('contactBtn')
const content = document.getElementById('content')
const HomeSection = document.createElement('div')
import InitialHomePage from './Home'
import Menu from './Menu'
import Contact from './Contact'

HomeSection.id = 'home'

function HomeContent() {
  content.innerHTML = ''
  InitialHomePage(content, HomeSection)
}
function MenuContent() {
  content.innerHTML = ''
  Menu(content)
}
function ContactContent() {
  content.innerHTML = ''
  Contact(content)
}

const InitialLoad = HomeContent()
window.onload = InitialLoad
homeBtn.addEventListener('click', () => HomeContent())
menuBtn.addEventListener('click', () => MenuContent())
contactBtn.addEventListener('click', () => ContactContent())
