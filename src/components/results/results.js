import React from "react";

const Results = ({ datas }) => {

  return (
    <div className="results">
      {datas.data
        ? datas.data.map((data, key) => { return (<img key={key} src={data.album.cover_xl} alt={data.album.title} title={data.album.title}/>) })
        : null}
    </div>

  );
};

export default Results;
