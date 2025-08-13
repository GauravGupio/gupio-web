import React from 'react';
import Typography from './ui/typography';

const TrustedClients: React.FC = () => {
  const clients = [
    { name: 'VER', logo: 'VER', color: 'text-purple-600' },
    { name: 'CUEMATH', logo: '🚀 CUEMATH', color: 'text-black' },
    { name: 'LENDINGKART', logo: 'LENDINGK₹RT', color: 'text-blue-600', subtitle: 'Simplifying MSME Finance' },
    { name: 'Groww', logo: '🔵 Groww', color: 'text-gray-700' },
    { name: 'CoinDCX', logo: 'CoinDCX', color: 'text-blue-800', highlight: 'DCX' },
    { name: 'BRANE', logo: '🔺 BRANE', color: 'text-purple-600' },
    { name: 'supertails', logo: '🐕 supertails', color: 'text-black' },
    { name: 'UrbanWrk', logo: '🏢 UrbanWrk', color: 'text-blue-600' },
    { name: 'CoinDCX', logo: 'CoinDCX', color: 'text-blue-800', highlight: 'DCX' },
    { name: 'BRANE', logo: '🔺 BRANE', color: 'text-purple-600' },
    { name: 'supertails', logo: '🐕 supertails', color: 'text-black' },
    { name: 'UrbanWrk', logo: '🏢 UrbanWrk', color: 'text-blue-600' },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Title */}
        <Typography
          variant="h2"
          className="text-center mb-8"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '26.9px',
            lineHeight: '33.6px',
            letterSpacing: '0px',
            verticalAlign: 'middle',
            color: '#FFFFFF',
          }}
        >
          Trusted Client
        </Typography>

        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-marquee ">
           
            <div className="flex space-x-8 md:space-x-12 lg:space-x-16 ">
              {clients.map((client, index) => (
                                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 bg-white rounded-lg p-2 md:p-3 shadow-lg min-w-[120px] md:min-w-[150px] lg:min-w-[180px]"
                  >
                  <div className="text-center">
                    <div className={`text-lg md:text-xl lg:text-2xl font-bold ${client.color} mb-1`}>
                      {client.logo}
                    </div>
                    {client.subtitle && (
                      <div className="text-xs md:text-sm text-orange-500 font-medium">
                        {client.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            
            <div className="flex space-x-8 md:space-x-12 lg:space-x-16 ml-8 md:ml-12 lg:ml-16">
              {clients.map((client, index) => (
                                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 bg-white rounded-lg p-3 md:p-4 shadow-lg min-w-[120px] md:min-w-[150px] lg:min-w-[180px]"
                  >
                  <div className="text-center">
                    <div className={`text-lg md:text-xl lg:text-2xl font-bold ${client.color} mb-1`}>
                      {client.logo}
                    </div>
                    {client.subtitle && (
                      <div className="text-xs md:text-sm text-orange-500 font-medium">
                        {client.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

export default TrustedClients; 