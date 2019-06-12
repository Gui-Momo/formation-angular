export enum ChildLevel {
  petit,
  moyen,
  grand
}

export class Child {
  // Server determines the id
  id: number = -1;
  name: string = "";
  level: ChildLevel = ChildLevel.petit;
  evolutionAuto: boolean = true;
  attemptCount: number = 0;
  successCount: number = 0;
  consecutiveSuccessCount: number = 0;
  configId: number = ChildLevel.petit;
}