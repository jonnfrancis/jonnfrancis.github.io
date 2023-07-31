import './style.css'
import projectIllustration from './public/Illustration.png'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.DBNAME,
  authDomain: "portfolio-messages-cff28.firebaseapp.com",
  databaseURL: "https://portfolio-messages-cff28-default-rtdb.firebaseio.com",
  projectId: "portfolio-messages-cff28",
  storageBucket: "portfolio-messages-cff28.appspot.com",
  messagingSenderId: "571131098691",
  appId: "1:571131098691:web:68b9662aa92d0c9b2706f6",
  measurementId: "G-L3Y4Z6MQ77"
};
firebase.initializeApp(firebaseConfig)



// Create a GSAP timeline
const timeline = gsap.timeline();
const textLines = document.querySelectorAll(".catchy-text")

textLines.forEach(textLine => {
  const split = new SplitType(textLine, {
      types: "chars"
  })
})

// Animation for the hero section
timeline.from('.hero', {
  opacity: 0,
  duration: .25,
  ease: 'power2.out'
})

// Animation for the navbar
timeline.from('.navbar', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
  })
  .from('.navbar ul li', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
  }, "-=.6")
  .from('.navbar .cta-button', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
  }, "-=.4");

// Animation for the hero illustration
timeline.to('.hero-illustration', {
  clipPath: 'polygon(0 0, 100% 0, 100% 99%, 0 99%)',
  scale: 1,
  duration: 1.4
}).from('.hero-content', {
  height: 0,
  opacity: 0,
  duration: .8,
  ease: 'power2.out'
}, "-=.4")

timeline.from(".name-animation", {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: .4,
      delay: 0.5,
      ease: "power2.out"
  }, "-=.4")
  .from('.char', {
      opacity: 0,
      yPercent: -100,
      stagger: 0.007,
      ease: "power2.out"
  }, "-=1.6")
  .from('.hero .cta-button', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
  }, "-=.6");



// Animation for the blobs
timeline.to(".blob", {
  duration: 2,
  scale: 1,
  ease: "elastic.out(1, 0.5)",
  stagger: 0.3,
  delay: .5
});


// Play the timeline
timeline.play();


// Randomly position the blobs
const blobs = document.querySelectorAll(".blob");
blobs.forEach(blob => {
  blob.style.top = `${Math.random() * 100}vh`;
  blob.style.left = `${Math.random() * 50}vw`;
});
// Select the elements
const mobileNavbar = document.querySelector('.mobile-bottom-navbar');
const briefcaseIcon = mobileNavbar.querySelector('.bx-briefcase-alt');
const homeIcon = mobileNavbar.querySelector('.bx-home-alt');
const boxIcon = mobileNavbar.querySelector('.bx-box');


// Add event listeners to the icons
briefcaseIcon.addEventListener('click', () => {
clearHeroSection(() => {
  addResumeSection();
});
});

homeIcon.addEventListener('click', () => {
clearHeroSection(() => {
  addAboutMeSection();
});
});

boxIcon.addEventListener('click', () => {
clearHeroSection(() => {
  addProjectsSection();
});
});

function clearHeroSection(callback) {
  const timeline = gsap.timeline({ onComplete: callback });

  timeline.to('.group1', { x: '15%', opacity: 0, duration: 0.4 }, 'start')
    .to('.group2', { x: '-15%', opacity: 0, duration: 0.4 }, 'start')
    .to('.greetings', { y: '-40', opacity: 0, duration: 0.4 }, 'start')
    .to('.mobile-hero-text', { y: '-80', opacity: 0, duration: 0.4 }, 'start')
    .to('.mobile-hero-cta', { y: '-30', opacity: 0, duration: 0.4 }, 'start')
    .to('.mobile-bottom-navbar ul li', { opacity: 0, duration: 0.2 }, 'start')
    .to('.mobile-bottom-navbar', { width: 0, duration: 0.4 }, 'start')
    .to('.mobile-container', { y: '-100%', duration: 0.6 }, )
    .call(removeHeroSection);
}

function removeHeroSection() {
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.remove();
  }
}


// Set up a click event listener for the button
const exploreBtn = document.getElementById('explore-btn');
exploreBtn.addEventListener('click', clearScreen);

const profileBtn = document.getElementById('profile-btn');
profileBtn.addEventListener('click', clearMobileScreen);

function clearMobileScreen() {
  console.log("clicked")
  const heroContent = document.querySelector('.name-container');
  heroContent.parentNode.removeChild(heroContent);

  const heroSection = document.querySelector('.hero');
  heroSection.parentNode.removeChild(heroSection);

  addAboutMeSection()

}
// Function to animate and clear the screen
function clearScreen() {
  // Create a GSAP timeline
  const tl = gsap.timeline({
      onComplete: removeElements
  });

  // Add animations to the timeline
  tl.to('.hero-content', {
          opacity: 0,
          y: -100,
          duration: 0.5,
          ease: 'power2.inOut'
      }, '-=0.3')
      .to('.hero-illustration', {
          opacity: 0,
          y: 100,
          duration: 0.5,
          ease: 'power2.inOut'
      }, '-=0.3')
      .to('.hero', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut'
      }, '-=0.3')
      .to('.navbar', {
          opacity: .8,
          width: "100%",
          duration: 0.5,
          ease: 'power2.inOut',
          // zIndex: "1000"
      })
      .call(addAboutMeSection);


  function removeElements() {
      // Remove the elements from the DOM

      const heroContent = document.querySelector('.hero-content');
      heroContent.parentNode.removeChild(heroContent);

      const heroIllustration = document.querySelector('.hero-illustration');
      heroIllustration.parentNode.removeChild(heroIllustration);

      const heroSection = document.querySelector('.hero');
      heroSection.parentNode.removeChild(heroSection);


      // Add your code for the next step after clearing the screen

  }




}

function addAboutMeSection() {
  const section = document.createElement('section');
  section.classList.add('about-section');

  const content = document.createElement('div');
  content.classList.add('about-content');

  const backgroundImage = 'url(https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)';
  section.style.backgroundImage = backgroundImage;

  const profilePicture = document.createElement('img');
  profilePicture.src = './Projects/John.jpg';
  profilePicture.classList.add('profile-picture');
  content.appendChild(profilePicture);

  const iconElement = document.createElement("i");
  iconElement.className = "bx bx-arrow-back back-main";
  iconElement.addEventListener('click', () => {
      // Create a timeline for the animation
      const tl = gsap.timeline();
    
      // Add animations to the timeline to animate out the elements
      tl.to(profilePicture, {
        rotation: 45,
        scale: 1.2,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .to(catchyText, {
        y: '-50',
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.6')
      .to(aboutTextContent, {
        y: '-30',
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.6')
      .to(ctaButton, {
        y: '30',
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.6');
    
      // After animating out the elements, bring back the hero section
      tl.call(() => {
        // Remove the about section from the DOM
        section.remove();
    
        // Call the function to animate the hero section
        addProjectsSection();
      });
    });
    
  content.appendChild(iconElement);

  const catchyText = document.createElement('h2');
  catchyText.textContent = 'Crafting Innovative Web Experiences';
  catchyText.classList.add('catchy-text');
  content.appendChild(catchyText);

  const aboutTextContent = document.createElement('div');
  aboutTextContent.classList.add('about-text-content');

  const tabsWrapper = document.createElement('div');
  tabsWrapper.classList.add('wrapper');

  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('tabs-container');

  const tabsList = document.createElement('ul');
  tabsList.setAttribute('aria-labelledby', 'tabs-title');

  const tab1 = document.createElement('li');
  const tab1Link = document.createElement('a');
  tab1Link.id = 'tab-1';
  tab1Link.href = '#advertising';
  tab1Link.textContent = 'Personal info';
  tab1.appendChild(tab1Link);
  tabsList.appendChild(tab1);

  const tab2 = document.createElement('li');
  const tab2Link = document.createElement('a');
  tab2Link.id = 'tab-2';
  tab2Link.href = '#social-media';
  tab2Link.textContent = 'Experience';
  tab2.appendChild(tab2Link);
  tabsList.appendChild(tab2);

  const tab3 = document.createElement('li');
  const tab3Link = document.createElement('a');
  tab3Link.id = 'tab-3';
  tab3Link.href = '#content-marketing';
  tab3Link.textContent = 'Reviews';
  tab3.appendChild(tab3Link);
  tabsList.appendChild(tab3);

  tabsContainer.appendChild(tabsList);

  tabsWrapper.appendChild(tabsContainer);

  const tabsPanels = document.createElement('div');
  tabsPanels.classList.add('tabs__panels', 'flow');

  const advertisingPanel = document.createElement('div');
  advertisingPanel.id = 'advertising';
  advertisingPanel.setAttribute('aria-labelledby', 'tab-1');

  const aboutMeSection = document.createElement('div');
  const aboutMeTitle = document.createElement('h2');
  aboutMeTitle.textContent = 'About Me';
  aboutMeSection.appendChild(aboutMeTitle);

  const aboutMeParagraph = document.createElement('p');
  aboutMeParagraph.textContent =
      'John Francis, a web developer and UI designer, offers expertise in crafting impactful digital experiences. By combining cutting-edge technologies with creative design solutions, he delivers engaging websites and user interfaces that captivate your audience.';
  aboutMeSection.appendChild(aboutMeParagraph);

  const contactParagraph = document.createElement('p');
  contactParagraph.textContent = 'Feel free to reach out to me for any specific queries.';
  aboutMeSection.appendChild(contactParagraph);

  advertisingPanel.appendChild(aboutMeSection);
  tabsPanels.appendChild(advertisingPanel);

  const experiencePanel = document.createElement('div');
  experiencePanel.id = 'social-media';
  experiencePanel.setAttribute('aria-labelledby', 'tab-2');

  const bioPanel = document.createElement('div');
  const bioTitle = document.createElement('h2');
  bioTitle.textContent = 'Bio';
  bioPanel.appendChild(bioTitle);

  const bioContent = document.createElement('div');

  const nameDiv = document.createElement('div');
  const nameTitle = document.createElement('h2');
  nameTitle.textContent = 'Name:';
  const nameText = document.createElement('p');
  nameText.textContent = 'John Francis';
  nameDiv.appendChild(nameTitle);
  nameDiv.appendChild(nameText);
  bioContent.appendChild(nameDiv);

  const occupationDiv = document.createElement('div');
  const occupationTitle = document.createElement('h2');
  occupationTitle.textContent = 'Occupation:';
  const occupationText = document.createElement('p');
  occupationText.textContent = 'Web Developer';
  occupationDiv.appendChild(occupationTitle);
  occupationDiv.appendChild(occupationText);
  bioContent.appendChild(occupationDiv);

  const ageDiv = document.createElement('div');
  const ageTitle = document.createElement('h2');
  ageTitle.textContent = 'Age:';
  const ageText = document.createElement('p');
  ageText.textContent = '21';
  ageDiv.appendChild(ageTitle);
  ageDiv.appendChild(ageText);
  bioContent.appendChild(ageDiv);

  bioPanel.appendChild(bioContent);
  experiencePanel.appendChild(bioPanel);
  tabsPanels.appendChild(advertisingPanel);

  const expPanel = document.createElement('div');

  const experienceTitle = document.createElement('h2');
  experienceTitle.textContent = 'Experience';
  expPanel.appendChild(experienceTitle);


  const experienceList = document.createElement('ul');
  experienceList.innerHTML = `
    <li class="experience-item">
      <p class="experiences-title">Front End<span class="experiences-span">@tripplesee | 2022</span></p>
    </li>
    <li class="experience-item">
      <p class="experiences-title">Job Title <span class="experiences-span">@company | year</span></p>
    </li>
  `;
  expPanel.appendChild(experienceList)
  experiencePanel.appendChild(expPanel);

  tabsPanels.appendChild(experiencePanel);

  const reviewsPanel = document.createElement('div');
  reviewsPanel.id = 'content-marketing';
  reviewsPanel.setAttribute('aria-labelledby', 'tab-3');

  const reviewsTitle = document.createElement('h2');
  reviewsTitle.textContent = 'Reviews';
  reviewsPanel.appendChild(reviewsTitle);

  const review1 = createChatBox('Impressive skills!');
  const review2 = createChatBox('Innovative websites!');
  const review3 = createChatBox('Stunning designs!');

  reviewsPanel.appendChild(review1);
  reviewsPanel.appendChild(review2);
  reviewsPanel.appendChild(review3);

  tabsPanels.appendChild(reviewsPanel);

  tabsContainer.appendChild(tabsPanels);
  tabsWrapper.appendChild(tabsContainer);
  aboutTextContent.appendChild(tabsWrapper)

  function createChatBox(message) {
      const chatBox = document.createElement('div');
      chatBox.classList.add('chat-box');

      const icon = document.createElement('div');
      icon.classList.add('icon');
      chatBox.appendChild(icon);

      const messageText = document.createElement('div');
      messageText.classList.add('message');
      messageText.textContent = message;
      chatBox.appendChild(messageText);

      return chatBox;
  }

  const tabButtons = tabsList.querySelectorAll("a");
  const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");
  tabsList.setAttribute("role", "tablist");

  tabsList.querySelectorAll("li").forEach((listitem) => {
      listitem.setAttribute("role", "presentation");
  });

  tabButtons.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      if (index === 0) {
          tab.setAttribute("aria-selected", "true");
          // we'll add something here
      } else {
          tab.setAttribute("tabindex", "-1");
          tabPanels[index].setAttribute("hidden", "");
      }
  });

  tabPanels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("tabindex", "0");
  });

  tabsContainer.addEventListener("click", (e) => {
      const clickedTab = e.target.closest("a");
      if (!clickedTab) return;
      e.preventDefault();

      switchTab(clickedTab);
  });

  tabsContainer.addEventListener("keydown", (e) => {
      switch (e.key) {
          case "ArrowLeft":
              moveLeft();
              break;
          case "ArrowRight":
              moveRight();
              break;
          case "Home":
              e.preventDefault();
              switchTab(tabButtons[0]);
              break;
          case "End":
              e.preventDefault();
              switchTab(tabButtons[tabButtons.length - 1]);
              break;
      }
  });

  function moveLeft() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.previousElementSibling) {
          switchTab(tabButtons[tabButtons.length - 1]);
      } else {
          switchTab(
              currentTab.parentElement.previousElementSibling.querySelector("a")
          );
      }
  }

  function moveRight() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.nextElementSibling) {
          switchTab(tabButtons[0]);
      } else {
          switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
      }
  }

  function switchTab(newTab) {
      const activePanelId = newTab.getAttribute("href");
      const activePanel = tabsContainer.querySelector(activePanelId);

      tabButtons.forEach((button) => {
          button.setAttribute("aria-selected", false);
          button.setAttribute("tabindex", "-1");
      });

      tabPanels.forEach((panel) => {
          panel.setAttribute("hidden", true);
      });

      activePanel.removeAttribute("hidden", false);

      newTab.setAttribute("aria-selected", true);
      newTab.setAttribute("tabindex", "0");
      newTab.focus();
  }


  // const aboutText = document.createElement('p');
  // aboutText.innerHTML = `My name is <span class="highlight">John Francis</span> and I am a <span class="highlight">full stack web developer</span> and <span class="highlight">UI designer</span>. I specialize in creating visually appealing and user-friendly web applications using modern technologies.`;
  // aboutText.classList.add('about-text');
  // aboutTextContent.appendChild(aboutText);

  // const emailContainer = document.createElement('div');
  // emailContainer.classList.add('email-container');

  // const emailIcon = document.createElement('i');
  // emailIcon.classList.add('email-icon');
  // emailIcon.classList.add('bx', 'bxs-envelope');
  // emailContainer.appendChild(emailIcon);

  // const email = document.createElement('a');
  // email.classList.add('email');
  // email.href = 'mailto:johnmosima7@gmail.com';
  // email.textContent = 'johnmosima7@gmail.com';
  // emailContainer.appendChild(email);

  // aboutTextContent.appendChild(emailContainer);


  const ctaButton = document.createElement('a');
  ctaButton.textContent = 'My Projects';
  ctaButton.classList.add('cta-button');
  ctaButton.addEventListener('click', clearAboutSection);
  aboutTextContent.appendChild(ctaButton);

  content.appendChild(aboutTextContent);

  section.appendChild(content);

  document.body.appendChild(section);

  // Animate the "About Me" section

  // Add additional animations for other elements
  // GSAP Animation
  // GSAP Animation
  // Animation for the background image
  function clearAboutSection() {
      const timeline = gsap.timeline();

      // Select the "About Us" section element
      const aboutSection = section

      // Create a wrapper element to hold the animated elements
      const wrapper = document.createElement('div');
      wrapper.classList.add('about-clear-animation');
      aboutSection.appendChild(wrapper);

      // Get the elements to animate
      const elements = aboutSection.querySelectorAll('.about-content > *');

      // Reverse the order of the elements
      const reversedElements = [...elements].reverse();

      // Set initial positions for the elements
      gsap.set(elements, {
          opacity: 1,
          y: 0
      });

      // Add animations to remove elements one by one
      reversedElements.forEach((element, index) => {
          timeline.to(element, {
              opacity: 0,
              y: -20,
              duration: 0.3,
              delay: index * 0.1
          }, 'start');
      });

      // Animate the wrapper element to fade out the entire section
      timeline.to(wrapper, {
              opacity: 0,
              duration: 0.3
          }, '-=0.3')
          .call(removeAboutSection);

      function removeAboutSection() {
          // Remove the "About Us" section from the DOM
          aboutSection.remove();
      }
      addProjectsSection();
  }
}

function addProjectsSection() {
  const projectsData = [{
          id: 1,
          title: "Project Tripplesee",
          tags: ["#business", "#webapp", "#marketing"]
      },
      {
          id: 2,
          title: "Project Portfolio",
          tags: ["#webdev", "#mysite"]
      },
      {
          id: 3,
          title: "Project Movie",
          tags: ["#movies", "#landing", "#series"]
      },
      {
          id: 4,
          title: "All Projects",
          tags: ["#modern", "#ui", "#web"]
      }
  ]





  // Create the root container element
  const rootContainer = document.createElement('div');
  rootContainer.id = 'root';

  const section = document.createElement('section');
  section.classList.add('projects-section');

  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');

  // Create the title element
  const title = document.createElement('h2');
  title.textContent = 'Projects';
  title.classList.add('projects-title');
  projectsContainer.appendChild(title);

  // Create the title element
  const header = document.createElement('h1');
  header.textContent = 'Projects';
  header.classList.add('projects-header');
  projectsContainer.appendChild(header);

  const projectText = document.createElement('div');
  projectText.classList.add('projects-text');


  // Create the paragraph element
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Explore a collection of my recent projects, showcasing my skills in web development, UX design, and digital marketing. Each project highlights different aspects of my expertise and creativity, delivering exceptional results for clients across various industries. Take a closer look at the diverse range of projects I have completed, and get inspired for your own digital ventures!';
  paragraph.classList.add('projects-paragraph');
  projectText.appendChild(paragraph);

  // Create the link element
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Visit my resume';
  link.addEventListener('click', function () {
      removeProjectsSection();
      addResumeSection();
  });
  link.classList.add('projects-link');
  projectText.appendChild(link);

  projectsContainer.appendChild(projectText);

  section.appendChild(projectsContainer);

  const scrollDown = document.createElement('div');
  scrollDown.textContent = "Scroll Down"
  scrollDown.classList.add('scroll-down');

  const arrow = document.createElement('div');
  arrow.classList.add('arrow')
  arrow.classList.add('bx')
  arrow.classList.add('bxs-chevron-down')

  scrollDown.appendChild(arrow);
  section.appendChild(scrollDown);

  gsap.to(arrow, {
      repeat: -1,
      duration: .75,
      yoyo: true,
      y: 0,
      ease: Power2.out
  })

  // Create the projects section element
  const lineSection = document.createElement('div');
  lineSection.classList.add('line-section');

  const line1 = document.createElement('div');
  line1.classList.add('line');

  lineSection.appendChild(line1);

  const line2 = document.createElement('div');
  line2.classList.add('line');

  lineSection.appendChild(line2);

  const line3 = document.createElement('div');
  line3.classList.add('line');

  lineSection.appendChild(line3);

  section.appendChild(lineSection);



  // Create the container for project cards
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('project-cards-container');
  section.appendChild(cardContainer);


  // Create the projects cards dynamically
  projectsData.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      // Set the background image
      card.style.backgroundImage = `url('./Projects/${project.id}.png')`;

      // Create the card text elements
      const cardSubtitle = document.createElement("div");
      cardSubtitle.classList.add("card-subtitle");

      const cardNumber = document.createElement("div");
      cardNumber.classList.add("card-number");
      cardNumber.textContent = project.id;
      cardSubtitle.appendChild(cardNumber);

      const cardTags = document.createElement("div");
      cardTags.classList.add("card-tags");
      project.tags.slice(0, 3).forEach((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = tag;
          cardTags.appendChild(tagElement);
      });
      cardSubtitle.appendChild(cardTags);

      const cardTitle = document.createElement("div");
      cardTitle.classList.add("card-title");
      cardTitle.innerHTML = `<a href="https://github.com/jonnfrancis" target="_blank"><span class="title-text">${project.title}</span></a>`;

      // Append the card text elements to the card
      card.appendChild(cardSubtitle);
      card.appendChild(cardTitle);

      // Append the card to the projects container
      cardContainer.appendChild(card);

  });

  // Create the cta button
  const ctaButton = document.createElement('a');
  ctaButton.addEventListener('click', function () {
      removeProjectsSection();
      addContactUsSection();
  });
  ctaButton.textContent = 'Contact Me';
  ctaButton.classList.add('cta-button', 'contact-btn');
  section.appendChild(ctaButton);

  // Append the projects section to the root container
  rootContainer.appendChild(section);

  // Append the projects section to the body or another container element
  document.body.appendChild(rootContainer);

  // Animate the projects section or add any additional functionality as needed
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  if (window.innerWidth >= 780) {
      gsap.timeline({
              scrollTrigger: {
                  trigger: '.project-card',
                  scrub: true,
              }
          })
          .to('.project-card', {
              stagger: .2,
              y: -500
          })

      gsap.set('.projects-container', {
          opacity: 0,
          y: 100
      });
      gsap.set('.projects-title, .projects-text, .projects-paragraph, .projects-link, .scroll-down', {
          opacity: 0,
          y: 50
      });

      gsap.to('.projects-container', {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out'
      });
      gsap.to('.projects-title', {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out'
      });
      gsap.to('.projects-text', {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: 'power2.out'
      });
      gsap.to('.projects-paragraph', {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.5,
          ease: 'power2.out'
      });
      gsap.to('.projects-link', {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 2,
          ease: 'power2.out'
      });
      gsap.to('.scroll-down', {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 2.5,
          ease: 'power2.out'
      });

  }



  function removeProjectsSection() {
      // Select the necessary elements
      const projectsSection = document.querySelector('.projects-section');
      // const projectsContainer = document.querySelector('.projects-container');
      const projectsLink = document.querySelector('.projects-link');
      // const projectsTitle = document.querySelector('.projects-title');
      // const projectsParagraph = document.querySelector('.projects-paragraph');
      // const projectCardsContainer = document.querySelector('.project-cards-container');
      // const scrollDown = document.querySelector('.scroll-down');
      // const lineSection = document.querySelector('.line-section');

      // Calculate the clicked button's position
      // const buttonRect = projectsLink.getBoundingClientRect();
      // const buttonPosition = {
      //     x: buttonRect.left + buttonRect.width / 2,
      //     y: buttonRect.top + buttonRect.height / 2
      // };

      // Animate the removal of elements
      gsap.timeline()
          .to(projectsSection, {
              rotationX: -90,
              opacity: 0,
              duration: 0.2,
              onComplete: removeSection
          });

      function removeSection() {
          // Remove the projects section from the DOM
          rootContainer.remove();

          // Call the addResumeSection function
      }

  }


}

function addResumeSection() {
  gsap.timeline()
      .to(".logo", {
          autoAlpha: 0,
          y: -20,
          duration: 0.25,
          ease: "power2.in",
      })
      .to(".navbar", {
          autoAlpha: 0,
          y: -20,
          duration: 0.25,
          ease: "power2.in",
      })
      .set(".resume-section", {
          opacity: 0,
          display: "grid",
      })
      .to(".resume-section", {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
      })
      .from(".resume-section", {
          y: -20,
          duration: 0.5,
          ease: "power2.out",
      });

  const resumeSection = document.createElement("section");
  resumeSection.classList.add("resume-section");

  const main = document.createElement("main");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow");
  eyebrow.textContent = "Skills and Experience";
  main.appendChild(eyebrow);

  gsap.from(eyebrow, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out",
  });

  const pageTitle = document.createElement("h1");
  pageTitle.classList.add("page-title");
  pageTitle.textContent = "My Resume";
  main.appendChild(pageTitle);

  gsap.from(pageTitle, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.4,
      ease: "power2.out",
  });

  const name = "John Francis"
  const intro = document.createElement("p");
  intro.classList.add("intro");
  intro.textContent = `Hi, I'm ${name}, I'm passionate about building innovative solutions that deliver seamless user experiences.`;
  main.appendChild(intro);

  gsap.from(intro, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.6,
      ease: "power2.out",
  });

  const jobExperience = document.createElement("div");
  jobExperience.classList.add("job-experience");

  const jobsData = [{
          year: "2022",
          certificate: "React",
          institution: "Free Code Camp",
          info: "A hands-on course that teaches the fundamentals of React Js, its usage, and building UI.",
      },
      {
          year: "2021",
          certificate: "Web Programming",
          institution: "HarvardX",
          info: "A comprehensive course on web programming, covering HTML, CSS, and JavaScript.",
      },
      {
          year: "2020",
          certificate: "Introduction to CS",
          institution: "HarvardX",
          info: "An introductory course providing an overview of computer science concepts and principles.",
      },
  ];

  jobsData.forEach((jobData, index) => {
      const job = document.createElement("div");
      job.classList.add("job");
      job.style.opacity = 0;

      const year = document.createElement("p");
      year.classList.add("year");
      year.textContent = jobData.year;
      job.appendChild(year);

      const jobInfo = document.createElement("div");
      jobInfo.classList.add("job-info");

      const role = document.createElement("h2");
      role.classList.add("role");
      role.textContent = jobData.certificate;

      const company = document.createElement("span");
      company.classList.add("company");
      company.textContent = jobData.institution;
      jobInfo.appendChild(role);
      jobInfo.appendChild(company);

      const infoParagraph = document.createElement("p");
      infoParagraph.classList.add("info-paragraph");
      infoParagraph.textContent = jobData.info;

      job.appendChild(jobInfo);
      job.appendChild(infoParagraph);
      jobExperience.appendChild(job);

      gsap.to(job, {
          opacity: 1,
          duration: 0.5,
          delay: 0.2 * index,
          ease: "power2.out",
      });
  });

  main.appendChild(jobExperience);

  const aside = document.createElement("aside");

  const iconList = document.createElement("ul");
  iconList.classList.add("icon-list");

  const iconsData = [{
          imgSrc: "./icons/html.svg",
          text: "html",
      },
      {
          imgSrc: "./icons/css.svg",
          text: "css",
      },
      {
          imgSrc: "./icons/js.svg",
          text: "javascript",
      },
      {
          imgSrc: "./icons/react.svg",
          text: "react",
      },
      {
          imgSrc: "./icons/tailwind.svg",
          text: "tailwind",
      },
  ];

  iconsData.forEach((iconData, index) => {
      const listItem = document.createElement("li");
      const hiddenText = document.createElement("p");
      hiddenText.classList.add("visually-hidden");
      hiddenText.textContent = iconData.text;

      const iconImg = document.createElement("img");
      iconImg.src = iconData.imgSrc;

      listItem.appendChild(hiddenText);
      listItem.appendChild(iconImg);
      iconList.appendChild(listItem);

      gsap.fromTo(
          listItem, {
              opacity: 0,
              y: 20,
          }, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.15 * index,
              ease: "power2.out",
          }
      );
  });

  aside.appendChild(iconList);

  const backButton = document.createElement("div");
  backButton.classList.add("back-button");
  backButton.innerHTML = '<i class="bx bx-left-arrow-alt icon"></i>';
  backButton.addEventListener("click", () => {
      removeResumeSection();
  });

  // Create the GSAP animation for the back arrow icon
  gsap.to(backButton.querySelector(".icon"), {
      x: -10,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
  });
  resumeSection.appendChild(backButton);
  resumeSection.appendChild(main);
  resumeSection.appendChild(aside);

  document.body.appendChild(resumeSection);

  function removeResumeSection() {
      const tl = gsap.timeline({});

      tl.to(".navbar", {
              width: "100%",
              borderRadius: "0",
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
          })
          .to(".navbar", {
              right: "auto",
              duration: 0.5,
              ease: "power2.out",
          })
          .to("main, aside", {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: "power2.out",
          })
          .to(".resume-section", {
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                  resumeSection.remove();
              },
          });

      // Call addProjectsSection to bring back the projects section
      addProjectsSection();
  }

}


function addContactUsSection() {
  const section = document.createElement('section');
  section.classList.add('contact-us-section');

  const container = document.createElement('div');
  container.classList.add('contact-container');

  // Div for title and p
  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('title-wrapper');

  const title = document.createElement('h2');
  title.textContent = 'Contact Us';
  title.classList.add('contact-title');
  titleWrapper.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Any question or remarks? Just write me a message!';
  subtitle.classList.add('contact-subtitle');
  titleWrapper.appendChild(subtitle);

  container.appendChild(titleWrapper);

  // Contact Info Section
  const contactInfoSection = document.createElement('div');
  contactInfoSection.classList.add('contact-info');

  const contactInfoTitle = document.createElement('h4');
  contactInfoTitle.textContent = 'Contact Information';
  contactInfoTitle.classList.add('contact-info-title');
  contactInfoSection.appendChild(contactInfoTitle);

  // Phone
  const phoneDiv = createContactInfoItem('Phone', '+254-115-429-729', 'bx bx-phone-call');
  contactInfoSection.appendChild(phoneDiv);

  // Email
  const emailDiv = createContactInfoItem('Email', 'john.francis3431@gmail.com', 'bx bx-envelope');
  contactInfoSection.appendChild(emailDiv);

  // Location
  const locationDiv = createContactInfoItem('Location', 'Nairobi, Kenya', 'bx bx-map');
  contactInfoSection.appendChild(locationDiv);

  // Social Media
  const socialMediaDiv = document.createElement('div');
  socialMediaDiv.classList.add('contact-social-media');

  const facebookLink = createSocialMediaLink('Facebook', 'https://facebook.com', 'bx bxl-facebook');
  socialMediaDiv.appendChild(facebookLink);

  const twitterLink = createSocialMediaLink('Twitter', 'https://github.com/jonnfrancis', 'bx bxl-github');
  socialMediaDiv.appendChild(twitterLink);

  const instagramLink = createSocialMediaLink('Instagram', 'https://instagram.com/designed.by_.jf', 'bx bxl-instagram');
  socialMediaDiv.appendChild(instagramLink);

  contactInfoSection.appendChild(socialMediaDiv);

  container.appendChild(contactInfoSection);

  // Feedback Section
  const feedbackSection = document.createElement('div');
  feedbackSection.classList.add('contact-feedback');

  const feedbackTitle = document.createElement('h2');
  feedbackTitle.textContent = 'Get in touch';
  feedbackTitle.classList.add('contact-feedback-title');
  feedbackSection.appendChild(feedbackTitle);

  const feedbackDescription = document.createElement('p');
  feedbackDescription.textContent = 'Leave me a message and I will get back to you';
  feedbackDescription.classList.add('contact-feedback-description');
  feedbackSection.appendChild(feedbackDescription);

  // Create form
  const form = document.createElement('form');
  form.setAttribute('id', 'contact-form');
  form.setAttribute('action', 'your-action-url');

  // Name input
  const nameInput = createFeedbackInput('Name', 'text', 'name', 'Your Name');
  form.appendChild(nameInput);

  // Email input
  const emailInput = createFeedbackInput('Email', 'email', 'email', 'Your Email');
  form.appendChild(emailInput);

  // Phone input
  const phoneInput = createFeedbackInput('Message', 'text', 'phone', 'Your Message');
  form.appendChild(phoneInput);

  // How did you find us dropdown
  const dropdownWrapper = document.createElement('div');
  dropdownWrapper.classList.add('select-wrapper');

  const dropdownLabel = document.createElement('label');
  dropdownLabel.textContent = 'How did you find me?';
  dropdownLabel.setAttribute('for', 'find-us-dropdown');
  dropdownWrapper.appendChild(dropdownLabel);

  const dropdown = document.createElement('select');
  dropdown.setAttribute('id', 'find-us-dropdown');
  dropdownWrapper.appendChild(dropdown);

  const option1 = document.createElement('option');
  option1.textContent = 'Internet search';
  dropdown.appendChild(option1);

  const option2 = document.createElement('option');
  option2.textContent = 'Social media';
  dropdown.appendChild(option2);

  const option3 = document.createElement('option');
  option3.textContent = 'Friend recommendation';
  dropdown.appendChild(option3);

  form.appendChild(dropdownWrapper);

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.classList.add('contact-feedback-submit');
  submitButton.setAttribute('type', 'submit');
  form.appendChild(submitButton);

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const findUs = document.getElementById('find-us-dropdown').value;

      // Create a reference to the Firebase database
      const database = firebase.database().ref('contacts');

      // Push form data to the database
      database.push().set({
              name: name,
              email: email,
              phone: phone,
              findUs: findUs
          })
          .then(() => {
              // Form submission success
              form.reset();
              showSuccessMessage();
          })
          .catch((error) => {
              // Form submission error
              showErrorMessage();
              console.error(error);
          });
       
  });

  // Add form to feedback section
  feedbackSection.appendChild(form);



  // Function to show success message
  function showSuccessMessage() {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert');
      alertDiv.textContent = "Message sent succesfully! 👍"
      feedbackSection.appendChild(alertDiv);

      setTimeout(() => {
          alertDiv.remove();
          // Reload the page after form submission
          location.reload();
      }, 3000);
  }

  // Function to show error message
  function showErrorMessage() {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert');
      alertDiv.textContent = "Message could not be sent!😟 "
      feedbackSection.appendChild(alertDiv);

      setTimeout(() => {
          alertDiv.remove();
      }, 3000);
  }

  container.appendChild(feedbackSection);

  section.appendChild(container);

  document.body.appendChild(section);
}


// Helper function to create contact info items
function createContactInfoItem(labelText, valueText, iconClass) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('contact-info-item');

  const icon = document.createElement('i');
  icon.classList.add(...iconClass.split(" "));

  const label = document.createElement('p');
  label.textContent = labelText;
  label.classList.add('label')

  const value = document.createElement('p');
  value.textContent = valueText;

  itemDiv.appendChild(icon);
  itemDiv.appendChild(label);
  itemDiv.appendChild(value);

  return itemDiv;
}

// Helper function to create social media links
function createSocialMediaLink(labelText, url, iconClass) {
  const link = document.createElement('a');
  link.setAttribute('href', url);

  const icon = document.createElement('i');
  icon.classList.add(...iconClass.split(" "));

  const label = document.createElement('p');
  label.textContent = labelText;
  label.classList.add('label')

  link.appendChild(icon);
  link.appendChild(label);

  return link;
}

// Helper function to create feedback inputs
function createFeedbackInput(labelText, type, id, placeholder) {
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('contact-feedback-input');

  const label = document.createElement('label');
  label.textContent = labelText;
  label.setAttribute('for', id);

  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('placeholder', placeholder);

  inputDiv.appendChild(label);
  inputDiv.appendChild(input);

  return inputDiv;
}
