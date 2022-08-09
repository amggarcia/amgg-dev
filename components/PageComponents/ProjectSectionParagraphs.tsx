interface Props {
  paragraphs: string[];
}
export default function ProjectSectionParagraphs({ paragraphs }: Props) {
  return (
    <>
      {paragraphs?.map((paragraph, index) => {
        return (
          <p className="text-white font-thin text-sm mt-4" key={index}>
            {paragraph}
          </p>
        );
      })}
    </>
  );
}
