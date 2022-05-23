import React from "react";
// import { useEffect } from 'react';

function Header({ heading }) {
  // useEffect(() => {
  //   console.log('header is rendering');
  // }, []);

  return (
    <header aria-labelledby="page-title">
      <h1 tabIndex="0" id="page-title">
        {heading}
      </h1>
    </header>
  );
}

export default React.memo(Header);
