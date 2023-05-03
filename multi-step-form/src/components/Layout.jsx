function Layout({ children, prevStep, nextStep, updateFormStep }) {
  return (
    <>
      {children}
      <div>
        {prevStep && (
          <button onClick={() => updateFormStep(prevStep)}>Go back</button>
        )}
        {nextStep && (
          <button onClick={() => updateFormStep(nextStep)}>Next Step</button>
        )}
      </div>
    </>
  );
}

export default Layout;
