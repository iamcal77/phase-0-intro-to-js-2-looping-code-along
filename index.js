// Code your solutions in this file
// The for loop
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  
  // Using for loop with arrays
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);
  
  // The writeCards() function
  function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
    return messages;
  }
  
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  
  // The while loop
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
  function countDown(number) {
    if (number < 0) {
      console.log("Number should be non-negative.");
      return;
    }
  
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(5); // Example usage: Count down from 5
  
