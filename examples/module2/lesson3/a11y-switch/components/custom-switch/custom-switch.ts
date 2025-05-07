const template = `
  <style>
    .root {
      border: 1px solid black;
      padding: 4px;
      border-radius: 8px;
      width: fit-content;
    }
    .thumb-wrapper {
      width: 40px;
    }
    .thumb {
      width: 16px;
      height: 16px;
      border: 1px solid black;
      border-radius: 8px;
    }
    .thumb-off {
      background-color: black;
    }
    .thumb-on {
      background-color: green;
      border-color: green;
    }
  </style>
  <div class="root">
  <div class="thumb-wrapper">
    <div class="thumb thumb-off"></div>
</div>
  </div>
`;

class CustomSwitch extends HTMLElement {
  private root!: HTMLElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = template;
    this.root = this.shadowRoot!.querySelector('.root') as HTMLElement;
    this.root.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.root.querySelector('.thumb')?.classList.toggle('thumb-on');
  }
}

customElements.define('custom-switch', CustomSwitch);
