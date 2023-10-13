import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import particlesConfig from "../config/particlesConfig";


export const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (

      <div className="relative">
        <Particles
          className="absolute"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            height="100vh"
            width="90vw"
        >

        </Particles>
      </div>
    );
};