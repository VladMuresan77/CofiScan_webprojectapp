export default function Hero() {
  return (
    <>
      <h1>
        Coffee Tracking for Coffee
        <abbr title="An enthusiast or devotee">Obsession</abbr>!
      </h1>
      <div className="benefits-list">
        <h3 className="font-bolder">
          Try <span className="text-gradient-1"> CofiScan </span> and start ...
        </h3>
        <p> <i className="fa-solid fa-file-signature mr-02"style={{ color: '#055e68' }} ></i>
        Tracking every coffee
          </p>
        <p> 
          <i className="fa-solid fa-hand-holding-droplet mr-02"style={{ color: '#055e68' }}></i> Measuring your blood caffeine levels</p>
        <p> 
          <i className="fa-solid fa-sack-dollar mr-02"style={{ color: '#055e68' }}></i> Costing and quanitifying your addiction</p>
      </div>
      <div className="card info-card">
        <div>
          <i className="fa-solid fa-circle-info"></i>
          <h3>did you know...</h3>
        </div>
        <h5> That caffeine&apos;s half-life is about 5 hours?</h5>
        <p>
          {" "}
          This means that after 5 hours, half the caffeine tou consumed is still
          in your system, keeping you alert longer! So if you drink a cup of
          coffee with 200 mg of caffeine, 5 hours, later, you&apos;ll still have
          about 100 mg of caffeine in your system
        </p>
      </div>
    </>
  );
}
