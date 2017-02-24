export default class Entry {
  constructor(id, entry, Component) {
    this.id = id;
    
    this.text = entry.text;

    this.Component = Component;
  }
}
