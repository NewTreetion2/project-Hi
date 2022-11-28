import { Card } from "../";

export default function CardList() {
  const cards = Array.from({ length: 100 }, (value, index) => {
    return { title: "아무거나", contents: "내용입니다", id: index };
  });

  return cards.map((card, index) => {
    return (
      <Card
        key={`${index}_${card.index}`}
        title={card.title}
        text={card.contents}
      />
    );
  });
}
