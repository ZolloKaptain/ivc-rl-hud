export type Player = {
  assists: number;
  attacker: string;
  boost: number;
  cartouches: number;
  demos: number;
  goals: number;
  hasCar: boolean;
  id: string;
  isDead: boolean;
  isPowersliding: boolean;
  isSonic: boolean;
  location: {
    X: number;
    Y: number;
    Z: number;
    pitch: number;
    roll: number;
    yaw: number;
  };
  name: string;
  onGround: boolean;
  onWall: boolean;
  primaryID: string;
  saves: number;
  score: number;
  shortcut: number;
  shots: number;
  speed: number;
  team: 0 | 1;
  touches: number;
};

export type Team = {
  color_primary: string;
  color_secondary: string;
  name: string;
  score: number;
};

export type GameUpdate = {
  event: string;
  game: {
    arena: string;
    ball: {
      location: {
        X: number;
        Y: number;
        Z: number;
      };
      speed: number;
      team: number;
    };
    hasTarget: boolean;
    hasWinner: boolean;
    isOT: boolean;
    isReplay: boolean;
    target: string;
    teams: Team[];
    time_seconds: number;
    time_milliseconds: number;
    winner: string;
  };
  hasGame: boolean;
  players: {
    [playerId: string]: Player;
  };
};

export type SeriesScore = [number, number];

export type Event = {
  event_name: string;
  main_target: {
    id: string;
    name: string;
    team_num: number;
  };
  secondary_target: {
    id: string;
    name: string;
    team_num: number;
  };
  type: string;
};
