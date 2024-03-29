class Section {

  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }

  rendererElements(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

}

export default Section;
