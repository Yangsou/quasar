function getElementY(element: HTMLElement) {
  // return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;
  return window.pageYOffset + element.getBoundingClientRect().top;
}

export function doScrolling(element: HTMLElement, duration: number, offsetTop = 0) {
  const startingY = window.pageYOffset;
  const elementY = getElementY(element);
  // const elementY = element;
  // If element is close to page's bottom then window will scroll only to some position above the element.
  const targetY = document.body.scrollHeight - elementY < window.innerHeight
    ? document.body.scrollHeight - window.innerHeight : elementY;
  const diff = targetY - startingY - offsetTop;
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  const easing = (t: number) => {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  let start: number;

  if (!diff) { return; }

  // Bootstrap our animation
  // it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) { start = timestamp; }
    // Elapsed miliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    let percent = Math.min(time / duration, 1);
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
