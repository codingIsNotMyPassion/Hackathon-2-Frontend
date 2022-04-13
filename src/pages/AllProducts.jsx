// importing modules
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Equipments from "../components/Equipments";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";

//component rendering
const AllProducts = () => {
  
  const {category} = useParams()
  return (
    <Container>
      <Navbar />
      <Title>{category}</Title>
      <Equipments category={category}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default AllProducts;

//Styling of component with Styled-components
const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`