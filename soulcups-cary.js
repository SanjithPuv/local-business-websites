const filters = document.querySelectorAll('[data-filter]');
const highlights = document.querySelectorAll('[data-category]');
const status = document.getElementById('menu-status');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  highlights.forEach(item => {
    item.hidden = category !== 'all' && item.dataset.category !== category;
    if (!item.hidden) visible += 1;
  });
  const label = {all: 'menu', drinks: 'drink', sweet: 'sweet', savory: 'savory'}[category];
  status.textContent = `Showing ${visible} ${label} highlights.`;
}));
