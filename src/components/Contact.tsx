import { useState } from "react";
import { Button } from "./Button"
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || subject === '' || message === ''){
      alert("Preencha todos os campos");
      return;

      
    }

    const templateParams = {
      from_name: name,
      email: email,
      subject: subject, 
      message: message,
    }
    
    emailjs.send("service_crl0xil", "template_pna5cxx", templateParams, "iQz_jeg6Pse_SV4fL")
    .then((response) => {
      console.log("EMAIL ENVIADO: " + response.status + response.text);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
    }, (err) => {
      console.log("ERROR: " + err);

    })
  }

  return (
    <div id="contact" className="bg-neutral-900 w-full h-auto px-4 sm:px-8 py-8">

      <div className="sm:w-full lg:w-8/12 mx-auto">
        <h1 className="text-orange-500 font-bold text-4xl mb-3">Contato</h1>
      </div>

      <form className="sm:w/full lg:w-8/12 mx-auto space-y-3" onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-2">
          <input 
            className="h-10 border-2 border-orange-500 rounded-lg px-2 bg-zinc-100" 
            type="text" 
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input 
            className="h-10  border-2 border-orange-500 rounded-lg px-2 bg-zinc-100" 
            type="email" 
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
          />

        </div>

        <input 
          className="h-10 w-full border-2 border-orange-500 rounded-lg px-2 mb-2 bg-zinc-100" type="text" 
          placeholder="Assunto" 
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />

        <textarea 
          className="w-full border-2 border-orange-500 rounded-lg px-2 py-2 bg-zinc-100" 
          placeholder="Digite sua mensagem" 
          cols={30} 
          rows={10}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button variant="primary">
          Enviar
          <i className="ml-2 bi bi-send"></i>
        </Button>
        
      </form>

    </div>
  )
}
