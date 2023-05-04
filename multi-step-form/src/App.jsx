import {  useState } from "react";
import { useLocalStorageData } from "./useLocalStorageData";
import "./_app.scss"

import Layout from "./components/Layout";
import UserInfo from "./components/UserInfo";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Addons from "./components/Addons";
import FormSummary from "./components/FormSummary";
import ThankYou from "./components/ThankYou";

function App() {
  const [formStep, setFormStep] = useState("info");

  const [multiStepFormData, setMultiStepFormData] =
    useLocalStorageData("localFormData");

  const updateFormStep = (stepName) => {
    setFormStep(stepName);
  };

  switch (formStep) {
    case "info":
      return (
        <Layout 
          nextStep="plan" 
          formStep={formStep} 
          updateFormStep={updateFormStep}
        >
          <UserInfo
            updateFormStep={updateFormStep}
            multiStepFormData={multiStepFormData}
          />
        </Layout>
      );
    case "plan":
      return (
        <Layout
          prevStep="info"
          nextStep="addons"
          formStep={formStep}
          updateFormStep={updateFormStep}
        >
          <SubscriptionPlans />
        </Layout>
      );
    case "addons":
      return (
        <Layout
          prevStep="plan"
          nextStep="summary"
          formStep={formStep}
          updateFormStep={updateFormStep}
        >
          <Addons />
        </Layout>
      );
    case "summary":
      return (
        <Layout
          prevStep="addons"
          nextStep="thankyou"
          formStep={formStep}
          updateFormStep={updateFormStep}
        >
          <FormSummary changePlan={updateFormStep} />
        </Layout>
      );
    case "thankyou":
      return (
        <Layout>
          <ThankYou />
        </Layout>
      );
    default:
      <>You should never see this </>;
      break;
  }
}

export default App;
