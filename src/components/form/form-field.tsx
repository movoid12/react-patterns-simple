export default function FormField({
  name,
  render,
}: {
  name: string;
  render: (name: string) => React.ReactNode;
}) {
  return <div>{render(name)}</div>;
}
