dv.container.querySelectorAll('a.internal-link').forEach((a) => {
  a.addEventListener('click', (evt) => {
    evt.preventDefault();
    app.workspace.openLinkText(a.dataset.href, '', false);
  });
});

input.tags.forEach((tag) => {
  dv.container.querySelector('#tags').innerHTML +=
    `<div class="my-card__btn" style="background-color: ${tag[1]}; user-select: none;">${tag[0]}</div>`;
});
