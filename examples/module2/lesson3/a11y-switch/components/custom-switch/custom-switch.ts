const template = `
  <style>
    .switch {
      display: flex;
      gap: 32px;
      align-items: center;
      width: fit-content;
    }
    .content-wrapper {
      display: flex;
      gap: 8px;
    }
    .content {
      border: 1px solid black;
      border-radius: 8px;
      width: fit-content;
    }
    .thumb-wrapper {
      width: 40px;
      position: relative;
    }
    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border: 1px solid black;
      border-radius: 8px;
      background-color: black;
    }
    .switch[aria-checked="true"] .thumb {
      background-color: green;
      border-color: green;
      left: 20px;
    }
    .switch[aria-checked="true"] .on {
      display: inline;
    }
    .switch[aria-checked="true"] .off {
      display: none;
    }
    .switch[aria-checked="false"] .on {
      display: none;
    }
    .switch[aria-checked="false"] .off {
      display: inline;
    }
  </style>
  <div class="switch" role="switch" aria-checked="false" tabindex="0">
    <span class="label">Label</span>
    <div class="content-wrapper">
      <div class="content">
         <div class="thumb-wrapper">
            <div class="thumb"></div>
         </div>
      </div>   
      <div>
        <span class="on" aria-hidden="true">On</span>
        <span class="off" aria-hidden="true">Off</span>
      </div>
    </div>  
  </div>
`;

class CustomSwitch extends HTMLElement {
  private root!: HTMLElement;

  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = template;
    this.root = this.shadowRoot!.querySelector('.switch') as HTMLElement;
    this.root.addEventListener('click', () => this.toggle());
    this.root.addEventListener('keydown', (event) => this.handleKeyDown(event));
  }

  attributeChangedCallback(label: string, oldValue: string, newValue: string) {
    const labelElement = this.root.querySelector('.label') as HTMLElement;
    labelElement.innerHTML = newValue;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }

  toggle() {
    const isChecked = this.root.getAttribute('aria-checked') === 'true';
    const newState = String(!isChecked);
    this.root.setAttribute('aria-checked', newState);
  }
}

customElements.define('custom-switch', CustomSwitch);
