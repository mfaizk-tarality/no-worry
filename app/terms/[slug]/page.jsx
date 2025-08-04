"use client";
import usePrivacyPolicy from "@/hooks/usePrivacyPolicy";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";

const Terms = () => {
  const { slug } = useParams();
  const { description, loading, error } = usePrivacyPolicy(slug);
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);

  const heading = useMemo(() => {
    switch (slug) {
      case "privacyPolicy":
        return {
          title: "Privacy & Policy",
        };
      case "termsConditions":
        return {
          title: "Terms & Conditions",
        };

      default:
        return {
          title: "Information",
        };
    }
  }, [slug]);

  return (
    <div className="container mx-auto">
      <div className="text-5xl font-medium text-center my-10">
        <p>{heading?.title}</p>
      </div>
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
