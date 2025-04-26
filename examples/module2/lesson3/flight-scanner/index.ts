import { FlightScannerFormSchema } from './models/FlightScannerForm.ts';
import { ZodError } from 'zod';

const form = document.querySelector('#flight-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());
  let errors: string[] = [];
  try {
    FlightScannerFormSchema.parse(formObject);
  } catch (error) {
    if (error instanceof ZodError) {
      errors = error.errors.map((e) => e.message);
    }
  }

  const errorsBox = document.querySelector('#errors') as HTMLDivElement;
  errorsBox.innerHTML = errors.reduce(
    (acc, error) => acc + `<p>${error}</p>`,
    ''
  );
});
