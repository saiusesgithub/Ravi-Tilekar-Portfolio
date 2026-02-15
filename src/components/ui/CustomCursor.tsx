import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', mouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', mouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-exclusion"
            animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
                scale: isHovering ? 2.5 : 1,
                borderColor: isHovering ? 'rgba(var(--primary), 0.5)' : 'rgba(var(--primary), 1)',
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ scale: isHovering ? 0 : 1 }}
            />
        </motion.div>
    );
}
