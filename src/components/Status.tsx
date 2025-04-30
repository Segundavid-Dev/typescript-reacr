// define types for this
type StatusProps = {
  children: React.ReactNode;
};

export default function Status({ children }: StatusProps) {
  return <div>{children}</div>;
}
