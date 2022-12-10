  var c = 12;
  var d = 6;
  if(c <= 0){
    alert('game over');
    location.reload();
    
    document.getElementById('try').innerHTML = `Try's Remaining: ` + Math.ceil(c/2);
  }
  else{
    
  document.getElementById('try').innerHTML = `Try's Remaining: ` + Math.ceil(c/2);
  }
  const cards = document.querySelectorAll('.image_card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  if(c==0){
    alert('game over');
    location.reload();
    c=6;
    document.getElementById('try').innerHTML = `Try's Remaining: ` + Math.ceil(c/2);
  }
  else{

  document.getElementById('try').innerHTML = `Try's Remaining: ` + Math.ceil(c/2);
}


  function flipCard() {
    if(c==0){
      alert('game over');
      location.reload();
      document.getElementById('try').innerHTML = `Try's Remaining: ` + Math.ceil(c/2);
    }
    else{
      
    document.getElementById('try').innerHTML = `Try's Remaining: ` + Math.ceil(c/2);
  c = c-1;}
    

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    // c = c-1;
    isMatch ? disableCards() : unflipCards();

  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    c = c+1;
    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));
