
/**
 * @classdesc The sound class should be used to play a short sound file.
 * 
 * @author Leo Zurbriggen
 * @constructor
 * @param {String} pFileName - The file name of the sound.
 * @param {Boolean} pFallback - (optional) Tells, if the class should get the file (ogg or mp3) depending on the browser.
 */
function ySound(pFileName, pFallback){
	
	/**
	 * Loads the audio file that can be played by the browser
	 */
	if(pFallback == true){
		if(new Audio().canPlayType("audio/ogg; codecs=vorbis")){
			this.audio = new Audio(pFileName + ".ogg");
		}else{
			this.audio = new Audio(pFileName + ".mp3");
		}
	}
	
	/**
	 * Plays the sound
	 */
	ySound.prototype.play = function(){
		this.audio.play();
	}
	
	
	/**
	 * Pauses the sound
	 */
	ySound.prototype.pause = function(){
		this.audio.pause();
	}
};