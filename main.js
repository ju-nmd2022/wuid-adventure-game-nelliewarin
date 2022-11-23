const firstPage = "images/backdrop/castle.jpg";
const secondPage = "images/backdrop/bedroom.jpg";
const thirdPage = "images/backdrop/library.jpg";
const fourthPage = "images/backdrop/gate.jpg";

const s_key = document.getElementById("s_key");
const s_diary = document.getElementById("s_diary");
const s_sock = document.getElementById("s_sock");
const s_panties = document.getElementById("s_panties");

const castle = document.getElementById("castle");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

const dobby = document.getElementById("dobby");
const lucius = document.getElementById("lucius");
const intro = document.getElementById("intro");
const missingItemsTextInfo = document.getElementById("missingItemsTextInfo");
const finish = document.getElementById("finish");

const lockBox = document.getElementById("lockBox");
const gateTextInfo = document.getElementById("gateTextInfo");
const key = document.getElementById("key");
const diary = document.getElementById("diary");
const sock = document.getElementById("sock");
const panties = document.getElementById("panties");
const sockPanties = document.getElementById("sockPanties");



let currentPage = 1;
changePage(currentPage);

let hasKey = false;

let hasDiary = false;

let hasSock = false;

let hasPanties = false;



s_key.style.filter = "opacity(0.2)";
s_diary.style.filter = "opacity(0.2)";
s_sock.style.filter = "opacity(0.2)";
s_panties.style.filter = "opacity(0.2)";



sessionStorage.hasClickedKey = false;



function changePage(scene) {
  let imageSource;
  showArrowRight();
  showArrowLeft();
  hideDobby();
  hideLucius();
  hideLockBox();
  hideGateTextInfo();
  hideMissingItemsTextInfo();
  hideIntro();
  hideKey();
  hideDiary();
  hideSock();
  hidePanties();
  hideFinish();
  if (scene == 1) {
    currentPage = 1;
    showDobby();
    showLucius();
    showIntro();
    if (sessionStorage.hasClickedKey === "true") {
      showKey();
    }
    imageSource = firstPage;
  } else if (scene == 2) {
    currentPage = 2;
    hideArrowRight();
    if (hasDiary) {

      let rand = Math.floor(Math.random() * 2) + 1;
      if (rand == 2) {
        hasSock = true;
        showSock();
      } else {
        hasPanties = true;
        showPanties();
      }
    }
    imageSource = secondPage;
  } else if (scene == 3) {
    currentPage = 3;
    hideArrowLeft();
    showDiary();
    imageSource = thirdPage;
  } else if (scene == 4) {
    currentPage = 4;
    showLockBox();
    hideArrowLeft();
    imageSource = fourthPage;
  }
  if (imageSource != null) {
    castle.src = imageSource;
  }
}



arrowLeft.addEventListener("click", function () {
  let newPage = currentPage - 1;
  if (newPage <= 0) {
    newPage = 4;
  }
  changePage(newPage);
});

arrowRight.addEventListener("click", function () {
  let newPage = currentPage + 1;
  if (newPage > 4) {
    newPage = 1;
  }
  changePage(newPage);
});

dobby.addEventListener("click", function() {
  showMissingItemsTextInfo();
  if (hasDiary && hasSock || hasPanties) {
    showFinish();
    hideDobby();
    hideMissingItemsTextInfo();
  }
})

lockBox.addEventListener("click", function() {
  showGateTextInfo();
  sessionStorage.hasClickedKey = true;
  if (hasKey) {
    showArrowLeft();
    hideGateTextInfo();
  }
});


key.addEventListener("click", function() {
  hideKey();
  s_key.style.filter = "";
  hasKey = true;
});

diary.addEventListener("click", function() {
  hideDiary();
  s_diary.style.filter = "";
  hasDiary = true;
});

sock.addEventListener("click", function() {
  hideSock();
  s_sock.style.filter = "";
})

panties.addEventListener("click", function() {
  hidePanties();
  s_panties.style.filter = "";
})



function hideDobby() {
  dobby.style.display = "none";
}

function showDobby() {
  dobby.style.display = "flex";
}

function hideLucius() {
  lucius.style.display = "none";
}

function showLucius() {
  lucius.style.display = "flex";
}

function hideIntro() {
  intro.style.display = "none";
}

function showIntro() {
  intro.style.display = "flex";
}

function hideKey() {
  key.style.display = "none";
}

function showKey() {
  key.style.display = "flex";
}

function hideDiary() {
  diary.hidden = true;
}

function showDiary() {
  if (!hasDiary) {
    diary.hidden = false;
  }
}

function hideSock() {
  sock.hidden = true;
}

function showSock() {
  sock.hidden = false;
}

function hidePanties() {
  panties.hidden = true;
}

function showPanties() {
  panties.hidden = false;
}

function hideArrowRight() {
  arrowRight.hidden = true;
}

function showArrowRight() {
  arrowRight.hidden = false;
}

function hideArrowLeft() {
  arrowLeft.hidden = true;
}

function showArrowLeft() {
  arrowLeft.hidden = false;
}

function hideMissingItemsTextInfo() {
  missingItemsTextInfo.style.display = "none";
}

function showMissingItemsTextInfo() {
  missingItemsTextInfo.style.display = "flex";
}

function hideGateTextInfo() {
  gateTextInfo.style.display = "none";
}

function showGateTextInfo() {
  gateTextInfo.style.display = "flex";
}

function hideLockBox() {
  lockBox.style.display = "none";
}

function showLockBox() {
  lockBox.style.display = "flex";
}

function hideFinish() {
  finish.style.display = "none";
}

function showFinish() {
  finish.style.display = "flex";
}