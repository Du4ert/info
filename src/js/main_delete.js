const resources = document.querySelectorAll('.resource');
resources[0].classList.add('active');

function backgroundOffset(elem) {
    const offset = elem.offsetLeft;
    elem.style.backgroundPositionX = offset + 'px';
    console.log(offset);
};


function coversBackgroundOffset() {
    resources.forEach(elem => {
        const cover = elem.querySelector('.resource-cover');
        const offset = elem.offsetLeft;
        cover.style.backgroundPositionX = -offset + 'px';
    })
}


resources.forEach(item => {
    const cover = item.querySelector('.resource-cover');
    const title = item.querySelector('.resource-title').textContent;
    coversBackgroundOffset();

    cover.querySelector('.cover-title').textContent = title;
    item.addEventListener('click', (event) => {
        //resources.forEach(item => item.classList.remove('active'));
        item.classList.toggle('active');
        coversBackgroundOffset();

        document.body.addEventListener('click', (event) => {
            if (event.target.closest('.resource') !== item) {
                item.classList.remove('active');
                coversBackgroundOffset();
            }
        });
    })
});