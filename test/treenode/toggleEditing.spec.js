'use strict';

describe('TreeNode.prototype.toggleEditing', function() {
    var tree;

    before(function() {
        helpers.createTreeContainer();

        // Create tree
        tree = new InspireTree({
            target: $('.tree'),
            data: [{
                text: 'A',
                id: 1
            }]
        });
    });

    it('exists', function() {
        expect(tree.node(1).toggleEditing).to.be.a('function');
    });

    it('toggles edit mode', function() {
        var node = tree.node(1);
        expect(node.editing()).to.be.false;

        node.toggleEditing();
        expect(node.editing()).to.be.true;
    });

    after(helpers.clearDOM);
});
