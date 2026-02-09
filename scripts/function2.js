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
const lessArrow = document.getElementById("js-less-arrow");
const moreLessContainer = document.getElementById("js-arrow-toggle");
const flipped = document.getElementById("toggle");
const displayDropDown = document.getElementById("js-drop-down");

moreLessContainer.addEventListener("click", () => {
  // JUST COME BACK AND START FROM HERE TOMORROW //
  if(lessArrow.classList.contains("less-arrow-icon")){

    lessArrow.classList.replace("less-arrow-icon", "less-arrow-icon-flipped");
    flipped.classList.replace("less-arrow-alternative", "less-arrow-alternative-flipped");
    displayDropDown.classList.replace("drop-down-open", "drop-down");

    }
    else {
      lessArrow.classList.replace("less-arrow-icon-flipped", "less-arrow-icon");
      flipped.classList.replace("less-arrow-alternative-flipped", "less-arrow-alternative"); 
      displayDropDown.classList.replace("drop-down", "drop-down-open");}
  })


  // MAIL ARRAY SECTION

const mails = [
  {
    id: 1,
    sender: "BlueMail",
    subject: "Security Alert",
    body: "We noticed a new sign in...",
    time: "10:45 AM",
    read: true
  },{
    id: 2,
    sender: "ZineXpression",
    subject: "New collaboration",
    body: "Lets talk about your next project...",
    time: "Yesterday",
    read: false
  }
]

console.log(mails);


// FUNCTION TO INJECT HTML INTO THE NUMBER OF MAILS SPAN
setInterval(() => {
  const newStoredUser = localStorage.getItem("user");
  const profileUserInfo = JSON.parse(newStoredUser);
  const numberOfMailsSpan = document.getElementById("js-number-of-mails");
  numberOfMailsSpan.innerHTML = `You have ${mails.length} mails`;
}, 1000);

// FUNCTION TO INJECT HTML INTO THE PROFILE ICON TOOLTIP
const newStoredUser = localStorage.getItem("user");
const profileUserInfo = JSON.parse(newStoredUser);
const profileInformation = document.querySelector(".profile-icon-tooltip");
profileInformation.innerHTML = `${profileUserInfo.Username}`;


// CODE TO TOGGLE BETWEEN CHECKBOXES
const checkboxUnchecked = document.getElementById("js-checkbox-mail");
const checkboxChecked = document.getElementById("js-checkbox-checked-mail");
checkboxUnchecked.addEventListener("click", () => {
    checkboxUnchecked.style.display = "none";
    checkboxChecked.style.display = "flex";
})

checkboxChecked.addEventListener("click", () => {
    checkboxChecked.style.display = "none";
    checkboxUnchecked.style.display = "flex";
})



  const mailList = document.getElementById("js-mail-list");

  function renderMails(){
    mailList.innerHTML = "";

    mails.forEach(mail => {
      const div =document.createElement("div");
      div.className = `mail-item ${mail.read ? "" : "unread"}`;
      div.innerHTML = `
      <div class="mailFirstSection">
      <div>${mail.sender}</div>
      <div>${mail.subject}</div>
      <div><small>${mail.time}</small></div>
      </div>`;

      div.addEventListener("click", () => {openMail(mail.id)});
        mailList.appendChild(div);
      
    })
  }

  renderMails();

  // OPEN A MAIL, ARRAY + FIND
  const mailView = document.getElementById("js-mail-view");

  function openMail(id){
    const mail = mails.find(m => m.id ===id);

    mail.read = true;

    mailView.innerHTML = 
    `<h2>${mail.subject}</h2>
    <p><strong>From:</strong> ${mail.sender}</p>
    <p>${mail.body}</p>`;

    renderMails();
}

// FUNCTION TO DELETE A MAIL
function openMail(id) {
  const mail = mails.find(m => m.id === id);
  mail.read = true;

  mailView.innerHTML = `
    <h2>${mail.subject}</h2>
    <p><strong>From:</strong> ${mail.sender}</p>
    <p>${mail.body}</p>
    <button onclick="deleteMail(${id})">Delete</button>
  `;

  renderMails();
}

function deleteMail(id) {
  const index = mails.findIndex(m => m.id === id);
  mails.splice(index, 1);

  mailView.innerHTML = "<p>Select a mail to read</p>";
  renderMails();
}

const display = getElementById("js-mail-view");
display.innerHTML = mails;



