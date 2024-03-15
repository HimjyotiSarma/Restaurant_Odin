import eemTop from './assets/eem-top.png'
import sideImage from './assets/Asset+9.png'
import createImg from './utils/createImg'
import toggleMenuActive from './utils/toggleMenuActive'
function InitialHomePage(content, HomeSection) {
  HomeSection.innerHTML = ''

  const img = createImg(
    eemTop,
    'Cover Image from https://www.eempdx.com/',
    'cover-img'
  )
  HomeSection.appendChild(img)

  const head_title = document.createElement('div')
  HomeSection.appendChild(head_title)
  const h1 = document.createElement('h1')
  h1.innerHTML = 'Thai BBQ & <br />vacation drinks'
  head_title.appendChild(h1)
  const sideImg = createImg(
    sideImage,
    'Side Image from https://www.eempdx.com/',
    'side_img'
  )
  head_title.appendChild(sideImg)
  content.appendChild(HomeSection)
  const HomeMenu = document.getElementById('homeBtn')
  toggleMenuActive(HomeMenu)
}
export default InitialHomePage
