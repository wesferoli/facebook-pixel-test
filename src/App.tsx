import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import "./App.scss";

type PaymentType = "cc" | "pix" | "billet";

const options = {
  autoConfig: true,
  debug: false,
};
const pixel = "821778102203144";

function App() {
  ReactPixel.init(pixel, undefined, options);
  ReactPixel.trackSingle(pixel, "InitiateCheckout");

  const sendEvent = (paymentType: PaymentType) => {
    if (paymentType === "cc") {
      console.log(paymentType);
      ReactPixel.trackSingle(pixel, "Purchase", {
        currency: "BRL",
        value: 10.0,
      });
    } else if (paymentType === "pix") {
      console.log(paymentType);
      ReactPixel.trackSingle(pixel, "Purchase", {
        currency: "BRL",
        value: 20.0,
      });
    } else if (paymentType === "billet") {
      console.log(paymentType);
      ReactPixel.trackSingle(pixel, "Purchase", {
        currency: "BRL",
        value: 30.0,
      });
    }
  };

  // useEffect(() => {
  //   fbq('track', 'InitiateCheckout')
  // }, [])

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
