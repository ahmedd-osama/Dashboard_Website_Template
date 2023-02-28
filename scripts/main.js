// global Functions
function flipActive(element){
  if(element.classList.contains("active")){
    element.classList.remove("active")
  }else if(!element.classList.contains("active")){
    element.classList.add("active")
  }
}
// Dark and bright mode 
let brightBtn = document.querySelector(".nav .dark")
let darkBtn = document.querySelector(".nav .bright")
if(! window.localStorage.colormode){
  window.localStorage.setItem("colormode", "")
}
function goDark() {
  darkBtn.style.display = "none"
  brightBtn.style.display = "block"
  window.localStorage.colormode = "dark"
  changeColorsDark();
}
function goBright() {
  darkBtn.style.display = "block"
  brightBtn.style.display = "none"
  window.localStorage.colormode = "bright"
  changeColorsBright();
}
if(window.localStorage.colormode === "dark"){
  goDark()
} else{
  goBright()
}
function changeColorsDark() {
  // document.documentElement.style.setProperty("--body_color", "#000814");
  document.documentElement.style.setProperty("--body_color", "#2f3e46");
  document.documentElement.style.setProperty("--main-color", "#06d6a0");
  document.documentElement.style.setProperty("--main-color-025", "#06d69e25");
  document.documentElement.style.setProperty("--main-color-2", "rgb(250, 0, 96)");
  document.documentElement.style.setProperty("--main-color-2-025", "rgba(250, 0, 96,0.25)");
  document.documentElement.style.setProperty("--main-color-3", "rgb(49, 97, 251 )");
  document.documentElement.style.setProperty("--main-color-3-025", "rgba(49, 97, 251,0.25)");
  document.documentElement.style.setProperty("--main-color-4", "rgb(219, 219, 0)");
  document.documentElement.style.setProperty("--main-color-4-025", "rgba(219, 219, 0, 0.25)");
  document.documentElement.style.setProperty("--white-black", "#000000");
  document.documentElement.style.setProperty("--black-white", "#ffffff");
  document.documentElement.style.setProperty("--whitetrans-blacktrans", "rgba(255, 255, 255, 0.103)");
  document.documentElement.style.setProperty("--uni-text-color", "#cccccc");
  document.documentElement.style.setProperty("--backgray", "#99999985");
  document.documentElement.style.setProperty("--input-background", "#000814");
  document.documentElement.style.setProperty("--dash-proj-circle", "var(--main-color-3)");
  document.documentElement.style.setProperty("--darkmode-trans", "0.5s");
}
function changeColorsBright() {
  document.documentElement.style.setProperty("--body_color", "#f1f5f9");
  document.documentElement.style.setProperty("--main-color", "#06d6a0");
  document.documentElement.style.setProperty("--main-color-2", "rgb(250, 0, 96)");
  document.documentElement.style.setProperty("--main-color-2-025", "rgba(250, 0, 96,0.25)");
  document.documentElement.style.setProperty("--main-color-3", "rgb(49 97 251)");
  document.documentElement.style.setProperty("--main-color-3-025", "rgba(49, 97, 251,0.25)");
  document.documentElement.style.setProperty("--main-color-4", "rgb(219, 219, 0)");
  document.documentElement.style.setProperty("--main-color-4-025", "rgba(219, 219, 0, 0.25)");
  document.documentElement.style.setProperty("--main-color-025", "#06d69e25");
  document.documentElement.style.setProperty("--white-black", "#ffffff");
  document.documentElement.style.setProperty("--black-white", "#000000");
  document.documentElement.style.setProperty("--whitetrans-blacktrans", "rgba(0, 0, 0, 0.045)");
  document.documentElement.style.setProperty("--uni-text-color", "#555555");
  document.documentElement.style.setProperty("--backgray", "#dddddd");
  document.documentElement.style.setProperty("--input-background", "#f1f5f9");
  document.documentElement.style.setProperty("--dash-proj-circle", "var(--main-color-3)");
  document.documentElement.style.setProperty("--darkmode-trans", "0.5s");

}
// coponents and buttons

// toggle btns
document.querySelectorAll('.toggle-btn').forEach(btn =>{
  btn.innerHTML = '<div class="circle"> <i class="fa-solid fa-check"></i></div>'
  btn.addEventListener('click', e=>e.currentTarget.classList.toggle("active"))
})
// navigation bar and side bar
let menueOpenBtn = document.querySelector(".nav .open")
let menueCloseBtn = document.querySelector(".nav .close")
let menueBtns = document.querySelectorAll(".nav .sidebar")
function sidebarOpenClick(){
  menueOpenBtn.style.display = "none"
  menueCloseBtn.style.display = "block"
  sidebarPush()
  appendSideText()
}
function sidebarCloseClick(){
  menueOpenBtn.style.display = "block"
  menueCloseBtn.style.display = "none"
  sidebarPull()
  removeSideText()
}
sidebarCloseClick()
function removeSideText(){
  let alltext = document.querySelectorAll(".sideContent .sideUl li span")
  let sidetitle = document.querySelector(".sideContent h3")
  alltext.forEach((span)=> span.style.display = "none")
  sidetitle.style.opacity = "0"
  sidetitle.style.width = "0px"
}
function appendSideText(){
  let sidetitle = document.querySelector(".sideContent h3")
  let alltext = document.querySelectorAll(".sideContent .sideUl li span")
  alltext.forEach((span)=> span.style.display = "inline-block")
  sidetitle.style.opacity = "1"
  sidetitle.style.width = "unset"
}
function sidebarPush(){
  let sidebar = document.querySelector(".nav .sideContent")
  if (window.innerWidth <= 412){
    sidebar.style.width = "100vw"
    sidebar.style.left = "0px"
    removeDropdown()
    removeNoteiDropdown()
  }else{
    sidebar.style.left =  "0px"
    sidebar.style.width = "200px"
  }
  sidebar.setAttribute("opened", "true")
  resizeInitialize()
}
function sidebarPull(){
  let sidebar = document.querySelector(".nav .sideContent")
  if (window.innerWidth <= 412){
    sidebar.style.left = "-180px"
    sidebar.style.width = "54.247px"
  }else{
    sidebar.style.left = "0px"
    sidebar.style.width = "54.247px"
  }
  sidebar.setAttribute("opened", "false")
  resizeInitialize()
}

// container resizing on sidebar opening
function resizeMechanizem(){
  if (window.innerWidth > 413){
    let currentContainer ;
    let paddingHolder;
    if(window.innerWidth >=1300){
      currentContainer = 1290
    } else if (window.innerWidth >=1200){
      currentContainer = 1190
    }else if(window.innerWidth >=992){
      currentContainer = 970
    }else if(window.innerWidth >=768){
      currentContainer = 750
    }
    let diff = (window.innerWidth - currentContainer) / 2
    // console.log(diff)
    let sidebar = document.querySelector(".nav .sideContent")
    if (sidebar.getAttribute("opened") === "true"){
    if (diff < 215){
      paddingHolder = 215
    }else if(diff > 215){
      paddingHolder = 15
    }
    } else if (sidebar.getAttribute("opened") === "false"){
      if (diff < 70){
        paddingHolder = 70
      }else if(diff > 70){
        paddingHolder = 15
      }
    }
    
    if (window.innerWidth >=1340){
      if (sidebar.getAttribute("opened") === "true"){
        document.documentElement.style.setProperty("--media1200", `${paddingHolder-90}px`)
        console.log(paddingHolder)
      } else{
          document.documentElement.style.setProperty("--media1200", "0px")
        }
    } else if (window.innerWidth >=1270){
      if (sidebar.getAttribute("opened") === "true"){
        document.documentElement.style.setProperty("--media1200", `${paddingHolder-50}px`)
      } else{
          document.documentElement.style.setProperty("--media1200", "25px")
        }
    } else if (window.innerWidth >=1200){
      document.documentElement.style.setProperty("--media1200", `${paddingHolder}px`)
    }else if(window.innerWidth >=1132){
      if (sidebar.getAttribute("opened") === "true"){
        document.documentElement.style.setProperty("--media992", `${paddingHolder-70}px`)
      } else{
          document.documentElement.style.setProperty("--media992", "0px")
        }
    }else if(window.innerWidth >=1062){
      if (sidebar.getAttribute("opened") === "true"){
        document.documentElement.style.setProperty("--media992", `${paddingHolder-50}px`)
      } else{
          document.documentElement.style.setProperty("--media992", "25px")
        }
    }else if(window.innerWidth >=992){
      document.documentElement.style.setProperty("--media992", `${paddingHolder}px`)
    }else if(window.innerWidth >=908){
      if (sidebar.getAttribute("opened") === "true"){
        document.documentElement.style.setProperty("--media768", `${paddingHolder-75}px`)
      } else{
          document.documentElement.style.setProperty("--media768", "0px")
        }
    }else if(window.innerWidth >=838){
      if (sidebar.getAttribute("opened") === "true"){
        document.documentElement.style.setProperty("--media768", `${paddingHolder-35}px`)
      } else{
          document.documentElement.style.setProperty("--media768", "35px")
        }
    }else if(window.innerWidth >=768){
      document.documentElement.style.setProperty("--media768", `${paddingHolder}px`)
    }
  }
}
function resizeInitialize(){
  document.documentElement.style.setProperty("--media412", "70px");
  document.documentElement.style.setProperty("--media768", "70px");
  document.documentElement.style.setProperty("--media992", "70px");
  document.documentElement.style.setProperty("--media1200", "70px");
  resizeMechanizem()
  window.addEventListener('resize', ()=> resizeMechanizem())
}
resizeInitialize()

// profile: 

// opening:
let profileli = document.querySelector(".nav .profile")
function appendDropdown(){
  if (! document.querySelector(".nav .profileWraper .dropdown")){
    profileWraper = document.querySelector(".nav .profileWraper")
    let dropdownelement = document.createElement("div")
    dropdownelement.classList.add("dropdown")
    dropdownelement.classList.add("from-js")
    dropdownelement.innerHTML = ` <i class="fa-regular fa-x " onclick = "removeDropdown()"></i> <div class="image"><img src="images/avatars/0.png" alt=""></div> <p> Ahmed Osama</p> <button class="settings"> settings</button><button class="change"> Change Account</button> <button class="logout"> Log Out</button>`
    profileWraper.appendChild(dropdownelement)
    console.log("dropdown appended")
  }
  removeNoteiDropdown()
}
function removeDropdown(){
  if (document.querySelector(".nav .profileWraper .dropdown")){
    let dropdown = document.querySelector(".nav .profileWraper .dropdown")
    dropdown.remove()
  }
  
}

// ========== notifications 
let allnotificaions = [
  {title: "Notificaton 1",
    description: "Do not forget to check out your Monthlly progress",
    anchore: "#",
    image: [true, "images/avatars/4.png"],
    type: "hint",
    defaultimg: "images/notifications/gear.jpg"},
{title: "Messege from Natalii",
  description: "Natally sent you a messege and wants you to respond ASAP",
  anchore: "#",
  image: [true, "images/avatars/3.png"],
  type: "messege",
  defaultimg: ""},
{title: "Deadline is close",
  description: "This is to notify you to work on your web broject your ddeadline is after 2 days onlly",
  anchore: "#",
  image: [false, ""],
  type: "time",
  defaultimg: "images/notifications/time.jpg"},
{title: "Deadline is close",
  description: "This is to notify you to work on your web broject your ddeadline is after 2 days onlly",
  anchore: "#",
  image: [false, ""],
  type: "target",
  defaultimg: "images/notifications/check.jpg"},
];
let notificationsli = document.querySelector(".nav .notifications")
function appendNotiDropdown(){
  if (! document.querySelector(".nav .notWraper .dropdown")){
    let notwraper = document.querySelector(".nav .notWraper")
    let dropdownelement = document.createElement("div")
    dropdownelement.classList.add("dropdown")
    dropdownelement.classList.add("from-js")
    dropdownelement.innerHTML = `
    <i class="fa-regular fa-x main-x" onclick ="removeNoteiDropdown()"></i>
    <p class="dropTitle"> <span>${allnotificaions.length}</span> Notifications</p>`
    notwraper.appendChild(dropdownelement)
    console.log("dropdown appended")
    appendNotifications(allnotificaions)
  }
  removeDropdown()
}
function removeNoteiDropdown(){
  if ( document.querySelector(".nav .notWraper .dropdown")){
    let dropdown = document.querySelector(".nav .notWraper .dropdown")
    dropdown.remove()
  }
}


// in future work you may add a filter to show onlly important notifications not all of them
function appendNotifications(array){ 
  let dropdown = document.querySelector(".nav .notWraper .dropdown")
  for (let i = 0; i< array.length; i++){
    console.log("apending")
    let newNoti = document.createElement("div")
    newNoti.classList.add("notefic")
    newNoti.innerHTML = `
    <div class = "content">
      <div class="image"><img src="${array[i].image[0] == true? array[i].image[1]: array[i].defaultimg}" alt="image"></div>
      <div class = "text">
        <p class = "notTitle"> ${array[i].title}</p>
        <p class = "notDescription"> ${array[i].description}</p>
      </div>
    </div>
    <div class = "noti-x">
      <i class = "fa-regular fa-x"></i>
    </div>
  `
  dropdown.appendChild(newNoti)
  }
  removeEventAssign()
}

function removeEventAssign(){
  let allnotsX = document.querySelectorAll(".nav .notWraper .dropdown .notefic .noti-x i")
  allnotsX.forEach((x)=> {
    x.addEventListener("click", ()=>{x.parentElement.parentElement.remove()})
  })
}

// active classes filp

let alllinks = document.querySelectorAll(".nav .sideContent .sideUl li a");
alllinks.forEach((link)=> {
  link.addEventListener("click",()=> {
    alllinks.forEach((element)=> {
      element.classList.remove("active");
    });
    link.classList.add("active");
  })
})

// ========== icon pupup 

function popupFunction(){
//   let allNavIcons = document.querySelectorAll(".nav i")
//   let sidecnt = document.querySelector(".nav .sideContent")
//   allNavIcons.forEach((icon)=> {
//   icon.addEventListener("mouseover", ()=> {
//     sidecnt.style.overflow = "unset";
//     // icon.firstChild.style.opacity = "1";
//   })
//   icon.addEventListener("mouseout", ()=> {
//     sidecnt.style.overflow = "hidden";
//     // icon.firstChild.style.opacity = "0";
//     })
// })
}

// ========================== Yearlly targets
if(! window.localStorage.getItem("yearllytargets")){
  window.localStorage.setItem("yearllytargets",'[]')
}
// window.localStorage.clear()
let alltargetsStorage = JSON.parse(window.localStorage.getItem("yearllytargets"))
let alltargets = alltargetsStorage

let targets = document.querySelector(".dashboard .yearly .targets")

function updateTargetStorage(){
  let alltargetsJson = JSON.stringify(alltargets)
  window.localStorage.setItem("yearllytargets", alltargetsJson)
}
function generateTargetId(){
  let id = `YT${Math.floor((Math.random() * 1000) + 1)}`
  if(alltargets.length === 0){
    return id
  }
  for(let i =0; i<alltargets.length; i++){
    if(alltargets[i].id === id){
      generateTargetId() 
    }else{
      return id;
    }
  }
}
function appendTargetObject( color, icon, title, target, currentProgress){
  let id = generateTargetId()
  
  console.log(id)
  let newtarget = new Object()
  newtarget.id = id
  newtarget.color = color
  newtarget.icon = icon
  newtarget.title = title
  newtarget.target = target
  newtarget.currentProgress = currentProgress
  alltargets.push(newtarget)
  updateTargetStorage()
}
function removeTargetObject(key, value){
  for(let i=0; i< alltargets.length; i++){
    if (alltargets[i][`${key}`] === `${value}`)
    alltargets.splice(i, 1);
  }
  updateTargetStorage()
}
// removeTargetObject("title", "color")
function removeDisplayedTargets(){
  let allDisplayedTargets = document.querySelectorAll(".dashboard .yearly .targets .target")
  allDisplayedTargets.forEach((target)=> target.remove())
}
appendTargets()
function appendTargets(){
  removeDisplayedTargets()
  for(let i=0; i< alltargets.length; i++){
    let iconClass = alltargets[i].icon[0];
    let iconId = alltargets[i].icon[1]
    let newtarget = document.createElement("div")
    newtarget.classList.add("target")
    // newtarget.classList.add(`${alltargets[i].color}`)
    let progress =  alltargets[i].currentProgress
    newtarget.setAttribute("id",`${alltargets[i].id}`)
    newtarget.innerHTML = `
    <i class = "fa-solid fa-gear" onclick ="editStatusSwipe(this); editTarget()"> </i>
    <div class="image"><i class="fa-${iconClass} fa-${iconId}"></i></div>
    <div class="progress">
      <p class="text prog-title">${alltargets[i].title}</p>
      <p class="sup-title prog-progress">${alltargets[i].target}</p>
      <div class="bar"><span class="bar-progress" style="width: ${alltargets[i].currentProgress}%;"><div class="prog-popup">${progress}%</div></span></div>
    </div>
    `;
    targets.appendChild(newtarget)
    let newTargetIcon = document.querySelector(`.dashboard .yearly #${alltargets[i].id} .image i`)
    let newTargetImage = document.querySelector(`.dashboard .yearly  #${alltargets[i].id} .image`)
    let newTargetBar = document.querySelector(`.dashboard .yearly  #${alltargets[i].id} .bar`)
    let newTargetSpan = document.querySelector(`.dashboard .yearly #${alltargets[i].id} .bar span`)
    newTargetImage.style.backgroundColor = `${alltargets[i].color}25`
    newTargetIcon.style.color = `${alltargets[i].color}`
    newTargetBar.style.backgroundColor = `${alltargets[i].color}25`
    newTargetSpan.style.backgroundColor = `${alltargets[i].color}`
    newTargetSpan.style.borderColor = `${alltargets[i].color}`
  }
}
// adding new targets: 
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
function enableScroll() {
  window.onscroll = function () {};
}
function addTarget() {
  let addTargetPopup = document.createElement("div");
  addTargetPopup.innerHTML = `
    <div class="popup">
      <div class="closeBtn" onclick = "closePopup()"> <i class="fa-solid fa-x"></i></div>
      <div class="prototype">
        <div class="target green">
          <div class="image"><i class="fa-solid fa-code"></i></div>
            <div class="progress">
              <p class="text prog-title">Title</p>
              <p class="sup-title prog-progress">Target</p>
              <div class="bar"><span class="bar-progress" style="width: 0%;"><div class="prog-popup">0%</div></span></div>
          </div>
        </div>
      </div>
      <div class="settingins">
  <label for="titleinput"> Title: </label>
  <input type="text" id="titleinput"placeholder="Title" oninput="updateNewPrototype()">
  <label for="targetinput"> Target: </label>
  <input type="text" id="targetinput"placeholder="Target" oninput="updateNewPrototype()">
  <label for="progressrange"> Progress: </label>
  <!-- <input type="range" name="progress" id="progressrange" min="0" max="100"> -->
  <div class="progressContainer d-flex"><input type="number" id="progressrange"value ="0" min="0" max = "100" oninput="updateNewPrototype()"><h3>%</h3></div>
  <h3> Color:</h3>
  <div class="colorPick">
    <div class="green active" bg="#06d6a0" onclick="updateNewPrototype()"></div>
    <div class="red" bg="#fa0060" onclick="updateNewPrototype()"></div>
    <div class="blue" bg="#2444ac"onclick="updateNewPrototype()"></div>
    <div class="yellow" bg="#dbdb00" onclick="updateNewPrototype()"></div>
    <input type="color" id="targetcolor" name="targetcolor" value="#06d6a0" class="" oninput="updateNewPrototype()">
  </div>
  <h3> Icon:</h3>
  <div class="iconPick">
    <i class="fa-solid fa-code active" iconClass = "solid" iconid = "code" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-diagram-project" iconClass = "solid" iconid = "diagram-project" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-magnifying-glass" iconClass = "solid" iconid = "magnifying-glass" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-wifi" iconClass = "solid" iconid = "wifi" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-user-group" iconClass = "solid" iconid = "user-group" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-dollar-sign " iconClass = "solid" iconid = "dollar-sign" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-graduation-cap" iconClass = "solid" iconid = "graduation-cap" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-moon" iconClass = "solid" iconid = "moon" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-satellite-dish" iconClass = "solid" iconid = "satellite-dish" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-chart-pie" iconClass = "solid" iconid = "chart-pie" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-chart-line" iconClass = "solid" iconid = "chart-line" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-school" iconClass = "solid" iconid = "school" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-place-of-worship" iconClass = "solid" iconid = "place-of-worship" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-landmark-flag" iconClass = "solid" iconid = "landmark-flag" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-facebook" iconClass = "brands" iconid = "facebook" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-instagram" iconClass = "brands" iconid = "instagram" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-youtube" iconClass = "brands" iconid = "youtube" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-linkedin" iconClass = "brands" iconid = "linkedin" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-twitter" iconClass = "brands" iconid = "twitter" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-snapchat" iconClass = "brands" iconid = "snapchat" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-slack" iconClass = "brands" iconid = "slack" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-figma" iconClass = "brands" iconid = "figma" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-dribbble" iconClass = "brands" iconid = "dribbble" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-google" iconClass = "brands" iconid = "google" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-apple" iconClass = "brands" iconid = "apple" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-windows" iconClass = "brands" iconid = "windows" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-cloud" iconClass = "solid" iconid = "cloud" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-download" iconClass = "solid" iconid = "download" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-shield-halved" iconClass = "solid" iconid = "shield-halved" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-gift" iconClass = "solid" iconid = "gift" onclick= "updateNewPrototype()"></i>
    <i class="fa-regular fa-pen-to-square" iconClass = "regular" iconid = "pen-to-square" onclick= "updateNewPrototype()"></i>
    <i class="fa-regular fa-comment" iconClass = "regular" iconid = "comment" onclick= "updateNewPrototype()"></i>
    <i class="fa-regular fa-paper-plane" iconClass = "regular" iconid = "paper-plane" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-truck" iconClass = "solid" iconid = "truck" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-car" iconClass = "solid" iconid = "car" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-bicycle" iconClass = "solid" iconid = "bicycle" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-motorcycle" iconClass = "solid" iconid = "motorcycle" onclick= "updateNewPrototype()"></i>
  </div>
  </div>
  <button class= "addBtn" onclick ="addNewTarget(); closePopup()">Add</button>
    </div>
    `;
  addTargetPopup.classList.add("add-target-container");
  document.body.appendChild(addTargetPopup);
  
  disableScroll();
  // adding and removing active classes of colors
  let allColors = document.querySelectorAll(".add-target-container .settingins #targetcolor , .add-target-container .settingins .colorPick div")
  allColors.forEach((color)=>{
    color.addEventListener("click", ()=>{
      allColors.forEach((color)=> color.classList.remove("active"))
      color.classList.add("active")
      updateNewPrototype()
    })
  })
  // adding and removing active classes of icons
  let allIcons = document.querySelectorAll(".add-target-container .settingins .iconPick i")
  allIcons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
      allIcons.forEach((icon)=> icon.classList.remove("active"))
      icon.classList.add("active")
      updateNewPrototype()
    })
  })
}
function closePopup() {
  popup = document.querySelector(".add-target-container");
  popup.remove();
  enableScroll();
}

function updateNewPrototype(){
  let newTitle = document.querySelector(".add-target-container .settingins #titleinput").value ;
  let newTarget= document.querySelector(".add-target-container .settingins #targetinput").value ;
  let newcolorCheck = document.querySelector(".add-target-container .settingins #targetcolor.active");
  let newcolor = newcolorCheck ? newcolorCheck.value: document.querySelector(".add-target-container .settingins .colorPick div.active").getAttribute("bg");
  let newIcon = [document.querySelector(".add-target-container .settingins .iconPick i.active").getAttribute("iconclass"), document.querySelector(".add-target-container .settingins .iconPick i.active").getAttribute("iconid")];
  let newProgress = document.querySelector(".add-target-container .settingins #progressrange").value;
  if (newProgress > 100){
    newProgress = 100
  }
  let targetTitle = document.querySelector(".add-target-container .prototype .progress .prog-title")
  let targetProgresstext = document.querySelector(".add-target-container .prototype .progress .prog-progress")
  let targetImage = document.querySelector(".add-target-container .prototype .image")
  let targetIcon = document.querySelector(".add-target-container .prototype .image i")
  let targetBar = document.querySelector(".add-target-container .prototype .bar")
  let targetSpan = document.querySelector(".add-target-container .prototype .bar span")
  let targetPopup = document.querySelector(".add-target-container .prototype .bar span .prog-popup")
  targetTitle.innerHTML = `${newTitle}`
  targetProgresstext.innerHTML = `${newTarget}`
  targetImage.style.backgroundColor = `${newcolor}25`
  targetIcon.style.color = `${newcolor}`
  targetIcon.className = ''
  targetIcon.classList.add(`fa-${newIcon[0]}`)
  targetIcon.classList.add(`fa-${newIcon[1]}`)
  targetBar.style.backgroundColor = `${newcolor}25`
  targetSpan.style.backgroundColor = `${newcolor}`
  targetSpan.style.borderColor = `${newcolor}`
  targetSpan.style.width = `${newProgress}%`
  targetPopup.innerHTML = `${newProgress}%`
}
function addNewTarget(){
  let newTitle = document.querySelector(".add-target-container .settingins #titleinput").value ;
  let newTarget= document.querySelector(".add-target-container .settingins #targetinput").value ;
  let newcolorCheck = document.querySelector(".add-target-container .settingins #targetcolor.active");
  let newcolor = newcolorCheck ? newcolorCheck.value: document.querySelector(".add-target-container .settingins .colorPick div.active").getAttribute("bg");
  let newIcon = [document.querySelector(".add-target-container .settingins .iconPick i.active").getAttribute("iconclass"), document.querySelector(".add-target-container .settingins .iconPick i.active").getAttribute("iconid")];
  let newProgress = document.querySelector(".add-target-container .settingins #progressrange").value;
  if (newProgress > 100){
    newProgress = 100
  }
  appendTargetObject(newcolor, newIcon, newTitle, newTarget, newProgress)//still
  appendTargets()
}


//  editing targets functions:
function editStatusSwipe(btn){
  let allGearBtns = document.querySelectorAll(".dashboard .yearly .target .fa-gear")
  allGearBtns.forEach((btn)=> {btn.setAttribute("editStatus", "")})
  btn.setAttribute("editStatus", "on")
}
function editTarget(){
  let currentTargetid ;
  let allGearBtns = document.querySelectorAll(".dashboard .yearly .target .fa-gear")
  allGearBtns.forEach((btn)=> {btn.getAttribute("editStatus") === "on"?currentTargetid = btn.parentElement.getAttribute("id"): ""; })
  let currentargetObject;
  for (let i = 0; i< alltargets.length; i++){
    if (alltargets[i].id === currentTargetid){
      currentargetObject = alltargets[i];
    }
  }
  // popup:
  let addTargetPopup = document.createElement("div");
  addTargetPopup.innerHTML =`
    <div class="popup">
      <div class="closeBtn" onclick = "closePopup()"> <i class="fa-solid fa-x"></i></div>
      <div class="prototype">
        <div class="target">
          <div class="image"><i class="fa-${currentargetObject.icon[0]} fa-${currentargetObject.icon[1]}"></i></div>
            <div class="progress">
              <p class="text prog-title">${currentargetObject.title}</p>
              <p class="sup-title prog-progress">${currentargetObject.target}</p>
              <div class="bar"><span class="bar-progress" style="width: ${currentargetObject.currentProgress}%;"><div class="prog-popup">${currentargetObject.currentProgress}%</div></span></div>
          </div>
        </div>
      </div>
      <div class="settingins">
  <label for="titleinput"> Title: </label>
  <input type="text" id="titleinput"placeholder="Title" oninput="updateNewPrototype()" value="${currentargetObject.title}">
  <label for="targetinput"> Target: </label>
  <input type="text" id="targetinput"placeholder="Target" oninput="updateNewPrototype()"value="${currentargetObject.target}">
  <label for="progressrange"> Progress: </label>
  <div class="progressContainer d-flex"><input type="number" id="progressrange"value ="0" min="0" max = "100" oninput="updateNewPrototype()" value="${currentargetObject.currentProgress}"><h3>%</h3></div>
  <h3> Color:</h3>
  <div class="colorPick">
    <div class="green " bg="#06d6a0" onclick="updateNewPrototype()"></div>
    <div class="red" bg="#fa0060" onclick="updateNewPrototype()"></div>
    <div class="blue" bg="#2444ac"onclick="updateNewPrototype()"></div>
    <div class="yellow" bg="#dbdb00" onclick="updateNewPrototype()"></div>
    <input type="color" id="targetcolor" name="targetcolor" class="active" oninput="updateNewPrototype()" value="${currentargetObject.color}">
  </div>
  <h3> Icon:</h3>
  <div class="iconPick">
    <i class="fa-solid fa-code " iconClass = "solid" iconid = "code" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-diagram-project" iconClass = "solid" iconid = "diagram-project" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-magnifying-glass" iconClass = "solid" iconid = "magnifying-glass" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-wifi" iconClass = "solid" iconid = "wifi" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-user-group" iconClass = "solid" iconid = "user-group" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-dollar-sign active" iconClass = "solid" iconid = "dollar-sign" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-graduation-cap" iconClass = "solid" iconid = "graduation-cap" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-moon" iconClass = "solid" iconid = "moon" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-satellite-dish" iconClass = "solid" iconid = "satellite-dish" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-chart-pie" iconClass = "solid" iconid = "chart-pie" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-chart-line" iconClass = "solid" iconid = "chart-line" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-school" iconClass = "solid" iconid = "school" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-place-of-worship" iconClass = "solid" iconid = "place-of-worship" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-landmark-flag" iconClass = "solid" iconid = "landmark-flag" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-facebook" iconClass = "brands" iconid = "facebook" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-instagram" iconClass = "brands" iconid = "instagram" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-youtube" iconClass = "brands" iconid = "youtube" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-linkedin" iconClass = "brands" iconid = "linkedin" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-twitter" iconClass = "brands" iconid = "twitter" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-snapchat" iconClass = "brands" iconid = "snapchat" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-slack" iconClass = "brands" iconid = "slack" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-figma" iconClass = "brands" iconid = "figma" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-dribbble" iconClass = "brands" iconid = "dribbble" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-google" iconClass = "brands" iconid = "google" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-apple" iconClass = "brands" iconid = "apple" onclick= "updateNewPrototype()"></i>
    <i class="fa-brands fa-windows" iconClass = "brands" iconid = "windows" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-cloud" iconClass = "solid" iconid = "cloud" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-download" iconClass = "solid" iconid = "download" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-shield-halved" iconClass = "solid" iconid = "shield-halved" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-gift" iconClass = "solid" iconid = "gift" onclick= "updateNewPrototype()"></i>
    <i class="fa-regular fa-pen-to-square" iconClass = "regular" iconid = "pen-to-square" onclick= "updateNewPrototype()"></i>
    <i class="fa-regular fa-comment" iconClass = "regular" iconid = "comment" onclick= "updateNewPrototype()"></i>
    <i class="fa-regular fa-paper-plane" iconClass = "regular" iconid = "paper-plane" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-truck" iconClass = "solid" iconid = "truck" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-car" iconClass = "solid" iconid = "car" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-bicycle" iconClass = "solid" iconid = "bicycle" onclick= "updateNewPrototype()"></i>
    <i class="fa-solid fa-motorcycle" iconClass = "solid" iconid = "motorcycle" onclick= "updateNewPrototype()"></i>
  </div>
  </div>
  <button class= "saveBtn" onclick =" SaveTargetChanges(); closePopup()">Save</button>
  <button class= "deletBtn" onclick ="deleteTarget(); closePopup()"> <i class="fa-solid fa-trash"></i>Delte</button>
    </div>
    `;
  addTargetPopup.classList.add("add-target-container");
  document.body.appendChild(addTargetPopup);
  disableScroll();
  // progress counter initial value
  document.querySelector(".add-target-container .settingins #progressrange").defaultValue =`${currentargetObject.currentProgress}`
  // adding and removing active classes of colors
  let allColors = document.querySelectorAll(".add-target-container .settingins #targetcolor , .add-target-container .settingins .colorPick div")
  allColors.forEach((color)=>{
    color.addEventListener("click", ()=>{
      allColors.forEach((color)=> color.classList.remove("active"))
      color.classList.add("active")
      updateNewPrototype()
    })
  })
  // adding and removing active classes of icons
  let allIcons = document.querySelectorAll(".add-target-container .settingins .iconPick i")
  allIcons.forEach((icon)=>{
    if(icon.getAttribute("iconClass") === currentargetObject.icon[0] && icon.getAttribute("iconid") === currentargetObject.icon[1]){
      allIcons.forEach((icon)=> {icon.classList.remove("active")})
      icon.classList.add("active")
    }
    icon.addEventListener("click", ()=>{
      allIcons.forEach((icon)=> icon.classList.remove("active"))
      icon.classList.add("active")
      updateNewPrototype()
    })
  })
  // color styling 
  let targetImage = document.querySelector(".add-target-container .prototype .image")
  let targetIcon = document.querySelector(".add-target-container .prototype .image i")
  let targetBar = document.querySelector(".add-target-container .prototype .bar")
  let targetSpan = document.querySelector(".add-target-container .prototype .bar span")
  let targetPopup = document.querySelector(".add-target-container .prototype .bar span .prog-popup")
  targetImage.style.backgroundColor = `${currentargetObject.color}25`
  targetIcon.style.color = `${currentargetObject.color}`
  targetBar.style.backgroundColor = `${currentargetObject.color}25`
  targetSpan.style.backgroundColor = `${currentargetObject.color}`
  targetSpan.style.borderColor = `${currentargetObject.color}`
}
function SaveTargetChanges(){
  let currentTargetid ;
  let allGearBtns = document.querySelectorAll(".dashboard .yearly .target .fa-gear")
  allGearBtns.forEach((btn)=> {btn.getAttribute("editStatus") === "on"?currentTargetid = btn.parentElement.getAttribute("id"): ""; })
  let newTitle = document.querySelector(".add-target-container .settingins #titleinput").value ;
  let newTarget= document.querySelector(".add-target-container .settingins #targetinput").value ;
  let newcolorCheck = document.querySelector(".add-target-container .settingins #targetcolor.active");
  let newcolor = newcolorCheck ? newcolorCheck.value: document.querySelector(".add-target-container .settingins .colorPick div.active").getAttribute("bg");
  let newIcon = [document.querySelector(".add-target-container .settingins .iconPick i.active").getAttribute("iconclass"), document.querySelector(".add-target-container .settingins .iconPick i.active").getAttribute("iconid")];
  let newProgress = document.querySelector(".add-target-container .settingins #progressrange").value;
  if (newProgress > 100){
    newProgress = 100
  }

  for (let i = 0; i< alltargets.length; i++){
    if (alltargets[i].id === currentTargetid){
      alltargets[i].color = newcolor;
      alltargets[i].title = newTitle;
      alltargets[i].target = newTarget;
      alltargets[i].currentProgress = newProgress;
      alltargets[i].icon = newIcon;
    }
  }
  appendTargets()
  updateTargetStorage()
}
function deleteTarget(){
  let currentTargetid ;
  let allGearBtns = document.querySelectorAll(".dashboard .yearly .target .fa-gear")
  allGearBtns.forEach((btn)=> {btn.getAttribute("editStatus") === "on"?currentTargetid = btn.parentElement.getAttribute("id"): ""; })
  removeTargetObject("id", currentTargetid);
  appendTargets();
}

// Tasks 
function tasksTrashIconAssign(){
  let alltrashIcons = document.querySelectorAll(".dashboard .tasks .task .fa-trash")
alltrashIcons.forEach((icon)=>{
  icon.addEventListener("click", ()=> icon.parentElement.parentElement.remove())
})
}
tasksTrashIconAssign()

//projects box

function addActiveClass(element){
  element.classList.add("active")
}
function removeActiveClass(element){
  element.classList.remove("active")
}
function addCheckedClass(element){
  element.classList.add("checked")
}
function removeCheckedClass(element){
  element.classList.remove("checked")
}
function addSemiCheckedClass(element){
  element.classList.add("semi-checked")
}
function removeSemiCheckedClass(element){
  element.classList.remove("semi-checked")
}
function changeActiveBefore(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  allCircles.forEach((circle)=> {
    if (circle.classList.contains("active")){
      circle.classList.replace("active","activebefore")
    }
  })
}
function changeBefoeActive(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  allCircles.forEach((circle)=> {
    if (circle.classList.contains("activebefore")){
      circle.classList.replace("activebefore","active")
      
    }
  })
}
function removeActiveAllCircles(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  allCircles.forEach((circle)=> circle.classList.remove("active"))
}
function removeAllActiveBefore(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  allCircles.forEach((circle)=> circle.classList.remove("activebefore"))
}
function addNoMouseEventClass(element){
  element.classList.add("noMouseEvent")
}
function chCircProject(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  allCircles.forEach((circle)=> circle.classList.remove("checked"))
  allCircles.forEach((circle)=> circle.classList.remove("semi-checked"))
  allCircles.forEach((circle)=> circle.classList.remove("noMouseEvent"))
  for(let i =0; i<allCircles.length;i++){
    if (allCircles[i].classList.contains("active")){
      for(let i =0; i<allCircles.length;i++){
        if (! allCircles[i].classList.contains("active")){
          addCheckedClass(allCircles[i])
          allCircles[i].classList.add("noMouseEvent")
        }else{
          addCheckedClass(allCircles[i])
          if (allCircles[i+1]){
            addSemiCheckedClass(allCircles[i+1])
          }
          break
        }
      }
    }
  }
}
chCircProject()
function projCircleClick(element){
  removeActiveAllCircles();
  removeAllActiveBefore();
  addActiveClass(element);
  chCircProject(); 
  addNoMouseEventClass(element);
  projCircleChkComplete();
  confettiProjectBox()
}
function projMouseEnter(element){
  if( ! element.classList.contains("noMouseEvent") ){
    changeActiveBefore();
    addActiveClass(element); 
    chCircProject();
    projCircleChkComplete();
  }
}
function projMouseLeave(element){
  if( ! element.classList.contains("noMouseEvent") ){
    removeActiveClass(element);
    changeBefoeActive(); 
    chCircProject();
    projCircleChkComplete();
  }
}
function projCircleChkComplete(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  let completeStatus ;
  allCircles.forEach((circle)=> {
    if(circle.classList.contains("checked")){
      completeStatus = "true"
    }else{
      completeStatus = "false"
    }
  })
  if (completeStatus === "true"){
    allCircles.forEach((circle)=> {
      circle.style.backgroundColor = "var(--main-color)"
      circle.style.borderColor = "var(--main-color)"
      document.documentElement.style.setProperty("--dash-proj-circle", "var(--main-color)");
    })
  }
  if (completeStatus === "false"){
    allCircles.forEach((circle)=> {
      let allCirclesChecked = document.querySelectorAll(".dashboard .projectProgress .step .checked")
      let allCirclesSemiChecked = document.querySelectorAll(".dashboard .projectProgress .step .semi-checked")
      circle.style.backgroundColor = "var(--white-black)"
      circle.style.borderColor = "var(--main-color-3)"
      allCirclesChecked.forEach((circle)=> circle.style.backgroundColor = "var(--main-color-3)")
      allCirclesSemiChecked.forEach((circle)=> circle.style.backgroundColor = "var(--main-color-3-025)")
      document.documentElement.style.setProperty("--dash-proj-circle", "var(--main-color-3)");
    })
  }
}
function projCircColorReset(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  allCircles.forEach((circle)=> {
    let allCirclesChecked = document.querySelectorAll(".dashboard .projectProgress .step .checked")
    circle.style.backgroundColor = "var(--white-black)"
    circle.style.borderColor = "var(--main-color-3)"
    allCirclesChecked.forEach((circle)=> circle.style.backgroundColor = "var(--main-color-3)")
    document.documentElement.style.setProperty("--dash-proj-circle", "var(--main-color-3)");
  })
  
}
function confettiProjectBox(){
  let allCircles = document.querySelectorAll(".dashboard .projectProgress .step .circle")
  let completeStatus ;
  allCircles.forEach((circle)=> {
    if(circle.classList.contains("checked")){
      completeStatus = "true"
    }else{
      completeStatus = "false"
    }
  })
  if (completeStatus === "true"){
    window.confettiful = new Confettiful(document.querySelector('.dashboard'));
  }
}

// projects table

function tapleImageOffset(){
  let allTrs = document.querySelectorAll(".dashboard .projects table tbody tr")
  for(let i = 0 ; i < allTrs.length; i++){
    let offsetValue = 25;
    let allimages = document.querySelectorAll(`.dashboard .projects table tbody tr:nth-child(${i+1}) td.team > img`)
    for(let i = 0; i< allimages.length; i++){
      if (! i == 0){
        allimages[i].style.left = `-${i*offsetValue}px`
      }
    }
  }
}
tapleImageOffset()

// settings page
document.querySelectorAll("#settings .servers .server").forEach(server=>{
  server.addEventListener('click', e=>{
    document.querySelectorAll("#settings .servers .server").forEach(server=>server.classList.remove('active'))
    e.currentTarget.classList.add('active')
  })
})


// Nav bar intersection observer
let sectionOberver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll('.nav .sideUl li a').forEach(link=>link.classList.remove('active'))
      document.querySelector(`.nav .sideUl a${entry.target.getAttribute('data-intersection-selector')}-lnk`).classList.add('active')
    }else{
      document.querySelector(`.nav .sideUl a${entry.target.getAttribute('data-intersection-selector')}-lnk`).classList.remove('active')
    }
  })
})
document.querySelectorAll('body .section').forEach(section=>{sectionOberver.observe(section)})
// confetti congratulations effect
const Confettiful = function(el) {
  this.el = el;
  this.containerEl = null;
  
  this.confettiFrequency = 3;
  this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];
  
  this._setupElements();
  this._renderConfetti();
};
Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;
  
  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }
  
  containerEl.classList.add('confetti-container');
  
  this.el.appendChild(containerEl);
  
  this.containerEl = containerEl;
};
Confettiful.prototype._renderConfetti = function() {
  let timeStart = Date.now()
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 10) + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
    
    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;
    if(Date.now() - timeStart > 3000){
      clearInterval(this.confettiInterval)
      confettiEl.removeFunc =function() {
        let confettiContainer = document.querySelectorAll(" .confetti-container")
        confettiContainer.forEach((container)=> container.remove())
      }
      confettiEl.removeFunc()
    }
    this.containerEl.appendChild(confettiEl);
  }, 20);
};
