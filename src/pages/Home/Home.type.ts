export type TSeminarsItem = {
    id: 1;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
    fetchData: () => Promise<void>
  };