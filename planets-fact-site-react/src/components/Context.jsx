import { createContext } from "react";

const PlanetsContext = createContext ();

export const PlanetProvider = PlanetsContext.Provider;
export const PlanetConsumer = PlanetsContext.Consumer;
