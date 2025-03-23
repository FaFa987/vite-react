import AlertMessage from "./AlertMessage";
import { Card } from "./Card";


export const App = () => {
  const apiResponse = {
    status : 400,
    message : "Operation was unsuccess!",
  }
  
  return (
    <>  

    <Card title="Demo1" description="Demo description 1" img="https://placehold.co/150" />
    <Card title="Demo2" description="Demo description 2" img="https://placehold.co/200" />

    {/* <AlertMessage alertType="alert-success" message ={apiResponse.message}/>

    {
      apiResponse && apiResponse.status == 400 && (
        <AlertMessage alertType="alert-danger" message ={apiResponse.message}/>
      )
    } */}


    </>
  );
};

