<template>
  <div class="cv-rte-page">
    <cv-header title="Rich Text" />
    <div class="cv-rte-container">
      <div
        id="richTextEditor"
        class="rich-text-editor-wrapper"
        />
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';
  import * as Quill from 'quill';

  export default {
    name: 'RichTextEditor',
    path: 'text-editor',
    data() {
      return {
        quillTextEditor: undefined,
      };
    },
    mounted() {
      if (!this.quillTextEditor) {
        this.quillTextEditor = new Quill('#richTextEditor', {
          theme: 'snow',
          formats: 'inline',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['link', 'image', 'video'],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ]
          },
          placeholder: '请在此输入文本',
          readOnly: false,
        });
      }
    },
  };
</script>

<style lang="less">
  @import "~quill/dist/quill.core.css";
  @import "~quill/dist/quill.snow.css";

  .cv-rte-page {
    margin: 0;
    padding: 0;

    .cv-rte-container {
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      & > div {
        flex: 1;
        width: 100%;
      }

      & > .ql-toolbar.ql-snow {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        & > span {
          flex: 0 0 auto;
        }
      }
      .rich-text-editor-wrapper {
        min-height: 320px;
        background-color: white;
      }
    }
  }
</style>
