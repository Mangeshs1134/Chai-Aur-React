import { useState, useCallback , useEffect } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [numAllow, notNumAllow] = useState(false);
  let [specialAllow, notSpecialAllow] = useState(false);
  let [charAllow, notCharAllow] = useState(true);
  let [password, setPassword] = useState("");
  console.log("magesh");

  let passwordGenerator = useCallback(() => {
    let pass = "";

    // let str = "";
    let str = "ABCDEFGHabcdefgh";
    let num = 123456789;
    let special = "!@#$%^&";

    // if (charAllow) str += char;
    if (numAllow) str += num;
    if (specialAllow) str += special;

    for (let i = 0; i < length; i++) {
      let randomPosition = Math.floor(Math.random() * str.length + 1);
      // console.log(randomPosition);
      pass += str.charAt(randomPosition);
    }
    
    setPassword(pass)
    
  }, [length, numAllow, specialAllow, charAllow, setPassword]);
  
  // console.log(setPassword);
  // passwordGenerator();

  
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, specialAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className="main">
        <div className="header">Password Generator .. ft. Mangesh</div>
        <div className="upside">
          <div className="show">
            <label htmlFor="passwordWeGot">Password is : </label>
            {/* <input type="text"
            value={password} /> */}
            <input
            type="text"
            value={password}
            // className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            
        />
          </div>
          <div className="copy">
            <button type="button">Copy</button>
          </div>
        </div>
        <div className="downside">
          <div className="length">
            <input type="range" name="length" id="length" min={4} max={10} />
            <label htmlFor="length">Length {length}</label>
          </div>
          <div className="char">
            <input type="checkbox" name="char" id="char" />
            <label htmlFor="char">Characters</label>
          </div>
          <div className="num">
            <input type="checkbox" name="num" id="num" />
            <label htmlFor="num">Numbers</label>
          </div>
          <div className="special">
            <input type="checkbox" name="special" id="special" />
            <label htmlFor="special">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
