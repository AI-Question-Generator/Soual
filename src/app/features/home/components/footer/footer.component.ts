import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'soual-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'المنصة',
      links: [
        { label: 'الرئيسية', href: '/' },
        { label: 'المميزات', href: '#features' },
      ],
    },
    {
      title: 'قانوني',
      links: [
        { label: 'سياسة الخصوصية', href: '#' },
        { label: 'شروط الاستخدام', href: '#' },
      ],
    },
  ];

  socialLinks = [
    { icon: 'pi-twitter', href: '#', label: 'تويتر' },
    { icon: 'pi-linkedin', href: '#', label: 'لينكدإن' },
    { icon: 'pi-instagram', href: '#', label: 'إنستغرام' },
  ];
}
