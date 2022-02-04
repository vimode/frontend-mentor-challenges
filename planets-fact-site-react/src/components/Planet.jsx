import React, { useState }from "react";
import { PlanetConsumer } from "./Context.jsx";

import "./Planet.css";

const Planet = () => {

  const [contentOption, setContentOption] = useState('overview')

  const handleChange = (event) => {
    const {name, value, type, checked,id} = event.target;
      setContentOption(value)
  };

  return (
    <PlanetConsumer>
        
      {context =>  (
        
        <section className="inner_wrapper planet_wrapper grid_">
          
          <div className = "planet_image">
          <img 
          src = {context.activePlanetData.images.planet}
          className="planet_image_one"
          />
            { (contentOption === 'overview') ? 
            <img 
              src = {context.activePlanetData.images.planet}
              className="planet_image_two"
              /> : 
            (contentOption === "structure") ? 
            <img 
              src = {context.activePlanetData.images.internal}
              className="planet_image_two"
              />
             :            
              <img 
            src = {context.activePlanetData.images.geology}
            className={`planet_image_two_alt alt_${context.activePlanetData.name}`}
            />
            
            }
            
          </div>
            
            <div className="planet_content_info flex_">
              <h1 className="planet_content_info_title">{context.activePlanetData.name}</h1>

              { contentOption === "overview" ? 
                (<p className="planet_content_info_text">
                {context.activePlanetData.overview.content}
                </p>) : 
                (contentOption === "structure") ?
                (<p className="planet_content_info_text">
                {context.activePlanetData.structure.content}
                </p>) : 
                (<p className="planet_content_info_text">
                {context.activePlanetData.geology.content}
                </p>)
              }

              { contentOption === "overview" ? 
                (<p className="planet_content_info_source"> Source:{` `}
                 <a 
                  className="source_link" 
                  href={`${context.activePlanetData.overview.source}`}>Wikipedia</a>
                  <img 
                    src="./assets/icon-source.svg"
                    className="source_image"
                  />
                  </p>
                ) : 
                (contentOption === "structure") ? 
                (<p className="planet_content_info_source"> Source:{` `}
                 <a 
                  className="source_link" 
                  href={`${context.activePlanetData.structure.source}`}>Wikipedia</a>
                  <img 
                    src="./assets/icon-source.svg"
                    className="source_image"
                  />
                  </p>
                ) : 
                ((<p className="planet_content_info_source"> Source:{` `}
                <a 
                 className="source_link" 
                 href={`${context.activePlanetData.geology.source}`}>Wikipedia</a>
                 <img 
                    src="./assets/icon-source.svg"
                    className="source_image"
                  />
                 </p>
               ))
              }
              
              
            </div>
            
            <div className="planet_content_tabs flex_">
              <>
              <input 
                type="radio"
                id="content_overview"
                name="content"
                value="overview"
                defaultChecked = {true}
                className=""
                onChange= {handleChange}
              />
              <label 
                htmlFor="content_overview"
                className={`label_${context.activePlanetData.name}`}
                >Overview</label>
              </>
              <>
              <input 
                type="radio"
                id="content_structure"
                name="content"
                value="structure"
                defaultChecked = {false}
                className=""
                onChange= {handleChange}
              />
              <label 
                htmlFor="content_structure"
                className={`label_${context.activePlanetData.name}`}
                >
                  <span className="label_big">Internal{" "}</span>
                  Structure</label>
              </>
              <>
              <input 
                type="radio"
                id="content_geology"
                name="content"
                value="geology"
                defaultChecked = {false}
                className=""
                onChange= {handleChange}
              />
              <label 
                htmlFor="content_geology"
                className={`label_${context.activePlanetData.name}`}
                >
                  <span className="label_big">Surface{" "}</span>Geology
                  </label>
              </>
            </div>

          <ul className="planet_facts flex_">
            <li className="planet_facts_card flex_">
              <h4 className="planet_facts_card_title">Rotation Time</h4>
              <h2 className="planet_facts_card_number">{context.activePlanetData.rotation}</h2>
            </li>

            <li className="planet_facts_card flex_">
              <h4 className="planet_facts_card_title">Revolution Time</h4>
              <h2 className="planet_facts_card_number">{context.activePlanetData.revolution}</h2>
            </li>

            <li className="planet_facts_card flex_">
              <h4 className="planet_facts_card_title">Radius</h4>
              <h2 className="planet_facts_card_number">{context.activePlanetData.radius}</h2>
            </li>

            <li className="planet_facts_card flex_">
              <h4 className="planet_facts_card_title">Average Temp.</h4>
              <h2 className="planet_facts_card_number">{context.activePlanetData.temperature}</h2>
            </li>
          </ul>

        </section>
      )}

    </PlanetConsumer>
  );
}

export default Planet;