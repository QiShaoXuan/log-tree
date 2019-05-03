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

  parse(tree, level = 0, parentPre = '', treeStr = '') {
    if (!this.check(tree, level)) return ''

    if (Array.isArray(tree)) {
      tree.forEach((child, index) => {
        const hasNext = tree[index + 1] ? true : false
        const children = child[this.settings.keyword.children]

        treeStr += `${this.setPre(level, hasNext, parentPre)}${child[this.settings.keyword.name]}\n`

        if (children) {
          treeStr += this.parse(children, level + 1, this.setTransferPre(parentPre, hasNext))
        }
      })
    } else {
      const children = tree[this.settings.keyword.children]
      treeStr = `${tree[this.settings.keyword.name]}\n`
      if (children) {
        treeStr += this.parse(children, level + 1)
      }
    }

    return treeStr
  }

  setSettings(settings = {}) {
    this.settings = Object.assign(this.setSettings(settings))
  }

  log(tree) {
    console.log(this.parse(tree))
  }

  check(tree, level) {
    if (typeof tree !== 'object') return false
    if (level >= this.settings.maxLevel) return false

    return true
  }
}

export default new logTree()

