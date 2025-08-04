"use client";
import usePrivacyPolicy from "@/hooks/usePrivacyPolicy";
import React from "react";

const Terms = () => {
  const { description, loading, error } = usePrivacyPolicy("privacyPolicy");

  return (
    <div className="container mx-auto">
      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: description && description,
        }}
      ></div>
    </div>
  );
};

export default Terms;
