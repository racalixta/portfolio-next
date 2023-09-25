import { ButtonHTMLAttributes, ReactNode, cloneElement } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: string;
  icon?: '';
}

export const Button = ({ children, variant, icon, ...props }: Props) => {
  const standard = 'flex justify-center items-center gap-3 font-bold px-4 py-2 rounded-lg text-xl ';
  const primary = 'bg-orange-600 text-white hover:bg-violet-600'
  const secondary = 'border-2 border-orange-600 text-white hover:bg-violet-600 hover:border-violet-600'
  const tertiary = 'bg-amber-500 text-white hover:bg-violet-600'
  let value;

  switch (variant) {
    case "primary":
      value = primary
      break;
    case "secondary":
      value = secondary
      break;
    case "tertiary":
      value = tertiary
      break;
    default:
      value = standard;
      break;
  }

  return (
    <button className={standard + value} {...props}>
      <span>
        {children}
      </span>
      { icon && cloneElement(icon, { className: 'fill-white w-7 h-7' }) }
    </button>
  )

} 