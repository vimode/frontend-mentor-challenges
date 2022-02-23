import React from "react";
import HeroHeader from "../components/Header/HeroHeader/HeroHeader";
import PageHighlight from "../components/PageHighlight/PageHighlight";

import highlightImageA from "../assets/images/telemetry.jpg";
import highlightImageB from "../assets/images/near-you.jpg";
import highlightImageC from "../assets/images/payments.jpg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <HeroHeader 
        heroHeaderPageClass = "heroHomePage"
        heroHeaderTitle = "Scooter sharing made simple"
        heroHeaderContentText = "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you're away!"
        heroHeaderButton = {true}
      />

      <section className="hero_features">
        <div className="herolines"></div>
      <ul className="hero_features_cards inner_wrapper flex_">
        <li className="feature_card flex_">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><g fill="none" fillRule="evenodd"><circle cx="48" cy="48" r="48" fill="#FCB72B"/><path fill="#495567" fillRule="nonzero" d="M60.155 42.6l4.904 4.495a7.215 7.215 0 012.333 5.306v19.573h-1.599V52.401a5.61 5.61 0 00-1.813-4.127l-4.903-4.495 1.078-1.179zM53.8 24a4.003 4.003 0 013.997 3.998v23.656l5.363 5.364-1.13 1.131-7.893-7.893a2.693 2.693 0 00-3.58-.275 2.594 2.594 0 00-.19 3.837l5.597 5.598a.8.8 0 01.1 1.009A18.178 18.178 0 0053 70.544v1.43H33.01a4.003 4.003 0 01-3.997-3.997v-39.98A4.003 4.003 0 0133.01 24zm2.398 6.397H30.612v33.582h19.99v1.599h-19.99v2.399a2.4 2.4 0 002.399 2.398h18.395a19.77 19.77 0 012.972-10.284l-5.142-5.142a4.194 4.194 0 01.303-6.203 4.304 4.304 0 015.729.378l.93.93V30.398zm-11.993 36.78v1.6h-1.6v-1.6h1.6zm-7.196-11.194c.883 0 1.599.716 1.599 1.6v3.197c0 .884-.716 1.6-1.6 1.6H33.81c-.883 0-1.599-.716-1.599-1.6v-3.198c0-.883.716-1.6 1.6-1.6zm7.995 0c.884 0 1.6.716 1.6 1.6v3.197c0 .884-.716 1.6-1.6 1.6h-3.198c-.883 0-1.6-.716-1.6-1.6v-3.198c0-.883.717-1.6 1.6-1.6zm-7.995 1.6H33.81v3.197h3.199v-3.198zm7.995 0h-3.198v3.197h3.198v-3.198zm-7.995-9.596c.883 0 1.599.716 1.599 1.6v3.198c0 .883-.716 1.599-1.6 1.599H33.81c-.883 0-1.599-.716-1.599-1.6v-3.198c0-.883.716-1.599 1.6-1.599zm7.995 0c.884 0 1.6.716 1.6 1.6v3.198c0 .883-.716 1.599-1.6 1.599h-3.198c-.883 0-1.6-.716-1.6-1.6v-3.198c0-.883.717-1.599 1.6-1.599zm-7.995 1.6H33.81v3.198h3.199v-3.199zm7.995 0h-3.198v3.198h3.198v-3.199zM37.01 39.99c.883 0 1.599.716 1.599 1.6v3.198c0 .883-.716 1.6-1.6 1.6H33.81c-.883 0-1.599-.717-1.599-1.6V41.59c0-.884.716-1.6 1.6-1.6zm7.995 0c.884 0 1.6.716 1.6 1.6v3.198c0 .883-.716 1.6-1.6 1.6h-3.198c-.883 0-1.6-.717-1.6-1.6V41.59c0-.884.717-1.6 1.6-1.6zm7.996 0c.883 0 1.6.716 1.6 1.6v3.198c0 .883-.717 1.6-1.6 1.6h-3.198c-.884 0-1.6-.717-1.6-1.6V41.59c0-.884.716-1.6 1.6-1.6zm-15.991 1.6H33.81v3.198h3.199V41.59zm7.995 0h-3.198v3.198h3.198V41.59zm7.996 0h-3.198v3.198H53V41.59zm-15.991-9.595c.883 0 1.599.716 1.599 1.599v3.198c0 .884-.716 1.6-1.6 1.6H33.81c-.883 0-1.599-.716-1.599-1.6v-3.198c0-.883.716-1.6 1.6-1.6zm7.995 0c.884 0 1.6.716 1.6 1.599v3.198c0 .884-.716 1.6-1.6 1.6h-3.198c-.883 0-1.6-.716-1.6-1.6v-3.198c0-.883.717-1.6 1.6-1.6zm7.996 0c.883 0 1.6.716 1.6 1.599v3.198c0 .884-.717 1.6-1.6 1.6h-3.198c-.884 0-1.6-.716-1.6-1.6v-3.198c0-.883.716-1.6 1.6-1.6zm-15.991 1.599H33.81v3.198h3.199v-3.198zm7.995 0h-3.198v3.198h3.198v-3.198zm7.996 0h-3.198v3.198H53v-3.198zm.8-7.996H33.01a2.4 2.4 0 00-2.398 2.399v.8h25.586v-.8a2.4 2.4 0 00-2.398-2.399z"/></g></svg>
          <div className="feature_card_content flex_">
          <h4>Locate with app</h4>
          <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.</p>
          </div>
        </li>

        <li className="feature_card flex_">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><g fill="none" fillRule="evenodd"><circle cx="48" cy="48" r="48" fill="#FCB72B"/><g fillRule="nonzero"><path fill="#000" d="M45.07 62.301a.833.833 0 00-.585.242.833.833 0 00-.242.585c0 .217.088.43.242.585a.833.833 0 00.585.242c.217 0 .43-.089.584-.242a.832.832 0 00.243-.585.833.833 0 00-.243-.585.834.834 0 00-.584-.242z"/><path fill="#495567" d="M61.54 48.419l-1.928-8.706c.52-.07.979-.335 1.301-.718.381.238.83.376 1.312.376h1.654c.456 0 .826-.37.826-.826v-3.308a.827.827 0 00-.826-.827h-1.654c-.496 0-.958.147-1.345.398a2.06 2.06 0 00-1.547-.698h-4.88c-.878 0-1.628.55-1.927 1.323h-1.96c-1.186 0-2.15.964-2.15 2.15 0 1.185.964 2.15 2.15 2.15h4.256v1.666a.827.827 0 101.654 0v-1.666h1.447l2.075 9.378-3.928 6.997a2.429 2.429 0 01-2.113 1.234h-9.806c-.411-3.442-3.346-6.121-6.898-6.121a6.88 6.88 0 00-4.287 1.48l-.005.004a6.906 6.906 0 00-2.607 4.637h-1.698c.108-5.944 4.977-10.746 10.946-10.746h5.866c.463 0 .84.377.84.84v7.426c0 .456.37.827.826.827h4.4a4.932 4.932 0 004.932-4.927l.004-2.747a.827.827 0 00-1.654-.003l-.004 2.748a3.279 3.279 0 01-3.278 3.274h-3.573v-6.599a2.48 2.48 0 00-.293-1.172 2.482 2.482 0 001.244-2.15 2.484 2.484 0 00-2.48-2.48h-3.019c-.29 0-.568.05-.827.142v-7.253a2.484 2.484 0 00-2.48-2.48H34.77c-3.867 0-7.082 2.838-7.673 6.541a.827.827 0 00-.039.25v.015c-.039.316-.059.638-.059.965v4.301c0 1.242.918 2.274 2.11 2.453l1.832 1.83A12.568 12.568 0 0027 57.545v.625c0 .457.37.827.827.827h4.647a.845.845 0 00-.017.165c0 1.2.444 2.298 1.176 3.14h-5.806a.827.827 0 000 1.654h9.33l.096.002a4.801 4.801 0 004.796-4.796.845.845 0 00-.016-.165h11.924a4.085 4.085 0 003.281-1.656h1.048A4.773 4.773 0 0059.1 62.3H48.376a.827.827 0 000 1.654h14.248l.096.002a4.801 4.801 0 004.796-4.796 4.79 4.79 0 00-.36-1.821h1.352c.457 0 .827-.37.827-.827 0-4.365-3.47-7.934-7.797-8.094zm-18.127-5.132h3.018a.828.828 0 010 1.654h-3.018a.828.828 0 010-1.654zm-14.76-3.474c0-.051.003-.102.005-.153h9.048a.827.827 0 100-1.654h-8.78a6.128 6.128 0 015.845-4.31h5.334c.456 0 .827.37.827.826v9.592c0 .456-.37.827-.827.827H29.481a.828.828 0 01-.827-.827v-4.301zm2.824 6.782h1.892c-.397.226-.78.475-1.15.742l-.742-.742zm8.918 12.566a3.145 3.145 0 01-3.11 3.142l-.032-.002h-.095a3.145 3.145 0 01-3.047-3.14.845.845 0 00-.016-.165h6.317a.845.845 0 00-.017.165zm-8.372-1.819a5.26 5.26 0 011.96-3.337L33.99 54a5.24 5.24 0 013.263-1.125 5.303 5.303 0 015.23 4.467h-10.46zm30.202-21.278h.827v1.654h-.827a.828.828 0 010-1.654zM50.07 37.583c0-.274.222-.496.496-.496h1.822v.581c0 .14.014.278.04.41h-1.862a.497.497 0 01-.496-.495zm5.579.496h-1.197a.411.411 0 01-.41-.411v-1.494c0-.226.184-.41.41-.41h4.881c.227 0 .411.184.411.41v1.494c0 .227-.184.41-.41.41h-3.685zM65.863 59.16a3.145 3.145 0 01-3.11 3.142l-.032-.002h-.095a3.145 3.145 0 01-3.047-3.14c0-.656.205-1.291.582-1.821h5.12c.377.53.582 1.165.582 1.821zm-7.66-3.475l3.153-5.616a6.454 6.454 0 016.273 5.616h-9.426z"/><path fill="#000" d="M55.649 45.533a.827.827 0 100-1.653h-.003a.826.826 0 10.003 1.653z"/></g></g></svg>
          <div className="feature_card_content flex_">
            <h4>Pick your scooter </h4>
            <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
          </div>
        </li>

        <li className="feature_card flex_">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><g fill="none" fillRule="evenodd"><circle cx="48" cy="48" r="48" fill="#FCB72B"/><path fill="#495567" fillRule="nonzero" d="M44 28a2.667 2.667 0 012.667 2.667v10.812l2.082.521H54c.368 0 .667.298.667.667v2.666A.667.667 0 0154 46h-5.333a.666.666 0 01-.162-.02l-1.838-.46v1.813H54c.368 0 .667.299.667.667v7.333a2 2 0 012 2V58h2V40.157L57.588 38H54a.667.667 0 01-.667-.667v-2.666c0-.369.299-.667.667-.667h4c.368 0 .667.298.667.667v2.509l1.078 2.157H66c.368 0 .667.299.667.667v5.333A.667.667 0 0166 46h-1.829l3.812 16.517a.667.667 0 01-.65.816h-.666a4.667 4.667 0 01-9.334 0h-12a4.667 4.667 0 11-9.333 0h-7.333a.667.667 0 01-.667-.666V60c0-.368.298-.667.667-.667H32V58h-2a.667.667 0 01-.667-.667v-2.666c0-.369.299-.667.667-.667h2.053a4.667 4.667 0 014.614-4h2v-6.667h-1.334v2a2 2 0 01-2 2h-6.666a.667.667 0 01-.472-1.138l1.529-1.528-1.529-1.529A.667.667 0 0128.667 42h4.666v-2a2 2 0 012-2h3.334v-7.333A2.667 2.667 0 0141.333 28zm16 35.333h-1.333A3.337 3.337 0 0062 66.667a3.337 3.337 0 003.333-3.334H64a2 2 0 11-4 0zm-21.333 0h-1.334a3.337 3.337 0 003.334 3.334A3.337 3.337 0 0044 63.333h-1.333a2 2 0 11-4 0zm24 0h-1.334a.667.667 0 001.334 0zm-21.334 0H40a.667.667 0 101.333 0zm3.334-8.666h-8a.667.667 0 00-.667.666V62h9.333v-6.667a.667.667 0 00-.666-.666zM62.8 46H60v10h1.333v1.333H60V62h6.492L62.8 46zm-4.133 13.333h-9.334V62h9.334v-2.667zm-14-8h-8a3.337 3.337 0 00-3.334 3.334V62h1.334v-6.667a2 2 0 012-2h8a2 2 0 012 2V62H48v-7.333a3.337 3.337 0 00-3.333-3.334zM32 60.667h-2.667V62H32v-1.333zm22.667-4H52V58h3.333v-.667a.667.667 0 00-.666-.666zm-4-5.334h-2.74a4.651 4.651 0 011.406 3.334V58h1.334v-6.667zM41.333 56v1.333H40V56h1.333zM44 56v1.333h-1.333V56H44zm-5.333 0v1.333h-1.334V56h1.334zM64 56v1.333h-1.333V56H64zm-32-.667h-1.333v1.334H32v-1.334zm21.333-6.666H40V50h11.333c.369 0 .667.298.667.667v4.666h1.333v-6.666zm-8-8.667H40v7.333h5.333v-2.146l-2.162-.54a.667.667 0 01-.504-.647v-2.667a.667.667 0 01.828-.646l1.838.459V40zM36 43.333h-5.724l.862.862c.26.26.26.683 0 .943l-.862.862h5.057a.667.667 0 00.667-.667v-2zM56.667 42a2 2 0 110 4 2 2 0 010-4zM44 42.187v1.292l4.749 1.188h4.584v-1.334h-4.666a.667.667 0 01-.162-.02L44 42.187zm18.667-1.52H60v4h2.667v-4zm2.666 0H64v4h1.333v-4zm-8.666 2.666a.667.667 0 100 1.334.667.667 0 000-1.334zm-18-4h-3.334a.667.667 0 00-.666.667v2h4v-2.667zm6.666-3.77L40 37.163v1.504h5.333v-3.104zm12-.23h-2.666v1.334h2.666v-1.334zm-20 0v1.334h-8v-1.334h8zm8-2.666h-2V34a.667.667 0 01-.666.667H40v1.104l5.333-1.6v-1.504zm-8.666 0V34H28v-1.333h8.667zM44 29.333h-2.667c-.736 0-1.333.597-1.333 1.334v2.666h2V32c0-.368.298-.667.667-.667h2.666v-.666c0-.737-.597-1.334-1.333-1.334z"/></g></svg>
          <div className="feature_card_content flex_">
            <h4>Enjoy the ride </h4>
            <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
          </div>
        </li>
      </ul>
      </section>

      <PageHighlight 
        pageClass = "feature_highlight_a"
        pageHighlight_title = "Easy to use riding telemetry"
        pageHighlight_content = "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        pageHighlight_image = {highlightImageA}
        pageButton = {true}
        btnNavigateTo = "/about"
      />

      
      <PageHighlight 
        pageClass = "feature_highlight_b flex_inverted"
        pageHighlight_title = "Coming to a city near you"
        pageHighlight_content = "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        pageHighlight_image = {highlightImageB}
        pageButton = {true}
        btnNavigateTo = "/location"
      />

      <PageHighlight 
        pageClass = "feature_highlight_a"
        pageHighlight_title = "Zero hassle payments"
        pageHighlight_content = "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        pageHighlight_image = {highlightImageC}
        pageButton = {true}
        btnNavigateTo = "/about"
        
      />

    </>
  )
};

export default HomePage;