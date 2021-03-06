const gliders = [
  {
    id: 1,
    name: "IOTA 2",
    slug: "iota-2",
    manufacturerId: 1,
    category: "xc"
  },
  {
    id: 2,
    name: "BUZZ",
    slug: "buzz",
    manufacturerId: 3,
    category: "beginner"
  },
  {
    id: 3,
    name: "MOJO",
    slug: "mojo",
    manufacturerId: 3,
    category: "beginner"
  },
  {
    id: 4,
    name: "Atlas",
    slug: "atlas",
    manufacturerId: 4,
    category: "tandem"
  },
  {
    id: 5,
    name: "Mentor",
    slug: "mentor",
    manufacturerId: 2,
    category: ""
  },
  {
    id: 6,
    name: "Epsilon",
    slug: "epsilon",
    manufacturerId: 1,
    category: "beginner"
  },
  {
    id: 7,
    name: "Pi",
    slug: "pi",
    manufacturerId: 1,
    category: ""
  },
  {
    id: 8,
    name: "Rush",
    slug: "rush",
    manufacturerId: 3,
    category: "hike & fly"
  },
  {
    id: 9,
    name: "Swift",
    slug: "swift",
    manufacturerId: 3,
    category: "hike & fly"
  },
  {
    id: 9,
    name: "Wisp",
    slug: "wisp",
    manufacturerId: 3,
    category: "tandem"
  }
];

const manufacturers = [
  { id: 1, name: "Advance" },
  {
    id: 2,
    name: "Nova"
  },
  {
    id: 3,
    name: "Ozone"
  },
  {
    id: 4,
    name: "Gin"
  }
];

const newGlider = {
  id: null,
  name: "",
  manufacturerId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newGlider,
  gliders,
  manufacturers
};
