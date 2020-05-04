import React, { useState } from "react";
import OutlinedCard from "./Cards";
import styles from "./TechnicalSkills.module.css";
function TechnicalSkills() {
  const [skills] = useState([
    {
      name: "HTML",
      url:
        "data:image/png;base64,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",
    },
    {
      name: "CSS",
      url:
        "https://www.vippng.com/png/detail/231-2318919_css-logo-png-css-black-icon-svg.png",
    },
    {
      name: "JavaScript",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "BootStrap",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
    },
    {
      name: "jQuery",
      url:
        "https://cdn.clipart.email/4c96e7bad3caec88aa0e102439722d30_jquery-logo-web-development-jquery-ui-javascript-computer-icons-_500-500.jpeg",
    },
    {
      name: "Angular 7",
      url:
        "https://angular.io/assets/images/logos/angular/angular_whiteTransparent.png",
    },
    {
      name: "React JS",
      url:
        "https://static.callstack.com/wp/2018/07/09103808/010-010-header-2.png",
    },
    {
      name: "Node JS",
      url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "Express JS",
      url:
        "https://www.orangemantra.com/wp-content/uploads/2019/05/expressjs-icon.png",
    },
    {
      name: "MOngoDB",
      url:
        "https://banner2.cleanpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg",
    },
  ]);
  return (
    <div>
      <h1>Technical Skills</h1>
      <div className={styles.container}>
        {skills.map((skill, i) => (
          <OutlinedCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default TechnicalSkills;
