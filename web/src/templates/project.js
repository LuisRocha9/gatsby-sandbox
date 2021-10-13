import React from 'react';

import Layout from '../components/layout';
import MainMenu from '../components/mainMenu';


const Project = ({ pageContext }) => {
    return (
        <Layout>
            <MainMenu />
            <article>
                <div className="row">
                    <div className="col-xs-12">
                        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                    </div>
                </div>
                <div className="row article">
                    <div className="col-xs-12 col-md-8">
                        <div className="article__content" dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                    </div>
                    <div className="col-xs-12 col-md-3 col-md-offset-1">
                        <div className="article__sidebar">
                            <img src={pageContext.projectInfo.author.authorInfo.photo.sourceUrl}/>
                            <div dangerouslySetInnerHTML={{__html: pageContext.projectInfo.author.authorInfo.biography}}/>
                        </div>
                    </div>
                </div>

            </article>
        </Layout>
    );
};

export default Project;
