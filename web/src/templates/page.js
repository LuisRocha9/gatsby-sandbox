import React from 'react';

import Layout from '../components/layout';

import * as styles from './page.module.scss';

const Page = ({ pageContext }) => {
  return (
    <Layout>
      <div className={styles.homepage}>
        <h1>{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
      </div>
    </Layout>
  );
};

export default Page;
