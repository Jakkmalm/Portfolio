// Import VT-comp
// https://www.npmjs.com/package/react-vertical-timeline-component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Info.scss";
// Destructure Prop-objekt, info
function InfoList({ info }) {
  console.log(info);

  return (
    <div className="info-component">
      <VerticalTimeline className="info-vert-container" lineColor="none" >
        {/* map igenom och skriv ut data */}
        {info.map((infoData) => (
          <VerticalTimelineElement className="info-vert-element" key={infoData.id}>
            <h2>{infoData.header}</h2>
            <p>{infoData.text}</p>
            <button>Läs mer</button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default InfoList;
