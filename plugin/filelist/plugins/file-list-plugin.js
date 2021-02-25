function FileListPlugin(options={}) {
  this.filename = options.filename ? options.filename : 'filelist.md';
}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
    const len = Object.keys(compilation.assets).length;
    let filelist = `${len} file${len > 1 ? 's': ''} in this build:\n\n`;
    for (let filename in compilation.assets) {
      filelist += `* ${filename}\n`;
    }

    compilation.assets[this.filename] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    }

    cb();
  });
}

module.exports = FileListPlugin;