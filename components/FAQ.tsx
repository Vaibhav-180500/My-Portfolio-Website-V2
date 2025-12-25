import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Do I need to know how to code to work with you?",
    answer: "Not at all. I handle all the technical heavy lifting (SQL, Python, etc.) and deliver clear, visual dashboards and strategic insights that you can use immediately to make decisions."
  },
  {
    question: "What is your typical turnaround time for a dashboard?",
    answer: "It depends on the complexity and data cleanliness. A standard MVP dashboard typically takes 3-5 days, while enterprise-grade systems with complex ETL pipelines may take 2-3 weeks."
  },
  {
    question: "Can you automate my weekly Excel reporting?",
    answer: "Absolutely. This is one of my specialties. I can build pipelines that automatically fetch data, process it, and update a live dashboard, saving your team countless hours of manual work."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "I have deep experience in Beauty, E-commerce, and SaaS but data principles are universal. I adapt quickly to specific domain KPIs."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader title="Common Questions" />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-orange-500' : 'text-zinc-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-orange-500" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;