export default function CurrencyCard({
  amount,
  result,
  targetCurrency,
  sourceCurrency,
}: {
  amount: number;
  result: number;
  targetCurrency: string;
  sourceCurrency: string;
}) {
  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === 0) return `0.00 ${targetCurrency}`;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const currencyRate = (amount: number) => {
    if (isNaN(amount) || amount === 0) return "0.00";

    const rate = result / amount;

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(rate);
  };

  return (
    <>
      <div className="max-w-screen-sm">
        <p>Rate:</p>
        <pre>
          1 {sourceCurrency} = {currencyRate(amount)}
        </pre>
      </div>
      <div className="currency-card">
        <p>Amount in {targetCurrency}</p>
        <p>{formatCurrency(result)}</p>
      </div>
    </>
  );
}
