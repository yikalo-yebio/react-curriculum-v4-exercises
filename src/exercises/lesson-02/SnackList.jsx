export default function SnackList() {
  let arrSnack = [
    { name: 'Chips', rank: 5 },
    { name: 'Cookies', rank: 4 },
    { name: 'Yogurt', rank: 3 },
    { name: 'Crackers', rank: 2 },
    { name: 'Donuts', rank: 1 },
  ];

  let sortedSnack = arrSnack.toSorted((a, b) => b.rank - a.rank);

  return (
    <>
      <ul>
        {sortedSnack.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ul>
    </>
  );
}
