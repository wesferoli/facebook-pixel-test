import "./App.scss";

type PaymentType = "cc" | "pix" | "billet";

function App() {
  const sendEvent = (paymentType: PaymentType) => {
    if (paymentType === "cc") {
      console.log(paymentType);
    } else if (paymentType === "pix") {
      console.log(paymentType);
    } else if (paymentType === "billet") {
      console.log(paymentType);
    }
  };

  return (
    <div className="App">
      <button type="button" onClick={() => sendEvent("cc")}>
        Cartão de crédito
      </button>
      <button type="button" onClick={() => sendEvent("pix")}>
        Gerar pix
      </button>
      <button type="button" onClick={() => sendEvent("billet")}>
        Gerar boleto
      </button>
    </div>
  );
}

export default App;
