import "./styles.css";
import {useState} from "react"
import Content from "./Content"
import Editor from "./Editor"
import Preview from "./Preview"
  const defaultText = `
# Useful Programmer
## a markdown previewer
[Learn more about UsefulProgrammer.org](http://www.usefulprogrammer.org).

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![Useful Programmer](https://usefulprogrammer.org/wp-content/uploads/2020/05/00_Leonardo_da_Vinci_-_Ginevra_de_Benci.jpg)

**This is an example of Bolded Text**
  `
export default function App(){

  const [text, setText] = useState(defaultText);
  
  return(
  <>
    <h1 style={{textAlign:'center', color:"white"}}>Markdown previewer</h1>
      <Content>
      
          <Editor text={text} setText={setText}/>
          <Preview text={text} />
      </Content>
  </>
  )
}