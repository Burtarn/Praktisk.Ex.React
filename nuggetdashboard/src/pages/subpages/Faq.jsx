import React, { useState } from 'react';
import '../../styles/faq.css'

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "I invested my lifesavings on cryptocurrencies, now it's all gone! What can I do?",
            answer: "Just git gud."
        },
        {
            question: "I have too much money now after investing in crypto, how do I even spend all this money?",
            answer: "You buy more cryptocurrencies."
        },
        {
            question: "How do I even?",
            answer: "Yes."
        },
        {
            question: "I am unable to can?",
            answer: "Can you even? If so, then you can."
        },
        {
            question: "How do I can if I am unable to even?",
            answer: "Probably."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h3>FAQ</h3>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <h4 onClick={() => toggleFaq(index)} className="faq-question">
                        Q: {item.question}
                    </h4>
                    {activeIndex === index && (
                        <p className="faq-answer font-bold">
                            A: {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;