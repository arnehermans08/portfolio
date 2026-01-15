window.addEventListener('load', async () => {

    /* =========================
       MENU CLASS
    ========================= */
    class MobileMenu {
        constructor() {
            this.hamburger = document.querySelector(".hamburger");
            this.navMenu = document.querySelector(".nav-menu");
            this.navLinks = document.querySelectorAll(".nav-link");

            this.initEvents();
        }

        initEvents() {
            this.hamburger.addEventListener("click", () => this.toggleMenu());
            this.navLinks.forEach(link =>
                link.addEventListener("click", () => this.closeMenu())
            );
        }

        toggleMenu() {
            this.hamburger.classList.toggle("active");
            this.navMenu.classList.toggle("active");
        }

        closeMenu() {
            this.hamburger.classList.remove("active");
            this.navMenu.classList.remove("active");
        }
    }


    /* =========================
       SKILLS CLASS
    ========================= */
    class Skills {
        constructor() {
            this.skillPlaceholder = document.getElementById('skills');
            this.apiUrl = 'http://localhost:5000/skills';
        }

        async loadSkills() {
            let response = await fetch(this.apiUrl);
            let skills = await response.json();
            this.renderSkills(skills);
        }

        renderSkills(skills) {
            for (let i = 0; i < skills.length; i++) {
                this.skillPlaceholder.innerHTML += this.skillBuilder(skills[i]);
            }
        }

        skillBuilder(skill) {
            return `
                <div class='card'>
                    <div class='skill-naam'>
                        ${skill.skill}
                    </div>
                    <div class='tags'>
                        ${skill.extraInfo}
                    </div>
                    <div class="w3-light-grey w3-round">
                        <div class="w3-container w3-blue w3-round" style="width:${skill.level}%">
                            ${skill.level}%
                        </div>
                    </div>
                </div>
            `;
        }
    }


    /* =========================
       INITIALISATIE
    ========================= */
    new MobileMenu();

    let skills = new Skills();
    await skills.loadSkills();

});