import type { DataTableDesignTokens } from '@primeuix/themes/types/datatable';

export const datatable: DataTableDesignTokens = {
  root: {
    transitionDuration: '{transition.duration}',
    borderColor: '{content.border.color}',
  },
  header: {
    background: '{slate.50}',
    borderColor: '{datatable.border.color}',
    color: '{content.color}',
    borderWidth: '0 0 1px 0',
    padding: '0.75rem 1.5rem',
    sm: {
      padding: '0.375rem 0.5rem',
    },
    lg: {
      padding: '1rem 1.25rem',
    },
  },
  headerCell: {
    background: '{slate.100}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{slate.100}',
    borderColor: '{datatable.border.color}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{content.color}',
    gap: '0.25rem',
    padding: '0.75rem 1rem',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      color: '{focus.ring.color}',
      offset: '-1px',
      shadow: '{focus.ring.shadow}',
    },
    sm: {
      padding: '0.375rem 0.5rem',
    },
    lg: {
      padding: '1rem 1.25rem',
    },
  },
  columnTitle: {
    fontWeight: '700',
  },
  row: {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    stripedBackground: '{slate.50}',
    color: '{slate.600}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{highlight.color}',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      color: '{focus.ring.color}',
      offset: '-1px',
      shadow: '{focus.ring.shadow}',
    },
  },
  bodyCell: {
    borderColor: '{datatable.border.color}',
    selectedBorderColor: '{primary.100}',
    padding: '1rem 1rem',
    sm: {
      padding: '0.375rem 0.5rem',
    },
    lg: {
      padding: '1rem 1.25rem',
    },
  },
  sortIcon: {
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    size: '0.75rem',
  },
  // Logical border-radius properties keep the corners correct in RTL
  css: ({ dt }) => `
    .p-datatable {
      border: 1px solid ${dt('datatable.border.color')};
      border-radius: ${dt('border.radius.xl')};
      overflow: hidden;
    }

    .p-datatable:not(:has(.p-datatable-header)) .p-datatable-thead > tr {
      border-radius: ${dt('border.radius.xl')};

      > th:first-child {
        border-start-start-radius: ${dt('border.radius.xl')};
      }

      > th:last-child {
        border-start-end-radius: ${dt('border.radius.xl')};
      }
    }

    .p-datatable-header {
      border-radius: ${dt('border.radius.xl')} ${dt('border.radius.xl')} 0 0;
    }

    .p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
      color: ${dt('highlight.color')};
    }

    /* Remove duplicate top borders when caption is present */
    .p-datatable:has(.p-datatable-header) .p-datatable-thead > tr > th {
      border-top: none;
    }
  `,
};
