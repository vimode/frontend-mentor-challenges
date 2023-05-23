import { useLocalStorageData } from "../useLocalStorageData";
import { findPlan, findAddons, planAddons } from "../data";

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
    const selectedPlan = findPlan(thisFormData.plan.type)
    const planPeriod =  thisFormData.plan.period ? "yearly" : "monthly"
    const planCost = thisFormData.plan.period ? selectedPlan[0].yearly : selectedPlan[0].monthly 
// thisFormData.addons[addon.name]
    const selectedAddons = Object.entries(thisFormData.addons).filter(([key,value]) => value == true)
    const filterValues = selectedAddons.map(addon => addon[0])
    const filteredAddons = planAddons.map((addon) => filterValues.includes(addon.name) )
    const selectedFilteredAddons = Object.fromEntries(selectedAddons)
    const addonCost =  planAddons.reduce((acc, curVal) => curVal)
    console.log(filteredAddons)
  }
  calculateGrandTotal()

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
