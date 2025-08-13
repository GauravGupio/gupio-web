import React from "react";

interface PartnerProps {
  className?: string;
}

const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

const Partner: React.FC<PartnerProps> = ({ className = "" }) => {
  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-900">Our Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {partners.map((partner, idx) => (
          <div
            key={partner.name}
            className="flex items-center justify-center h-16 bg-yellow-100 rounded-lg shadow-inner text-yellow-700 font-semibold text-lg"
          >
            {partner.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
