import { Contact } from "../../components/Contact";
import { Button } from "../../components/Button";
import { ParticlesBackground } from "../../components/ParticlesBackground";

export const HomePage = () => {
  return (
    <div className='bg-neutral-800 w-full min-h-screen static'>

    <div 
      className="bg-cover bg-center h-full w-full" 
      style={{
        backgroundImage: `url(/images/bannerBg.jpg)`,
      }}
    >
        
      <ParticlesBackground />

      <div id="home" className="p-8 h-screen flex flex-col items-center justify-center space-y-3 relative">


        
        <h1 className="text-4xl font-bold text-orange-500">Olá, sou o Rafael</h1>

        {/* <p className="text-2xl text-zinc-100">Web Developer <span className="text-orange-500">|</span> Freelancer</p> */}
        <p className="text-2xl text-zinc-100">Desenvolvedor Web</p>

        <div className="sm:w-8/12 md:w-1/3 grid grid-cols-2 gap-3">
          <Button variant="primary">
            <a href="https://www.linkedin.com/in/rafael-calixta-047344234/" target="_blank" rel="noreferrer" >
              Linkedin
            </a>
          </Button>
          <Button variant="secondary">
            <a href="https://docs.google.com/document/d/e/2PACX-1vQWUtraz0BYY4BGIRqAVp5niGArv1RNndrrqCdax2HgLN9AmSczRYMN35oyOUlFw-Ue7JD3Apm7YzXf/pub" target="_blank" rel="noreferrer" >
              Currículo
            </a>
          </Button>
        </div>

      </div>

    </div>


   

    <Contact />

  </div>
  )
}

