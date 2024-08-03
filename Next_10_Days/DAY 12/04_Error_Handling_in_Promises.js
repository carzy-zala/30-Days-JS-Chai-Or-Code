const p = (data) =>
  new Promise((resolve, reject) => {
    if (!data.trim()) {
      reject("PLEASE ENTER DATA ..");
    }
    console.log(data);
    resolve();
  });

p("Hello world ...!").then(() => {
  console.log("Resolved ... !");
});

p("  ").catch((e) => {
  console.log(e);
  console.log("Rejected ...!");
});

// Task 7

const fn = async () => {
  try {
    await p("Hello Javascript ... !");
    await p(" ");
  } catch (error) {

    console.log("ASYNC :: ",error);
  }
};

fn();