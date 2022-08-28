import Section from "components/Section";

export default function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/blabla" items={items} />
      <Section title="Shows to try" more="/blabla" items={items} />
      <Section title="Made for Zaur Sharifov" more="/blabla" items={items} />
    </div>
  );
}

const items = [
  {
    id: 1,
    title: "The Weeknd - Starboy",
    description: "Original Soundtrack",
    type: "album",
    image:
      "https://images.unsplash.com/photo-1603239699774-885100e49753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    title: "Imagine Dragons - Thunder",
    description: "Evolve",
    type: "album",
    image:
      "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 3,
    title: "AWOLNATION - Sail",
    description: "Megalithic Symphony",
    type: "artist",
    image:
      "https://images.unsplash.com/photo-1606208571140-834ca630fa61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    title: "ZHU - Faded",
    description: "THE NIGHTDAY",
    type: "album",
    image:
      "https://images.unsplash.com/photo-1657632843433-e6a8b7451ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
  },
  {
    id: 5,
    title: "Sir Sly - High",
    description: "Don`t You Worry, Honey",
    type: "podcast",
    image:
      "https://images.unsplash.com/photo-1658847371309-55b3887c2d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
