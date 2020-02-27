import React, {useContext} from "react";
import GlobalContext from './GlobalContext';

const Test = () => {

  const [options, setOptions] = useContext(GlobalContext);

  function handleClick(){
  	setOptions({
  		...options,
  		a: 5
  	})
  }

  return (
    <div>
		<p>{options.a}</p>
		<p>{options.b}</p>
		<p>{options.c}</p>
		<button
			onClick={() => handleClick()}
		>Click Me
		</button>
	</div>
  );
};

export default Test;