import {marked} from "marked"
function Preview({text}){
  let markdown = marked(text)
  return(
  <article id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></article>
  )
}
export default Preview