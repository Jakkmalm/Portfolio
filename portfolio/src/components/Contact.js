import { useEffect, useState } from "react";
import "../styles/Contact.scss";
import Navbar from "./Navbar";

function Contact() {
  // states för jsondata
  const [personInfo, setPersonInfo] = useState(null);

  // funktion som hämtar data från api.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/3dd13742-deb9-4e84-8811-99f5988a9692"
        );

        if (!response.ok) {
          throw new Error("ERROR");
        }

        const data = await response.json();
        const personInformationData = data.personInformation.kontakt;
        console.log(personInformationData);

        setPersonInfo(personInformationData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    console.log(personInfo);
    fetchData();
  }, []);

  return (
    <div className="contact-component">
      <Navbar />
      <div className="contact-info-holder">
        {/* skriv ut data från jsondata */}
        {personInfo && <h1>{personInfo.fNamn + " " + personInfo.eNamn}</h1>}
        <h2>Email</h2>
        {personInfo && <p>{personInfo.email}</p>}
        <h2>Telefon</h2>
        {personInfo && <p>{personInfo.telefon}</p>}
      </div>
    </div>
  );
}

export default Contact;
