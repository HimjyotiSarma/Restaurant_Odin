import './contact.css'
import createImg from './utils/createImg'
import ContactImg from './assets/tigerhat.png'
import ContactCard from './utils/contactCard'
import toggleMenuActive from './utils/toggleMenuActive'
function Contact(content) {
  const Contact = document.createElement('div')
  Contact.id = 'contact'
  const Section1 = document.createElement('div')
  const Section2 = document.createElement('div')
  const Section3 = document.createElement('div')
  Section1.classList.add('contactArea', 'contactImgSection')
  Section2.classList.add('contactArea', 'openTime')
  Section3.classList.add('contactArea', 'location')

  const Img = createImg(
    ContactImg,
    'Image from https://www.eempdx.com/',
    'contactImage'
  )
  Section1.appendChild(Img)
  const Contact1 = ContactCard('LUNCH', 'mon — sun: 11a - 4:30p')
  const Contact2 = ContactCard(
    'DINNER',
    'sun — thurs: 4:30p - 9p',
    'fri — sat: 4:30p - 10p'
  )
  const Contact3 = ContactCard('✌️ 971-295-1645')
  Section2.appendChild(Contact1)
  Section2.appendChild(Contact2)
  Section2.appendChild(Contact3)

  const Contact4 = ContactCard(
    'LOCATION',
    '3808 N Williams Avenue',
    'Suite #127',
    'Portland, Oregon'
  )
  Section3.appendChild(Contact4)

  Contact.appendChild(Section1)
  Contact.appendChild(Section2)
  Contact.appendChild(Section3)

  content.appendChild(Contact)

  const ContactMenu = document.getElementById('contactBtn')
  toggleMenuActive(ContactMenu)
}
export default Contact
