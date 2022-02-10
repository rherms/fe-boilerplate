/**
 * Asynchronously loads the component for HomePage
 */

import { Spinner } from "@blueprintjs/core";
import React from "react";
import { lazyLoad } from "utils/loadable";

export const HomePage = lazyLoad(
  () => import("./HomePageComponent"),
  module => module.HomePageComponent,
  {
    fallback: <Spinner />,
  },
);
