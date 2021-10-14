import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import SearchInput from './searchInput';


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


    const [projects, setProject] = useState(data);

    const [filter, setFilter] = useState("");

    const handleChange = (event) => {
        setFilter(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(filter);
    }

    const onSearch = (filter) => {
        fetch(`http://localhost:8000/___graphql`,
            {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                    query MyQuery($categoryName: String = "") {
                        allWpProject(filter: {categories: {nodes: {elemMatch: {name: {eq: $categoryName}}}}}) {
                            edges {
                                node {
                                    id
                                    title
                                    slug
                                    excerpt
                                    featuredImage {
                                        node {
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                        }
                    }`,
                    variables: {
                        categoryName: filter,
                    }
                })

            })
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                setProject(resultData.data)
            }) // set data for the number of stars

        }

        return (
            <div>
                <SearchInput value={filter} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className="row thumbnails">
                    {projects.allWpProject.edges.map(project => (
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
            </div>
        )
    }

    export default ProjectsItems;
