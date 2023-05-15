import { useLocalStorageData } from "../useLocalStorageData";
import {plans as plansData } from "../data";
import "./_subscriptionplans.scss";

function SubscriptionPlans() {
  const [thisFormData, setThisFormData] = useLocalStorageData("localFormData");

  // change plans
  const handleTypeChange = (event) => {
    let {value} = event.target
    setThisFormData((prevData) => {
      return {
        ...prevData,
         plan: {...prevData.plan, type: value}
      };
    });
  }

  // toggle monthly vs annual
  const handlePeriodChange = () => {
    setThisFormData((prevData) => {
      return {
        ...prevData, 
        plan: {...prevData.plan, period: !prevData.plan.period }
      }
    });
  }

  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or annual billing</p>
      <form className="subscriptionForm">
        <div className="planOptions">
          { plansData.map(plan => {
            return (
              <div className="planCard" key={plan.id}>
                <img className="iconImage" src="images/icon-pro.svg"/>
                <input type="radio" 
                    id={plan.name} 
                    name={plan.name} 
                    value={plan.name} 
                    onChange={handleTypeChange} 
                    checked={thisFormData.plan.type === plan.name}/>
                <div>
                  <label htmlFor={plan.name}>{plan.name}</label>
                  <p>{thisFormData.plan.period ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`}</p>
                  {thisFormData.plan.period && <p className="promoText">2 months free</p>}
                </div>
              </div>)
            })
          }
        </div>
        <div>
          <label htmlFor="period">Monthly</label>
          <input
            type="checkbox"
            id="period"
            // checked === yearly
            checked={thisFormData.plan.period}
            onChange={handlePeriodChange}
            aria-checked={thisFormData.plan.period}
            aria-label="Toggle Annual Billing"
            name="period"
          />
          <label htmlFor="period">Annual</label>
        </div>
      </form>
      {/* TODO: Enable Next Button only when one of the plan is selected. */}
    </>
  );
}

export default SubscriptionPlans;
