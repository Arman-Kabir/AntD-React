import { Card, Image, Input, List, Typography } from "antd";
import { useEffect, useState } from "react";

const ResImageGallery = () => {
  const [searchedText, setSearchedText] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  console.log(dataSource);

  useEffect(() => {
    setLoading(true);
    // API CALL
    fetch(`https://dummyjson.com/products/search?q=${searchedText}`)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setDataSource(response.products);
      });
  }, [searchedText]);

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

      <List
        loading={loading}
        dataSource={dataSource}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        renderItem={(item) => {
          return (
            <Card key={item.id} style={{ height: "300px", margin: 12 }}>
              <Image
                src={item.thumbnail}
                preview={{ visible: false }}
                onClick={() => {
                  setPreviewImages(item.images);
                }}
              ></Image>
            </Card>
          );
        }}
      ></List>
      {previewImages.length > 0 ? (
        <Image.PreviewGroup
          preview={{
            visible: previewImages.length,
            onVisibleChange: (value) => {
              if(!value){
                setPreviewImages([]);
              }
            },
          }}
        >
          {previewImages.map((image) => {
            return <Image key={image} src={image} />;
          })}
        </Image.PreviewGroup>
      ) : null}
    </div>
  );
};

export default ResImageGallery;
