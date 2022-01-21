let slideItems = [...document.querySelectorAll('.slide-wrap')];

let options = {
  // default root for observer is 0px margin (so the edge of the page)
  // once the observed element passes the threshold, the action is applied to the element
  rootMargin: '0px',
  threshold: 0.1
}

let setItemActive = (entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('slide-up')
    }
  })
});

let observer = new IntersectionObserver(setItemActive, options);

slideItems.forEach((item, index) => {
  observer.observe(item);
})
