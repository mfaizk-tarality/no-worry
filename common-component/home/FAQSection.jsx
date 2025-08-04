"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
const faqs = [
  {
    question: "How to create an account?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    question: "Have any trust issue?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions sent to your email.",
  },
  {
    question: "What is the payment process?",
    answer:
      "Once your account is verified, you can deposit funds using your linked bank account or UPI, and start trading immediately.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full flex justify-center items-center container mx-auto mt-24 md:mt-44">
      <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5   mx-10 md:mx-0 rounded-2xl overflow-hidden bg-gradient-to-tl from-[#023768] to-[#14161f] inset-shadow-2xs shadow-[#0888ff]">
        <div className="col-span-12 md:col-span-6 bg-[#1c81fc] p-8 md:p-32">
          <div className="flex items-center justify-center">
            <p className="text-3xl font-semibold">24x7 Customer Support</p>
          </div>
          <div className="mt-12 md:block flex justify-start items-start flex-col ">
            <p className="font-medium">Email Us</p>
            <p className="font-semibold text-2xl">support@coinswitch.co</p>
          </div>
          <div className="mt-8 md:block flex justify-start items-start flex-col">
            <p className="font-medium">Raise a ticket</p>
            <p className="font-semibold text-2xl">Click Here</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-start justify-start flex-col">
          <div className="flex items-center justify-center w-full my-12">
            <p className="text-3xl font-semibold">FAQs</p>
          </div>
          <div className="w-full  divide-y divide-white/5 rounded-xl">
            {faqs?.map((item, idx) => {
              return (
                <Disclosure as="div" className="p-6" key={idx}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                      {item?.question}
                    </span>
                    <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel
                    transition
                    className={clsx(
                      "origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0",
                      "mt-2 text-sm/5 text-white/90"
                    )}
                  >
                    {item?.answer}
                  </DisclosurePanel>
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
