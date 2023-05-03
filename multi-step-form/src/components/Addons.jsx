import { useLocalStorageData } from "../useLocalStorageData";
import { planAddons as addonsData } from "../data";

function Addons() {
  const [thisFormData, setThisFormData] = useLocalStorageData("localFormData");

  const handleAddonsChange = (event) => {
    let { name } = event.target
    setThisFormData((prevData) => {
      return {
        ...prevData,
        addons: {...prevData.addons, [name]: !prevData.addons[name]}
      }
    });
  }

  return (
    <>
      { addonsData.map( addon => {
        return (
      <div key={addon.id}>
        <input 
          type="checkbox" 
          id={addon.id} 
          name={addon.name} 
          checked={thisFormData.addons[addon.name]}
          onChange={handleAddonsChange} />
        <label htmlFor={addon.id}>
          <h2>{addon.title}</h2>
          <p>{addon.description}</p>
          <p>{thisFormData.plan.period ? `+${addon.yearly}/yr`: `+${addon.monthly}/mo`}</p>
        </label>
      </div>
        )
      })}
    </>
  );
}

export default Addons;
