var React = require('react');

var Editor = React.createClass({

  editor: null,

  createEditor: function () {
    var opts = {
      container: 'epiceditor',
      textarea: null,
      basePath: '/vendor/epiceditor/',
      clientSideStorage: true,
      localStorageName: 'epiceditor',
      useNativeFullscreen: true,
      parser: marked,
      file: {
        name: 'epiceditor',
        defaultContent: '',
        autoSave: 100
      },
      theme: {
        base: 'epiceditor.css',
        preview: 'github.css',
        editor: 'epic-light.css'
      },
      button: {
        preview: true,
        fullscreen: true,
        bar: "auto"
      },
      focusOnLoad: false,
      shortcut: {
        modifier: 18,
        fullscreen: 70,
        preview: 80
      },
      string: {
        togglePreview: 'Toggle Preview Mode',
        toggleEdit: 'Toggle Edit Mode',
        toggleFullscreen: 'Enter Fullscreen'
      },
      autogrow: false
    }

    this.editor = new EpicEditor(opts).load();
  },

  componentDidMount: function () {
    this.createEditor();
  },

  render: function () {
    return (
      <div id="epiceditor"></div>
    );
  }
});

module.exports = Editor;
