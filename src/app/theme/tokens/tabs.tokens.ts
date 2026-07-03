import type { TabsDesignTokens } from '@primeuix/themes/types/tabs';

export const tabs: TabsDesignTokens = {
  root: {
    transitionDuration: '{transition.duration}',
  },
  tablist: {
    borderWidth: '0 0 1px 0',
    background: 'transparent',
    borderColor: '{content.border.color}',
  },
  tab: {
    background: 'transparent',
    hoverBackground: 'transparent',
    activeBackground: 'transparent',
    borderWidth: '0 0 1px 0',
    borderColor: 'transparent',
    hoverBorderColor: 'transparent',
    activeBorderColor: '{primary.600}',
    color: '{text.muted.color}',
    hoverColor: '{primary.600}',
    activeColor: '{primary.700}',
    padding: '0.625rem 1rem 0.875rem 1rem',
    fontWeight: '600',
    margin: '0 0 -1px 0',
    gap: '0.5rem',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      color: '{focus.ring.color}',
      offset: '-1px',
      shadow: '{focus.ring.shadow}',
    },
  },
  activeBar: {
    height: '2px',
    bottom: '-1px',
    background: '{primary.600}',
  },
  navButton: {
    background: '{content.background}',
    color: '{text.muted.color}',
    hoverColor: '{primary.600}',
    width: '2.5rem',
    shadow: '0 0 10px 40px rgba(255, 255, 255, 0.6)',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      color: '{focus.ring.color}',
      offset: '-1px',
      shadow: '{focus.ring.shadow}',
    },
  },
};
