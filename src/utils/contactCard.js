function ContactCard(title, ...paras) {
  const Info = document.createElement('div')
  Info.className = 'info'
  const titleSection = document.createElement('h4')
  titleSection.textContent = title
  Info.appendChild(titleSection)
  paras.forEach((para) => {
    const paragraph = document.createElement('p')
    paragraph.className = 'para'
    paragraph.textContent = para
    Info.appendChild(paragraph)
  })
  return Info
}
export default ContactCard
