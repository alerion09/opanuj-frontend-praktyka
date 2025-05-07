function main() {
  const form = document.querySelector('form');

  form?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const firstName = document?.getElementById('firstName') as HTMLInputElement;
    const switchComponent = document?.querySelector('custom-switch') as HTMLInputElement;
    const switchElement= switchComponent.shadowRoot?.querySelector('.switch');
    alert(`Imię: ${firstName.value}, Aktywny: ${switchElement?.getAttribute('aria-checked') === 'true'}`);
  })
}

main();
