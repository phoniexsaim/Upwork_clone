"use client"
import { useState } from 'react';
import Head from 'next/head';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Upwork's client service fee and how is it calculated?",
      shortAnswer: "For the Marketplace plan, when you hire on Upwork, you pay a 3 or 5% Marketplace fee on all payments that you make to freelancers for fixed-price and hourly projects, Project Catalog projects, bonuses, and Any Hire contracts.",
      fullAnswer: (
        <>
          For the <strong>Marketplace</strong> plan, when you hire on Upwork, you pay a 3 or 5% Marketplace fee on all payments that you make to freelancers for fixed-price and hourly projects, Project Catalog projects, bonuses, and Any Hire contracts.
          <br /><br />
          For the <strong>Business Plus plan</strong>, when you hire on Upwork, you pay a 8 or 10% Business Plus fee on all payments that you make to freelancers for fixed-price and hourly projects, Project Catalog projects, and bonuses.
          <br /><br />
          The discounted Marketplace fee of 3% and the discounted Business Plus fee of 8% are available for eligible clients in the U.S. who pay with a checking account. Check to see if you're eligible <strong>here</strong>.
          <br /><br />
          For the <strong>Enterprise plan</strong>, contact Upwork Sales <strong>here</strong> for a pricing estimate.
        </>
      ),
      showButton: true
    },
    {
      question: "When do I pay a client service fee?",
      shortAnswer: "For the Marketplace plan and Business Plus plan, you only pay a client service fee when you make a payment and your default billing method will be charged automatically for the balance due.",
      fullAnswer: (
        <>
          For the Marketplace plan and Business Plus plan, you only pay a client service fee when you make a payment and your default billing method will be charged automatically for the balance due.
          <br /><br />
          For the Business Plus plan (with Net 30 terms), payment is due 30 days from the end of the invoiced month. Note: Monthly invoicing with payment terms is only available by application to US-based companies.
          <br /><br />
          For Enterprise plans, contact Upwork Sales to learn more.
        </>
      ),
      showButton: true
    },
    {
      question: "Can I change my plan later on?",
      shortAnswer: "Any client with Admin Full access can upgrade or downgrade their account at any time. You can manage your membership plan for your Upwork account under Settings/membership/change_plan. There are no penalties or restrictions for",
      fullAnswer: (
        <>
          Any client with Admin Full access can upgrade or downgrade their account at any time. You can manage your membership plan for your Upwork account under <strong>Settings/membership/change_plan</strong>. There are no penalties or restrictions for upgrading or downgrading.
          <br /><br />
          For Marketplace and Business Plus plans, changes will take effect immediately.
          <br /><br />
          For Enterprise plans, changes will take effect at the start of the next billing cycle.
        </>
      ),
      showButton: true
    },
    {
      question: "What payment methods do you accept?",
      answer: "To see which billing method options are available to you, visit your profile setting. Note: Based on your location, your options may vary. Learn more about billing methods.",
      showButton: false
    },
    {
      question: "Are there any other fees?",
      shortAnswer: "Both the Marketplace and Business Plus plans do not include upfront costs to join.",
      fullAnswer: (
        <>
          Both the Marketplace and Business Plus plans do not include upfront costs to join.
          <br /><br />
          In addition, you also pay a one-time contract initiation fee for each new Marketplace and Project Catalog contract.
          <br /><br />
          For Business plus, there is no contract initiation fee, with the exception of fixed-price contracts of $100 USD or less.
          <br /><br />
          <strong>See details.</strong>
        </>
      ),
      showButton: true
    },
    {
      question: "How do I get 30-day payment terms?",
      shortAnswer: "Business Plus clients based in the U.S. may be eligible to apply for monthly invoicing with 30-day payment terms. The application process requires you to provide details and documentation about business including banking and trade",
      fullAnswer: (
        <>
          Business Plus clients based in the U.S. may be eligible to apply for monthly invoicing with 30-day payment terms. The application process requires you to provide details and documentation about business including banking and trade references.
          <br /><br />
          Upon submission, the Upwork team will review your application and email you with our decision within 5 business days.
        </>
      ),
      showButton: true
    },
  ];

  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const toggleReadMore = (index: any) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <h2 className="text-xl md:text-[34px] font-medium mb-[40px] mx-[2rem] text-[#181818]">Frequently asked questions</h2>
      <div className='flex flex-row justify-end items-end bg-[#f7f8f8] mx-[2rem] p-[2rem] rounded-[1rem] mb-[3rem]'>
        <div className="md:max-w-4xl w-full">
          <div className="space-y-6 md:pl-[15rem]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 border-b-[#d9d9d9]">
                <div className="flex justify-between items-start">
                  <h3 className="text-[20px] font-medium text-[#181818] mb-[.75rem] tracking-[.0370rem] leading-[1.5em]">{faq.question}</h3>
                </div>
                {faq.showButton ? (
                  <>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded[index] ? 'max-h-[500px]' : 'max-h-[3em]'}`}>
                      <p className="text-[16px] text-[#676767] tracking-[.03em]">
                        {expanded[index] ? faq.fullAnswer : faq.shortAnswer}
                      </p>
                    </div>
                    <button
                      className="text-[#14a800] mt-2 text-[16px] focus:outline-none flex items-center"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expanded[index] ? 'View less' : 'Read more'}
                      <span className="ml-2">
                        {expanded[index] ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                      </span>
                    </button>
                  </>
                ) : (
                  <p className="text-[16px] text-[#676767]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-sm text-[#001e00] mt-6 text-center">
            Still have questions?{' '}
            <a href="#" className="text-[#14a800] font-medium underline">
              Visit our Help Center
            </a>
          </div>
        </div>
      </div>
    </>
  );
}