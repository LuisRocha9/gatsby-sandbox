import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";


const ProjectsItems = () => {

    const data = useStaticQuery(graphql
        `
        {
            allWpProject {
                edges {
                    node {
                        id
                        title
                        slug
                        content
                        excerpt
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }

        `
    )

    return (
        <div className="row thumbnails">
            {data.allWpProject.edges.map(project => (
                <div key={project.node.id} className="col-xs-6 col-md-4">
                    <Link to={`/project/${project.node.slug}`}>
                        <div className="thumbnail">
                            <div className="thumbnail__img">
                                <img src={project.node.featuredImage.node.sourceUrl} alt="Thumbnail"/>
                            </div>
                            <div className="thumbnail__title">

                                <b>{project.node.title}</b><br />
                                <div dangerouslySetInnerHTML={{__html : project.node.excerpt}}/>

                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ProjectsItems;
