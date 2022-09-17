import cava from "/src/foods/cava.json"

export const userInput = {
  setupButtons(stepIdx, meal) {
    this.userInputsUl = document.getElementById('user-inputs-ul');
    const stepObject = cava.steps[stepIdx];
    stepObject.items.forEach(itemObject => {
      const ul = document.createElement("ul")
      const button = document.createElement("button");
      button.className = itemObject.Item;
      button.innerText = itemObject.Item;
      this.userInputsUl.appendChild(button);
      button.addEventListener('click', () => {
        console.log(itemObject);
        meal.pushItem(itemObject);
      })
    })
  }
}