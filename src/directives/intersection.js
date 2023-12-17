export const inViewport = {
  mounted(el, binding) {
    const options = {
      threshold: 0.5, // Set the threshold
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // When the element enters the viewport, trigger the animation
        el.classList.add('active') // Apply your animation class here
        observer.unobserve(el) // Stop observing after the animation triggers
      }
    }, options)

    observer.observe(el)
  },
}
