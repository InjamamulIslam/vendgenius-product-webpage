import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 240,
    suffix: '+',
    label: 'Glasses Per Fill',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Daily Customers',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Zap,
    value: 30,
    suffix: ' Hrs',
    label: 'Freshness Duration',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Award,
    value: 99,
    suffix: '%',
    label: 'Uptime Guarantee',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={countRef} className="text-4xl lg:text-5xl font-bold">
      {count}
      {count === value && suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-600 via-green-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
