class logTree {
  constructor() {
    this.settings = {
      keyword: {
        name: 'name',
        children: 'children'
      },
      maxLevel: 1000,
    }
  }

  setPre(level, hasNext, parentPre = '') {
    return `${parentPre}${hasNext ? '├' : '└' }── `
  }

  setTransferPre(parentPre = '', hasNext) {
    return `${parentPre}${hasNext ? '│' : ' '}   `
  }

  log(tree, level = 0, parentPre = '', treeStr = '') {
    if (level >= this.settings.maxLevel) return ''
    tree.forEach((child, index) => {
      const hasNext = tree[index + 1] ? true : false
      const children = child[this.settings.keyword.children]

      treeStr += `${this.setPre(level, hasNext, parentPre)}${child[this.settings.keyword.name]}\n`

      if (children) {
        treeStr += this.log(children, level + 1, this.setTransferPre(parentPre, hasNext))
      }
    })

    return treeStr
  }

  setSettings(settings = {}) {
    this.settings = Object.assign(this.setSettings(settings))
  }
}

export default new logTree()

