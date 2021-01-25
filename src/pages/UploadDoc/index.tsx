import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// 导入编辑器的样式
var hljs = require('highlight.js');
import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/vs.css';
// 注册插件（如果有的话）
// MdEditor.use(YOUR_PLUGINS_HERE);

// 初始化Markdown解析器
const mdParser = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
          console.log(lang)
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
  
      return ''; // use external default escaping
    }
  });
//   Hybrid
// 完成！
function handleEditorChange({html, text}:any) {    
//   console.log('handleEditorChange', html, text)
}
export default (props: any) => {
  return (
    <MdEditor
      style={{ height: "100%" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      />
  )
}