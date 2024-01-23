// Destructure Prop-objekt
function InfoList({info}) {
  
  return (
    
    <div className="info-list">
      {/* map igenom och skriv ut data */}
      {info.map((infoData) => (
        <section className="section" key={infoData.id}>
          <h2>{infoData.header}</h2>
          <p>{infoData.text}</p>
          <button>Läs mer</button>
        </section>
      ))}
    </div>
  );
}

export default InfoList;
