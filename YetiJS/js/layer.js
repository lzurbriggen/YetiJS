
/**
 * @classdesc A layer handles the game functionality and should be dedicated to one task (i.E. user inferface/menu/actual game/...), it has to be inherited and attached to a specific gamestate.
 * 
 * @author Leo Zurbriggen
 * @constructor
 * @property {Boolean} active - Checks if the layer is active.
 * @property {yCamera} camera - The active camera.
 */
var yLayer = function(){
	var that = this;
	that.active = false;
	
	that.camera = new yCamera(new yVector(0.5, 0.5));
	
	/**
	 * Updates layer
	 */
	yLayer.prototype.update = function(){
		var that = this;
		
	}
	
	/**
	 * Draws layer
	 */
	yLayer.prototype.draw = function(){
		var that = this;
		
	}
};