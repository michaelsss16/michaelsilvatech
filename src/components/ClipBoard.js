import React, { useState } from 'react';

function ClipBoard({ children }) {
  const [buttonText, setButtonText] = useState('Copiar'); // Estado para controlar o texto do botão

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
      .then(() => {
        setButtonText('Copiado'); // Muda o texto do botão para "Copiado"
        setTimeout(() => {
          setButtonText('Copiar'); // Restaura o texto do botão após 2 segundos
        }, 2000);
      })
      .catch((err) => {
        alert('Erro ao copiar: ' + err); // Em caso de erro
      });
  };

  return (
    <div style={{ display: 'inline' }}>
      <span>{children}</span> {/* Exibe o texto recebido como "children" */}
      <p> </p>
      <button onClick={handleCopy}>{buttonText}</button> {/* Exibe o texto do botão */}
    </div>
  );
}

export default ClipBoard;
