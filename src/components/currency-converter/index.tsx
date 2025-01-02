import { useEffect, useState } from "react";
import { Rates } from "./schema";

function CurrencyCard({
  value,
  currency,
}: {
  value: number | string;
  currency: string;
}) {
  return (
    <div className="currency-card">
      <p>Amount in {currency}</p>
      <p>{value}</p>
    </div>
  );
}
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

  const convertedValue =
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
        <select
          name="sourceCurrency"
          id="sourceCurrency"
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
          className="p-2 mb-4 text-lg border-none block w-full px-3 py-2 bg-gray-700 border outline-none ring-1 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-50 cursor-pointer"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="SYP">SYP</option>
          <option value="AED">AED</option>
        </select>
      </div>{" "}
      <p>Enter amount in {sourceCurrency}</p>
      <input
        type="number"
        value={amount || ""}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder={`Enter amount in ${sourceCurrency}`}
      />
      <div>
        <p>Select target currency</p>
        <select
          name="currency"
          id="currency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          className="p-2 mb-4 text-lg border-none block w-full px-3 py-2 bg-gray-700 border outline-none ring-1 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-50 cursor-pointer"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="JOD">JOD</option>
          <option value="AED">AED</option>
          <option value="SYP">SYP</option>
        </select>
      </div>
      <CurrencyCard
        value={formatCurrency(convertedValue ?? 0)}
        currency={targetCurrency}
      />
    </div>
  );
}
