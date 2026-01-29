export class Game {
  title: string;
  id: number;
  played: boolean;

  constructor(title: string, id: number, played: boolean) {
    this.title = title;
    this.id = id;
    this.played = played;
  }
}
