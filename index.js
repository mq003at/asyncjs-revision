const getTodo = (resource) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          const data = JSON.parse(req.responseText);
          resolve(data);
        } else reject("Error getting resources");
      } else {
      }
    });

    req.open("GET", resource);
    req.send();
  });
};

getTodo("/todo-json/todo-1.json")
  .then((data) => {
    console.log("resolved promise: ", data);
    return getTodo("/todo-json/todo-2.json");
  })
  .then((data) => {
    console.log("2nd promise: ", data);
    return getTodo("/todo-json/todo-3.json")
  }).then((data) => {
    console.log("3rd promise: ", data)
  })
  .catch((err) => console.log("rejected promise: ", err));
