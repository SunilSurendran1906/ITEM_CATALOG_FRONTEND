import React from "react";
import { Helmet } from "react-helmet-async";
function MedaData({ title }) {
  return (
    <div>
      <Helmet>
        <title>{`${title}-croma`}</title>
      </Helmet>
    </div>
  );
}

export default MedaData;
