export default class Entry {
  constructor(entry, Component) {
    this.text = entry.text;
    this.active = entry.active || false;
    this.chosenId = entry.chosenId || "";

    this.Component = Component;
  }
}
