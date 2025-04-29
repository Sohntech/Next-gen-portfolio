import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SparkleStarEffect() {
  // Enhanced path points for complete text coverage
  const pathPoints = [
    // Starting from top left
    { x: -150, y: -50 },
    { x: 0, y: -40 },
    { x: 150, y: -50 },
    { x: 300, y: -40 },
    // Move to right side
    { x: 400, y: 0 },
    { x: 350, y: 50 },
    // Move across PORTFOLIO
    { x: 200, y: 30 },
    { x: 0, y: 40 },
    { x: -200, y: 30 },
    // Move to bottom
    { x: -150, y: 80 },
    { x: 0, y: 100 },
    { x: 150, y: 80 },
    { x: 300, y: 100 },
    // Return to left side
    { x: -300, y: 50 },
    { x: -350, y: 0 },
    // Complete the loop
    { x: -150, y: -50 }
  ];

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 15000); // Increased duration for fuller movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="relative w-full max-w-8xl">
        <motion.div
          key={key}
          className="absolute"
          initial={{ x: pathPoints[0].x, y: pathPoints[0].y, scale: 0 }}
          animate={{
            x: pathPoints.map(point => point.x),
            y: pathPoints.map(point => point.y),
            scale: [0, 1, 1, 1, 0.8, 1, 1, 1, 0.9, 1, 1, 0.8, 1, 1, 0.7, 0],
            rotate: [0, 90, 180, 270, 360, 420, 540, 630, 720, 810, 900, 990, 1080]
          }}
          transition={{
            duration: 15,
            times: Array.from({ length: pathPoints.length }, (_, i) => i / (pathPoints.length - 1)),
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Main star with enhanced glow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
            </svg>
            
            {/* Enhanced glow effect */}
            <motion.div 
              className="absolute inset-0 bg-primary/50 rounded-full blur-lg opacity-70"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Trailing sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                style={{
                  top: Math.random() * 20 - 10,
                  left: Math.random() * 20 - 10,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}