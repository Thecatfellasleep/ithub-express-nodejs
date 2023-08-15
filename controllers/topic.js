//注释：多个光标用ctrl+alt+上或下箭头，ctrl+d选中，然后右键头统一移动光标

exports.showCreate = (req,res) => {
    res.send('showCreate')
}
exports.handleCreate = (req,res) => {
    res.send('handleCreate')
}
exports.showEdit = (req,res) => {
    res.send('showEdit')
}
exports.handleEdit = (req,res) => {
    res.send('handleEdit')
}
exports.handleDelete = (req,res) => {
    res.send('handleDelete')
}