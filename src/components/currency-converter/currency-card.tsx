export default function CurrencyCard({
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
