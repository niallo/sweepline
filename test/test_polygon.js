var sl = require('../')
  , Polygon = sl.Polygon
  , Point = sl.Point
  , assert = require('assert')
  , _ = require('underscore');

describe("#Polygon", function() {
    it('should be able to build a polygon from an array of points', function(){
      geom = [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]];
      points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      polygon = new Polygon(points);
      
      assert.equal(polygon.vertices.length, geom.length);
      assert.equal(polygon.vertices[0].x, geom[0][0]);
    });

    it('should detect polygon is simple',function(){
      
      // note hack on last co-ordinate.
      var geom = [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.000001, 0.000001]];
      var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      var polygon = new Polygon(points);
      
      assert.ok(polygon.simple_polygon(), "polygon is simple")

      geom = [[2.0, 2.0], [1.0, 2.0], [1.0, 1.0], [2.0, 1.0], [3.0, 1.0], [3.0, 2.0], [2.000001, 2.000001]];
      points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      polygon = new Polygon(points);
      
      assert.ok(polygon.simple_polygon(), "polygon is simple")
      geom = [[0, 0], [0, 1], [1, 1], [0, 1], [0.0001, 0.00001]];
      points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      polygon = new Polygon(points);
      
      assert.ok(polygon.simple_polygon(), "polygon is simple")

      geom = [[2.0, 2.0], [2.0, 3.0], [3.0, 3.0], [4.0, 3.0], [4.0, 2.0], [2.000001, 2.00001]];
      points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      polygon = new Polygon(points);
      
      assert.ok(polygon.simple_polygon(), "polygon is simple")
    });


    it('should detect polygon is complex', function() {
      var geom = [[2.0, 2.0], [2.0, 3.0], [3.0, 1.0], [4.0, 3.0], [4.0, 2.0], [2.00001, 2.00001]];
      var points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      var polygon = new Polygon(points);
      
      assert.ok(!polygon.simple_polygon(), "polygon is complex")

      geom = [[2.0, 2.0], [3.0, 2.0], [3.0, 3.0], [2.0, 3.0], [4.0, 2.0], [2.0000001, 2.000001]];
      points  = _.map(geom, function(pnt){ return new Point(pnt[0],pnt[1]); });
      polygon = new Polygon(points);
      
      assert.ok(!polygon.simple_polygon(), "polygon is complex")
    });



});
