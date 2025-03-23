import AlertMessage from "./AlertMessage";


export const App = () => {

  const apiResponse = {
    alertType : "alert-success",
    message : "Operation was done!"
  }
  return (
    <>
    <AlertMessage alertType= {apiResponse.alertType} message ={apiResponse.message}/>
    
    <AlertMessage alertType= "alert-danger" message ="Unsuccessfull Operation!"/>
    <AlertMessage alertType= "alert-info" message ="Information here"/>

    </>
  );
};

