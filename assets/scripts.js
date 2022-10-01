var topics = ["HTML", "CSS", "Git", "Javascript"];
<<<<<<< HEAD
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "Javascript") {
    console.log("Let's study Javascript!");
  } else {
    console.log("Please try again!");
  }
}
console.log("Here are the topics we learned through prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();
=======

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }
/*
if (topic ==='HTML') {
    console.log("Let's study HTML!");
} else if (topic ==='CSS') {
    console.log("Let's study CSS!");
} else if (topic ==='Git') {
    console.log("Let's study Git!");
} else if (topic === 'Javascript'){
    console.log("Let's study Javascript!")
} else {
    console.log('Please try again!');
}
*/
>>>>>>> 5ea26bd8ad46eb11807c4e258f109aa7bb616bce
