import { useEffect, useState } from "react";
import styled from "styled-components";
import EquipmentItem from "./EquipmentItem";
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Equipments = ({category}) => {
  const [Equipments,setEquipments] = useState([]);

  useEffect(() => {
    const getEquipments = async ()=>{
    try{
      const res = await axios.get(
        category ? `http://localhost:5000/api/products`
        :`http://localhost:5000/api/products/${category}`
        )
      setEquipments(res.data)
    }catch(err){
      console.log(err)
    } 
  }
  getEquipments();
  },[category])
  

  return (
    <Container>
      {category
        ? Equipments.map((item) => <EquipmentItem item={item} key={item._id}/>)
        : Equipments
            .slice(0, 8)
            .map((item) => <EquipmentItem item={item} key={item._id} />)}
    </Container>
  );
};

export default Equipments;
