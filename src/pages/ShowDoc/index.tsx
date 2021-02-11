import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { SelectDocData } from '@/services/doc.ts';
// 导入编辑器的样式
var hljs = require('highlight.js');
import 'react-markdown-editor-lite/lib/index.css';
import './vs2015.css';
import { useEffect } from 'react';
import styles from './index.less'
// 初始化Markdown解析器
const mdParser = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {

      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
  },
});

export default (props: any) => {
  const [text, setText] = useState('');

  useEffect(() => {
    SelectDocData(props.location.query).then((r) => {
      if (r)
        if (r.code == 200) {

          setText(r.data.doctext);
        }
    });
  });
  return (
    <>
    <div className={styles.textContainer}>

      <div className={styles.text} dangerouslySetInnerHTML={{ __html: mdParser.render(text) }}></div>
      </div>
    </>
  );
};
