import {  useState } from "react";
import { useLocalStorageData } from "./useLocalStorageData";

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
        <Layout nextStep="plan" updateFormStep={updateFormStep}>
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
