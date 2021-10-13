const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  // PAGES
  const resultPages = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          title
          content
          slug
        }
      }
    }
  `);

  if (resultPages.errors) {
    reporter.error("There was an error fetching posts", resultPages.errors);
  }

  const { allWpPage } = resultPages.data;

  // Define the template to use
  const templatePage = require.resolve(`./src/templates/page.js`);

  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(page => {
      actions.createPage({
        path: page.uri,
        component: templatePage,
        context: page,
      });
    });
  }

  // POSTS
  const resultPost = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
          title
          content
          slug
        }
      }
    }
  `);

  if (resultPost.errors) {
    reporter.error("There was an error fetching posts", resultPost.errors);
  }

  const { allWpPost } = resultPost.data;

  // Define the template to use
  const templatePost = require.resolve(`./src/templates/post.js`);

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        path: post.uri,
        component: templatePost,
        context: post,
      });
    });
  }

  // PROJECTS
  const resultProject = await graphql(`
      {
          allWpProject {
              nodes {
                  id
                  uri
                  title
                  content
                  slug
                  projectInfo {
                      author {
                          ... on WpAuthor {
                              id
                              authorInfo {
                                  biography
                                  photo {
                                      sourceUrl
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  `);

  if (resultProject.errors) {
    reporter.error("There was an error fetching posts", resultProject.errors);
  }

  const { allWpProject } = resultProject.data;

  // Define the template to use
  const templateProject = require.resolve(`./src/templates/project.js`);

  if (allWpProject.nodes.length) {
    allWpProject.nodes.map(post => {
      actions.createPage({
        path: post.uri,
        component: templateProject,
        context: post,
      });
    });
  }
}
