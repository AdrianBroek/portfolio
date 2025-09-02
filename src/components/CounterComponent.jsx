import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import data from '../storage/data'

export default function Counter() {
    const [storage, setStorage] = useState(data);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, storage.length, { duration: 2 });
        return animation.stop;
    }, []);

    return (
        <motion.div
            key="counter"
            className="projectCounter"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <div>
                    <h3>posted: <motion.p>{rounded}</motion.p></h3>
                </div>
        </motion.div>
    );
}
