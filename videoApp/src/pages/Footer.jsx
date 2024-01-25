import { useAVToggle, useRecordingStreaming } from "@100mslive/react-sdk";

function Footer() {
  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();
  const{
    isBrowserRecordingOn,
    toggleRecording
  } = useRecordingStreaming();
  return (
    <div className="control-bar">
      <button className="btn btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? "Mute" : "Unmute"}
      </button>
      <button className="btn btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? "Hide" : "Unhide"}
      </button>
      <button className="btn btn-primary btn-control" onClick={toggleRecording}>
        {isBrowserRecordingOn ? "Start" : "Stop"}
      </button>
    </div>
  );
}

export default Footer;
