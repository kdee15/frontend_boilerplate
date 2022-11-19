import ComponentProjectDetail from "../../components/blocks/componentProjectDetail/ComponentProjectDetail";
import ComponentResponsiveImages from "../../components/organisms/componentResponsiveImages/ComponentResponsiveImages";
import classes from "./Projects.module.scss";

const {
  C_DELIVERY_KEY,
  C_GRAPHQL_URL,
} = require("../../helpers/contentful-config");
const {
  PROJECT_CONTENT,
  PROJECT_SLUG,
} = require("../../helpers/data/projects");

/**
 * Initial page load to access users browser information
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function Project({ project }) {
  console.log("project", project);
  return (
    <div className={classes.oProjectPage}>
      <ComponentResponsiveImages contentModule={project} />
      <ComponentProjectDetail contentModule={project} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { project } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PROJECT_CONTENT,
      variables: {
        slug: project,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [projectData] = data.projectPageCollection.items;

  return {
    props: { project: projectData },
  };
}

export async function getStaticPaths() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PROJECT_SLUG,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const projectSlug = data.projectPageCollection.items;
  const paths = projectSlug.map(({ slug }) => {
    return {
      params: { project: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
