import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  return (
    <>
      <div
        style={
          isDark
            ? { background: "black", color: "white" }
            : { background: "white", color: "black" }
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quaerat
        maiores ea ipsam atque ab unde enim. Quaerat odit fugit temporibus
        veniam iure eos, rerum veritatis vel! Cumque labore, pariatur
        consequatur, iusto a molestiae voluptas porro sapiente dolor nesciunt
        quibusdam aut? Ducimus odio optio quibusdam officia asperiores ipsum
        dolorem consequuntur autem! Autem mollitia commodi similique minus
        excepturi quod corporis assumenda? Ex praesentium error nisi qui
        reprehenderit sapiente perspiciatis, consectetur porro, architecto
        quidem sunt totam aspernatur repellendus eligendi accusantium numquam
        dolores cum placeat recusandae facilis non fuga fugit rerum laboriosam.
        Dolor, nostrum? Explicabo ad error eos pariatur facere, voluptatibus ex
        itaque?
      </div>
      <button onClick={()=>setDark(!isDark)}>
        {isDark?"Day": "Night"}
      </button>
    </>
  );
}

export default App;
