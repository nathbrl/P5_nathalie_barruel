function getAllProducts() {
    fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((sofas) => sofas.forEach((sofa, i) => {
            //console.log(sofa);
            //console.log(i);
            displaySofas(sofa);
        }));
}
getAllProducts();

function displaySofas(sofa) {
    const section = document.querySelector('.items');
    //console.log(section);

    const card = document.createElement('a');
    card.id = sofa._id;
    card.href = "product.html" + sofa._id;
    console.log(card);

    const article = document.createElement('article');
    //console.log(article);

    const name = document.createElement('h3');
    name.classList.add('productName');
    //console.log(name);
    name.innerHTML = sofa.name;

    const img = document.createElement('img');
    img.src = sofa.imageUrl;
    img.alt = sofa.altTxt;
    //console.log(img);

    const description = document.createElement('p');
    description.classList.add('productDescription');
    description.innerHTML = sofa.description;
    //console.log(description);
    section.appendChild(card)
    card.appendChild(article);
    article.appendChild(img);
    article.appendChild(name);
    article.appendChild(description);
}
