import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  const projectList = new Array(5).fill(
    {
      title: "Project Title",
      description: "Project Description",
      url: "URL",
    },
    0
  );
  return (
    <div>
      {projectList.map((x) => {
        return (
          <ProjectItem
            title={x.title}
            description={x.description}
            url={x.url}
          ></ProjectItem>
        );
      })}
    </div>
  );
}
