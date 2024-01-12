import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { useEffect, useState } from "react";
import {
  SubscriptionWrapper,
  Title,
  InputRow,
  InputGroup,
  InputSelect,
} from "@/styled-components/styled";

export default function SubscriptionForm() {
  const [paymentType, setPaymentType] = useState<string | undefined>("Days");
  const [initialPrice, setInitialPrice] = useState(1000);
  const [upfrontPayment, setUpfrontPayment] = useState<number | undefined>(500);
  const [billingFrequency, setBillingFrequency] = useState(2);
  const [billingCycle, setBillingCycle] = useState(2);
  const [timePayment, setTimePayment] = useState<number | undefined>();
  const [duration, setDuration] = useState<string | undefined>("Never Ends");
  const [trialType, setTrialType] = useState<string | undefined>("None");
  const [trialValue, setTrialValue] = useState<number | undefined>();

  const timePaymentOptions = (timeSelected: string) => {
    switch (timeSelected) {
      case "Days":
        return "Daily";
      case "Weeks":
        return "Weekly";
      case "Months":
        return "Monthly";
      default:
        return "";
    }
  };

  const timeUntilCancel = (timeSelected: string) => {
    switch (timeSelected) {
      case "Days":
        return "day";
      case "Weeks":
        return "week";
      case "Months":
        return "month";
      default:
        return "";
    }
  };

  function calculateTimePayment() {
    const amountPerTime = (initialPrice - upfrontPayment) / billingFrequency;
    const roundedAmount = Math.round(amountPerTime * 100) / 100;
    setTimePayment(roundedAmount);
  }

  useEffect(() => {
    calculateTimePayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upfrontPayment, billingFrequency, initialPrice]);

  const renderSubscriptionDetails = () => {
    if (
      (trialType === "None" || trialValue === 0) &&
      duration === "Never Ends"
    ) {
      return (
        <p>{`Your customer will be charged ${upfrontPayment} immediately and then
            ${timePayment} every ${timeUntilCancel(
          paymentType
        )} until they cancel.`}</p>
      );
    } else if (duration === "Never Ends" && trialValue !== 0) {
      return (
        <p>{`Your customer will be charged ${upfrontPayment} immediately for their ${trialValue} ${timeUntilCancel(
          trialType
        )} trial, and then ${timePayment} every ${timeUntilCancel(
          paymentType
        )} until they cancel.`}</p>
      );
    } else if (duration === "Customize" && trialValue !== 0) {
      return (
        <p>{`Your customer will be charged ${upfrontPayment} immediately for their ${trialValue} ${timeUntilCancel(
          trialType
        )} trial, and then ${timePayment} every ${timeUntilCancel(
          paymentType
        )}, of ${billingCycle} billing cycles. The total amount paid will be ${initialPrice}.`}</p>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <SubscriptionWrapper>
        <Title>Set up your subscription</Title>
        <InputRow>
          <InputGroup>
            <Label title="Product Price" />
            <Input
              type="text"
              name="productPrice"
              value={initialPrice}
              onChange={(e) => setInitialPrice(Number(e.target.value))}
            />
          </InputGroup>
          <InputGroup>
            <Label title="Upfront Payment" />
            <Input
              type="text"
              name="upfrontPayment"
              value={upfrontPayment}
              onChange={(e) => setUpfrontPayment(Number(e.target.value))}
            />
          </InputGroup>
        </InputRow>
        <InputRow>
          <InputGroup>
            <Label title="Billing Frequency" />
            <InputSelect>
              <Input
                type="text"
                name="billingFrequency"
                $small
                onChange={(e) => setBillingFrequency(Number(e.target.value))}
                value={billingFrequency}
              />
              <Select
                options={["Days", "Weeks", "Months"]}
                name="billingFrequency"
                onChange={(e) => setPaymentType(e.target.value)}
              />
            </InputSelect>
          </InputGroup>
          <InputGroup>
            <Label title={`${timePaymentOptions(paymentType)} Payment`} />
            <Input name="timePayment" type="number" value={timePayment} />
          </InputGroup>
        </InputRow>
        <InputRow>
          <InputGroup>
            <Label title="Trial Period" />
            <InputSelect>
              <Input
                type="number"
                name="trialPeriod"
                $small
                value={trialType === "None" ? 0 : undefined}
                onChange={(e) => setTrialValue(Number(e.target.value))}
              />
              <Select
                options={["None", "Days", "Weeks", "Months"]}
                name="trialPeriod"
                onChange={(e) => setTrialType(e.target.value)}
              />
            </InputSelect>
          </InputGroup>
          <InputGroup>
            <Label title="Duration" />
            <Select
              options={["Never Ends", "Customize"]}
              name="duration"
              onChange={(e) => setDuration(e.target.value)}
            />
          </InputGroup>
          {duration === "Customize" && (
            <InputGroup>
              <Label title="Billing Cycles" />
              <Input
                type="number"
                name="billingCycles"
                onChange={(e) => setBillingCycle(Number(e.target.value))}
              />
            </InputGroup>
          )}
        </InputRow>
        <div>{renderSubscriptionDetails()}</div>
      </SubscriptionWrapper>
    </>
  );
}
