import {mails} from "./data/mails.js";



const storedUser =localStorage.getItem("user");
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser);

// GET MAIL TO BE OPENED
const mailToBeOpened = JSON.parse(localStorage.getItem("mail"));
console.log(mailToBeOpened);

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

// function addMailNavEventListeners() {
//   const checkboxUnchecked = document.getElementById("js-checkbox-mail");
// const checkboxChecked = document.getElementById("js-checkbox-checked-mail");
// checkboxUnchecked.addEventListener("click", () => {
//     checkboxUnchecked.style.display = "none";
//     checkboxChecked.style.display = "flex";

//     mails.forEach((mail) => {
//       mail.checked = true;
//     });
//     addAllEventListeners();
//     displayAllMails();
    
// });

// checkboxChecked.addEventListener("click", () => {
//     checkboxChecked.style.display = "none";
//     checkboxUnchecked.style.display = "flex";

//     mails.forEach((mail) => {
//       mail.checked = false;
//     });

//     addAllEventListeners();
//     displayAllMails();
// });
// };








// CODE TO ADDEVENTLISTENERS TO ALL CHECKED AND UNCKECKED CHECKBOXES
// function addCheckBoxEventListeners() {

//   const allUncheckedboxesRendered = document.querySelectorAll(".js-mail-container-checkbox-img");

//   const allCheckedboxesRendered = document.querySelectorAll(
//     ".js-mail-container-checked-checkbox-img-rendered"
//   );

// allUncheckedboxesRendered.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//     toggleCheckboxesInMailContainer(checkbox);
//   });
// });

// allCheckedboxesRendered.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//   toggleCheckboxesInMailContainer(checkbox);
//   });
// });
// };


// NEW AND IMPROVED FUNCTION TO TOGGLE CHECKBOXES


// function toggleCheckboxesInMailContainer(checkbox) {

//   const closestMailContainer = checkbox.closest(".mail-container");

//   const mailId = closestMailContainer.dataset.id;

//   const foundMail = mails.find(mail => mail.id === mailId);

//   if (!foundMail) return;

//   foundMail.checked = !foundMail.checked;

//   displayAllMails();
// };

// function addStarsEventListeners () {
//   const allStarElements = document.querySelectorAll(".mail-container-star-img");

//   const allStarredElements = document.querySelectorAll(".mail-container-star-img-starred");

//   allStarElements.forEach((star) => {
//     star.addEventListener("click", () => {
//       toggleStars(star);
//     });
//   });

//   allStarredElements.forEach((star) => {
//     star.addEventListener("click", () => {
//       toggleStars(star);
//     });
//   });
// };


// function toggleStars (star) {

//   const starContainer = star.closest(".mail-container");

//   const mailId = starContainer.dataset.id;

//   const starredMail = mails.find(mail => mail.id === mailId);

//   if(!starredMail) return;

//   starredMail.starred = !starredMail.starred;

//   displayAllMails();
// };

// RELOAD PAGE ON CLICK
const refreshIcon = document.getElementById("js-refresh");
refreshIcon.addEventListener("click", () => {
  window.location.reload();
})


// FUNCTIONS TO ENGAGE SEARCHING THROUGH THE ARRAY


// FUNCTION TO ADD SEARCHINPUT AND SEARCH BUTTON EVENT LISTENERS
// function addSearchEventListeners(){
//   const searchButton = document.querySelector(".js-search-button");
//   const searchInput = document.querySelector(".js-search-input");


//   searchButton.addEventListener("click", () => {
//   // Run the function to search through the array
//     searchArray(searchInput);
// });


// searchInput.addEventListener("input", (event) => {
//   // clearTimeout(timeout);

//   const timeout = setTimeout(() => {
//     searchArray(searchInput);
//   }, 300);
//     // Run the function to search through the array
    
// });

// };

// FUNCTION TO LOOP THROUGH THE ARRAY AND CREATE A NEW ARRAY WITH THE INCLUDED KEYWORDS
// function searchArray(searchInput){
//   const searchValue = searchInput.value.toLowerCase().trim();
//   const searchResults = mails.filter(mail => mail.body.toLowerCase().includes(searchValue));

//   // DISPLAY THE SEARCH RESULTS ON THE PAGE
//   displaySearchResults(searchResults);
// }


// function displaySearchResults(searchResults) {
//   const mailContaner = document.getElementById("js-mail-view");
//   let mailsHTML = "";

//   searchResults.forEach((searchResult) => {

//     // TERNARY OPERATOR TO CHECK AND SAVE INDEPENDENT INTERACTIVE ELEMENTS

//     // TERNARY OPERATION TO CHECK CHECKED OR NOT CHECKED
//     const searchResultCheck = searchResult.checked 
//       ? `
//           <img class="mail-container-checked-checkbox-img-rendered    js-mail-container-checked-checkbox-img-rendered" 
//           style="display: flex;"
//           src="css/images/check_box.svg">
//       ` 
//       : `
//           <img class="mail-container-checkbox-img js-mail-container-checkbox-img" 
//           style="display: flex;"
//           src="css/images/check_box_outline_blank.svg">
//       ` ;
//     // TERNARY OPERATION TO CHECK STARRED OR NOT STARRED
//     const searchResultstarredCheck = searchResult.starred
//     ? `
//       <img class="" src="css/images/mail-container-star-starred.svg">
//       <span class="unstar-icon-tooltip">Un-Star</span>
//     `
//     : `
//       <img class="mail-container-star-img" src="css/images/mail-container-star.svg">
//       <span class="star-icon-tooltip">Star</span>
//     `

//     mailsHTML +=
//     `
//       <div class="mail-container" data-id="${searchResult.id}">
//         <div class="mail-container-left">

//           ${searchResultCheck}

//           <span class="mail-container-checkbox-rendered-icon-tooltip">
//             Select
//           </span>
          
          

//           ${searchResultstarredCheck}

//           <span class="mail-container-sender">${searchResult.sender}</span>
//         </div>


//         <!-- MAIL CONTAINER MIDDLE SECTION -->
//         <div class="mail-container-middle">
//           <span class="mail-container-header">
//             ${searchResult.subject}
//           </span>
//           <span class="mail-container-body">
//             - ${searchResult.body}
//           </span>
//         </div>


//         <!-- MAIL CONTAINER RIGHT SECTION -->
//         <div class="mail-container-right">
//           <div class="mail-container-delete-div">
//             <img src="css/images/mail-container-delete.svg" class="mail-container-delete-img js-mail-container-delete-img">
//             <span class="mail-container-delete-tooltip">Delete</span>
//               <span class="mail-container-time">
//                 ${searchResult.time}
//               </span>
//             </div>
//         </div>
//       </div>
//     `
//   });

//   mailContaner.innerHTML = mailsHTML;
//   addAllEventListeners();
// };





// FUNCTION TO ADD ALL EVENT LISTENERS TO ALL BUTTONS
// function addAllEventListeners() {
//   addStarsEventListeners();
//   addCheckBoxEventListeners();
//   addDeleteButtonsEventListeners();
//   addMailNavEventListeners();
//   addSearchEventListeners();
// };



// FUNCTION TO DISPLAY CORRECT MAIL IN THE PAPER



function openMail() {
  const starIconContainer = document.querySelector(".star-icon-container");

  starIconContainer.innerHTML = mailToBeOpened.starred
  ? `
  <div class="star-id-container" data-id="${mailToBeOpened.id}">
    <img class="mail-container-star-img-starred" src="css/images/mail-container-star-starred.svg">
    <span class="unstar-icon-tooltip">Unstar</span>
  </div>
  `
  :`
  <div class="star-id-container" data-id="${mailToBeOpened.id}">
    <img class="mail-container-star-img" src="css/images/mail-container-star.svg">
    <span class="star-icon-tooltip">Star</span>
  </div>
  `
  const mailContainer = document.querySelector(".mail-paper-page");

  let mailPaperPageHTML = "";

  mailPaperPageHTML +=

  `
  <div class="mail-subject-container">
      <img width="40px" height="40px" style="display:inline-block;" src="css/images/profile.png">
      <h1 style="margin: 50px 0px;">
        <!-- SUBJECT FROM JAVASCRIPT -->
        ${mailToBeOpened.subject}
      </h1>
    </div>
    <h5 style="margin-bottom: 0;">
      <!-- SENDER, DATE AND TIME FROM JAVASCRIPT -->
      Sender: ${mailToBeOpened.sender},
    </h5>
       <div class="email-and-time-div" style="margin-top: 3px;">
        <h5>
           @${mailToBeOpened.sender.toLowerCase().trim()}.com
        </h5>
        <h5>
          ${mailToBeOpened.time}
        </h5>
       </div>
    
    <div>
      <article>
        <!-- MAIL.BODY -->
        <div class="mail-body-container">
          ${mailToBeOpened.body}
        </div>
        <div class="myself-article-container">
          <p class="myself">
            I am an aspiring web developer with a strong passion for building meaningful, user-focused digital experiences. My journey into web development is fueled by curiosity, consistency, and a deep desire to understand how things work under the hood—not just how they look on the surface.

            With a solid foundation in HTML, CSS, and JavaScript, I focus on writing clean, readable, and purposeful code. I approach development with the mindset that every line of code should solve a problem, improve usability, or create value. Rather than rushing to build flashy projects, I prioritize learning core concepts thoroughly, ensuring that my solutions are both functional and scalable.

            One of my greatest strengths as a developer is my problem-solving mindset. I enjoy breaking down complex ideas into simple, logical steps and refining my understanding through practice and iteration. Challenges don’t discourage me; instead, they push me to learn deeper, research better approaches, and grow more confident in my skills.

            I am particularly interested in how modern applications work—how data flows, how events are handled, and how user interactions translate into seamless experiences. This curiosity drives me to explore best practices, understand performance considerations, and adopt professional development patterns early in my journey.

            Beyond technical skills, I value discipline, patience, and continuous improvement. I understand that becoming a great developer is a long-term process, and I am committed to consistent learning, building real-world projects, and improving a little every day.

            As I continue to grow, my goal is to become a well-rounded full-stack developer capable of building reliable, efficient, and impactful web applications. I am eager to collaborate, learn from others, and contribute to projects that challenge me and expand my skill set.

            I believe that with dedication, curiosity, and the right mindset, great software is not just built—it is crafted. And I am fully committed to that craft.

            <strong>
            Seeking Opportunities to Grow and Contribute in the Technology Space
            </strong>

            As I continue to develop my skills and refine my understanding of web technologies, I am now actively seeking opportunities within the technology space where I can learn, contribute, and grow professionally. I see every role as a chance to sharpen my abilities, gain real-world experience, and apply the principles I have been building through consistent practice.

            I am particularly interested in environments that value growth, collaboration, and thoughtful problem-solving. I thrive in spaces where questions are encouraged, feedback is shared openly, and improvement is a continuous process. Being part of a team that builds with purpose motivates me to push beyond my limits and improve the quality of my work.

            While I am still early in my career, I bring strong fundamentals, a willingness to learn, and a disciplined approach to development. I take ownership of tasks, pay close attention to details, and work patiently through challenges until solutions are clear and effective. I believe that reliability and consistency are just as important as technical skill, especially when working within a team.

            I am eager to gain hands-on experience by contributing to real projects, supporting existing systems, and learning from more experienced developers. My goal is not only to secure a position but to grow into a developer who adds lasting value—someone who writes thoughtful code, communicates clearly, and continuously seeks better ways to build.

            As I move forward in my journey, I remain committed to learning, improving, and embracing opportunities that challenge me. I am excited about the path ahead and open to roles that allow me to grow within the ever-evolving technology landscape.
          </p>
          
        </div>
      </article>

    <div class="video-wrapper">
      <video class="video" width="100%" autoplay="" loop="" muted="">
        <source src="css/video/minimalist.mp4" type="video/mp4">
      </video>
    </div>

    </div>
  `
  mailContainer.innerHTML = mailPaperPageHTML;


  // ADD EVENT LISTENERS
  addAllEventListeners();
};

openMail();

// FUNCTION TO SAVE AND GO BACK TO PREVIOUS PAGE
function goBack() {
  window.location.href = "index2.html";
}

// FUNCTION TO UPDATE STAR
function updateStar() {
  const starIdContainer = document.querySelector(".star-id-container");

  const starId = starIdContainer.dataset.id;

 mailToBeOpened.starred = !mailToBeOpened.starred;

 const openedMailNow = mails.find(mail => mail.id === mailToBeOpened.id);
 if(!openedMailNow) return;

 openedMailNow.starred = !openedMailNow.starred;

  openMail();
  saveMails();
};
// ADD EVENT LISTENERS FOR ALL


function addBackButtonEventListener(){
  const backButton = document.querySelector(".back-button-container");
  backButton.addEventListener("click", () => {
   goBack();
  });
};

  function addStarEventListener() {
  const openedMailStar = document.querySelector(".star-id-container");
  openedMailStar.addEventListener("click", () => {
    updateStar();
  });
};

function addAllEventListeners(){
  addBackButtonEventListener();
  addStarEventListener();
};

function saveMails() {
  localStorage.setItem("mails", JSON.stringify(mails));
};
 

// FUNCTION TO OPEN AND CLOSE LEFT BAR
const menuButton = document.querySelector(".menu-icon");
menuButton.addEventListener("click", () => {
  const leftBar = document.querySelector(".left-bar");
  leftBar.style.display === "none" ? leftBar.style.display = "flex" : leftBar.style.display = "none";
})

      