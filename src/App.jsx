import AlertMessage from "./AlertMessage";


export const App = () => {
  const apiResponse = {
    status : 400,
    message : "Operation was unsuccess!",
  }
  
  return (
    <>  
    <AlertMessage alertType="alert-success" message ={apiResponse.message}/>

    {
      apiResponse && apiResponse.status == 400 && (
        <AlertMessage alertType="alert-danger" message ={apiResponse.message}/>
      )
    }


    </>
  );
};

