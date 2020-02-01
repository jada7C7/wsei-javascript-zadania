function Tree(treeType) {
    this.type = treeType;
}

const tree = new Tree('one');
const tree2 = new Tree('second');
const tree3 = new Tree('third');

console.log(tree);
console.log(tree2);
console.log(tree3);

Tree.prototype.bloom = function() {
    return 'I am blooming';
}

console.log(tree.bloom());
console.log(tree2.bloom());
console.log(tree3.bloom());