type Click = React.MouseEvent<HTMLInputElement>;
type Change = React.ChangeEvent<HTMLInputElement>;
type Submit = React.FormEvent<HTMLButtonElement>;

interface ITransaction {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
}
