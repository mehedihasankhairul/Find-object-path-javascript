
const objectTree = {
  a: {
    m: {
      c: {
        X: {},
        Y: {}
      }
    },
    n: {
      1: {
        1: {},
        2: {
          AA: {},
          BB: {}
        },
      },
    },
    o: {
      4: {},
      5: {}
    },
  },
  b: {
    S: {},
    T: {},
    U: {},
  },

  d: {
    E: {},
    F: {
      VV: {
        FT: {},
        AR: {}
      },
      NN: {},
    },
    g: {},

  },
}

 const findObjectPath = (tree, target) => {
//  run for loop with Object.keys that will return an array of keys
    for (const key of Object.keys(tree)) {
      if (key === target) {
        // if the key is equal to the target, return the key
        return key;
      } else if (key && typeof tree[key] === "object") {
       
        const myPath = findObjectPath(tree[key], target);
        if (myPath) {
          return `${key} => ${myPath}`;
        }
      }
    }
  };

console.log(findObjectPath(objectTree, "AA"));