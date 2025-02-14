export type TModifyPopupProps = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    open: boolean;
    setOpen: (value: boolean) => void;
  };