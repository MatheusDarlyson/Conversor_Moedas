function converter() {
    const taxaConversao = {
      USD: { EUR: 0.91, GBP: 0.80, BRL: 4.86, BTC: 0.000026},
      EUR: { USD: 1.08, GBP: 0.87, BRL: 5.26, BTC: 0.000031},
      GBP: { USD: 1.24, EUR: 1.14, BRL: 6.07, BTC: 0.000035},
      BRL: { USD: 0.20, EUR: 0.18, GBP: 0.16, BTC: 0.000058},
      BTC: { BRL: 173.011, EUR: 32.695, USD: 35.556, GBP: 21.073}
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