import { Schematic } from "@/structure/Schematic.js";
import { formatTime } from "@/utils/time.js";
import { logger } from "@/utils/logger.js";
import { mapInt, ranInt } from "@/utils/math.js";


export default Schematic.registerFeature({
    name: "autoSleep",
    cooldown: () => 60 * 1000,
    condition: async ({ agent }) => {
        if (!agent.config.autoSleep) return false;

        return agent.config.autoSleep && (agent.totalCommands + agent.totalTexts) - agent.lastSleepAt >= agent.autoSleepThreshold;
    },
    run: ({ agent, t }) => {
        const commandsSinceLastSleep = (agent.totalCommands + agent.totalTexts) - agent.lastSleepAt;
        let sleepTime = mapInt(commandsSinceLastSleep, 15, 600, 5 * 20 * 1000, 30 * 60 * 1000);
        sleepTime = ranInt(sleepTime * 0.65, sleepTime * 1.35); // Add some randomness to the sleep time

        const nextThreshold = ranInt(32, 600);
        agent.lastSleepAt = (agent.totalCommands + agent.totalTexts); // Update the last sleep time to the current command count
        agent.autoSleepThreshold = nextThreshold; // Add a random padding to the threshold for the next sleep

        logger.info(t("features.autoSleep.sleeping", {
            duration: formatTime(0, sleepTime),
            commands: commandsSinceLastSleep
        }));

        logger.info(t("features.autoSleep.nextSleep", {
            commands: nextThreshold,
            duration: formatTime(0, mapInt(
                nextThreshold,
                52, 600, // Map the range of commands to the sleep time
                5 * 60 * 1000, 40 * 60 * 1000
            ))
        }));

        return agent.client.sleep(sleepTime)
    }

})
