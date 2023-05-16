import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./components/Card";
import CardPlaceHolder from "./components/CardPlaceHolder";
import { getUsers } from "./util/api";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

function App() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  /* const date = new Date();
  const minute = date.getMinutes(); */
 /*  getUsers().then((data) => {
    setUsers(data);
    setLoading(false);
  }); */

  useEffect(() => {
    const minuteFromStorage = sessionStorage.getItem("minute");
    const currentMinute = new Date().getMinutes();

    if(minuteFromStorage && parseInt(minuteFromStorage) === currentMinute){
      const storedUsers = JSON.parse(sessionStorage.getItem("users"));
      if(storedUsers){
        setUsers(storedUsers);
        setLoading(false);
        return;
      }
    }

    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
      sessionStorage.setItem("minute", currentMinute);
      sessionStorage.setItem("users", JSON.stringify(data));
    });
  }, []);
      

  return (
    <MainContainer>
      <h1>Usuarios</h1>
      <Container>
        {loading ? (
          <>
            <CardPlaceHolder />
            <CardPlaceHolder />
            <CardPlaceHolder />
            <CardPlaceHolder />
          </>
        ) : (
          users.map((user) => (
          <UserCard 
          key={user.id} 
          email={user.email} 
          name={user.first_name} 
          last_name={user.last_name} 
          img={user.avatar}
          />
          ))
        )}
      </Container>   
    </MainContainer>
  );
}

export default App;



