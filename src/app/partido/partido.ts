import { Equipo } from "../equipo/equipo";
import { HomeTeam } from "../homeTeam/homeTeam";

export class Partido {
  id: string;
  date: string;
  home: HomeTeam;
  home_country: string;
  away_country: string;
  away:Equipo;
  attendance: number;
  last_change: string;
  last_checked: string;
  location: string;
  stage_name: string;
  status: string;
  venue: string;
  winner: string;
  winner_code: string;


  constructor(id: string, date: string, team1: HomeTeam, team2: Equipo, home_country: string, away_country: string, attendance: number, last_change: string,
    last_checked: string,
    location: string,
    stage_name: string,
    status: string,
    venue: string,
    winner: string,
    winner_code: string) {

    this.id = id;
    this.date = date;
    this.home = team1;
    this.away = team2;
    this.attendance = attendance;
    this.home_country = home_country;
    this.away_country = away_country;
    this.last_change = last_change;
    this.last_checked = last_checked;
    this.location = location;
    this.stage_name = stage_name;
    this.status = status;
    this.venue = venue;
    this.winner = winner;
    this.winner_code = winner_code
  }
}
