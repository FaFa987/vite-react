import AlertMessage from "./AlertMessage";


export const App = () => {
  return (
    <>
    <AlertMessage alertType= "alert-success" message ="Operation was Successfull!"/>
    <AlertMessage alertType= "alert-danger" message ="Unsuccessfull Operation!"/>
    <AlertMessage alertType= "alert-info" message ="Information here"/>

    </>
  );
};

