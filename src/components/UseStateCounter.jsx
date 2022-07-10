import React, { useState } from 'react';



function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount = 0);
  return (
    <>
      <h3>Счёт: {count}</h3>
      <button onClick={() => setCount(initialCount)}>Сбросить</button>
      <button onClick={() => setCount(count => count - 1)}> - </button>
      <button onClick={() => setCount(count => count + 1)}> + </button>
    </>
  );
}
//
// function Counter() {
//   // Объявление переменной состояния, которую мы назовём "count"
//   const [count, setCount] = useState(0);
//
//   return (
//     <div>
//       <p>Counter: {count} </p>
//           <button onClick={() => setCount(count + 1)}>
//             Increase
//           </button>
//           <button onClick={() => setCount(count - 1)}>
//             Decrease
//           </button>
//     </div>
//   );
// }

export default Counter;
