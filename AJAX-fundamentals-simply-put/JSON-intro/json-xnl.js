// JSON
{"animals": [
  {"type": "Dog", "sound": "woof"},
  {"type": "Cat", "sound": "meow"}
]}

// JSON version2
{"animals": [
  {
    "type": {
      "habitat": "pets",
      "category": "mammal",
    },
    "breed": "dog",
    "sound": "woof"
  },
  {
    "type": {
      "habitat": "pets",
      "category": "reptile",
    },
    "breed": "snake",
    "sound": "ssssss..."
  },
]}

// XML
<animals type="pets">
  <animal type="mammal">
    <type>Dog</type>
    <sound>Woof</sound>
  </animal>
  <animal type="reptile">
    <type>Cat</type>
    <sound>Meow</sound>
  </animal>
</animals>
