import { useState, useEffect } from "react";
import { Box } from "./Box/Box";
import { GlobalStyle } from "GlobalStyle";

import SearchBar from "./SearchBar";
import API from "./Services/Services";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";

const App = () => {

  const [arrayItems, setArrayItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState('');

  useEffect(() => {
    const prePage = 12;
    if (imageName) {
      setLoading(true);
      API(imageName, page, prePage)
        .then(res => {
          setArrayItems((prev) => { return [...prev, ...res.hits] })
          setTotalPage(res.totalHits)
          setLoading(false)
        })
    }
  }, [imageName, page])

  const handleSubmitForm = ({ imageName }) => {
    setImageName(imageName)
    setPage(1)
    setArrayItems([])
  }
  
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      as='main'
    >
      <SearchBar onSubmit={handleSubmitForm} />
      {loading && <Loader />}
      {imageName &&
        <>
          <ImageGallery items={arrayItems} />
          {totalPage !== arrayItems.length && (
            <Button loadMore={() => setPage(page + 1)} />
          )}
          {loading && <Loader />}
        </>}
      <GlobalStyle />
    </Box>
  );
};

export default App;