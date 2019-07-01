export function abilityModifier( a:number ) {
  return Math.floor( (a-10) / 2 );
}

export function abilityScore ( baseScore:number ) {
  return baseScore;
}

export function proficiencyBonus (toon:object) {
  return 2;
}