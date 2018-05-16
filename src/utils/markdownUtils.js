import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export default new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {
        return null
      }
    }

    return ''
  }
})
