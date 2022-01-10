import { VFC, useState } from 'react';
import CharacterList, { Character } from './CharacterList';
import Counter from './Counter'
import './App.css';

const App: VFC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: "桜木花道",
      grade: 1,
      height: 189.2,
      position: "SF",
    },
    {
      id: 2,
      name: "流川 楓",
      grade: 1,
      height: 187,
      position: "SF",
    },
    {
      id: 3,
      name: "宮城リョータ",
      grade: 2,
      height: 168,
      position: "PG",
    },
    {
      id: 4,
      name: "三井 寿",
      grade: 3,
      position: "SG",
    },
    {
      id: 5,
      name: "赤木剛憲",
      grade: 3,
      height: 197,
      position: "CE",
    },
  ];

  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <header>
        <h1>SLAM DUNK 登場人物</h1>
        <CharacterList school="湘北高校" characters={characters} />
      </header>
      <div>
        <Counter count={count} reset={reset} increment={increment} />
      </div>
    </div>
  );
}

export default App;
