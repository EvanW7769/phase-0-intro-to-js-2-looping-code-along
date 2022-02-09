// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
      console.log(`I'm ${age} years old. Happy birthday to me!`)
  }

  const gifts = ["teddy bear", "drone", "doll"]
  function wrapGifts(gifts){
      for(let i=0; i < gifts.length; i++){
      console.log(`Wrapped ${gifts[i]} and addded a bow!`);
 }
 return gifts
  }

  wrapGifts(gifts) */

  
  const giftRecievers = ["Guadalupe", "Ollie", "Aki"]
  function writeCards(name, event){
      let messageArray =[]
      for(let i=0; i<name.length; i++){
        let messages = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        messageArray.push(messages)
      }
return messageArray
    }

writeCards(giftRecievers, "Birthday")

function countDown(n){
    let i=0
    while (n>=i){
        console.log(n);
        n--;
    }
}