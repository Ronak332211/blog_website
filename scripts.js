function toggleContent(postId) {
    const fullContent = document.getElementById(`post-${postId}`);
    const readMoreLink = fullContent.previousElementSibling.querySelector('.read-more');

    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        readMoreLink.style.display = 'none';
    } else {
        fullContent.style.display = 'none';
        readMoreLink.style.display = 'inline';
    }
}
