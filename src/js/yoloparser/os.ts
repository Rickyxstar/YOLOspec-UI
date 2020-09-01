import { OS } from '../types/yolo';

export default class {
  // Human readable name for the OS
  name: string;

  // A description of what the OS is for
  description: string;

  packagemanager: string;

  constructor(os: OS) {
    this.name = os.name;
    this.description = os.description ? os.description : '';
    this.packagemanager = os.packagemanager;
  }
}
