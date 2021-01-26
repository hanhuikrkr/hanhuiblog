import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import {Cascader} from 'antd'
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
      console.log(lang);
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
  },
});
//   Hybrid
// 完成！

//   Hybrid
// 完成！
function handleEditorChange({html, text}:any) {    
//   console.log('handleEditorChange', html, text)
}
const filter=(inputValue:any, path:any)=> {
  return path.some(
    (option: { label: string; }) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}
export default (props: any) => {
  return (
    <>
    {/* TODO  */}
       {/* <Cascader
    options={books}
    onChange={this.onChange}
    placeholder="请选择书籍分类"
    dropdownRender={this.dropdownRender}
    popupClassName="nav-search-popup-style"
    showSearch={{ filter, matchInputWidth: true }}
    style={{ width: "100%", height: "100%" }}
  /> */}
    <MdEditor
      style={{ height: "100%" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      />
    </>
 
  )
}