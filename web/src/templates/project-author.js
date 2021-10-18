import React from 'react';

import Layout from '../components/layout';
import MainMenu from '../components/mainMenu';
import ProjectItems from '../components/projectItems';


import { graphql } from 'gatsby';


export const query = graphql`

query getProjects($title: String!) {
    allWpProject(filter: {author: {eq: $title}}) {
        edges {
            node {
                id
                title
                excerpt
                slug
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
}


`;


const Author = ({data, pageContext}) => {
    return (
        <Layout>
            <MainMenu />
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <ProjectItems data={data}/>
        </Layout>
    );
};


export default Author;
