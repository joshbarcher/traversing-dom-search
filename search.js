
const searchBox = document.getElementById('searchBox');

//search using children
searchBox.addEventListener('input', () => {
    const search = searchBox.value.toLowerCase();

    const comments = document.querySelectorAll('.comment');
    for (const comment of comments) {
        const author = comment.children[0];
        const text = comment.children[1];
        
        if (text.textContent.toLowerCase().includes(search)) {
            comment.style.display = 'block';
        } else {
            comment.style.display = 'none';
        }
    }
});

//search using parentElement
searchBox.addEventListener('input', () => {
    const search = searchBox.value.toLowerCase();

    const texts = document.querySelectorAll('.comment .text');
    for (const text of texts) {
        const match = text.textContent.toLowerCase().includes(search);
        const parentBox = text.parentElement;
        
        if (match) {
            parentBox.style.display = 'block';
        } else {
            parentBox.style.display = 'none';
        }
    }
});