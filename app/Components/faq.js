"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className=" lg:-my-0 my-60 py-20 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="lg:max-w-[1300px] mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            FAQs
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out bg-white lg:-mx-72 sm:mx-8 transform   ${
                openQuestion === index ? "scale-105 shadow-lg" : ""
              }`}
              onClick={() => toggleQuestion(index)}>
              <button
                type="button"
                className="flex items-center justify-between w-full   px-4 py-5 sm:p-6">
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform  ${
                    openQuestion === index ? "rotate-180" : "rotate-0"
                  }`}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openQuestion === index ? "300px" : "0",
                  opacity: openQuestion === index ? 1 : 0,
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-6">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "1. Is there any additional charge other than the course fee?",
    answer:
      "No! No more burning hole in the pocket. There is no hidden charge.",
  },
  {
    question: "2. How Ira Edu-Tech will help me to get jobs?",
    answer:
      "Free training of professional skills will be given that will help you to acquire job.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
  },
  {
    question: "What is the pricing structure?",
    answer:
      "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
];
