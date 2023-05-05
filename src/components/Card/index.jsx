import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 250px;
  height: 320px;
  background: #FEFEFF;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    font-family: sans-serif;
`;
const CardContainerImg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eaeaea;
`;
const Img = styled.img`
  width: 130px;
  border: 5px solid #FEFEFF;
  border-radius: 50%;
  
`;
const CardContainerInfo = styled.div`
    width: 90%;
    height: 100%;
    text-align: center;
`;

const UserCard = ({key, email, name, last_name, img}) => {
  return (
    <Card>
      <CardContainerImg>
        <Img src={img}></Img>
      </CardContainerImg>
      <CardContainerInfo>
        <p>{name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
      </CardContainerInfo>
    </Card>
  );
};

export default UserCard;
