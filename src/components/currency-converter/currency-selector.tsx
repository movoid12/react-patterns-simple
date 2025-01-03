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
      className="p-2 mb-4 text-lg border-none block w-full px-3 py-2 bg-gray-700 border outline-none ring-1 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-50 cursor-pointer"
    >
      {availableCurrencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}
