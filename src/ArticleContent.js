import car2 from "../src/images/car2.jpg";
import car3 from "../src/images/car3.jpg";
import car4 from "../src/images/car4.jpg";
import car5 from "../src/images/car5.jpg";
import car6 from "../src/images/car6.jpg";
import car7 from "../src/images/car7.jpg";
import car8 from "../src/images/car8.jpg";
import car1 from "../src/images/car1.jpg";

const articles = [
  {
    name: "installation",
    title: "Install",
    date: "20th April 2022",
    img: car3,
    desc: "How to install Cuteblog React",
    content: [
      `Okay, now let's learn how to install Cuteblog project. First, ensure you have Node.js installed on your device. If not, download and install Node.js first. Next, download the source code of the project and install a code editor. You can download Visual Studio Code and install it on your device.`,
      `After installation, download the Cuteblog React source code from our GitHub repository. Click on the GitHub icon on the navbar or use Git Bash with the command "git clone https://github.com/mesinkasir/cuteblogreact.git".`,
      `Now, extract all source code files and install dependencies by running "npm install && npm start". Then, open localhost:3000 in your browser. Congratulations! You have successfully installed Cuteblog for React on your device.`,
    ],
  },
  {
    name: "work",
    title: "Work",
    date: "20th April 2022",
    img: car4,
    desc: "How to work with Cuteblog React",
    content: [
      `Now that you have successfully installed Cuteblog on your device, let's dive into working with it. Open the source code project using Visual Studio Code and navigate to the src folder. Open the ArticleContent.js file and edit it according to your needs. Follow the file structure to create new article content and save your changes.`,
      `For SEO purposes, visit the index.js file and update the title, description, and other metadata within the Helmet component.`,
    ],
  },
  {
    name: "deploy",
    title: "Deploy",
    date: "19th April 2022",
    img: car5,
    desc: "How to deploy on static hosting or shared cloud hosting",
    content: [
      `After making changes and finishing your project, it's time to deploy your source code online. You have two options: Firebase and Surge, or Netlify, Vercel, Heroku, etc.`,
      `For Firebase and Surge, first, build your project for production by running "npm run build" in the terminal. Then, deploy the contents of the public folder to Firebase or Surge.`,
      `Alternatively, you can use GitHub integration with Heroku, Vercel, or Netlify. Create an account, create a new repository, push your source code to the repository, and integrate with Netlify, Heroku, or Vercel to deploy.`,
    ],
  },
  {
    name: "cms",
    title: "Cuteblog CMS",
    date: "18th April 2022",
    img: car6,
    desc: "If you need to build Cuteblog with a backend admin area, use Cuteblog web app",
    content: [
      `If you need to work with an admin area, we have developed Cuteblog as a content management system (CMS). With this CMS, you can easily install, deploy, or run it on your shared cloud hosting. We have developed it using PHP, making it easy to deploy on your cloud shared hosting.`,
      `Cuteblog is built using Pico CMS for security and speed. Simply download and upload it to your hosting, and your website will be live with an admin area. If you prefer working with Pico CMS, download it from https://axcora.my.id/pico/cuteblog.`,
      `We are also developing Cuteblog for Get Axcora CMS, a project from Get Simple. Download it from https://axcora.com/getaxcoracms to work with an admin area and an included text editor without the need for database installation.`,
    ],
  },
  {
    name: "iam",
    title: "CSK Vs MI",
    date: "18th April 2022",
    img: car7,
    desc: "If you need to build Cuteblog with a backend admin area, use Cuteblog web app",
    content: [
      `If you need to work with an admin area, we have developed Cuteblog as a content management system (CMS). With this CMS, you can easily install, deploy, or run it on your shared cloud hosting. We have developed it using PHP, making it easy to deploy on your cloud shared hosting.`,
      `Cuteblog is built using Pico CMS for security and speed. Simply download and upload it to your hosting, and your website will be live with an admin area. If you prefer working with Pico CMS, download it from https://axcora.my.id/pico/cuteblog.`,
      `We are also developing Cuteblog for Get Axcora CMS, a project from Get Simple. Download it from https://axcora.com/getaxcoracms to work with an admin area and an included text editor without the need for database installation.`,
    ],
  },
  {
    name: "cloud",
    title: "Cloud with Us",
    date: "16th April 2022",
    authorlink: "https://website.axcora.com",
    img: car8,
    desc: "Create and build your modern website with us for the best solutions",
    content: [
      `If you need to build and develop a modern website using technologies like static site generators such as Jekyll, Eleventy 11ty, Astro, or frameworks like React, Svelte Kit, or Angular, you can use our services at a reasonable price.`,
      `We can also create web apps that integrate with your point-of-sale application. Contact us to get started building your website or application, including an Android app.`,
      `Contact Us:`,
      `WhatsApp: +6285646104747`,
      `Call Us: +62895339403223`,
      `Email: axcora@gmail.com`,
    ],
  },
];

export default articles;
