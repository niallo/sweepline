var sl = require('../')
  , Point = sl.Point
  , assert = require('assert')
  , _ = require('underscore');

describe("#Point", function() {

    it('should have a working less than comparator',function(){
      var p0 = new Point(1,1);
      var p1 = new Point(3,3);
      assert.equal(p0.compare(p1), -1);
    });

    it('should have a working greater than comparator', function(){
      var p0 = new Point(1,1);
      var p1 = new Point(3,3);
      assert.equal(p1.compare(p0), 1);
    });

    it('should detect equality', function(){
      var p0 = new Point(1,1);
      assert.equal(p0.compare(p0), 0);
    });

    it('should detect left of line', function(){
      var p0 = new Point(1.0,1.0);
      var p1 = new Point(3.0,3.0);
      var p2 = new Point(1.0,3.0);
      
      assert.ok(p2.is_left(p0,p1) > 0);
    });

    it('should detect right of line', function() {
      var p0 = new Point(1.0,1.0);
      var p1 = new Point(3.0,3.0);
      var p2 = new Point(3.0,1.0);
      
      assert.ok(p2.is_left(p0,p1) < 0);
    });

    it('should detect on line', function() {
      var p0 = new Point(1.0,1.0);
      var p1 = new Point(3.0,3.0);
      var p2 = new Point(2.0,2.0);
      
      assert.ok(p2.is_left(p0,p1) == 0);
    });
})
