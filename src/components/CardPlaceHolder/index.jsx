import styled from "styled-components"

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
`
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
`
const Img = styled.img`
    width: 130px;
    height: 130px;
    border: 5px solid #FEFEFF;
    border-radius: 50%;
    animation: pulse 2s infinite;
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(99, 99, 99, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(209, 71, 71, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(209, 71, 71, 0);
        }
    }
`
const CardContainerInfo = styled.div`
    width: 90%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const TextPlaceHolder = styled.div`
    width: 80%;
    height: 20px;
    background: #eaeaea;
    border-radius: 10px;
    animation: pulse 2s infinite;
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(99, 99, 99, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(209, 71, 71, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(209, 71, 71, 0);
        }
    }
`



const CardPlaceHolder = () =>{
    return (
        <Card>
            <CardContainerImg>
                <Img src="https://as2.ftcdn.net/v2/jpg/02/17/34/67/1000_F_217346782_7XpCTt8bLNJqvVAaDZJwvZjm0epQmj6j.jpg"></Img>
            </CardContainerImg>
            <CardContainerInfo>
                <TextPlaceHolder></TextPlaceHolder>
                <TextPlaceHolder></TextPlaceHolder>
                <TextPlaceHolder></TextPlaceHolder>
            </CardContainerInfo>
        </Card>
    )
}

export default CardPlaceHolder