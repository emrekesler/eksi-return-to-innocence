const init = () => {
    console.log('Return To Innocence Started');
    returnToInnocence();
};

let returnToInnocence = async () => {
    var doc = document.getElementById("return-to-innocence");
    if (doc != null)
        doc.click();
};

window.onload = init;