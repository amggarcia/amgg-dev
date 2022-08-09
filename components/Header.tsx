interface Props {
  primaryTitle: string;
  subtitle?: string;
}
export default function Header({ primaryTitle, subtitle }: Props) {
  return (
    <header className="flex flex-col items-center h-96 justify-center">
      <div className="container mx-auto px-8 lg:px-24 w-full text-white text-3xl font-bold uppercase ">
        <h1 className="pb-4 mb-4 border-gray-500 border-b-2">{primaryTitle}</h1>
        {subtitle && <span className="font-light text-lg">{subtitle}</span>}
      </div>
    </header>
  );
}
