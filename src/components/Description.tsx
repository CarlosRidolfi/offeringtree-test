import React from "react";

type DescriptionProps = React.ComponentProps<"div"> & {
  trialType: boolean;
  dInitialPrice: number;
  dPaymentAmount: number;
  dBillingPeriod: number;
  dtimeInterval: number;
  dBillingCycles: number;
  dTotalAmount: number;
};

function Description({ condition1, condition2, condition3, condition4 }) {
  let paragraphContent: JSX.Element;

  switch (true) {
    case condition1:
      paragraphContent = <p>Paragraph for Condition 1</p>;
      break;
    case condition2:
      paragraphContent = <p>Paragraph for Condition 2</p>;
      break;
    case condition3:
      paragraphContent = <p>Paragraph for Condition 3</p>;
      break;
    case condition4:
      paragraphContent = <p>Paragraph for Condition 4</p>;
      break;
    default:
      paragraphContent = <p>Default Paragraph</p>;
  }

  return <p>{paragraphContent}</p>;
}
export default Description;
