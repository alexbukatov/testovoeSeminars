export type TButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  icon?: string;
  children?: string;
  alt: string;
  className?: string;
  tabIndex?: number;
};
