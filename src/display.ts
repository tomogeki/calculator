let displayNumber:string = ""
export function setDisplay(num:string) {
let display = document.querySelector("#display")
if (!display) return;
displayNumber += num;
console.log(displayNumber)
display.textContent = displayNumber
}

let buttons = document.querySelectorAll<HTMLButtonElement>("#buttons button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        setDisplay(button.dataset.val!)
    })
})