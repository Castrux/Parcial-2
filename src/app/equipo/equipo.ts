export class Equipo {

  country: string;
  draws: number;
  games: number;
  differential: number;
  goals_against: number;
  goals_for: number;
  letter: string;
  points:number;
  losses: number;
  name: string;
  wins: number;

  public constructor( country: string,
    draws: number,
    games: number,
    differential: number,
    goals_against: number,
    goals_for: number,
    letter: string,
    points:number,
    losses: number,
    name: string,
    wins: number) {

    this.country = country;
    this.draws = draws;
    this.games = games;
    this.differential = differential;
    this.goals_against = goals_against;
    this.goals_for = goals_for;
    this.letter = letter;
    this.points = points;
    this.losses = losses;
    this.name= name;
    this.wins = wins;

    }


}
