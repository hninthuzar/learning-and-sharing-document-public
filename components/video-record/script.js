window.addEventListener("load", async () => {
  const parts = [];
  await navigator.mediaDevices.getUserMedia({audio: true, video: true})
  .then(stream => {
    document.getElementById("video").srcObject = stream;
    
    //star recording
    document.getElementById("start").addEventListener("click", () => {
      alert("Start Record");
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start(1000);
      mediaRecorder.ondataavailable = function(e) {
        parts.push(e.data);
      }
    });

    //stop recording 
    document.getElementById("stop").addEventListener("click", () => {
      alert("Stop Record");
      mediaRecorder.stop();
      const blob = new Blob(parts, {
        type: "video/webm"
      });

      const url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.style.display = "none";
      a.download = "record.webm";
      a.click();
    });
  })
});