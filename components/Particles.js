import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesBackground = () => {
    const options = useMemo(() => {
        return {
            interactivity: {
                events: {
                    onClick: {
                        enable: true, // enables the click event
                        mode: "push", // adds the particles on click
                    },
                    onHover: {
                        enable: true, // enables the hover event
                        mode: "repulse", // make the particles run away from the cursor
                    },
                },
                modes: {
                    push: {
                        quantity: 10, // number of particles to add on click
                    },
                    repulse: {
                        distance: 100, // distance of the particles from the cursor
                    },
                },
            },
            particles: {
                links: {
                    enable: true, // enabling this will make particles linked together
                },
                move: {
                    enable: true, // enabling this will make particles move in the canvas
                    speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                },
                size: {
                    value: { min: 1, max: 3 }, // let's randomize the particles size a bit
                },
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
}

export default ParticlesBackground;