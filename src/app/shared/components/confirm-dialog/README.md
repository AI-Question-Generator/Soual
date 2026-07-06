# Confirm Dialog

A generic, severity-driven confirmation dialog for significant actions. Supports two usage modes:
**service-driven** (no template, imperative call) and **template-driven** (with `viewChild` and optional custom content).

---

## Severities

| Severity              | Icon bg | Icon (PrimeIcons)          | Confirm button |
| --------------------- | ------- | -------------------------- | -------------- |
| `confirm` _(default)_ | blue    | `pi pi-question-circle`    | primary        |
| `warning`             | orange  | `pi pi-exclamation-triangle` | primary      |
| `danger`              | red     | `pi pi-exclamation-circle` | danger (red)   |

The icon can always be overridden per call via `icon` / `[icon]` with any PrimeIcons class (e.g. `pi pi-trash`).

---

## 1. Service-driven (simple — no template wiring)

Inject `ConfirmDialogService` and call `confirm()`. The dialog mounts itself, shows a loading
spinner on the confirm button while `onConfirm` runs, and destroys itself when done.

```typescript
import { ConfirmDialogService } from '@shared/components/confirm-dialog';

export class MyComponent {
  private readonly confirmDialog = inject(ConfirmDialogService);

  deleteProject(project: Project) {
    this.confirmDialog.confirm({
      severity: 'danger',
      title: 'حذف المشروع؟',
      message: `سيتم حذف "${project.name}" نهائيًا ولا يمكن التراجع عن هذا الإجراء.`,
      confirmLabel: 'حذف',
      icon: 'pi pi-trash', // overrides default pi-exclamation-circle
      onConfirm: async () => {
        await firstValueFrom(this.projectService.delete(project.id));
      },
    });
  }
}
```

**Error handling:** if `onConfirm` throws, the dialog clears the spinner and stays open so the
user can cancel or retry. Show a toast inside the `catch` block in your service call.

---

## 2. Template-driven (with `viewChild`)

Use when you need the `confirm` output to trigger subsequent template-driven logic, or when adding
custom content via the `confirmContent` slot.

```typescript
// component.ts
readonly deleteDialog = viewChild.required(ConfirmDialogComponent);

openDelete(item: Item) {
  this.selectedItem.set(item);
  this.deleteDialog().open();
}

onDeleteConfirmed() {
  this.reload();
}
```

```html
<!-- component.html -->
<soual-confirm-dialog
  severity="danger"
  title="حذف العنصر؟"
  message="لا يمكن التراجع عن هذا الإجراء."
  confirmLabel="حذف"
  (confirm)="onDeleteConfirmed()"
  (cancelled)="selectedItem.set(null)"
>
</soual-confirm-dialog>
```

> Import `ConfirmDialogComponent` in the component's `imports` array.

---

## 3. Custom content slot (`confirmContent`)

Project custom content between the message and the action buttons using the `confirmContent`
attribute selector. Use `[confirmDisabled]` to gate the confirm button on local state.

```html
<soual-confirm-dialog
  severity="warning"
  title="إلغاء تفعيل المادة؟"
  message="سيتم إخفاء المادة عن جميع الطلاب."
  confirmLabel="إلغاء التفعيل"
  [confirmDisabled]="!acknowledged()"
  (confirm)="onDisableConfirmed()"
  (cancelled)="onCancelled()"
>
  <div confirmContent class="mt-4 pb-5 flex flex-col gap-3">
    <!-- info banner -->
    <div
      class="flex items-start gap-2 rounded-lg bg-orange-50 border border-orange-200 p-3 text-sm text-orange-800"
    >
      <i class="pi pi-info-circle text-orange-500 shrink-0 mt-0.5"></i>
      <span>سيؤثر هذا على <strong>{{ subject().totalQuestions }} سؤال</strong> تم توليدها مسبقًا.</span>
    </div>
    <!-- acknowledgement checkbox -->
    <label class="flex items-center gap-2 cursor-pointer select-none">
      <p-checkbox
        [ngModel]="acknowledged()"
        (ngModelChange)="acknowledged.set($event)"
        [binary]="true"
      />
      <span class="text-sm text-slate-600">أُدرك تأثير هذا الإجراء</span>
    </label>
  </div>
</soual-confirm-dialog>
```

```typescript
readonly acknowledged = signal(false);

openDisableDialog(subject: Subject) {
  this.selectedSubject.set(subject);
  this.acknowledged.set(false);     // always reset before opening
  this.disableDialog().open();
}
```

---

## Decision guide

```
Does the confirmation need custom content (input, checkbox, affected-items list)?
  YES → Template-driven + confirmContent slot
  NO  → Does the confirm action involve an async API call?
          YES → Service-driven with onConfirm callback   ← preferred for simple confirmations
          NO  → Template-driven (viewChild)
```

---

## API reference

### Inputs

| Input             | Type                                 | Default              | Description                                         |
| ----------------- | ------------------------------------ | -------------------- | --------------------------------------------------- |
| `severity`        | `'confirm' \| 'warning' \| 'danger'` | `'confirm'`          | Controls icon circle color and confirm button style |
| `title`           | `string`                             | — _(required)_       | Dialog heading                                      |
| `message`         | `string`                             | — _(required)_       | Body text below the title                           |
| `icon`            | `string`                             | per-severity default | PrimeIcons class (e.g. `pi pi-trash`)               |
| `confirmLabel`    | `string`                             | `'تأكيد'`            | Confirm button label                                |
| `cancelLabel`     | `string`                             | `'إلغاء'`            | Cancel button label                                 |
| `confirmDisabled` | `boolean`                            | `false`              | Disables confirm button — use with `confirmContent` |
| `confirmHandler`  | `() => Promise<void> \| Observable`  | `null`               | Set by `ConfirmDialogService`; do not set manually  |
| `showCancelButton`| `boolean`                            | `true`               | Hides the cancel button when `false`                |
| `showFooter`      | `boolean`                            | `true`               | Hides both action buttons when `false`              |
| `showHeader`      | `boolean`                            | `true`               | Hides icon + title + message block when `false`     |

### Outputs

| Output      | Payload | Description                            |
| ----------- | ------- | -------------------------------------- |
| `confirm`   | `void`  | Emitted after confirm action completes |
| `cancelled` | `void`  | Emitted when user cancels or closes    |

### Public methods

| Method    | Description       |
| --------- | ----------------- |
| `open()`  | Opens the dialog  |
| `close()` | Closes the dialog |

### `ConfirmDialogService.confirm(options)`

| Option         | Type                  | Default        | Description                                          |
| -------------- | --------------------- | -------------- | ---------------------------------------------------- |
| `severity`     | `ConfirmSeverity`     | `'confirm'`    | Same as component input                              |
| `title`        | `string`              | — _(required)_ | —                                                    |
| `message`      | `string`              | — _(required)_ | —                                                    |
| `icon`         | `string`              | —              | PrimeIcons class overriding the severity default     |
| `confirmLabel` | `string`              | `'تأكيد'`      | —                                                    |
| `cancelLabel`  | `string`              | `'إلغاء'`      | —                                                    |
| `onConfirm`    | `() => Promise<void> \| Observable` | — _(required)_ | Async action; dialog shows loading until it resolves |

---

## Import

```typescript
import {
  ConfirmDialogComponent, // for template usage
  ConfirmDialogService, // for service usage
  ConfirmSeverity, // type
  ConfirmDialogOptions, // type
} from '@shared/components/confirm-dialog';
```
