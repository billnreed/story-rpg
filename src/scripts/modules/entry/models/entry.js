export default class Entry {
  constructor(entry, Component) {
    this.text = entry.text;
    this.active = entry.active || false;
    this.choice = entry.choice || "";

    this.Component = Component;
  }
}
