import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import subscript from 'markdown-it-sub';
import superscript from 'markdown-it-sup';
import footnote from 'markdown-it-footnote';
import deflist from 'markdown-it-deflist';
import abbreviation from 'markdown-it-abbr';
import insert from 'markdown-it-ins';
import mark from 'markdown-it-mark';
import tasklists from 'markdown-it-task-lists';
import container from 'markdown-it-container';

import MdEditor from 'react-markdown-editor-lite';
import { SelectDocData } from '@/services/doc.ts';
// 导入编辑器的样式
var hljs = require('highlight.js');
import './md.css';
import 'react-markdown-editor-lite/lib/index.css';
import './vs2015.css';
import { useEffect } from 'react';
import styles from './index.less';

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
  html: true,
  linkify: true,
  typographer: true
})
  .use(emoji)
  .use(subscript)
  .use(superscript)
  .use(footnote)
  .use(deflist)
  .use(abbreviation)
  .use(insert)
  .use(mark)
  .use(tasklists)
  .use(container);

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
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: mdParser.render(text) }}
        ></div>
      </div>
    </>
  );
};
