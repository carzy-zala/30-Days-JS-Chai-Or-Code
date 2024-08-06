function manageColl() {
  collection = [];

  return {
    addItem: function (data) {
      collection.push(data);
      console.log(`${data} is added succesfully to collection`);
    },
    removeItem: function (item) {
      const newCollection = collection.filter((it) => it !== item);
      if (newCollection.length === collection.length) {
        console.log("Please enter valid item ...");
        return;
      }
      collection = newCollection;
    },
    listItem: function () {
      return collection;
    },
  };
}

const collectionManagement = manageColl();

collectionManagement.addItem("Banana");
collectionManagement.addItem("Apple");
collectionManagement.addItem("Mango");
collectionManagement.addItem("Watermelon");

collectionManagement.removeItem("lemeon");
collectionManagement.removeItem("Apple");

console.log(collectionManagement.listItem());
