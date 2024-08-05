<template>
  <div>
    <div class="editor-toolbar">
      <button @click="copyText">Copy</button>
      <button @click="pasteText">Paste</button>
    </div>
    <div ref="editor" class="ace-editor"></div>
  </div>
</template>

<script>
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'monokai'
    }
  },
  mounted() {
    this.editor = ace.edit(this.$refs.editor)
    this.editor.session.setMode(`ace/mode/${this.mode}`)
    this.editor.setTheme(`ace/theme/${this.theme}`)
    this.editor.setValue(this.value)

    this.editor.session.on('change', () => {
      this.$emit('input', this.editor.getValue())
    })
  },
  watch: {
    value(newValue) {
      if (this.editor && newValue !== this.editor.getValue()) {
        this.editor.setValue(newValue, -1)
      }
    }
  },
  methods: {
    copyText() {
      const selectedText = this.editor.getValue()
      if (selectedText) {
        navigator.clipboard
          .writeText(selectedText)
          .then(() => console.log('Text copied to clipboard'))
          .catch((err) => console.error('Failed to copy text: ', err))
      }
    },
    pasteText() {
      navigator.clipboard
        .readText()
        .then((text) => {
          this.editor.insert(text)
        })
        .catch((err) => console.error('Failed to read clipboard contents: ', err))
    }
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
    }
  }
}
</script>

<style>
.ace-editor {
  height: 500px;
  width: 100%;
}
.editor-toolbar {
  margin-bottom: 10px;
}
.editor-toolbar button {
  margin-right: 5px;
}
</style>
asfsafasf
