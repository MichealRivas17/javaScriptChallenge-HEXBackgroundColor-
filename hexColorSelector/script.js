// immediately invoked function
(function () {
    // get the document ID

    const button = document.querySelector('#btn')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector("#hex-value")

    // default color

    body.style.backgroundColor = ("#75B5C4")
    value.textContent = ('#75B5C4')
    button.style.backgroundColor = ('#75B5C4')

    //add event listner to button
    button.addEventListener('click', changeHex)

    //create a loop to make random hex value

    function changeHex() {

        let hex = '#'

        for (let i = 0; i < 6; i++) {
            const x = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[x]
        }
        value.textContent = hex
        body.style.backgroundColor= hex
        button.style.backgroundColor = hex
    }

} )();