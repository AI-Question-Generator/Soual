import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

const fieldErrorMessages: Record<string, string> = {
  required: 'هذا الحقل مطلوب.',
  whitespace: 'لا يمكن أن يكون هذا الحقل فارغًا.',
  minlength: 'يجب أن يتكون هذا الحقل من {{requiredLength}} أحرف على الأقل.',
  maxlength: 'الحد الأقصى لعدد الأحرف هو {{requiredLength}}.',
  min: 'يجب أن تكون القيمة {{min}} على الأقل.',
  max: 'يجب ألا تتجاوز القيمة {{max}}.',
} as const;

@Pipe({
  name: 'pControlError',
})
export class ControlErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string {
    if (!errors) return '';
    for (const key in errors) {
      if (fieldErrorMessages[key])
        return fieldErrorMessages[key].replace(/\{\{\s*(\w+)\s*\}\}/g, (_, error) =>
          errors[key][error] !== undefined ? errors[key][error] : _,
        );
    }
    return '';
  }
}
