import * as React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { Cascader, Input, Form, Button,notification } from 'antd';
import { docTypeOption } from '../../constant/data';
import styles from './index.less';
import {history} from 'umi'
import {upload,UploadProps}  from'@/services/doc.ts'
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
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
  },
});

function handleEditorChange({ html, text }: any) {
  //   console.log('handleEditorChange', html, text)
}
const filter = (inputValue: any, path: any) => {
  return path.some(
    (option: { label: string }) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );
};

const dropdownRender = (menus: React.ReactNode) => {
  return (
    <div id={'test'} className={styles.dropdownClass}>
      {menus}
    </div>
  );
};
const onFinish = async (values: any) => {

  
  let params:UploadProps={
    doctext:values.doctext.text,
    docab:values.docab,
    docpicab:values.docpicab,
    doctitle:values.doctitle,
    docathorname:'韩麾',
    doctype:parseInt(values.doctype.join(''))
  }


  let r =await upload(params);

  if (r.code==200){
    notification.success({
      message: '博客上传成功',
      description:`《${params.doctitle}》`
    })
  }
  history.push({
    pathname: '/welcome'
   
  });
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
export default (props: any) => {
  return (
    <>
      {/* TODO  */}
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.uploaderFrom}
      >
           <Form.Item name="doctype"noStyle  >
        <Cascader
        className={styles.dropdownCascader}
          options={docTypeOption}
       
          placeholder="请选择主题"
          dropdownRender={dropdownRender}
        
          showSearch={{ filter, matchInputWidth: true }}
        />
        </Form.Item>
        <Form.Item name="doctitle" noStyle  >
          <Input className={styles.dropdownCascader} placeholder="请输入标题" />
        </Form.Item>
        <Form.Item name="docab" noStyle>
        <Input className={styles.dropdownCascader} placeholder="请输入概要" />
        </Form.Item>
        <Form.Item name="docpicab"  noStyle>
        <Input className={styles.dropdownCascader} placeholder="请输入相关图片地址" />
        </Form.Item>
       
        <div  className={styles.mdEditorClass} >
        <Form.Item name="doctext"  noStyle  valuePropName="text">
          <MdEditor
            style={{ height: '100%' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
          </Form.Item>
        </div>
        <Button className={styles.uploadBtn} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
