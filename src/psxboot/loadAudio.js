
var audioCtx = new AudioContext({
    sampleRate: 22050
});
var frameCount = audioCtx.sampleRate * 2.0;


function playSound(file, speed, pitch, start) {

    source = audioCtx.createBufferSource(2, frameCount, 22050);

    


    var request = new XMLHttpRequest();

    request.open('GET', file, true);

    request.responseType = 'arraybuffer';

    request.onload = function() {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function(buffer) {
            
            source.buffer = buffer;
            source.playbackRate.value = speed;
            source.detune.value = pitch;
            source.gain = 0.1
            source.connect(audioCtx.destination)
            source.start(start);

        },

        function(e){ console.log("Error with decoding audio data" + e.err); });
    }
    request.send();
}