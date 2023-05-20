export class HomeTeam {

  country: string;
  goals: number;
  name: string;
  penalty: number;

  public constructor(country: string,
    goals: number,
    name: string,
    penalty: number){

      this.country = country;
      this.goals =goals;
      this.name = name;
      this.penalty = penalty;
    }
}
