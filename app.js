


// shuffle


function shuffle(list) {
      for (let i = 0; i < list.length; i++) {
            let rnd = Math.floor(Math.random() * list.length)
            let tmp = list[i];
            list[i] = list[rnd];
            list[rnd] = tmp;
      }

      return list
}






// dom selection
let li = document.querySelectorAll("li");
let counterSpan = document.getElementById("userMoveCounter");
let ul = document.querySelector("ul");
let counter = 0;
let openCards = [];
let matchedCards = [];
startGame();





// functions
function showIcon() {
      // dom walking
      // this.firstChild.classList.add("show")
      openCards.push(this);
      this.classList.add("show");
      if (openCards.length === 2)
            compareCards()


      // user Move
      counter++;
      counterSpan.textContent = counter;
}

function Matched() {
      openCards[0].classList.add("matched");
      openCards[1].classList.add("matched");
      // matchedCards = [...openCards];
      matchedCards.push(openCards[0])
      matchedCards.push(openCards[1])
      if (matchedCards.length === 16)
            winGame()

}

function Unmatched() {
      openCards[0].classList.add("unmatched");
      openCards[1].classList.add("unmatched");
      setTimeout(function () {
            openCards[0].classList.remove("unmatched");
            openCards[1].classList.remove("unmatched");
            openCards[0].classList.remove("show");
            openCards[1].classList.remove("show");
            openCards = []
      }, 1000)
}

function compareCards() {
      if (openCards[0].innerHTML === openCards[1].innerHTML) {
            Matched()
            openCards = [];
      } else {
            Unmatched();
      }
}

function winGame() {
      alert(`YOU WIN by ${counter} move`)
}


function startGame() {

      // clone into a vriable
      let lis = [...li];
      console.log(li);
      console.log(shuffle(lis));
      ul.innerHTML = "";

      for (const li of lis) {
            console.log(li.outerHTML)
            ul.innerHTML += li.outerHTML
      }
      lis = document.querySelectorAll("li");
      for (const li of lis) {
            li.addEventListener("click", showIcon);
      }

      
}

