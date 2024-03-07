const Body = document.querySelector("body");
const Nav_btn = document.querySelector("#nav_icon");

const s_Icons = document.querySelectorAll(".slide_icons li");
const s_Left = document.querySelector(".slide_btn.left");
const s_Right = document.querySelector(".slide_btn.right");
const s_Slider = document.querySelectorAll(".sec2_slider li");

const s_reset = () => {
  s_Slider.forEach((elem, idx) => {
    s_Slider[idx].classList.remove("on");
    s_Icons[idx].classList.remove("active");
  });
};

s_Icons.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target.dataset.index;
    console.log(target);
    s_reset();
    if (li.tagName === "LI") {
      for (let i = 0; i < s_Icons.length; i++) {
        if (target == i) {
          s_Slider[i].classList.add("on");
          s_Icons[i].classList.add("active");
        }
      }
    }
  });
});

const next = () => {
  let crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i++;
  if (i >= s_Slider.length) {
    i = 0;
  }
  s_Slider[i].classList.add("on");
  s_Icons[i].classList.add("active");
};

const prev = () => {
  let crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) {
    i = s_Slider.length - 1;
  }
  s_Slider[i].classList.add("on");
  s_Icons[i].classList.add("active");
};

s_Right.addEventListener("click", (e) => {
  e.preventDefault();
  next();
});

s_Left.addEventListener("click", (e) => {
  e.preventDefault();
  prev();
});

Nav_btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    delay: function (el, i) {
      return i * 400;
    },
    direction: "alternate",
    loop: true,
  });
};
const sec1 = () => {
  const skills = document.querySelectorAll(".skill li");
  const skillIcons = document.querySelectorAll(".skill li img");
  const skillTexsts = document.querySelectorAll(".skill li span");

  skillTexsts.forEach((skillText) => {
    skillText.style.opacity = "0";
  });

  skills.forEach((skill, index) => {
    skill.addEventListener("mouseover", () => {
      skillTexsts[index].style.opacity = "1";
      skillIcons[index].style.opacity = "0";
    });
    skill.addEventListener("mouseout", () => {
      skillTexsts[index].style.opacity = "0";
      skillIcons[index].style.opacity = "1";
    });
  });
};
const sec2 = () => {
  let tl = anime.timeline({
    duration: 500,
    easing: "linear",
  });
  tl.add({
    targets: ".slider_wrap",
    opacity: 1,
    translateY: 50,
  });
};

const sec3 = () => {
  anime({
    targets: ".exampleWrap ul li",
    translateY: function (el, i) {
      if (i % 2 === 0) {
        return 130;
      } else {
        return -130;
      }
    },
    easing: "linear",
    duration: 1500,
    opacity: 1,
  });
};

const sec4 = () => {};

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4", "Num5"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (new_elem.index === 2) {
      sec2();
    }
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
    if (new_elem.index === 5) {
    }
  },
});
