import React, { useState } from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

export default function FormattedTypeAnimation({
  text,
  delay,
  setValuePostDisplay,
  newValue,
}) {
  //TODO: change speed back to 40ish
  return (
    <TypeAnimation
      sequence={[
        `${text}`,
        delay,
        () => {
          setValuePostDisplay(newValue);
        },
      ]}
      cursor={false}
      omitDeletionAnimation={true}
      speed={90}
      style={{ whiteSpace: "pre-line", fontSize: "1.5rem" }}
    />
  );
}
