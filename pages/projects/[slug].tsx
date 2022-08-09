import { GetStaticPaths, GetStaticProps } from "next/types";
import { Projects } from "../../staticData/ProjectData";
import { ParsedUrlQuery } from "querystring";
import ProjectPageComponent from "../../components/PageComponents/ProjectPageComponent";
import { Props as ProjectPageProps } from "../../components/PageComponents/ProjectPageComponent";

interface PageParams extends ParsedUrlQuery {
  slug: string;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return <ProjectPageComponent project={project}></ProjectPageComponent>;
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  var paths = Projects.map((project) => {
    return { params: { slug: project.slug } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ProjectPageProps,
  PageParams
> = async ({ params }) => {
  const project = Projects.find((project) => project.slug === params?.slug);
  return project
    ? {
        props: {
          project: project,
        },
      }
    : { notFound: true };
};
