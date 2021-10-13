import React from 'react';

export default ({ pageContext }) => {
  return (
    <div>
      <h2>{pageContext.title}</h2>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </div>
  );
}
