/**
 * Asynchronously loads the component for NotFoundPage
 */

import { Spinner } from "@blueprintjs/core";
import React from "react";
import { lazyLoad } from "utils/loadable";

export const NotFoundPage = lazyLoad(
  () => import("./NotFoundPageComponent"),
  module => module.NotFoundPageComponent,
  {
    fallback: <Spinner />,
  },
);
