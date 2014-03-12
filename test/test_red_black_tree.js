var sl = require('../')
  , RedBlackTree = sl.RedBlackTree
  , assert = require('assert')
  , _ = require('underscore');

// Number wrapper so that we can add compare
var TestNumber = function(number){
  this.value = number  
};

TestNumber.prototype.compare = function(test_number){
  if (this.value > test_number.value) return 1;
  if (this.value < test_number.value) return -1;
  return 0;    
}  

describe("#RedBlackTree", function() {

    it('should be able to add single number', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5)); 
      
      assert.equal(5, rbt.min().value, "First item should have value of 5.");
    });

    it('should have a working TestNumber', function() {
      var one = new TestNumber(1);
      var two = new TestNumber(2);
      
      assert.equal(one.compare(two), -1);
      assert.equal(two.compare(one), 1);
      assert.equal(one.compare(one), 0);
    })

    it('should be able to add multiple', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));

      assert.equal(5, rbt.min().value, "First item should have value of 5.");
      assert.equal(10, rbt.max().value, "First item should have value of 5.");
    });
     

    it('should have a working find function', function() {
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      assert.ok(rbt.find(new TestNumber(5)), "Tree should have item 5.");
      assert.ok(!rbt.find(new TestNumber(10)), "Tree should not have item 10.");
    });


    it('should be able to remove first node', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      rbt.add(new TestNumber(6));    
      rbt.remove(new TestNumber(5))
      
      assert.equal(6, rbt.min().value, "root should now be 6");
      assert.ok(!rbt.find(new TestNumber(5)));
    });

    it('should be able to remove two nodes', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      rbt.add(new TestNumber(6));    
      rbt.remove(new TestNumber(10));
      rbt.remove(new TestNumber(5));
        
      assert.equal(6, rbt.min().value, "root should now be 6");
      assert.ok(!rbt.find(new TestNumber(5)));
      assert.ok(!rbt.find(new TestNumber(10)));
    });

    it('should be able to remove middle node', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      rbt.add(new TestNumber(6));    
      rbt.remove(new TestNumber(10));
      
      assert.equal(5, rbt.min().value, "root should now be 10");
      assert.ok(!rbt.find(new TestNumber(10)));
    });

    it('should be able to remove last node', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      rbt.add(new TestNumber(6));    
      rbt.remove(new TestNumber(6));
      
      assert.equal(5, rbt.min().value, "root should now be 10");
      assert.ok(!rbt.find(new TestNumber(6)));
    });

    it('should be able to remove all starting with last', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      rbt.add(new TestNumber(6));    
      rbt.remove(new TestNumber(6));
      rbt.remove(new TestNumber(10));
      rbt.remove(new TestNumber(5));
            
      assert.ok(!rbt.find(new TestNumber(5)));
      assert.ok(!rbt.find(new TestNumber(6)));
      assert.ok(!rbt.find(new TestNumber(10)));  
    });

    it('should be able to traverse graph', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      var six = new TestNumber(6);
      rbt.add(six);    
      var min = rbt.min();
      var next = rbt.findNext(min);
      assert.equal(six, next, "Tree should be traversable.");
    });

    it('should be able find something', function(){
      var rbt = new RedBlackTree();
      rbt.add(new TestNumber(5));
      rbt.add(new TestNumber(10));
      rbt.add(new TestNumber(6));
      
      assert.equal(rbt.find(new TestNumber(10)).value, 10, "Tree should be searchable.");
    });
});
