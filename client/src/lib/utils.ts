import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Build a className string from arbitrary class inputs and merge Tailwind utility conflicts.
 *
 * @param inputs - One or more class values (strings, objects, arrays, etc.) accepted by `clsx`
 * @returns The resulting class string with Tailwind classes merged and conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
