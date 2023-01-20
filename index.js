var nav = document.getElementById("nav");
var khatclick = document.getElementById("khatclick");
var navmobile = document.getElementById("navmobile");
var zabdarclick = document.getElementById("zabdarclick");
var aboutme = document.querySelector("#aboutme");
var gradientan = document.getElementById("gradientan");
var photoabout = document.getElementById("photoabout");
var loading = document.getElementById("loading");
var dayereanim1 = document.getElementById("dayereanim1");
var dayereanim2 = document.getElementById("dayereanim2");
var moratab1 = document.getElementById("moratab1");
var moratab2 = document.getElementById("moratab2");
var text =
 "طراحی وب ریسپانسیو یا طراحی واکنش گرا رویکردی در طراحی وب است که هدف آن این است که صفحات وب در انواع دستگاه ها و اندازه های پنجره یا صفحه نمایش به خوبی نمایش داده شوند از حداقل تا حداکثر اندازه نمایش برای اطمینان از قابلیت استفاده و رضایت."
var prasl = text.split("");
var cheshmak = document.getElementById("cheshmak");

document.getElementById("youtube").addEventListener("click", alerting);
document.getElementById("instagram").addEventListener("click", alerting);
document.getElementById("twitter").addEventListener("click", alerting);

setTimeout(dd, 1000);

function dd() {
  dayereanim1.classList.remove("dayereanim1");
  dayereanim2.classList.add("dayereanim2");
  setTimeout(ddd, 1000);
}

function ddd() {
  dayereanim1.classList.add("dayereanim1");
  dayereanim2.classList.remove("dayereanim2");
  setTimeout(dd, 1000);
}

setTimeout(() => {
  loading.style.display = "none";
}, 3000);

setTimeout(() => {
  document.querySelector("body").style.position = "absolute";
  if (window.screen.width > 900) {
    aboutme.style.transform = "translateX(" + window.innerWidth + "px)";
    gradientan.style.transform = "translateX(" + window.innerWidth + "px)";
  } else {
    aboutme.style.transform = "translateX(" + window.innerWidth + "px)";
    gradientan.style.transform = "translateX(" + window.innerWidth + "px)";
  }


  setTimeout(() => {
    nav.style.transition = "0.3s";
  }, "1");
  setTimeout(() => {
    aboutme.style.transition = "2s ease";
    aboutme.style.transform = "translateX(0)";
  }, "1");
  setTimeout(() => {
    gradientan.style.transition = "2s ease";
    gradientan.style.transform = "translateX(0)";
  }, "1");
  setTimeout(() => {
    gradientan.style.transition = "none";
  }, "2");
  var textt = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea laudantium impedit magni iure voluptatibus quidem cum perferendis eum ipsa placeat necessitatibus molestiae dolorem illum ducimus, doloribus ullam voluptatem iste quaerat.",
  ];
  setTimeout(() => {
    typing();
    typeWriter();
  }, "2200");
  setTimeout(() => {
    const myText = new AutoTyping({
      id: "types",

      typeText: ["Responsive", "Design"],

      // typeSpeed:20,
    }).init();
    document.querySelector(".types span:nth-child(1)").style.color = "white";
  }, "2200");
  nav.style.transform = "translateY(0px)";

  var i = 0;
  var speed = 20;

  function typeWriter() {
    if (i < text.length) {
      document.querySelector(".boro").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      donetype();
    }
  }

  function typing() {
    document.querySelector(".pos").setAttribute("id", "pasl");
    const myText = new AutoTyping({
      id: "pasl",

      typeText: ["asd", "salam salam"],

      typeSpeed: 20,
    }).stop();

    setTimeout(() => {
      document.querySelector(".pos").removeAttribute("id");
    }, 1000);
  }

  function donetype() {
    if (document.querySelector(".boro").innerHTML == text) {
      setTimeout(() => {
        var second = document.querySelector(".matn span:nth-child(3)");
        second.style.display = "none";
      }, 1000);
    }
  }

  setTimeout(() => {
    photoabout.style.outlineOffset = "5px";
  }, "2000");

  if (window.screen.width > 768) {
    if (window.scrollY > 20) {
      nav.style.borderTopRightRadius = "0px";
      nav.style.borderBottomRightRadius = "25px";
    }
    if (window.scrollY < 20) {
      nav.style.borderTopRightRadius = "25px";
      nav.style.borderBottomRightRadius = "0px";
    }
  } else {
    nav.style.borderTopRightRadius = "0px";
    nav.style.borderBottomRightRadius = "0px";
  }

  window.onscroll = function (e) {
    if (window.screen.width > 768) {
      if (window.scrollY > 20) {
        nav.style.borderTopRightRadius = "0px";
        nav.style.borderBottomRightRadius = "25px";
      }
      if (window.scrollY < 20) {
        nav.style.borderTopRightRadius = "25px";
        nav.style.borderBottomRightRadius = "0px";
      }
    } else {
      nav.style.borderTopRightRadius = "0px";
      nav.style.borderBottomRightRadius = "0px";
    }
  };

  var morata1top = moratab1.offsetTop;
  var morata1height = window.getComputedStyle(moratab1).height;
  var moratab1menha = morata1top - morata1height;
}, 3000);

window.addEventListener("resize", () => {
  if (window.screen.width > 900) {
    if (window.scrollY > 20) {
      nav.style.borderTopRightRadius = "0px";
      nav.style.borderBottomRightRadius = "25px";
    }
    if (window.scrollY < 20) {
      nav.style.borderTopRightRadius = "25px";
      nav.style.borderBottomRightRadius = "0px";
    }
  }
  if (window.screen.width > 900) {
    document.querySelector(".hoverme p").innerHTML = "Hover The Cards!";
  } else {
    nav.style.borderTopRightRadius = "0px";
    nav.style.borderBottomRightRadius = "0px";
    document.querySelector(".hoverme p").innerHTML = "Click The Cards!";
  }
  // console.log(window.getComputedStyle(nam).display)
});

khatclick.addEventListener("click", () => {
  navmobile.style.transform = "translateX(0%)";
  document.querySelector("body").style.position = "fixed";
});

zabdarclick.addEventListener("click", () => {
  navmobile.style.transform = "translateX(101%)";
  document.querySelector("body").style.position = "relative";
});

// ===========================cart===========================
// window.addEventListener('resize', maxheight);
var t1a = document.getElementById("t1a");
var t1 = document.getElementById("tozih1");
var p1 = document.getElementById("p1");
var pi = document.getElementById("pi");
var pu = document.getElementById("pu");
var pup = document.getElementById("pup");
var dokme = document.getElementById("dokme");
var dokmekam = document.getElementById("dokmekam");
var nam = document.getElementById("nam");
var t1w = t1.offsetWidth * 1.5;
var t1h = t1.offsetHeight;
// =============
var t2a = document.getElementById("t2a");
var t2 = document.getElementById("tozih2");
var p2 = document.getElementById("p2");
var pi2 = document.getElementById("pi2");
var pu2 = document.getElementById("pu2");
var pup2 = document.getElementById("pup2");
var dokme2 = document.getElementById("dokme2");
var dokmekam2 = document.getElementById("dokmekam2");
var nam2 = document.getElementById("nam2");
// =============
var t3a = document.getElementById("t3a");
var t3 = document.getElementById("tozih3");
var p3 = document.getElementById("p3");
var pi3 = document.getElementById("pi3");
var pu3 = document.getElementById("pu3");
var pup3 = document.getElementById("pup3");
var dokme3 = document.getElementById("dokme3");
var dokmekam3 = document.getElementById("dokmekam3");
var nam3 = document.getElementById("nam3");
// =============
var t4a = document.getElementById("t4a");
var t4 = document.getElementById("tozih4");
var p4 = document.getElementById("p4");
var pi4 = document.getElementById("pi4");
var pu4 = document.getElementById("pu4");
var pup4 = document.getElementById("pup4");
var dokme4 = document.getElementById("dokme4");
var dokmekam4 = document.getElementById("dokmekam4");
var nam4 = document.getElementById("nam4");
// =============
dokme.addEventListener("click", koko);
dokmekam.addEventListener("click", koko);
t1.addEventListener("mouseleave", () => {
  dokme.style.transition = "0.3s";
});
t1.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam.style.display = "none";
  }, "1");
  
});

t1.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam.style.display = "flex";
  }, "1");
});
// ===============
dokme2.addEventListener("click", koko2);
dokmekam2.addEventListener("click", koko2);
t2.addEventListener("mouseleave", () => {
  dokme2.style.transition = "0.3s";
});
t2.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam2.style.display = "none";
  }, "1");
});

t2.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam2.style.display = "flex";
  }, "1");
});
// ===============
dokme3.addEventListener("click", koko3);
dokmekam3.addEventListener("click", koko3);
t3.addEventListener("mouseleave", () => {
  dokme3.style.transition = "0.3s";
});
t3.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam3.style.display = "none";
  }, "1");
});

t3.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam3.style.display = "flex";
  }, "1");
});
// ===============
dokme4.addEventListener("click", koko4);
dokmekam4.addEventListener("click", koko4);
t4.addEventListener("mouseleave", () => {
  dokme4.style.transition = "0.3s";
});
t4.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam4.style.display = "none";
  }, "1");
});

t4.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam4.style.display = "flex";
  }, "1");
});

function checknumber(xx) {
  if (Number.isInteger(xx)) {
    return "yes";
  } else {
    return "no";
  }
}

var tt = 1;
function koko() {
  tt += 1;
  var tts = tt / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme.style.transition = "1s";
    setTimeout(() => {
      dokme.style.transition = "0.3s";
    }, 1);
    t1.classList.remove("tozih");
    t1.classList.add("t1a");
    pi.classList.remove("pi");
    pi.classList.add("pia");
    p1.style.borderRadius = "15px";
    pi.style.transform = "rotateY(-180deg)";
    pu.style.transform = "rotateY(0deg)";
    dokme.style.transform = "rotateY(-180deg)";
    pup.style.borderRadius = "15px";
    t1.classList.remove("tozih");
    t1.classList.add("t1a");
  }

  if (ttss == "no") {
    t1.classList.remove("t1a");
    t1.classList.add("tozih");
    pi.style.transform = "rotateY(0deg)";
    pu.style.transform = "rotateY(180deg)";
    dokme.style.transition = "1000ms";
    dokme.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi.classList.remove("pia");
      pi.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme.style.transition = "0.3s";
    }, "1");
  }
}

var tt2 = 1;
function koko2() {
  tt2 += 1;
  var tts = tt2 / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme2.style.transition = "1s";
    setTimeout(() => {
      dokme3.style.transition = "0.3s";
    }, "1");
    t2.classList.remove("tozih");
    t2.classList.add("t1a");
    pi2.classList.remove("pi");
    pi2.classList.add("pia");
    p2.style.borderRadius = "15px";
    pi2.style.transform = "rotateY(-180deg)";
    pu2.style.transform = "rotateY(0deg)";
    dokme2.style.transform = "rotateY(-180deg)";
    pup2.style.borderRadius = "15px";
    t2.classList.remove("tozih");
    t2.classList.add("t1a");
  }

  if (ttss == "no") {
    t2.classList.remove("t1a");
    t2.classList.add("tozih");
    pi2.style.transform = "rotateY(0deg)";
    pu2.style.transform = "rotateY(180deg)";
    dokme2.style.transition = "1000ms";
    dokme2.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi2.classList.remove("pia");
      pi2.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme2.style.transition = "0.3s";
    }, "1");
  }
}

var tt3 = 1;
function koko3() {
  tt3 += 1;
  var tts = tt3 / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme3.style.transition = "1s";
    setTimeout(() => {
      dokme3.style.transition = "0.3s";
    }, "1");
    t3.classList.remove("tozih");
    t3.classList.add("t1a");
    pi3.classList.remove("pi");
    pi3.classList.add("pia");
    p3.style.borderRadius = "15px";
    pi3.style.transform = "rotateY(-180deg)";
    pu3.style.transform = "rotateY(0deg)";
    dokme3.style.transform = "rotateY(-180deg)";
    pup3.style.borderRadius = "15px";
    t3.classList.remove("tozih");
    t3.classList.add("t1a");
  }

  if (ttss == "no") {
    t3.classList.remove("t1a");
    t3.classList.add("tozih");
    pi3.style.transform = "rotateY(0deg)";
    pu3.style.transform = "rotateY(180deg)";
    dokme3.style.transition = "1000ms";
    dokme3.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi3.classList.remove("pia");
      pi3.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme3.style.transition = "0.3s";
    }, "1");
  }
}

var tt4 = 1;
function koko4() {
  tt4 += 1;
  var tts = tt4 / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme4.style.transition = "1s";
    setTimeout(() => {
      dokme4.style.transition = "0.3s";
    }, 1);
    t4.classList.remove("tozih");
    t4.classList.add("t1a");
    pi4.classList.add("pia");
    pi4.classList.remove("pi");
    p4.style.borderRadius = "15px";
    pi4.style.transform = "rotateY(-180deg)";
    pu4.style.transform = "rotateY(0deg)";
    dokme4.style.transform = "rotateY(-180deg)";
    pup4.style.borderRadius = "15px";
    t4.classList.remove("tozih");
    t4.classList.add("t1a");
  }

  if (ttss == "no") {
    t4.classList.remove("t1a");
    t4.classList.add("tozih");
    pi4.style.transform = "rotateY(0deg)";
    pu4.style.transform = "rotateY(180deg)";
    dokme4.style.transition = "1000ms";
    dokme4.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi4.classList.remove("pia");
      pi4.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme4.style.transition = "0.3s";
    }, "1");
  }
}
// ==========================================================

function alerting() {
  alert("Coming Soon!");
}
