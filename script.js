let res
const main = document.getElementById('articles')

window.onload = async () => {
    res = await fetch("https://ok.surf/api/v1/cors/news-feed");
    res = await res.json();
    console.log(res)
    res.Entertainment.forEach((item) => {
        let title = item.title
        if(title.length > 90){
            title = title.slice(0, 90);
            title += "..."
        }
    let sourceLink = item.source.replace(/\s/g, '');
    sourceLink = "https://www."+sourceLink+".com"
    main.innerHTML += `
    <div class="card">
        <div class="title">${title}</div>
        <a href="${item.link}"><img class="thumbnail" src="${item.og}"></a>
        <div class="source"><a href="${sourceLink}"><img src="${item.source_icon}"></a>${item.source}</div>
    </div>`
    })
}