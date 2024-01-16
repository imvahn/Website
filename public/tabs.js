console.clear();
let targets = document.querySelectorAll("li");
let articles = document.querySelectorAll(".article");
let activeTab = 0;
let old = 0;
let heights = [];
let dur = 0.4;
let animation;

// Function to update offsetWidth, offsetLeft and offsetTop values
function updateOffsets() {
    if (!window.matchMedia("(max-aspect-ratio: 11/9)").matches) {
        gsap.set(".slider", { x: targets[activeTab].offsetLeft, y: targets[activeTab].offsetTop - 17, width: targets[activeTab].offsetWidth, height: targets[activeTab].offsetHeight });
    }
    else {
        gsap.set(".slider", { x: targets[activeTab].offsetLeft, y: targets[activeTab].offsetTop - 17, width: targets[activeTab].offsetWidth, height: targets[activeTab].offsetHeight });
    }
}


// Function to update the height of the articles
function updateArticles() {
    heights = [];
    for (let i = 0; i < targets.length; i++) {
        heights.push(articles[i].offsetHeight); // get height of each article
        gsap.set(articles[i], { top: 0, y: -heights[i] }); // push all articles up out of view
    }
    gsap.set(articles[activeTab], { y: 0 });
    gsap.set(".article-block", { height: heights[activeTab] });
}

function updateTargets() {
    targets = document.querySelectorAll("li");
}

for (let i = 0; i < targets.length; i++) {
    targets[i].index = i;
    heights.push(articles[i].offsetHeight); // get height of each article
    gsap.set(articles[i], { top: 0, y: -heights[i] }); // push all articles up out of view
    targets[i].addEventListener("click", doCoolStuff);
}

// set initial article and position bubble slider on first tab 
gsap.set(articles[0], { y: 0 });
gsap.set(".slider", { x: targets[0].offsetLeft, width: targets[0].offsetWidth, height: targets[0].offsetHeight });
gsap.set(targets[0], { color: "#fff" });
gsap.set(".article-block", { height: heights[0] });

// Event listener for window resize
window.addEventListener("resize", function () {
    updateTargets();
    updateOffsets();
    updateArticles();
});

function doCoolStuff() {
    // check if clicked target is new and if the timeline is currently active
    if (this.index != activeTab) {
        //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps. 
        if (animation && animation.isActive()) {
            animation.progress(1);
        }
        animation = gsap.timeline({ defaults: { duration: 0.4 } });
        old = activeTab;
        activeTab = this.index;
        // animate bubble slider to clicked target
        if (!window.matchMedia("(max-aspect-ratio: 11/9)").matches) {
            animation.to(".slider", { x: targets[activeTab].offsetLeft, width: targets[activeTab].offsetWidth });
        }
        else {
            animation.to(".slider", { y: targets[activeTab].offsetTop - 17, height: targets[activeTab].offsetHeight });
        }
        // change text color on old and new tab targets
        animation.to(targets[old], { color: "black", ease: "none" }, 0);
        animation.to(targets[activeTab], { color: "#fff", ease: "none" }, 0);
        // slide current article down out of view and then set it to starting position at top
        animation.to(articles[old], { y: heights[old], ease: "power2.in" }, 0);
        animation.set(articles[old], { y: -heights[old] });
        // resize article block to accommodate new content
        animation.to(".article-block", { height: heights[activeTab] });
        // slide in new article
        animation.to(articles[activeTab], { duration: 1, y: 0, ease: "circ" }, "-=0.25");
    }
}