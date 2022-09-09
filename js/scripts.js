async function getJSON(path) {

    const res = await fetch(path)

    return await res.json();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let data =  getJSON('../content/effects.json');

function playEffect (){
    data.then((data) => {
        let audio = new Audio("content/" + data['effects'][`${getRandomInt(data['count'])}`]);
        audio.volume = 0.15
        audio.play()
    });
}

let nameEL = document.getElementById("main__farneser")
let name = nameEL.textContent
nameEL.remove()
let block = document.getElementById("main__name")

// block.setAttribute("onClick", `playEffect()`)

for (let ind in name){
    let newLetter = document.createElement("span")
    newLetter.className = "main__letter"
    newLetter.innerHTML = name[ind]
    // newLetter.setAttribute("onmouseover", `playEffect()`)
    newLetter.setAttribute("onClick", `playEffect()`)
    block.append(newLetter)
}

if (localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "purple")
}
