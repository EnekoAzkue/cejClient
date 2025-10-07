interface CommonAttributesAndModifiers {
  intelligence: number;
  dexterity: number;
  charisma: number;
  constitution: number;
  strength: number;
  insanity: number;
}

interface KaotikaUser {
  _id: string;
  active: boolean;
  rol: string;
  socketId: string;
  isInside: boolean;
  attributes: CommonAttributesAndModifiers;
  equipment: Equipment;
  inventory: Inventory;
  name: string;
  nickname: string;
  email: string;
  avatar: string;
  classroom_Id: string;
  level: number;
  experience: number;
  is_active: boolean;
  profile: Profile;
  tasks: Task[];
  gold: number;
  created_date: string;
  isBetrayer: boolean;
  skills: Skill[];
}

interface CommonEquipmentFields {
  name: string;
  description: string;
  type: string;
  image: string;
  value: number;
  min_lvl: number;
}

interface Equipment {
  helmet: Helmet;
  weapon: Weapon;
  armor: Armor;
  shield: Shield;
  artifact: Artifact;
  boot: Boot;
  ring: Ring;
  antidote_potion: AntidotePotion;
  healing_potion: HealingPotion;
  enhancer_potion: EnhancerPotion;
}

interface Helmet extends CommonEquipmentFields {
  _id: string;
  modifiers: CommonAttributesAndModifiers;
  defense: number;
  isUnique: boolean;
  isActive: boolean;
}

interface Weapon extends CommonEquipmentFields {
  _id: string;
  modifiers: CommonAttributesAndModifiers;
  base_percentage: number;
  die_faces: number;
  die_modifier: number;
  die_num: number;
  isUnique: boolean;
  isActive: boolean;
}

interface Armor extends Helmet {}

interface Shield extends Helmet {}

interface Artifact extends CommonEquipmentFields {
  _id: string;
  modifiers: CommonAttributesAndModifiers;
  isActive: boolean;
  isUnique: boolean;
}

interface Boot extends Helmet {}

interface Ring extends Artifact {}

interface AntidotePotion extends CommonEquipmentFields {
  _id: string;
  recovery_effect: RecoveryEffect;
}

interface ExtendedCommonAttributesAndModifiers
  extends CommonAttributesAndModifiers {
  hit_points: number;
}

interface RecoveryEffect {
  _id: string;
  modifiers: ExtendedCommonAttributesAndModifiers;
  name: string;
  description: string;
  type: string;
  antidote_effects: string[];
  poison_effects: string[];
}

interface HealingPotion extends CommonEquipmentFields {
  _id: string;
  modifiers: ExtendedCommonAttributesAndModifiers;
}

interface EnhancerPotion extends CommonEquipmentFields {
  _id: string;
  modifiers: CommonAttributesAndModifiers;
  duration: number;
}

interface Inventory {
  helmets: Helmet[];
  weapons: Weapon[];
  armors: Armor[];
  shields: Shield[];
  artifacts: Artifact[];
  boots: Boot[];
  rings: Ring[];
  antidote_potions: AntidotePotion[];
  healing_potions: HealingPotion[];
  enhancer_potions: EnhancerPotion[];
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  description: string;
  value: number;
  effects: string[];
  image: string;
  type: string;
  qty: number;
}

interface Profile {
  _id: string;
  name: string;
  description: string;
  image: string;
  attributes: Attribute[];
}

interface Attribute {
  _id: string;
  name: string;
  description: string;
  value: number;
}

interface Task {
  _id: string;
  classroomId: string;
  courseWorkName: string;
  grade: number;
  selectedAssignment: string;
  maxPoints?: number;
}

interface Skill {
  _id: string;
  skill: string;
  activeLevels: any[];
}

export default KaotikaUser;
