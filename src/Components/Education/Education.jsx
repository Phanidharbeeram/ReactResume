import React, { useState } from "react";
import SimpleCard from "./EducationCards";
export default function Education() {
  const [education] = useState([
    {
      name: "B.Tech",
      url:
        "https://collegedunia.com/college/12819-andhra-loyola-institute-of-engineering-aliet-vijayawada/gallery",
      location:
        "https://www.google.com/maps/dir/17.5029308,78.3193883/aliet+maps/@17.0152946,78.3265296,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a35fcc97636aaa9:0xa173d94ed4a34bc9!2m2!1d80.6586244!2d16.5085814",
      img:
        "https://www.careeroppt.com/uploads/college/gallery/836x484/303030IMG1543408714_70029460639421.jpg",
      mail: "Andhra Loyola Institute Of Engineering And Technology",
      percentage: "71%",
      branch: "ECE",
    },
    {
      name: "Intermediate",
      img:
        "https://images.jdmagicbox.com/comp/krishna/w3/9999p8676.8676.160624121944.r5w3/catalogue/narayana-junior-college-edupugallu-krishna-colleges-1nsxg.jpg",
      url:
        "https://www.justdial.com/Krishna/Narayana-Junior-College-Near-Kankipadu-Mandalam-Edupugallu/9999P8676-8676-160624121944-R5W3_BZDET",
      location:
        "https://www.google.com/maps/dir/17.5029308,78.3193883/narayana+junior+college+edupugallu/@16.8829256,78.4034787,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a35fc68a965880b:0x7e9a8d363ff339d1!2m2!1d80.738512!2d16.4590192",
      mail: "Narayana Junior College ,Edupugallu",
      percentage: "93%",
      branch: "MPC",
    },
    {
      name: "SSC",
      img: "https://pbs.twimg.com/media/ENG9ZywU4AEkgT-.jpg",
      url: "http://kommareddytalenthighschool.yolasite.com/contact-us.php",
      location:
        "https://www.google.com/maps/dir//kommareddy+talent+high+school+bantumilli/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a362742e2edf26f:0xfd5af918d48e5fc9?sa=X&hl=en&ved=2ahUKEwjGi5vBk5rpAhXIyzgGHU8UA_YQ9RcwFXoECBEQDg",
      mail: "KommaReddy Talent High Schol,Bantumilli",
      percentage: "9.3CGPA",
    },
  ]);
  return (
    <div>
      <h1>Educational Details Page</h1>
      <div

      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
      >
        {" "}
        {education.map((link) => (
          <li style={{ listStyleType: "none" }}>
            <SimpleCard link={link} />
          </li>
        ))}
      </div>{" "}
    </div>
  );
}
