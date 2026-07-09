import { Pipe, PipeTransform } from '@angular/core';

const UNITS = ['بايت', 'كيلوبايت', 'ميجابايت'] as const;

/** Formats a byte count into an Arabic human-readable size, e.g. 2516582 -> "2.4 ميجابايت". */
@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(bytes: number | null | undefined): string {
    if (bytes == null || !Number.isFinite(bytes) || bytes <= 0) return `0 ${UNITS[0]}`;

    const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), UNITS.length - 1);
    const value = bytes / Math.pow(1024, exponent);
    const rounded = exponent === 0 ? value : Math.round(value * 10) / 10;

    return `${rounded} ${UNITS[exponent]}`;
  }
}
