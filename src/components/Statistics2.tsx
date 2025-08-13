import React, { useEffect, useRef, useState } from 'react'

const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number; useOutline?: boolean }> = ({ 
    target, 
    suffix = "+", 
    duration = 5000,
    useOutline = true
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Reset count to 0 and start animation
                    setCount(0);
                    animateCount();
                } else {
                    // Reset count when section is out of view
                    setCount(0);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const updateCount = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
            
            setCount(currentValue);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(updateCount);
            }
        };

        animationRef.current = requestAnimationFrame(updateCount);
    };

    return (
        <div 
            ref={ref} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-300 cursor-pointer"
            style={{
                WebkitTextStroke: useOutline ? '2px #ffbf00' : 'none',
                color: useOutline ? 'transparent' : '#ffbf00',
                textShadow: 'none'
            }}
            onMouseEnter={(e) => {
                if (useOutline) {
                    e.currentTarget.style.webkitTextStroke = 'none';
                    e.currentTarget.style.color = '#ffbf00';
                }
            }}
            onMouseLeave={(e) => {
                if (useOutline) {
                    e.currentTarget.style.webkitTextStroke = '2px #ffbf00';
                    e.currentTarget.style.color = 'transparent';
                }
            }}
        >
            {count.toLocaleString()}{suffix}
        </div>
    );
};

function Statistics() {
  return (
    <div className="w-full max-w-[467px] mx-auto my-16">
      {/* Main container with border */}
      <div className="w-full h-[515px] border border-[#ffbf00] rounded-[15px] bg-transparent relative">
        
        {/* Inner content container */}
        <div className="w-full h-[398.206px] absolute top-[56px] left-[2px] px-4">
          
          {/* First statistic - CAR/BIKE PARKED */}
          <div className="w-full h-[114px] absolute top-[56px] left-[2px] flex flex-col items-center justify-center">
            <AnimatedCounter target={35000} suffix="+" useOutline={true} />
            <div className="text-sm md:text-base lg:text-lg font-semibold text-[#ffbf00] uppercase tracking-wider">
              CAR/BIKE PARKED
            </div>
          </div>

          {/* Second statistic - CLIENTS SATISFACTION */}
          <div className="w-full h-[114px] absolute top-[170px] left-[2px] flex flex-col items-center justify-center">
            <AnimatedCounter target={300} suffix="+" useOutline={true} />
            <div className="text-sm md:text-base lg:text-lg font-semibold text-[#ffbf00] uppercase tracking-wider">
              CLIENTS SATISFACTION
            </div>
          </div>

          {/* Third statistic - PARKING AREAS */}
          <div className="w-full h-[114px] absolute top-[284px] left-[2px] flex flex-col items-center justify-center">
            <AnimatedCounter target={142} suffix="+" useOutline={true} />
            <div className="text-sm md:text-base lg:text-lg font-semibold text-[#ffbf00] uppercase tracking-wider">
              PARKING AREAS
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Statistics






