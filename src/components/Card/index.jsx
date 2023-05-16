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
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
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
  height: 130px;
  border: 5px solid #fefffe;
  border-radius: 50%;
  
`;
const CardContainerInfo = styled.div`
    width: 90%;
    height: 100%;
    text-align: center;
`;
const CardName = styled.p`
    font-size: 20px;
    font-weight: bold;
    padding: 0;
`;
const CardEmail = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

const UserCard = ({key, email, name, last_name, img,}) => {
  return (
    <Card id={key}>
      <CardContainerImg>
        <Img src={img}></Img>
      </CardContainerImg>
      <CardContainerInfo>
        <CardName>{name}</CardName>
        <p>{last_name}</p>
        <CardEmail>{email}</CardEmail>
      </CardContainerInfo>
    </Card>
  );
};

export default UserCard;
