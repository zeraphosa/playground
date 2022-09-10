import Section from "components/Section";
import content from "data/content";

export default function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/blabla" items={content} />
      <Section title="Shows to try" more="/blabla" items={content} />
      <Section title="Made for Zaur Sharifov" more="/blabla" items={content} />
    </div>
  );
}