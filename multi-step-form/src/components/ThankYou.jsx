import { useEffect } from "react";
import "./_thankyou.scss";

function ThankYou() {
  useEffect(() => {
    window.localStorage.clear();
  }, []);

  return (
    <div className="wrapper_thankyou">
      <img src="/images/icon-thank-you.svg" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@king.com.
      </p>
    </div>
  );
}

 export default ThankYou;
