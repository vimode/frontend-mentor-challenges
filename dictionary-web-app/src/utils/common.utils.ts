import { Phonetics } from "../types";

export function phoneticAudioFinder(phonetics: Phonetics[]): {
  text: string;
  audio?: HTMLAudioElement | null;
} {
  const valid = phonetics.filter((p: Phonetics) => p.audio);
  const audioTrack = valid.length > 0 ? new Audio(valid[0].audio) : null;
  return {
    text: valid.length > 0 ? valid[0].text : phonetics[0].text,
    audio: audioTrack || null,
  };
}

// @ts-expect-error unsure why HTMLMediaElement does not work
export function audioControl(audioTrack) : void {
  if (!audioTrack.playing) {
    audioTrack.play();
  } else {
    audioTrack.pause();
  }
}

export function randomUUID():string {
  return self.crypto.randomUUID();
}

// TODO: for validation
export function isEmpty(inputString:string) : boolean{
  return !inputString.trim().length;
}


