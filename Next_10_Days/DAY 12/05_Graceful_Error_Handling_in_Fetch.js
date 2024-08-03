fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=1")
  .then((data) => {
    return data.json();
  })
  .then((dataAccess) => {
    return dataAccess.data;
  })
  .then((actualData) => {
    return actualData.data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR :: ", e);
  });

fetch("")
  .then((e) => {
    console.log(e);
  })
  .catch((e)=>{
    console.log("ERROR :: ",e);
  });

const fn = async () => {
  try {
    const data = await fetch(
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=1"
    );
    const d = await data.json();
    console.log(d.data.data);
    
    const data2 = await fetch("");
  } catch (error) {
    console.log(error);
  }
};

fn();
