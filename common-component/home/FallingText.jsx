import FallingText from "@/component/FallingText/FallingText";

const FallingTextComponent = () => {
  return (
    <div className="h-[600px] container mx-auto">
      <FallingText
        text={`Stable Trusted Assured Smooth Effortless Certain Secure Instant Reliable Unshaken Deposit Withdraw Transfer Instant Swift Blink Earn 0Fee`}
        highlightWords={[
          "Trusted",
          "Deposit",
          "Effortless",
          "Withdraw",
          "Reliable",
        ]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};

export default FallingTextComponent;
