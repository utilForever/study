let person = {
  name: "효빈",
  sayName: function () {
    console.log(this.name);
  },
};

let run = () => {
  person.sayName();
};

run();
