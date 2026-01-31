import { motion } from 'framer-motion';
import { FeaturedOn } from './FeaturedOn';
import { PersonalIntro } from './PersonalIntro';
import { SocialImpact } from './SocialImpact';
import { ImpactAreas } from './ImpactAreas';
import { JourneySnapshot } from './JourneySnapshot';

export function BuilderView() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            <FeaturedOn />
            <PersonalIntro />
            <SocialImpact />
            <ImpactAreas />
            <JourneySnapshot />
        </motion.div>
    );
}
