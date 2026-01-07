window.addEventListener('load', () => {



    //code voor menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }





    //code voor skills

    let SkillPlaceholder = document.getElementById('skills');



    //zet hier alle skills in
    let skills = [
        //skill: 'naam', level: (getal van 0-100), tags: ["namen, namen,..."]
        //voorbeeld: { skill: '', level: , tags: [""] },
        { skill: 'javascript', level: 65, extraInfo: ["programmeren, back-end"] },
        { skill: 'HTML', level: 70, extraInfo: ["Front-end, visualisatie"] },
        { skill: 'CSS', level: 55, extraInfo: ["disign, visualisatie"] },
        { skill: 'SQL', level: 35, extraInfo: ["back-end, tabellen"] },
        { skill: 'brommer rijden :)', level: 100, extraInfo: ["VROOOMMM"] },
        { skill: 'Rc vliegtuigen', level: 90, extraInfo: ["radio controlled, vliegtuigen"] },
        { skill: 'airsoft', level: 75, extraInfo: ["PIEUW PIEUW"] },
        { skill: 'vergeetachtig zijn', level: 150, extraInfo: ["HUH, WA?"] },
        { skill: 'afgeleid zijn', level: 200, extraInfo: ["is it a plane? is it a bird? it's a distraction either way ;)"] },
    ]


    for (let i = 0; i < skills.length; i++) {
        SkillPlaceholder.innerHTML += skillBuilder(skills[i])
    }


    function skillBuilder(skill) {
        return `<div class='card'>
                    <div class = 'skill-naam'>
                        ${skill.skill}
                    </div>
                    <div class = 'tags'>
                        ${skill.extraInfo}
                    </div>
                    <div class="w3-light-grey w3-round">
                    <div class="w3-container w3-blue w3-round" style="width:${skill.level}%">${skill.level}%</div>
                    </div>
                </div>`
    }


    function printTags(skill) {
        let tagshtml = ''

        skill.tags.forEach(tag => {
            tagshtml += ``
        })


    }

})