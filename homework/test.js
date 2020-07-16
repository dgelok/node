const getArticles = callback => {
    setTimeout(() => {
       callback ({ title : 'I am callback function title' })
    }, 1000)
}

getArticles(article => {
    console.log(article);
});