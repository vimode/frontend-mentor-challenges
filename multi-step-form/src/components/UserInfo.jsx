import { useLocalStorageData } from "../useLocalStorageData";

function UserInfo() {

  const [thisFormData, setThisFormData] = useLocalStorageData( "localFormData");

  const handleChange = (event) => {
    let { name, value } = event.target;
    setThisFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      {thisFormData && 
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={thisFormData.name}
            placeholder="e.g. Stephen King"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={thisFormData.email}
            placeholder="e.g. stephenking@king.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={thisFormData.phone}
            placeholder="eg. +123 456 789"
            pattern="[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
            onChange={handleChange}
          />
        </div>
      </form> }
    </>
  );
}

export default UserInfo;
