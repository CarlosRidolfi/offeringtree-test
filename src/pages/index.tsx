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
  const [paymentType, setPaymentType] = useState<string | undefined>("");
  const [initialPrice, setInitialPrice] = useState(1000);
  const [billingFrequency, setBillingFrequency] = useState(1);
  const [timePayment, setTimePayment] = useState<number | undefined>();
  const [duration, setDuration] = useState<string | undefined>();
  const [trialType, setTrialType] = useState<string | undefined>();
  const [trialValue, setTrialValue] = useState<number | undefined>();

  function calculateTimePayment() {
    setTimePayment(initialPrice / billingFrequency);
  }

  useEffect(() => {
    calculateTimePayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPrice, billingFrequency]);

  return (
    <>
      <SubscriptionWrapper>
        <Title>Set up your subscription</Title>
        <InputRow>
          <InputGroup>
            <Label title="Initial Price" />
            <Input
              type="text"
              value={initialPrice}
              onChange={(e) => setInitialPrice(Number(e.target.value))}
            />
          </InputGroup>
          <InputGroup>
            <Label title="Billing Frequency" />
            <InputSelect>
              <Input
                type="text"
                small
                onChange={(e) => setBillingFrequency(Number(e.target.value))}
              />
              <Select
                options={["Days", "Weeks", "Months"]}
                name="billingFrequency"
                onChange={(e) => setPaymentType(e.target.value)}
              />
            </InputSelect>
          </InputGroup>
          <InputGroup>
            <Label title={`${paymentType} Payment`} />
            <Input type="number" value={timePayment} />
          </InputGroup>
        </InputRow>
        <InputRow>
          <InputGroup>
            <Label title="Trial Period" />
            <InputSelect>
              <Input
                type="number"
                small
                value={trialType === "None" ? 0 : undefined}
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
              <Input type="number" value={billingFrequency} />
            </InputGroup>
          )}
        </InputRow>
        <div>
          {trialType === "None" && duration === "Never Ends" ? (
            <p>{`Your customer will be charged ${initialPrice} immediately and then
            ${timePayment} every ${paymentType} until they cancel.`}</p>
          ) : duration === "Never Ends" && trialValue !== 0 ? (
            <p>{`Your customer will be charged ${initialPrice} immediately for their ${billingFrequency} ${paymentType} trial, and then ${timePayment} every ${paymentType} until
            they cancel.`}</p>
          ) : duration === "Customize" && trialValue !== 0 ? (
            <p>{`Your customer will be charged ${initialPrice}  immediately for their ${billingFrequency} trial, and then ${timePayment} every ${paymentType}, ${billingFrequency} times. The total amount paid will be ${initialPrice}.`}</p>
          ) : (
            ""
          )}
        </div>
      </SubscriptionWrapper>
    </>
  );
}
