function converter() {
    const taxaConversao = {
      USD: { EUR: 0.91, GBP: 0.80, BRL: 4.86},
      EUR: { USD: 1.08, GBP: 0.87, BRL: 5.26},
      GBP: { USD: 1.24, EUR: 1.14, BRL: 6.07},
      BRL: { USD: 0.20, EUR: 0.18, GBP: 0.16}
    };

    const moedaInicial = document.getElementById("moedaInicial").value;
    const moedaFinal = document.getElementById("moedaFinal").value;
    const valor = parseFloat(document.getElementById("valor").value);

    if (moedaInicial === moedaFinal) {
      document.getElementById("resultado").innerText = "Escolha moedas diferentes!";
    } else {
      const taxa = taxaConversao[moedaInicial][moedaFinal];
      const valorConvertido = valor * taxa;
      document.getElementById("resultado").innerText = `O valor convertido é ${valorConvertido.toFixed(2)} ${moedaFinal}`;
    }
  }