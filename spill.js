let rndTall = Math.floor(Math.random() * 100) + 1;
let text;

function myFunction() {
    let x = document.getElementById("myInput").value;           
    if (x == rndTall) {
        text = "<li>Du gjettet riktig. Tallet er " + x + '. <img src="images.png" width="20"></li>';
    }
    else if (x < rndTall) {
        text = "<li>Du gjettet " + x + ", det er for lavt.</li>";
    }
    else {
        text = "<li>Du gjettet " + x + ", det er for høyt.</li>";
    }
    document.getElementById("demo").insertAdjacentHTML('afterbegin', text);
}