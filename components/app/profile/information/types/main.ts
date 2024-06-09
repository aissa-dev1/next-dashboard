export interface InfoBoxProps {
  title: string;
  isChecked: boolean;
  dispatchType: any;
  children?: React.ReactNode;
}

export interface InfoBoxItemProps {
  prop: string;
  value: string | number;
}
