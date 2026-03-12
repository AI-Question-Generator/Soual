import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'soual-how-it-works',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './how-it-works.component.html',
})
export class HowItWorksComponent {
  steps = [
    {
      number: 1,
      title: 'أدخل المحتوى',
      description: 'قم برفع ملف PDF، أو الصق نصاً، أو حتى رابط فيديو يوتيوب للمادة التعليمية.',
      icon: 'pi-file-import',
    },
    {
      number: 2,
      title: 'اختر الإعدادات',
      description: 'حدد نوع الأسئلة (اختيار من متعدد، صح/خطأ)، ومستوى الصعوبة المطلوب.',
      icon: 'pi-sliders-h',
    },
    {
      number: 3,
      title: 'توليد ذكي',
      description: 'يقوم الذكاء الاصطناعي بتحليل المحتوى وإنشاء اختبار شامل ودقيق فوراً.',
      icon: 'pi-bolt',
    },
    {
      number: 4,
      title: 'تصدير ومشاركة',
      description: 'راجع الأسئلة، ثم قم بتصديرها كملف Word أو PDF أو رابط تفاعلي للطلاب.',
      icon: 'pi-share-alt',
    },
  ];
}
