import { useEffect, useState } from "react";
import { Rates } from "./schema";
import CurrencySelector from "./currency-selector";
import CurrencyCard from "./currency-card";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [rates, setRates] = useState<Rates>(null);
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`
      );
      const data = await response.json();
      setRates(data.rates);
    };

    fetchRates();
  }, [sourceCurrency]);

  if (!rates) return <div className="spinner" />;

  const conversionResult =
    targetCurrency === sourceCurrency
      ? amount
      : amount * rates[targetCurrency as keyof Rates];

  return (
    <div className="currency-container">
      <div>
        <p>From:</p>
        <CurrencySelector
          selectedCurrency={sourceCurrency}
          setSelectedCurrency={setSourceCurrency}
          label="source-currency"
        />
      </div>
      <p>Enter amount in {sourceCurrency}</p>
      <input
        type="number"
        value={amount || ""}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder={`Enter amount in ${sourceCurrency}`}
      />
      <div>
        <p>To:</p>
        <CurrencySelector
          selectedCurrency={targetCurrency}
          setSelectedCurrency={setTargetCurrency}
          label="target-currency"
        />
      </div>
      <CurrencyCard
        value={conversionResult}
        targetCurrency={targetCurrency}
        sourceCurrency={sourceCurrency}
        amount={amount}
      />
    </div>
  );
}
