import * as React from "react";
import { Helmet } from "react-helmet-async";
import "./NotFoundPageComponent.scss";

export function NotFoundPageComponent() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="not-found-page-component--wrapper">
        <div className="not-found-page-component--title">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p className="not-found-page-component--subtitle">Page not found.</p>
      </div>
    </>
  );
}
