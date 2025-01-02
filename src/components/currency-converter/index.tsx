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
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      setRates(data.rates);
    };

    fetchRates();
  }, []);

  if (!rates) return <div className="spinner" />;

  const convertedValue =
    selectedCurrency === "USD"
      ? amount
      : amount * rates[selectedCurrency as keyof Rates];

  const formatCurrency = (amount: number): string => {
    if (isNaN(amount) || amount === 0) return `0.00 ${selectedCurrency}`;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="currency-container">
      <div>
        <p>Select currency</p>
        <select
          name="currency"
          id="currency"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
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
      <p>Enter amount in USD</p>
      <input
        type="number"
        value={amount || ""}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Enter amount in USD"
      />

      <CurrencyCard
        value={formatCurrency(convertedValue ?? 0)}
        currency={selectedCurrency}
      />
    </div>
  );
}
