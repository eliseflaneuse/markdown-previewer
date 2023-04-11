import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

//: a heading element (H1 size), 
//a sub heading element (H2 size), a link, inline code, a code block, 
//a list item, a blockquote, an image, and bolded text.

function App() {
  const [text, setText] = useState(`
  # This is a H1 heading
  ## This is a H2 heading
  ### This is a H3 heading

  [I'm an inline-style link](https://www.google.com)

  Inline \`code\` has \`back-ticks around\` it.

  \`\`\`
  const freeCodeCamp = "Coding is awesome!";

  function App() {
    render(){
      return <h1>{freeCodeCamp}</h1>
    }
  }
  \`\`\`

  * Unordered list can use asterisks
  - Or minuses
  + Or pluses

  > Blockquotes are very handy in email to emulate reply text.
  > This line is part of the same quote.

  Emphasis, aka italics, with *asterisks* or _underscores_.

  Strong emphasis, aka bold, with **asterisks** or __underscores__.

  Combined emphasis with **asterisks and _underscores_**.

  ![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/320px-FreeCodeCamp_logo.svg.png  )

  `)
  

  return (
    <div className="App">

      <header className='header'>
      <h1>Markdown Previewer</h1>
      </header>
    

      <div className="App-wraper">
        
        <div className="editorWrap">
          <textarea 
            id="editor" 
            onChange={(event) => {setText(event.target.value)}}
            value={text} 
            spellCheck="false"
            ></textarea>
        </div>

        <div className="previewerWrap">
          <div id="preview"
          dangerouslySetInnerHTML={{__html: marked(text, { breaks: true })}}
          ></div>
        </div>
        
      </div>

      <footer className='footer'>
        <span>
          freeCodeCamp Front End Development Libraries Projects - Build a Markdown Previewer / 
          <a href="https://github.com/eliseflaneuse" target="_blank" rel="noreferrer"> Elise Flaneuse </a>
          / 2023
        </span>
      </footer>
    </div>
  );
}

export default App;
