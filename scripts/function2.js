const storedUser =localStorage.getItem("user");
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser);

// CODE TO  OPEN AND CLOSE COMPOSE BAR
const composeAlternative = document.getElementById("js-compose");
composeAlternative.addEventListener("click", function(){
  if(composeAlternative.classList.contains("compose")){
    composeAlternative.classList.replace("compose", "compose-alternative");
  }else{
    composeAlternative.classList.replace("compose-alternative", "compose");
  }
});
// CODE TO OPEN AND CLOSE INBOX VIEW
const inboxAlternative = document.getElementById("js-inbox");
inboxAlternative.addEventListener("click", function(){
  if(inboxAlternative.classList.contains("inbox")){
    inboxAlternative.classList.replace("inbox", "inbox-alternative");
  }else{
    inboxAlternative.classList.replace("inbox-alternative", "inbox");
  }
});
// CODE TO OPEN AND CLOSE STARRED VIEW
const starredAlternative = document.getElementById("js-starred");
starredAlternative.addEventListener("click", function(){
  if(starredAlternative.classList.contains("starred")){
    starredAlternative.classList.replace("starred", "starred-alternative");
  }else{
    starredAlternative.classList.replace("starred-alternative", "starred");
  }
});
// CODE TO OPEN AND CLOSE SNOOZED VIEW
const snoozedAlternative = document.getElementById("js-snoozed");
snoozedAlternative.addEventListener("click", function(){
  if(snoozedAlternative.classList.contains("snoozed")){
    snoozedAlternative.classList.replace("snoozed", "snoozed-alternative");
  }else{
    snoozedAlternative.classList.replace("snoozed-alternative", "snoozed");
  }
});
// CODE TO OPEN AND CLOSE SENT VIEW
const sentAlternative = document.getElementById("js-sent");
sentAlternative.addEventListener("click", function(){
  if(sentAlternative.classList.contains("sent")){
    sentAlternative.classList.replace("sent", "sent-alternative");
  }else{
    sentAlternative.classList.replace("sent-alternative", "sent");
  }
});
// CODE TO OPEN AND CLOSE DRAFTS VIEW
const draftsAlternative = document.getElementById("js-drafts");
draftsAlternative.addEventListener("click", function(){
  if(draftsAlternative.classList.contains("drafts")){
    draftsAlternative.classList.replace("drafts", "drafts-alternative");
  }else{
    draftsAlternative.classList.replace("drafts-alternative", "drafts");
  }
});

// CODE TO OPEN AND CLOSE PURCHASE VIEW
const purchaseAlternative = document.getElementById("js-purchase");
purchaseAlternative.addEventListener("click", function(){
  if(purchaseAlternative.classList.contains("purchase")){
    purchaseAlternative.classList.replace("purchase", "purchase-alternative");
  }else{
    purchaseAlternative.classList.replace("purchase-alternative", "purchase");
  } 
});

// CODE TO TOGGLE MORE AND LESS BUTTONS
const moreArrow = document.getElementById("js-more-arrow");
const lessArrow = document.getElementById("js-less-arrow");
const moreLessContainer = document.getElementById("js-arrow-toggle");

moreLessContainer.addEventListener("click", () => {
  // JUST COME BACK AND START FROM HERE TOMORROW //
  })



// CODE TO OPEN AND CLOSE TRASH VIEW
const trashAlternative = document.getElementById("js-trash");
trashAlternative.addEventListener("click", function(){
  if(trashAlternative.classList.contains("trash")){
    trashAlternative.classList.replace("trash", "trash-alternative");
  }else{
    trashAlternative.classList.replace("trash-alternative", "trash");
  }
});
