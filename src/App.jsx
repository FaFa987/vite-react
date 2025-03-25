import AlertMessage from "./AlertMessage";
 import Card from "./Card";
 import Pricing from "./Pricing";


 export const App = () => {
  const apiResponse = {
    status: 400,
    message: "Unsuccessful Operation!",
  };

  // const handleClick = (msg) => {
  //    alert(msg);
  // }
  
  return (
    <>

    <Pricing/>


    {/* <Card title="Demo1" description="Demo description 1" img="https://placehold.co/150" buttonAction= { () => alert("Hello there")} />
    <Card title="Demo2" description="Demo description 2" img="https://placehold.co/200" buttonAction= { () => handleClick("Goodbye")}/> */}

    {/* <AlertMessage alertType="alert-success" message ={apiResponse.message}/>

    {
      apiResponse && apiResponse.status == 400 && (
        <AlertMessage alertType="alert-danger" message ={apiResponse.message}/>
      )
    } */}


    </>
  );
};

