const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const person_is_seller = (name) => name[name.length - 1] === "m";

const search = (name) => {
  const search_queue = [];
  search_queue.push(...graph[name]);

  const searched = [];

  while (search_queue.length) {
    const person = search_queue.shift();
    if (!searched.includes(person)) {
      if (person_is_seller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        search_queue.push(...graph[person]);
        searched.push(person);
      }
    }
  }

  return false;
};

search("you");
