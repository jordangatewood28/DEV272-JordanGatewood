export type MusicType = {
  "id": number,
  "artist": string,
  "genre": string,
};

export interface Music {
  "id": MusicType[],
  "artist": string,
  "album": string,
  "genre": string,
  "year": number,
  "length": number, //this is to be in seconds
}

