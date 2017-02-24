export default class Entry {
  constructor(id, entry, Component) {
    this.id = id;

    this.text = entry.text;
    this.active = entry.active;
    this.choice = entry.choice;

    this.Component = Component;
  }
}
