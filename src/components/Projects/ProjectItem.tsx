interface Props {
  title: String;
  description: String;
  url: string;
}
export default function ProjectItem({ title, description, url }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <span>{description}</span>
      <div>button</div>
    </div>
  );
}
