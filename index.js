let currTime = () => {
    let d = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = d
}

setInterval(currTime, 1000);