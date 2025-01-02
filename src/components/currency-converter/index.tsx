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

  const formatCurrency = (amount: number): string => {
    if (isNaN(amount) || amount === 0) return `0.00 ${targetCurrency}`;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="currency-container">
      <div>
        <p>Select source currency</p>
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
        <p>Select target currency</p>
        <CurrencySelector
          selectedCurrency={targetCurrency}
          setSelectedCurrency={setTargetCurrency}
          label="target-currency"
        />
      </div>
      <CurrencyCard
        value={formatCurrency(conversionResult ?? 0)}
        currency={targetCurrency}
      />
    </div>
  );
}
