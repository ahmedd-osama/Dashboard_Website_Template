//=========== landing changing backgrounds
let landing = document.querySelector(".landing");
function changeBack() {
  let imgs = [
    "url(../static/images/landing/1.jpg)",
    "url(../static/images/landing/2.jpg)",
    "url(../static/images/landing/3.jpg)",
    "url(../static/images/landing/4.jpg)",
    "url(../static  /images/landing/5.jpg)",
  ];
  const bg = imgs[Math.floor(Math.random() * imgs.length)];
  landing.style.backgroundImage = bg;
}
setInterval(changeBack, 5000);

// ========== side bar navigation

let iconopen = document.querySelector(".header .navigation .nav_opts_mobile i");
let iconclose = document.createElement("i");
iconclose.classList.add("fa-solid");
iconclose.classList.add("fa-xmark");
let sidebar = document.querySelector(".header .nav_opts_mobile ul");
let nav_opts_mobile = document.querySelector(".header .nav_opts_mobile");
iconopen.addEventListener("click", (e) => {
  sidebar.style.right = "2px";
  iconopen.remove();
  nav_opts_mobile.appendChild(iconclose);
  iconclose.addEventListener("click", () => {
    sidebar.style.right = "-100vw";
    iconclose.remove();
    nav_opts_mobile.appendChild(iconopen);
  });
});

// ============ closing sidebar when clicking any button
let navopts = document.querySelectorAll(".header .nav_opts_mobile .nav_opt");
navopts.forEach((opt) => {
  opt.addEventListener("click", (e) => iconclose.click());
});

// ========================= Dark and bright mode =====================//
let darkBtn = document.querySelector(".header .nav_opts ul .dark");
let brightBtn = document.querySelector(".header .nav_opts ul .bright");
let darkBtnMobile = document.querySelector(".header .nav_opts_mobile ul .dark");
let brightBtnMobile = document.querySelector(
  ".header .nav_opts_mobile ul .bright"
);
let nav_optsDark = document.querySelector(".header .nav_opts ul");
let nav_opts_mobileDark = document.querySelector(".header .nav_opts_mobile ul");
let loginMobile = document.querySelector(".header .nav_opts_mobile ul .login");
let joinMobile = document.querySelector(".header .nav_opts_mobile ul .join");
function goDark() {
  brightBtn.remove();
  brightBtnMobile.remove();
  nav_optsDark.appendChild(darkBtn);
  loginMobile.remove();
  joinMobile.remove();
  nav_opts_mobileDark.appendChild(darkBtnMobile);
  nav_opts_mobileDark.appendChild(loginMobile);
  nav_opts_mobileDark.appendChild(joinMobile);
  changeColorsDark();
}
function goBright() {
  darkBtnMobile.remove();
  darkBtn.remove();
  nav_optsDark.appendChild(brightBtn);
  loginMobile.remove();
  joinMobile.remove();
  nav_opts_mobileDark.appendChild(brightBtnMobile);
  nav_opts_mobileDark.appendChild(loginMobile);
  nav_opts_mobileDark.appendChild(joinMobile);
  changeColorsBright();
}
goBright();

function changeColorsDark() {
  document.documentElement.style.setProperty("--body_color", "#000814");
  document.documentElement.style.setProperty("--dark_to_white", "#ffffff");
  document.documentElement.style.setProperty("--dynamic_black", "#ffffff");
  document.documentElement.style.setProperty("--dynamic_white", "#000814");
  document.documentElement.style.setProperty(
    "--backgray_to_backblack",
    "#2f3e46"
  );
  document.documentElement.style.setProperty("--white_to_black", "#ffffff");
}
function changeColorsBright() {
  document.documentElement.style.setProperty("--body_color", "#ffffff");
  document.documentElement.style.setProperty("--dark_to_white", "#000000");
  document.documentElement.style.setProperty("--dynamic_black", "#000000");
  document.documentElement.style.setProperty("--dynamic_white", "#ffffff");
  document.documentElement.style.setProperty(
    "--backgray_to_backblack",
    "#ececec"
  );
  document.documentElement.style.setProperty("--white_to_black", "#000000");
}

// ================================= landing ================================
// ================search bar
let searchBtn = document.querySelector(".searchBtn");
let searchbar = document.querySelector(
  ".landing .searchContainer input[type='text'"
);
let trynum = 0;
searchBtn.addEventListener(
  "click",
  (e) => {
    e.currentTarget.disabled = true;
    searchbar.style.width = "700px";
    if (window.innerWidth <= 768) {
      searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    }
    if (trynum === 1) {
      console.log("what the hell");
    }
    searchBtn.style.backgroundColor = "var(--green_color)";
    searchBtn.style.color = "white";
    trynum++;
  },
  false
);
// ===============Gallary ==============================================================================
let gallaryscobe = document.querySelector(".gallary .gallaryScobe");
// console.log(gallaryscobe.attributes.ahmed.value) ======will be needed below
// let string = "lights"
// let trystring = "lights cars war"
// if (!trystring.includes(string)){
//   console.log("success")
// }else{
//   console.log("success again")
// }
let dataUrls = []; // stores the urls of the images of the gallary section
let dataSizeTypeWide = [
  "wide",
  "wide",
  "wide",
  "wide",
  "wide",
  "desktop",
  "desktop",
  "desktop",
  "desktop",
  "desktop",
  "desktop",
  "desktop",
  "desktop",
  "desktop",
];
let dataSizeTypePhone = ["taplet", "taplet", "phone", "phone"];
let allDataSizeType = [...dataSizeTypeWide, ...dataSizeTypePhone]; // the order is important
let alldataSizeTypeSet = new Set();
for (let i = 0; i < allDataSizeType.length; i++) {
  alldataSizeTypeSet.add(allDataSizeType[i]);
}
//generating and storing the urls of the images inside dataUrls array

let wideimgsCount = dataSizeTypeWide.length;
// console.log(`you have ${wideimgsCount} wide size image`);
let phoneimgsCount = dataSizeTypePhone.length;
// console.log(`you have ${phoneimgsCount} phone size image`);
for (let i = 0; i < wideimgsCount; i++) {
  dataUrls.push(`../static/images/gallary/${i}.jpg`); // must be the position from the html file not the js file
}
for (let i = 0; i < phoneimgsCount; i++) {
  dataUrls.push(`../static/images/gallary/p${i}.jpg`); // must be the position from the html file not the js file
}

// assiging, creating, and storing the themes of the images;

let datathems = [
  ["cars", "dark", "night"],
  ["nature", "history", "mountains", "warriors"],
  ["futuristic", "energy", "lights", "sky"],
  ["cars", "night", "lights", "road"],
  ["warriors", "war", "trees"],
  ["animals", "art", "lines", "dark"],
  ["city", "cars", "lights", "streets"],
  ["futuristic", "lights", "cyperpunk"],
  ["day", "road", "sky"],
  ["anime", "warriors", "trees", "moon"],
  ["warriors", "trees", "war"],
  ["anime", "warriors"],
  ["cyperpunk", "lights", "war"],
  ["lights", "street", "art", "night"],
  ["street", "people", "art", "photography"],
  ["road", "desert"],
  ["animals", "art"],
  ["road", "trees", "forest", "rivers"],
];
// making a set and adding only the unique (not repeated) values of the themes
let themes = new Set();
for (let i = 0; i < datathems.length; i++) {
  for (let x = 0; x < datathems[i].length; x++) {
    themes.add(datathems[i][x]);
  }
}
// -----------------------------------------------------------------------------

let gallarydata = []; // stores the opjects that contains the imgs data
function generate_lis_data(url, sizetype, theme) {
  const dataObj = new Object();
  dataObj.url = `${url}`;
  dataObj.sizetype = `${sizetype}`;
  dataObj.theme = `${theme}`;
  gallarydata.push(dataObj);
}
// ============================== inserting function
function insertImg(url, sizetype, themes) {
  generate_lis_data(url, sizetype, (themes = []));
  let oldLis = document.querySelectorAll(".gallary ul li");
  oldLis.forEach((li) => li.remove());
  generate_lis();
}
// =============================== lis generation function
function generate_lis() {
  if (gallarydata !== []) {
    gallarydata = []; //to prevent the recreation of any item again
    // console.log("gallarydata =<"+gallarydata);
  }
  for (let i = 0; i < dataUrls.length; i++) {
    generate_lis_data(dataUrls[i], allDataSizeType[i], datathems[i]);
  }
  for (let i = 0; i < gallarydata.length; i++) {
    // generating li element
    let generated_li = document.createElement("li");
    generated_li.setAttribute("url", gallarydata[i].url);
    generated_li.setAttribute("size", `${gallarydata[i].sizetype} all`);
    generated_li.setAttribute("themes", gallarydata[i].theme);
    generated_li.classList.add("shadow1_3");
    // generating a element
    let generated_a = document.createElement("a");
    // generated_a.setAttribute("href",  `${gallarydata[i].url}`) ; in case you wnat to open the image in another tap on clicking
    generated_a.setAttribute("target", `_blank`);
    // generating img element
    let generated_img = document.createElement("img");
    generated_img.setAttribute("src", `${gallarydata[i].url}`);
    generated_img.setAttribute("alt", `image not found. image id${i}`);
    // generating download button element
    let downloadBtn = document.createElement("button");
    downloadBtn.classList.add("imgDownloadBtn");
    downloadBtn.setAttribute("onclick", "downloadBtnAssign()");
    downloadBtn.innerHTML = "Download";
    // appending elements to the gallary section
    generated_a.appendChild(generated_img);
    generated_a.appendChild(downloadBtn);
    generated_li.appendChild(generated_a);
    gallaryscobe.appendChild(generated_li);
  }
}
function deleteallimgs() {
  imgs = document.querySelectorAll(".gallary .gallaryScobe li");
  imgs.forEach((e) => e.remove());
}
generate_lis();

// ================================================filtes
let sizeSelection = document.querySelector(".gallary .sizeSelection");
let themeSelection = document.querySelector(".gallary .ThemeSelection");
function generateSizes() {
  let sizesArray = [...alldataSizeTypeSet];
  for (let i = 0; i < sizesArray.length; i++) {
    let sizetype = document.createElement("div");
    sizetype.classList.add("sizetype");
    sizetype.setAttribute("filter", `${sizesArray[i]}`);
    let sizeP = document.createElement("p");
    sizeP.innerHTML = `${sizesArray[i]}`;
    sizetype.appendChild(sizeP);
    sizeSelection.appendChild(sizetype);
  }
}
generateSizes(); //  Generating size options and appending it to the filtering section
function generateThemes() {
  let sortedThemes = [...themes].sort();
  for (let i = 0; i < sortedThemes.length; i++) {
    let themetype = document.createElement("div");
    themetype.classList.add("themetype");
    themetype.setAttribute("filter", `${sortedThemes[i]}`);
    themetype.setAttribute("clicked", `false`);
    let themeP = document.createElement("p");
    themeP.innerHTML = `${sortedThemes[i]}`;
    themetype.appendChild(themeP);
    themeSelection.appendChild(themetype);
  }
}
generateThemes(); // Generating theme options and appending it to the filtering section

// size filter =>
let allsizeoptions = document.querySelectorAll(
  ".gallary .sizeSelection .sizetype"
);

function sizeFilteration() {
  allsizeoptions.forEach(function (sizeopt) {
    let allimgs = document.querySelectorAll(".gallary .gallaryScobe li");
    sizeopt.addEventListener("click", function (e) {
      //============changing background color
      allsizeoptions.forEach((sizeopt) => sizeopt.classList.remove("active"));
      sizeopt.classList.add("active");
      // ========= filteration
      deleteallimgs(); // remove all old imgs
      generate_lis(); // generate the images again
      allimgs = document.querySelectorAll(".gallary .gallaryScobe li");
      allimgs.forEach((img) => {
        if (
          !img.getAttribute("size").includes(sizeopt.getAttribute("filter"))
        ) {
          img.remove();
        }
      });
      imgsFilteration();
      allimgs = document.querySelectorAll(".gallary .gallaryScobe li");
    });
  });
}
sizeFilteration();

// ======== Theme Filter

let allthemeoptions = document.querySelectorAll(
  ".gallary .ThemeSelection .themetype"
);
let themesFilter = [];
function assignEvent(themeopt) {
  let clicked = themeopt.getAttribute("clicked");
  if (clicked === "false") {
    themeopt.addEventListener("click", () => {
      themeopt.classList.add("active");
      themeopt.setAttribute("clicked", "true");
      themesFilter.push(themeopt.getAttribute("Filter"));
      // console.log("current themes Filters Holder => " + themesFilter)
      imgsFilteration();
      assignEvent(themeopt);
    });
  } else if (clicked === "true") {
    themeopt.addEventListener("click", () => {
      themeopt.classList.remove("active");
      themeopt.setAttribute("clicked", "false");
      themesFilter = themesFilter.filter(
        (filter) => filter !== themeopt.getAttribute("filter")
      ); // to remove the filter name from the (themesFilter) variable
      // console.log("current themes Filters Holder => " + themesFilter)// to insure the filteration in the line above workde directlyy
      assignEvent(themeopt);
      let allsizeoptions = document.querySelectorAll(
        ".gallary .sizeSelection .sizetype"
      );
      allsizeoptions.forEach((sizeopt) => {
        sizeopt.classList.contains("active") ? sizeopt.click() : "";
      }); // to make both filters of size and themes work together
    });
  }
}

allthemeoptions.forEach((themeopt) => assignEvent(themeopt)); // to loop on the themes options and assign the event of each one of them

function imgsFilteration() {
  let allimgs = document.querySelectorAll(".gallary .gallaryScobe li");
  allimgs.forEach((img) => {
    if (themesFilter !== []) {
      for (let i = 0; i < themesFilter.length; i++) {
        if (!img.getAttribute("themes").includes(themesFilter[i])) {
          img.remove();
        }
      }
    }
  });
}

// ======================== image not found messege :
function noImgMessege() {
  let allimgs = document.querySelectorAll(".gallary .gallaryScobe li");
  if (allimgs === []) {
    console.log("no img");
    let messege = document.createElement("li");
    messege.innerHTML =
      "<span>Sorry</span>, we did not find the image you are looking for";
    messege.classList.add("notFoundMessege");
    let gallaryScobe = document.querySelector(".gallary .gallaryScobe");
    gallaryScobe.appendChild(messege);
  }
}

// ============================ Download popup
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
function downloadBtnAssign() {
  let downloadPopup = document.createElement("div");
  downloadPopup.innerHTML = `
    <div class="download">
      <div class="closeBtn" onclick = "closePopup()"> <i class="fa-solid fa-x"></i></div>
      <div class="image"> <i class="fa-regular fa-image"></i></div>
      <div class="resolution">
        <p class="title">resolution:</p>
        <ul>
          <li><p>720p</p></li>
          <li><p>1080p</p></li>
          <li><p>4k</p></li>
          <li><p>8k</p></li>
        </ul>
        <button class="downloadBtn" onclick = "closePopup()"> <i class="fa-solid fa-download"></i> Download</button>
      </div>
    </div>`;
  downloadPopup.classList.add("downloadcontainer");
  document.body.appendChild(downloadPopup);
  let allRes = document.querySelectorAll(
    ".downloadcontainer .download .resolution ul li"
  );
  allRes.forEach((res) => {
    res.addEventListener("click", () => {
      allRes.forEach((res) => res.classList.remove("active"));
      res.classList.add("active");
    });
  });
  disableScroll();
}
function closePopup() {
  popup = document.querySelector(".downloadcontainer");
  popup.remove();
  enableScroll();
}
// ======================= Artists ===========

let teamcontainer = document.querySelector(".team .teamcontainer");
let artistNumber = 7; // the number of the images in the folder of the avatars
let names = [];
let artistImgUrls = [];
let artistsSocials = []; // [[Facebook]]
let artists = []; // holdes the opject that containse the data for each box
let artistdescription = [];
let artistDefaultDescription =
  "Hi, I work for Artlly. It has been greet so far. I made a lot of friends and got tons of experience";
function artistdatainjection(
  name = " artist name",
  imgUrl = "url_not_correnct",
  socials = [
    "https://linkedin.com",
    "https://twitter.com",
    "https://facebook.com",
    "https://youtube.com",
  ],
  descreption = artistDefaultDescription
) {
  names.push(name);
  artistImgUrls.push(imgUrl);
  artistsSocials.push(socials);
  artistdescription.push(descreption);
  artistobject = new Object();
  artistobject.name = name;
  artistobject.imgUrl = imgUrl;
  artistobject.linkedin = socials[0];
  artistobject.twitter = socials[1];
  artistobject.facebook = socials[2];
  artistobject.youtube = socials[3];
  artistobject.descreption = descreption;
  artists.push(artistobject);
}
for (let i = 0; i < artistNumber; i++) {
  let Madenames = [
    "ahmed",
    "Monika",
    "Laila",
    "suzan",
    "mark",
    "daiana",
    "Emma",
  ];
  artistdatainjection(Madenames[i], `../static/images/avatars/${i}.png`, [
    "https://linkedin.com",
    "https://twitter.com",
    "https://facebook.com",
    "https://youtube.com",
  ]);
}
generateArtists();

function generateArtists() {
  for (let i = 0; i < artists.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <div class ="wraper">
    <div class="data">
    <div class="image"><img src=${artists[i].imgUrl} alt=${
      artists[i].name
    }></div>
    <div class="social">
      ${
        artists[i].linkedin
          ? '<a href="' +
            artists[i].linkedin +
            '"target="_blank"><i class="fa-brands fa-linkedin-in linkedin"></i></a>'
          : ""
      }
      ${
        artists[i].twitter
          ? '<a href="' +
            artists[i].twitter +
            '"target="_blank"><i class="fa-brands fa-twitter twitter"></i></a>'
          : ""
      }
      ${
        artists[i].facebook
          ? '<a href="' +
            artists[i].facebook +
            '"target="_blank"><i class="fa-brands fa-facebook-f facebook"></i></a>'
          : ""
      }
      ${
        artists[i].youtube
          ? '<a href="' +
            artists[i].youtube +
            '"target="_blank"><i class="fa-brands fa-youtube youtube"></i></a>'
          : ""
      }
      </div>
    </div>
    <h3>
    ${artists[i].name}
    </h3>
    <p>${artists[i].descreption}</p>
    </div>`;

    teamcontainer.appendChild(box);
  }
}

// =========================Reviews

let allReviews = [];
let defaultText =
  "Artlly is incrediable. I use it all the time to get different images for my bussiness. It helped me get my busness online platforms performing beter.";
function generateReview(name, rating, text = defaultText, imgUrl) {
  let review = new Object();
  review.name = name;
  review.rating = rating;
  review.text = text;
  review.imgUrl = imgUrl;
  allReviews.push(review);
}
// ====== reveiws generated
generateReview("emily", 10, undefined, "../static/images/avatars/p1.png");
generateReview("ahmed", 9, undefined, "../static/images/avatars/0.png");
generateReview("diana", 10, undefined, "../static/images/avatars/p2.png");
generateReview("selena", 10, undefined, "../static/images/avatars/p3.png");
generateReview("adam", 10, undefined, "../static/images/avatars/4.png");
generateReview("mark", 9, undefined, "../static/images/avatars/0.png");
generateReview("sosan", 10, undefined, "../static/images/avatars/5.png");
generateReview("emily", 10, undefined, "../static/images/avatars/6.png");
generateReview("anne", 10, undefined, "../static/images/avatars/1.png");
generateReview("emily", 10, undefined, "../static/images/avatars/p1.png");
// ======
let currentSide = 0;
function toogleSide() {
  if (currentSide === 0) {
    currentSide = 1;
    return "left";
  } else {
    currentSide = 0;
    return "right";
  }
}
function appendReview(revObj) {
  let reviews = document.querySelector("#reviews .newcontainer");
  let box = document.createElement("div");
  box.classList.add(`${toogleSide()}`);
  box.classList.add(`box`);
  let starsRating = revObj.rating / 2;
  let halfStar = "";
  revObj.rating % 2
    ? (halfStar = "<i class='fa-solid fa-star-half-stroke'></i>")
    : "";
  let starsIcons = "";
  for (let i = 0; i < Math.floor(starsRating); i++) {
    starsIcons = starsIcons + '<i class="fa-solid fa-star"></i>';
  }
  box.innerHTML = `
  <div class="imageholder"> <img src="${revObj.imgUrl}" alt="${revObj.name}"></div>
        <div class="reviewData">
          <h3 class="name">${revObj.name}</h3>
          <div class="rating">
          ${starsIcons} ${halfStar}
          </div>
          <div class="reviewText"> ${revObj.text}</div>
        </div>`;
  reviews.appendChild(box);
}
let current = -1;
function addRev() {
  appendReview(allReviews[current + 1]);
  current++;
}
// =============== pre added reviews
addRev();
addRev();
addRev();
// ===================== moreReviews button
let moreRevBtn = document.createElement("botton");
let reviews = document.querySelector("#reviews .newcontainer");
moreRevBtn.innerHTML = "More Reviews";
moreRevBtn.classList.add("moreReviews");
reviews.appendChild(moreRevBtn);

moreRevBtn.addEventListener("click", () => {
  try {
    moreRevBtn.remove();
    addRev();

    reviews.appendChild(moreRevBtn);
    try {
      moreRevBtn.remove();
      addRev();
      reviews.appendChild(moreRevBtn);
    } catch {
      moreRevBtn.remove();
    }
  } catch {
    moreRevBtn.remove();
  }
});

// =============stats  animation on requist
let stats = document.querySelector("#stats");
let counters = document.querySelectorAll(".stats .counter");
function openCounter() {
  counters.forEach((counter) => {
    for (let i = 10; i < 710; i++) {
      setTimeout(() => {
        counter.style.height = `${i / 10}px`;
      }, 500);
    }
  });
}
document
  .querySelector(".header .stats")
  .addEventListener("click", () => openCounter());
