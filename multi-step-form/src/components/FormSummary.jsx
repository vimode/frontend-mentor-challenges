import { useLocalStorageData } from "../useLocalStorageData";
import { findPlan, findAddons } from "../data";

function FormSummary({ changePlan }) {

  const [thisFormData, setThisFormData] = useLocalStorageData("localFormData");

  const calculatePlanPrice = () => {
    let selectedPlan = findPlan(thisFormData.plan.type)
    if(thisFormData.plan.period) {
      return `$${selectedPlan[0].yearly}/yr`
    }
    return `$${selectedPlan[0].monthly}/mo`
  }

  const selectedAddons = findAddons(thisFormData.addons)

  const calculateGrandTotal = () => {
    let selectedPlan = findPlan(thisFormData.plan.type)
    let planCost = thisFormData.plan.period ? selectedPlan[0].yearly : selectedPlan[0].monthly 
  }

  return (
    <>
      <h1>Finishing Up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div>
          <div>
            <h2>{thisFormData.plan.type}({thisFormData.plan.period ? 'Annual' : 'Monthly'})</h2>
            <button onClick={() => changePlan("plan")}>Change</button>
          </div>
          <p>{calculatePlanPrice()}</p>
        </div>
        <hr />
        {selectedAddons.map(addon => {
          return (
            <div key={addon.id}>
            <p>{addon.title}</p>
            <p>{thisFormData.plan.period ? `+${addon.yearly}/yr`: `+${addon.monthly}/mo`}</p>
            </div>)
        })}
      </div>
    </>
  );
}

export default FormSummary;
