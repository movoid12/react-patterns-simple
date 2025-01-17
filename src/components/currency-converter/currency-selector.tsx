export default function CurrencySelector({
  selectedCurrency,
  setSelectedCurrency,
  label,
}: {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  label: string;
}) {
  const availableCurrencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "JOD",
    "SYP",
    "AED",
    "CHF",
    "RMB",
  ] as const;

  return (
    <select
      name={label}
      id={label}
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
      className="form-select"
    >
      {availableCurrencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}
