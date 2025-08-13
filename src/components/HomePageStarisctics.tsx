import React, { useEffect, useRef, useState } from 'react'
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({ 
    target, 
    suffix = "+", 
    duration = 5000
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
                WebkitTextStroke: '2px #ffbf00',
                color: 'transparent',
                textShadow: 'none'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.webkitTextStroke = 'none';
                e.currentTarget.style.color = '#ffbf00';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.webkitTextStroke = '2px #ffbf00';
                e.currentTarget.style.color = 'transparent';
            }}
        >
            {count}{suffix}
        </div>
    );
};
function HomePageStatistics() {
  return (
    <div className="container mx-auto px-4 py-16">
    <div className=" mx-auto">
        <div className=" border-2 border-[#ffbf00] rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* First Data Point */}
                <div className="text-center">
                    <AnimatedCounter target={35000} suffix="+" />
                    <div className="text-sm md:text-base lg:text-lg font-semibold text-[#ffbf00]">
                        CAR/BIKE PARKED
                    </div>
                </div>

                {/* Second Data Point */}
                <div className="text-center">
                    <AnimatedCounter target={300} suffix="+" />
                    <div className="text-sm md:text-base lg:text-lg font-semibold text-[#ffbf00]">
                        CLIENTS SATISFACTION
                    </div>
                </div>

                {/* Third Data Point */}
                <div className="text-center">
                    <AnimatedCounter target={142} suffix="+" />
                    <div className="text-sm md:text-base lg:text-lg font-semibold text-[#ffbf00]">
                        PARKING AREAS
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





  
       
    );
};



export default HomePageStatistics






