import { z } from 'zod';

export const FlightScannerFormSchema = z
  .object({
    origin: z.string().min(1),
    destination: z.string(),
    trip: z.string(),
    startDate: z.string().refine((val) => {
      const date = new Date(val);
      return date > new Date();
    }, 'The start date must be in the future'),
    endDate: z.string().refine((val) => {
      const date = new Date(val);
      return date > new Date();
    }, 'The end date must be in the future'),
  })
  .refine(
    (val) => {
      const startDate = new Date(val.startDate);
      const endDate = new Date(val.endDate);
      return startDate <= endDate;
    },
    {
      message: 'The start date must be before or equal to end date',
      path: ['startDate', 'endDate'],
    }
  );

export type FlightScannerForm = z.infer<typeof FlightScannerFormSchema>;
