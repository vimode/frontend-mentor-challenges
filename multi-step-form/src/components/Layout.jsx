import "./_layout.scss";

function Layout({ children, prevStep, nextStep, formStep, updateFormStep }) {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="formStep">
          <p>1</p>
          <div>
            <p>Step 1</p>
            <p>Your Info</p>
          </div>
        </div>
        <div className="formStep">
          <p>2</p>
          <div>
            <p>Step 2</p>
            <p>Select Plan</p>
          </div>
        </div>
        <div className="formStep">
          <p>3</p>
          <div>
            <p>Step 3</p>
            <p>Add-ons</p>
          </div>
        </div>
        <div className="formStep">
          <p>4</p>
          <div>
            <p>Step 4</p>
            <p>Summary</p>
          </div>
        </div>
      </div>
      <main>
      {children}
      <div>
        {prevStep && (
          <button onClick={() => updateFormStep(prevStep)}>Go back</button>
        )}
        {nextStep && (
          <button onClick={() => updateFormStep(nextStep)}>Next Step</button>
        )}
      </div>
      </main>
    </div>
  );
}

export default Layout;
