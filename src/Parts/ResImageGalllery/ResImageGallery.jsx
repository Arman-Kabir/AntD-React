import { Input, List, Typography } from "antd";
import { useState } from "react";

const ResImageGallery = () => {
  const [searchedText, setSearchedText] = useState("");
  const [dataSource,setDataSource] = useState([]);
  return (
    <div>
      <Typography.Title
        style={{ textAlign: "center", fontFamily: "monospace" }}
      >
        Arman's Gallery
      </Typography.Title>

      <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        onSearch={(value) => {
          setSearchedText(value);
        }}
      ></Input.Search>

      <List dataSource={}></List>
    </div>
  );
};

export default ResImageGallery;
