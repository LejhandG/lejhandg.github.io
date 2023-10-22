AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "C Language",
    cardImage: "https://cdn.discordapp.com/attachments/676775305746317313/1165564940019576862/pngegg_2.png?ex=65474ff0&is=6534daf0&hm=5c382f2100c6a0cddcfbcc6a84c6b75d21106ab4a2d01cb75462b61998091ac2&",
    place: "University",
    time: "(1 year)",
    desp: "<li>New to C but pretty good at it.</li> <li>Know intermediate level C</li>",
  },
  {
    title: "HTML and CSS",
    cardImage: "https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg",
    place: "SELF LEARNT",
    time: "(2 years)",
    desp: "<li>Decent at frontend using HTML and CSS only</li><li>Can make decent websites using HTML CSS.</li><li>Problem in making responsive websites.</li>",
  },
  {
    title: "Java",
    cardImage: "https://cdn.discordapp.com/attachments/676775305746317313/1165563983634370600/image.png?ex=65474f0c&is=6534da0c&hm=cd468835c410beb5ac40ce74b0bbd2fc2da089eb065dacd9b4d861d95d136877&",
    place: "SCHOOL",
    time: "(4 years)",
    desp: "<li>Basics of Java and OOP are strong.</li><li>Can code intermediate level but not advanced.</li>",
  },
  {
    title: "Python",
    cardImage: "https://cdn.discordapp.com/attachments/676775305746317313/1165565098274861066/pngegg_3.png?ex=65475016&is=6534db16&hm=4fceae69c55a2185530540c752e49197c94abfbdf3fdd1ac70bb968d735218cf&",
    place: "SELF LEARNT",
    time: "(6 months)",
    desp: "<li>Can code basic python.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Saber Discord Bot",
    cardImage: "https://cdn.discordapp.com/attachments/676775305746317313/1165565684932161556/3doHwGEb_4x.jpg?ex=654750a2&is=6534dba2&hm=c41b19fad95c188bf4d83682bb5156fd04dd79a473ba2827dd8cfbfdb826fa69&",
    description:
      "It was a multipurpose discord bot coded in Discord JS v14",
  },
  {
    title: "Google Main Page Frontend Clone",
    cardImage: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    description:
      "A frontend clone of Google Main Page using HTML and CSS",
  },
  {
    title: "C Codes",
    cardImage: "https://cdn.discordapp.com/attachments/676775305746317313/1165564940019576862/pngegg_2.png?ex=65474ff0&is=6534daf0&hm=5c382f2100c6a0cddcfbcc6a84c6b75d21106ab4a2d01cb75462b61998091ac2&",
    description:
      "C Language Codes which are unique and open sourced for others",
  },
  {
    title: "Google Classroom Main Page Clone",
    cardImage: "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png",
    description:
      "A frontend clone of Google Classroom Main Page using HTML and CSS",
  },
  {
    title: "Resume Website",
    cardImage: "https://cdn.discordapp.com/attachments/676775305746317313/1165567469000339486/Pngtreevector_resume_icon_4225024.png?ex=6547524b&is=6534dd4b&hm=5797780598bb06d31d4d97d5f8e491774754842c19526426ffa9766ae7c025ec&",
    description:
      "A resume website written in HTML and CSS",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Sacchai India",
    subtitle: "Instagram Info Page",
    image: "https://cdn.discordapp.com/attachments/676775305746317313/1165568298092609657/Dto37gcJ_4x.jpg?ex=65475311&is=6534de11&hm=dd0a2509dd906535533fa40caa0ce866b04aa04c57867c0880a9a895c829dacd&",
    desp: "This is an Instagram Info page which with help of creative GFX explains difficult topics in the simplest language",
    href: "https://instagram.com/sacchai.in",
  },
  {
    title: "Graphics Designing",
    subtitle: "Skill",
    image: "https://cdn.pixabay.com/photo/2015/11/27/10/55/photoshop-1065296_1280.jpg",
    desp: "I am a decent Graphic Designer who knows to use Photoshop,Canva,Figma etc",
    href: "/experience.html",
  },
  {
    title: "Video Editing",
    subtitle: "Skill",
    image: "https://cdn.discordapp.com/attachments/676775305746317313/1165571112344748053/pngwing.com.png?ex=654755b0&is=6534e0b0&hm=a56f6dd25245ed2671da5e0c2808a4c7222ffb80c1f4f1d317b21950f30fdd3c&",
    desp: "I can edit high level and quality videos using Adobe Premiere Pro and Filmora. I have also edited multiple short films.",
    href: "https://www.youtube.com/channel/UC9miR7VYcONWc4SqhBtTzqQ",
  },
  {
    title: "Esports Management",
    subtitle: "Discord Server",
    image: "https://wallpapers.com/images/high/discord-logo-r7hdrvrk0v1xgsr1.webp",
    desp: "I had a discord server with over 7k+ members where we used to organise esports tournaments and scrims.",
    href: "https://discord.gg/8zVhEWbKw9",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
