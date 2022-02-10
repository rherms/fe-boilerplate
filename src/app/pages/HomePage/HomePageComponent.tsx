import { Button, Intent } from "@blueprintjs/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getNumClicks } from "./redux/HomeSelectors";
import { useHomepageSlice } from "./redux/HomeState";

export function HomePageComponent() {
  const dispatch = useDispatch();
  const { actions } = useHomepageSlice();
  const numClicks = useSelector(getNumClicks);
  const handleClick = React.useCallback(() => {
    dispatch(actions.incrementByAmount(Math.floor(Math.random() * 5)));
  }, [dispatch, actions]);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My HomePage</span>
      <Button
        text="Click to increment"
        intent={Intent.PRIMARY}
        onClick={handleClick}
      />
      Your value: {numClicks}
    </>
  );
}
