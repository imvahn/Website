gsap.registerPlugin(ScrollTrigger);

let coloredSections = gsap.utils.toArray("[data-color]");
coloredSections.forEach((section, i) => {
    // grab the colors from the attribute
    let [bgColor, color] = section.getAttribute("data-color").split(" ");
    ScrollTrigger.create({
        trigger: section,
        start: "200 bottom",
        end: "+=100%",
        onToggle: self => {
            // whenever we enter a section from either direction (scrolling up or down), animate to its color
            if (self.isActive) {
                gsap.to("body", {
                    backgroundColor: bgColor,
                    color: color,
                    overwrite: "auto",
                });
                // when we LEAVE the very first section scrolling in reverse -OR- when we scroll past the very last section (forward), return to the "normal" colors
            } else if ((i === 0 && self.direction < 0) || (i === coloredSections.length - 1 && self.direction > 0)) {
                gsap.to("body", {
                    backgroundColor: "black",
                    color: "white",
                    overwrite: "auto"
                });
            }
        }
    });
});

