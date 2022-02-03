function Editor({text, setText}){
  
  return(
  <textarea textarea name="textarea" rows="5" cols="50" id="editor" value={text} onChange={(e)=> setText(e.target.value)}></textarea>
  )
}
export default Editor