
import React from "react";

import { Plus, Minus } from "lucide-react";

import { AccordionContent , Accordion, AccordionItem,AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ChainPay ensure payment security?",
    answer:
      "ChainPay leverages blockchain technology for secure, transparent transactions. Our smart contracts are audited and tested to ensure maximum security for all parties involved in the payment process.",
  } ]

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-24 px-6 relative overflow-hidden "
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-800 text-blue-300 font-medium text-sm mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about ChainPay and how it works.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="multiple"
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm"
          defaultValue={[]}
        >
          {faqs.map((faq, index) => (
           <AccordionItem
           key={index}
           value={String(index)}
           className="border-b border-gray-700 last:border-none"
         >
           <AccordionTrigger className="w-full py-5 flex items-center justify-between text-left focus:outline-none group transition-colors duration-200 hover:bg-gray-800/50 px-2 rounded-lg text-white font-medium">
             {faq.question}
             <span className="ml-2">
               {/* This uses the built-in `data-state` attribute for toggling */}
               <Plus
                 className="text-blue-400 data-[state=open]:hidden"
                 size={20}
               />
               <Minus
                 className="text-blue-400 hidden data-[state=open]:block"
                 size={20}
               />
             </span>
           </AccordionTrigger>
         
           <AccordionContent className="px-2 pb-5 text-gray-400 leading-relaxed">
             {faq.answer}
           </AccordionContent>
         </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
