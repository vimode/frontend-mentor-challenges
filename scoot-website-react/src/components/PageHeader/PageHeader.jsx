import React from "react";

import "./PageHeader.css";

const PageHeader = ( {pageHeaderClass, pageHeaderTitle})  => {
  return (
    <section className={`page_header ${pageHeaderClass}`}>
      <h1 className="inner_wrapper">{pageHeaderTitle}</h1>
    </section>
  )
}

export default PageHeader;
