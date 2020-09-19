import React, { useState } from 'react';

function CounterExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>
         {count}   
        </h1>

        <h1 onClick={() => setCount(count +1 )}>
                Plus
            </h1>

            <h1 onclick={() => setCount(count -1 )}>
                Minus
            </h1>
        </div>
    )
}
export default CounterExample    