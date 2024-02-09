import { titleFont } from "@/config/fonts";

interface Props {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ children, title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}
      >
        {children}
      </h1>
      {subtitle && <p className="text-xl mb-5">{subtitle}</p>}
    </div>
  );
};
