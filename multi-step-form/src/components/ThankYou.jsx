import { useEffect } from "react";

function ThankYou() {
  useEffect(() => {
    window.localStorage.clear();
  }, []);

  return (
    <div>
      <p>image</p>
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platfofrm. If you ever need support, please feel free to email us at
        support@king.com.
      </p>
    </div>
  );
}

 export default ThankYou;
