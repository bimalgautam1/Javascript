function rollDice(){
    const numofFDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceResult");
    const values = [];
    const images = [];

    for(let i=0;i<numofFDice;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/${value}.jpg" alt="Dice ${value}" >`);
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}