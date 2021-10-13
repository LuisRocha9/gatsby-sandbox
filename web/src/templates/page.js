import React from 'react';

import Layout from '../components/layout';
import ProjectItems from '../components/projectItems';
import MainMenu from '../components/mainMenu';

import * as styles from './page.module.scss';

const Page = ({ pageContext }) => {
    return (
        <Layout>
            <div className="row">
                <div class="col-xs-12">
                    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                </div>
            </div>
            <MainMenu />
            <ProjectItems />
        </Layout>
    );
};

export default Page;
