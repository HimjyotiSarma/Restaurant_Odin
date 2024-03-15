function createImg(src, alt, className) {
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.className = className
  return img
}
export default createImg
