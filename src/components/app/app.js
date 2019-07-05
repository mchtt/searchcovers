import React, { useState } from "react";
import Form from "../form/form";
import Results from "../results/results";

import axios from "axios";

function App() {
  const [artist, setArtist] = useState("");
  const [datas, setDatas] = useState([]);
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const search = (e, value) => {
    e.preventDefault();
    axios({
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`,
      headers: {
        "X-RapidAPI-Key": "16beba1cefmsh4e9fb499da345d9p1ec4edjsn4c97336ee784"
      }
    }).then(response => {
      setArtist(response.data.data[0].artist.picture_xl);
      setDatas(response.data);
      setValue("");
    });
  };

  return (
    <div className="app">
      <Form search={search} value={value} onChange={onChange} artist={artist} />
      <Results datas={datas} />
    </div>
  );
}
export default App;
