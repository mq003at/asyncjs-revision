// fetch api
// fetch("todo-json/todo-1.json")
//   .then((res) => {
//     console.log("res: ", res);
//     return (data = res.json());
//   })
//   .then((data) => console.log("data", data))
//   .catch((err) => {
//     console.log("err ", err);
//   });


const getTodo = async () => {
    const res = await fetch("todo-json/todo-3.json")
    // creating new error object for fetch Promise since catch only get the error from latest error
    if (res.status !== 200) throw new Error("Cannot fetch data");
    const data = await res.json()
    return data
}

getTodo()
    .then(data => console.log("data", data))
    .catch(err => console.log("err", err))