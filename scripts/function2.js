import {mails} from "./data/mails.js";


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
  });


  // CODE TO TOGGLE BETWEEN OPEN AND CLOSE RIGHT SIDE PANEL
  const rightBar = document.querySelector(".right-bar");

  const arrowIcon = document.querySelector(".back-arrow-icon");

  const toggleButton = document.querySelector(".open-right-bar-button");

  const closedTooltip = document.querySelector(".open-right-bar-tooltip");

  const openedTooltip = document.querySelector(".close-right-bar-tooltip");
  toggleButton.addEventListener("click", () => {
    const isOpen = rightBar.classList.contains("open");
 

    rightBar.classList.toggle("open", !isOpen);
    rightBar.classList.toggle("closed", isOpen);

    arrowIcon.classList.toggle("flipped", !isOpen);

    if(openedTooltip.style.display === "flex"){
      openedTooltip.style.display = "none";
      closedTooltip.style.display = "flex";
    } else {
      openedTooltip.style.display = "flex";
      closedTooltip.style.display = "none";
    };
  })


// FUNCTION TO DISPLAY MAILS IN THE MAIL
function displayAllMails() {
  const mailContaner = document.getElementById("js-mail-view");
  let mailsHTML = "";

  mails.forEach((mail) => {

    // TERNARY OPERATOR TO CHECK AND SAVE INDEPENDENT INTERACTIVE ELEMENTS

    // TERNARY OPERATION TO CHECK CHECKED OR NOT CHECKED
    const mailCheck = mail.checked 
      ? `
          <img class="mail-container-checked-checkbox-img-rendered    js-mail-container-checked-checkbox-img-rendered" 
          style="display: flex;"
          src="../css/images/icons/check_box.svg">
      ` 
      : `
          <img class="mail-container-checkbox-img js-mail-container-checkbox-img" 
          style="display: flex;"
          src="../css/images/ICONS/check_box_outline_blank.svg">
      ` ;

      // TERNARY OPERATOR TO CHECK IF READ OR UNREAD

      const readCheck = mail.read
       ? 
       "#FFFFFF"
        
       :
       "#d8ebff69"
       ;


    // TERNARY OPERATION TO CHECK STARRED OR NOT STARRED
    const starredCheck = mail.starred
    ? `
      <img class="mail-container-star-img-starred" src="../css/images/ICONS/mail-container-star-starred.svg">
    `
    : `
      <img class="mail-container-star-img" src="../css/images/ICONS/mail-container-star.svg">
    `

    mailsHTML +=
    `
      <div class="mail-container" style="background-color:${readCheck}"
       data-id="${mail.id}">
        <div class="mail-container-left">

          ${mailCheck}

          <span class="mail-container-checkbox-rendered-icon-tooltip">
            Select
          </span>
          
          

          ${starredCheck}

          <span class="mail-container-sender">${mail.sender}</span>
        </div>


        <!-- MAIL CONTAINER MIDDLE SECTION -->
        <div class="mail-container-middle">
          <span class="mail-container-header">
            ${mail.subject}
          </span>
          <span class="mail-container-body">
            - ${mail.body}
          </span>
        </div>


        <!-- MAIL CONTAINER RIGHT SECTION -->
        <div class="mail-container-right">
          <div class="mail-container-delete-div">
            <img src="../css/images/ICONS/mail-container-delete.svg" class="mail-container-delete-img js-mail-container-delete-img">
            <span class="mail-container-delete-tooltip">Delete</span>
              <span class="mail-container-time">
                ${mail.time}
              </span>
            </div>
        </div>
      </div>
    `
  });

  mailContaner.innerHTML = mailsHTML;
  addAllEventListeners();
  enterMail();
};

// CALL THE JUST CREATED FUNCTION TO DISPLAY ALL MAILS
displayAllMails();


// FUNCTION TO GET MAIL DATASET.ID DELETE THE MAIL FROM LIST OF ARRAY AND UPDATE THE HTML

function addDeleteButtonsEventListeners() {
  const deleteButtons = document.querySelectorAll(".js-mail-container-delete-img");
  deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    deleteMail(button)
  });
});
}


// FUNCTION CREATED TO DELETE SELECTED MAIL
function deleteMail(button) {
    const closestMailContainer = button.closest(".mail-container");
    const mailId = closestMailContainer.dataset.id;
    const mailIndex = mails.findIndex((mail) => mail.id === mailId);
    if (mailIndex === -1) return;
    // CODE TO INJECT mailIndex into .splice method and delete from mails[]
      mails.splice(mailIndex, 1);
      displayAllMails();
      saveMails();
}



// FUNCTION TO INJECT HTML INTO THE NUMBER OF MAILS SPAN
setInterval(() => {
  const newStoredUser = localStorage.getItem("user");
  const profileUserInfo = JSON.parse(newStoredUser);
  const numberOfMailsSpan = document.getElementById("js-number-of-mails");
  const titleDom = document.querySelector(".website-title");
  titleDom.innerHTML = `Inbox (${mails.length})-${profileUserInfo.Username} Bluemail.com`;
  numberOfMailsSpan.innerHTML = `You have ${mails.length} mails`;
}, 1000);

// FUNCTION TO INJECT HTML INTO THE PROFILE ICON TOOLTIP
const newStoredUser = localStorage.getItem("user");
const profileUserInfo = JSON.parse(newStoredUser);
const profileInformation = document.querySelector(".profile-icon-tooltip");
profileInformation.innerHTML = `${profileUserInfo.Username}`;
// INJECT SAME INTO OVERLAY
const testOverlay = document.querySelector(".profile-info-overlay-email");

testOverlay.innerHTML = `
<div class="profile-info-overlay-email">
          <!-- INJECT FROM JS -->
          <span class="profile-info-overlay-email-text">
          ${profileUserInfo.Username}
          </span>
        </div>`

document.querySelector(".profile-icon").addEventListener("click", () => {
  const overlayDisplay = document.querySelector(".profile-info-overlay");

  if(overlayDisplay.style.display === "flex") {
    overlayDisplay.style.display = "none"
  } else {
    overlayDisplay.style.display = "flex"
  }
})

// CODE TO TOGGLE BETWEEN CHECKBOXES

function addMailNavEventListeners() {
  const checkboxUnchecked = document.getElementById("js-checkbox-mail");
const checkboxChecked = document.getElementById("js-checkbox-checked-mail");
checkboxUnchecked.addEventListener("click", () => {
    checkboxUnchecked.style.display = "none";
    checkboxChecked.style.display = "flex";

    mails.forEach((mail) => {
      mail.checked = true;
    });
    addAllEventListeners();
    displayAllMails();
    
});

checkboxChecked.addEventListener("click", () => {
    checkboxChecked.style.display = "none";
    checkboxUnchecked.style.display = "flex";

    mails.forEach((mail) => {
      mail.checked = false;
    });

    addAllEventListeners();
    displayAllMails();
});
};








// CODE TO ADDEVENTLISTENERS TO ALL CHECKED AND UNCKECKED CHECKBOXES
function addCheckBoxEventListeners() {

  const allUncheckedboxesRendered = document.querySelectorAll(".js-mail-container-checkbox-img");

  const allCheckedboxesRendered = document.querySelectorAll(
    ".js-mail-container-checked-checkbox-img-rendered"
  );

allUncheckedboxesRendered.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    toggleCheckboxesInMailContainer(checkbox);
  });
});

allCheckedboxesRendered.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
  toggleCheckboxesInMailContainer(checkbox);
  });
});
};


// NEW AND IMPROVED FUNCTION TO TOGGLE CHECKBOXES


function toggleCheckboxesInMailContainer(checkbox) {

  const closestMailContainer = checkbox.closest(".mail-container");

  const mailId = closestMailContainer.dataset.id;

  const foundMail = mails.find(mail => mail.id === mailId);

  if (!foundMail) return;

  foundMail.checked = !foundMail.checked;

  displayAllMails();
};

function addStarsEventListeners () {
  const allStarElements = document.querySelectorAll(".mail-container-star-img");

  const allStarredElements = document.querySelectorAll(".mail-container-star-img-starred");

  allStarElements.forEach((star) => {
    star.addEventListener("click", () => {
      toggleStars(star);
    });
  });

  allStarredElements.forEach((star) => {
    star.addEventListener("click", () => {
      toggleStars(star);
    });
  });
};


function toggleStars (star) {

  const starContainer = star.closest(".mail-container");

  const mailId = starContainer.dataset.id;

  const starredMail = mails.find(mail => mail.id === mailId);

  if(!starredMail) return;

  starredMail.starred = !starredMail.starred;

  displayAllMails();
};

// RELOAD PAGE ON CLICK
const refreshIcon = document.getElementById("js-refresh");
refreshIcon.addEventListener("click", () => {
  window.location.reload();
})


// FUNCTIONS TO ENGAGE SEARCHING THROUGH THE ARRAY


// FUNCTION TO ADD SEARCHINPUT AND SEARCH BUTTON EVENT LISTENERS
function addSearchEventListeners(){
  const searchButton = document.querySelector(".js-search-button");
  const searchInput = document.querySelector(".js-search-input");


  searchButton.addEventListener("click", () => {
  // Run the function to search through the array
    searchArray(searchInput);
});


searchInput.addEventListener("input", (event) => {
  // clearTimeout(timeout);

  const timeout = setTimeout(() => {
    searchArray(searchInput);
  }, 300);
    // Run the function to search through the array
    
});

};

// FUNCTION TO LOOP THROUGH THE ARRAY AND CREATE A NEW ARRAY WITH THE INCLUDED KEYWORDS
function searchArray(searchInput){
  const searchValue = searchInput.value.toLowerCase().trim();
  const searchResults = mails.filter(mail => mail.body.toLowerCase().includes(searchValue));

  // DISPLAY THE SEARCH RESULTS ON THE PAGE
  displaySearchResults(searchResults);
}


function displaySearchResults(searchResults) {
  const mailContaner = document.getElementById("js-mail-view");
  let mailsHTML = "";

  searchResults.forEach((searchResult) => {

    // TERNARY OPERATOR TO CHECK AND SAVE INDEPENDENT INTERACTIVE ELEMENTS

    // TERNARY OPERATOR TO CHECK IF READ
    const readCheck = searchResult.read
       ? 
       "#FFFFFF"
        
       :
       "#d8ebff69"
       ;

    // TERNARY OPERATION TO CHECK CHECKED OR NOT CHECKED
    const searchResultCheck = searchResult.checked 
      ? `
          <img class="mail-container-checked-checkbox-img-rendered    js-mail-container-checked-checkbox-img-rendered" 
          style="display: flex;"
          src="../css/images/icons/check_box.svg">
      ` 
      : `
          <img class="mail-container-checkbox-img js-mail-container-checkbox-img" 
          style="display: flex;"
          src="../css/images/ICONS/check_box_outline_blank.svg">
      ` ;
    // TERNARY OPERATION TO CHECK STARRED OR NOT STARRED
    const searchResultstarredCheck = searchResult.starred
    ? `
      <img class="" src="../css/images/ICONS/mail-container-star-starred.svg">
      <span class="unstar-icon-tooltip">Un-Star</span>
    `
    : `
      <img class="mail-container-star-img" src="../css/images/ICONS/mail-container-star.svg">
      <span class="star-icon-tooltip">Star</span>
    `

    mailsHTML +=
    `
      <div class="mail-container" style="background-color:${readCheck}"
      data-id="${searchResult.id}">
        <div class="mail-container-left">

          ${searchResultCheck}

          <span class="mail-container-checkbox-rendered-icon-tooltip">
            Select
          </span>
          
          

          ${searchResultstarredCheck}

          <span class="mail-container-sender">${searchResult.sender}</span>
        </div>


        <!-- MAIL CONTAINER MIDDLE SECTION -->
        <div class="mail-container-middle">
          <span class="mail-container-header">
            ${searchResult.subject}
          </span>
          <span class="mail-container-body">
            - ${searchResult.body}
          </span>
        </div>


        <!-- MAIL CONTAINER RIGHT SECTION -->
        <div class="mail-container-right">
          <div class="mail-container-delete-div">
            <img src="../css/images/ICONS/mail-container-delete.svg" class="mail-container-delete-img js-mail-container-delete-img">
            <span class="mail-container-delete-tooltip">Delete</span>
              <span class="mail-container-time">
                ${searchResult.time}
              </span>
            </div>
        </div>
      </div>
    `
  });

  mailContaner.innerHTML = mailsHTML;
  addAllEventListeners();
  enterMail();

  // SET MAIL TO LOCAL STORAGE
  saveMails();
};





// FUNCTION TO ADD ALL EVENT LISTENERS TO ALL BUTTONS
function addAllEventListeners() {
  addStarsEventListeners();
  addCheckBoxEventListeners();
  addDeleteButtonsEventListeners();
  addMailNavEventListeners();
  addSearchEventListeners();
};


// FUNCTION TO ADD EVENT LISTENER TO ALL MAILS

function enterMail(){
  const allMailsTBO = document.querySelectorAll(".mail-container-middle");

allMailsTBO.forEach((mailPaper) => {
  mailPaper.addEventListener("click", () => {
    const allMails = mailPaper.closest(".mail-container");
    const mailDataId = allMails.dataset.id;
    const foundMail = mails.find(mail => mail.id === mailDataId);

    foundMail.read = true;
    saveMails();
    localStorage.setItem("mail", JSON.stringify(foundMail));
    console.log(foundMail);

    window.location.href = ".././html/index4.html";
  })
})
};

// FUNCTION TO SAVE MAILS AFTER EVERY ACTION
function saveMails() {
  localStorage.setItem("mails", JSON.stringify(mails));
};
  


