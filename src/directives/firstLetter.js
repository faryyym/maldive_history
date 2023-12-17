export const firstLetter = {
  mounted(el) {
    const words = el.textContent.split(' ')
    console.log(words)
    const modifiedText = words
      .map(
        (word) =>
          `<span class="first-letter">${word.charAt(0)}</span>${word.slice(1)}`
      )
      .join(' ')

    el.innerHTML = modifiedText
  },
}
