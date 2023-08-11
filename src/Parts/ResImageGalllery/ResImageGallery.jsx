import { Input, List, Typography } from "antd";
import { useEffect, useState } from "react";

const ResImageGallery = () => {
  const [searchedText, setSearchedText] = useState("");
  const [dataSource,setDataSource] = useState([]);

    useEffect(()=>{
        // API CALL 
        fetch(`https://dummyjson.com/products/search?q=${searchedText}`)
        .then(res => res.json())
        .then(response=>{
            setDataSource(response.products)
        });
    },[searchedText]);


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

      <List dataSource={dataSource}></List>
    </div>
  );
};

export default ResImageGallery;
